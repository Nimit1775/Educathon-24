import Reccomend from "../models/reccomend.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI  = new GoogleGenerativeAI(process.env.GEM_API) ; 
const model = genAI.getGenerativeModel({model : "gemini-2.0-flash-exp"}) ; 
export const generateunirecommendation = async (exam, score, country) => {
    try {
        const prompt = `
        Based on the exam "${exam}" with a score of ${score}, and the preference to study in "${country}", 
        list 10 recommended universities. Format the response as:
        [University Name] - [Location (Country/State)]

        Ensure the response contains no blank lines and only valid entries in the specified format.
        `;

        const result = await model.generateContent(prompt);
        const recommendationsText = result?.response?.text();
        console.log('AI Raw Response:', recommendationsText); // Debug AI response

        if (!recommendationsText) {
            throw new Error('No recommendations generated');
        }

        const recommendations = recommendationsText
            .split('\n')
            .map(line => line.trim())
            .filter(line => line) // Exclude empty lines
            .slice(0, 10) // Take only the first 10 lines
            .map((line, index) => {
                const [name, location] = line.split(' - ').map(part => part?.trim());
                if (name && location) {
                    return { name, location };
                } else {
                    console.warn(`Skipping malformed line at index ${index}: "${line}"`);
                    return null;
                }
            })
            .filter(Boolean); // Remove null entries

        return recommendations;
    } catch (error) {
        console.error('Error generating recommendations:', error);
        throw new Error('AI recommendation generation failed');
    }
};

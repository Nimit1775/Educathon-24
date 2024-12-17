import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEM_API);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

export const genfinansol = async (req, res) => {
    const { college, country, duration, currency } = req.body;

    if (!college || !country || !duration || !currency) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const prompt = `
        Provide the following details for students planning to study at "${college}" in "${country}":
        1. Total estimated cost of studying for ${duration} years in the currency ${currency}, including:
           - Tuition fees.
           - Living expenses (housing, food, transport).
           - Miscellaneous expenses (books, insurance, etc.).
        2. List 5 scholarships available for students at this college in "${country}". For each scholarship, include:
           - Name.
           - Eligibility criteria.
           - Amount covered.
           - Application deadline.
           - Link for more details.
        Also, ensure all amounts are in given currency.
        `;

        const result = await model.generateContent(prompt);

        if (!result || !result.response) {
            throw new Error("No recommendations generated");
        }

        const rawResponse = await result.response.text();
        console.log("Raw response from AI model:", rawResponse);

        // Return the raw response directly to the frontend
        res.status(200).json({ data: rawResponse });

    } catch (error) {
        console.error("Error generating financial estimate:", error);
        res.status(500).json({ message: "Failed to generate financial estimate", error: error.message });
    }
};

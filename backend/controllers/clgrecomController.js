import Reccomend from "../models/reccomend.js";
import { generateunirecommendation } from "../services/Recommender.js";

export const generaterecom = async (req, res) => {
    const { exam, score, country } = req.body;
    if (!exam || !score || !country) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const recommendations = await generateunirecommendation(exam, score, country);

        const newRecom = new Reccomend({
            exam,
            score,
            country,
            reccomendations: recommendations, // Store the simplified recommendations
        });

        await newRecom.save();

        return res.status(201).json(newRecom);
    } catch (error) {
        console.error('Error saving recommendations:', error);
        res.status(500).json({ message: 'Failed to generate recommendations', error: error.message });
    }
};

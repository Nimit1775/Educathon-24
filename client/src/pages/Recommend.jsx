import React, { useState } from 'react';
import axios from 'axios';
import { MapPin } from 'lucide-react'; // Importing Lucide's location icon

const UniversityRecommendation = () => {
    const [exam, setExam] = useState('');
    const [score, setScore] = useState('');
    const [country, setCountry] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setRecommendations([]);

        try {
            const response = await axios.post('http://localhost:5000/api/recom/recom', {
                exam,
                score,
                country,
            });

            const recs = response.data.reccomendations;
            if (Array.isArray(recs)) {
                setRecommendations(recs);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err) {
            console.error("Error fetching recommendations:", err);
            setError('Failed to generate recommendations. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">University Recommendations</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="exam">Exam</label>
                    <input
                        type="text"
                        id="exam"
                        value={exam}
                        onChange={(e) => setExam(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="score">Score</label>
                    <input
                        type="number"
                        id="score"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200 font-semibold"
                >
                    {loading ? 'Generating...' : 'Get Recommendations'}
                </button>
            </form>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {recommendations?.length > 0 && (
                <div className="mt-8 w-full max-w-4xl">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Recommended Universities:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recommendations.map((rec, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{rec.name}</h3>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                                        {rec.location}
                                    </div>
                                </div>
                                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UniversityRecommendation;

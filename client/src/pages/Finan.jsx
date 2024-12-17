import { useState } from "react";
import axios from "axios";

const Finan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [formData, setFormData] = useState({
    college: "",
    country: "",
    duration: "",
    currency: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/finance/calc', formData);
      setResults(response.data.data); // Directly store the raw response
    } catch (error) {
      alert(error.response?.data?.message || "Failed to calculate financial estimates");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f3f4f6", 
      padding: "48px 16px"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto"
      }}>
        <div style={{ 
          textAlign: "center", 
          marginBottom: "48px"
        }}>
          <h1 style={{ 
            fontSize: "36px", 
            fontWeight: "bold", 
            color: "#111827", 
            marginBottom: "16px"
          }}>
            Student Financial Planning
          </h1>
          <p style={{ 
            fontSize: "18px", 
            color: "#4b5563"
          }}>
            Calculate your study costs and discover scholarship opportunities
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          marginBottom: "24px"
        }}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#374151"
            }}>
              College Name
            </label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#374151"
            }}>
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#374151"
            }}>
              Duration (years)
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#374151"
            }}>
              Currency
            </label>
            <input
              type="text"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                outline: "none"
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "12px 24px",
              borderRadius: "4px",
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? "0.7" : "1"
            }}
          >
            {isLoading ? "Calculating..." : "Calculate Costs"}
          </button>
        </form>

        {results && (
          <div style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "#111827"
            }}>
              Results
            </h2>

            <div style={{ marginBottom: "24px" }}>
              <h3 style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#374151"
              }}>
                Financial Estimate (Raw Response)
              </h3>
              <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {/* Render the raw data */}
                <p dangerouslySetInnerHTML={{ __html: results }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Finan;

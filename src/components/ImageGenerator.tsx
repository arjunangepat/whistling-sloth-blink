import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardHeader, CardContent, Typography, Box, CircularProgress } from "@mui/material"; // Import Box and CircularProgress

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generateImage = async () => {
    if (!prompt) return;
    setLoading(true);
    setImageUrl(""); // Clear previous image
    try {
      // In a real application, this would call your backend API
      // which then interfaces with an AI model.
      // For this example, we'll simulate a response.
      // Replace with your actual API endpoint
      const response = await axios.post("/api/generate-image", { prompt });
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      // Handle error display to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '80vh', // Use minHeight to ensure it takes up vertical space
        padding: 4 // Add padding
      }}>
      <Card sx={{ 
          width: '100%', 
          maxWidth: 600, // Limit card width
          boxShadow: 3, // Add a subtle shadow
          borderRadius: 2 // Add rounded corners
        }}>
        <CardHeader sx={{ 
            backgroundColor: 'primary.main', // Use theme's primary color for header background
            color: 'primary.contrastText', // Ensure text is readable
            paddingY: 2 // Adjust vertical padding
          }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            AI Image Generator
          </Typography>
        </CardHeader>
        <CardContent sx={{ 
            padding: 3, // More padding inside the card content
            display: 'flex',
            flexDirection: 'column',
            gap: 3 // Use gap for spacing between elements
          }}>
          <TextField
            label="Enter your image prompt"
            variant="outlined"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
            fullWidth
            sx={{ '& .MuiInputLabel-root': { color: 'text.secondary' } }} // Style label
          />
          <Button 
            variant="contained" 
            onClick={generateImage} 
            disabled={loading || !prompt}
            sx={{ 
              paddingY: 1.5, // Make button taller
              fontWeight: 'bold',
              backgroundColor: 'secondary.main', // Use secondary color for action button
              '&:hover': {
                backgroundColor: 'secondary.dark',
              }
            }}
          >
            {loading ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CircularProgress size={24} sx={{ color: 'white', mr: 1 }} />
                Generating...
              </Box>
            ) : (
              "Generate Image"
            )}
          </Button>
          {imageUrl && (
            <Box sx={{ 
                mt: 4, 
                textAlign: 'center', 
                border: '1px dashed #ccc', // Add a dashed border around the image area
                borderRadius: 1,
                padding: 2
              }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                Generated Image:
              </Typography>
              <img 
                src={imageUrl} 
                alt="Generated" 
                className="max-w-full h-auto rounded-md shadow-md" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Box>
          )}
          {!imageUrl && !loading && (
            <Box sx={{ 
                mt: 4, 
                textAlign: 'center', 
                color: 'text.secondary',
                padding: 2,
                border: '1px dashed #e0e0e0',
                borderRadius: 1
              }}>
              Enter a prompt and click "Generate Image" to see your creation.
            </Box>
          )}
          {loading && !imageUrl && (
            <Box sx={{ 
                mt: 4, 
                textAlign: 'center', 
                color: 'text.secondary',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
              }}>
              <CircularProgress size={40} />
              <Typography variant="body1">Please wait, your image is being generated...</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ImageGenerator;
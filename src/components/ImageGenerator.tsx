import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>AI Image Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Input
              placeholder="Enter your image prompt (e.g., 'A cat wearing a hat')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />
            <Button onClick={generateImage} disabled={loading || !prompt}>
              {loading ? "Generating..." : "Generate Image"}
            </Button>
            {imageUrl && (
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold mb-2">Generated Image:</h3>
                <img src={imageUrl} alt="Generated" className="max-w-full h-auto rounded-md shadow-md" />
              </div>
            )}
            {!imageUrl && !loading && (
              <div className="mt-4 text-center text-gray-500">
                Enter a prompt and click "Generate Image" to see your creation.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageGenerator;
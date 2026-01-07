import ImageGenerator from "@/components/ImageGenerator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Scalix AI Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">AI Image Generator</h2>
          <p className="text-gray-600 mb-6 text-center">
            Create stunning images from text descriptions using our advanced AI.
          </p>
          <Link to="/image-generator">
            <Button size="lg">Go to Image Generator</Button>
          </Link>
        </div>
        {/* Placeholder for another tool */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">Another Tool</h2>
          <p className="text-gray-600 mb-6 text-center">
            Description for another amazing tool coming soon.
          </p>
          <Button size="lg" disabled>
            Coming Soon
          </Button>
        </div>
      </div>

      {/* This part will be replaced by the actual ImageGenerator component when navigating */}
      <div className="mt-16 w-full max-w-4xl">
        <ImageGenerator />
      </div>
    </div>
  );
}
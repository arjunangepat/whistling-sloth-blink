import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ImageGenerator from "./components/ImageGenerator"; // Import the component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/image-generator" element={<ImageGenerator />} /> {/* Add route for ImageGenerator */}
    </Routes>
  );
}

export default App;
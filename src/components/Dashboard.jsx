import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Logo from "../assets/cvsu.ico";

const images = [
  "/images/ocampo.jpg",
  "/images/rostrollo.JPG",
  "/images/bacolor.JPG",
  "/images/ben.jpg",
  "/images/salvador.jpeg",
];

export default function Dashboard() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="bg-gradient-to-r justify-between from-red-900 to-red-800 py-6 px-6 rounded-2xl shadow-lg max-w-5xl mx-auto mt-12 font-funnel text-white">
      <div className="flex items-center gap-4 mb-6">
        <img src={Logo} alt="CVSU Logo" width={60} height={60} className="object-contain" />
        <div onClick={() => navigate("/home")} className="cursor-pointer hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold">
            Department of Computer Studies
          </h2>
          <p className="text-amber-300 text-sm">
            Cavite State University - Bacoor City Campus
          </p>
        </div>
         <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => navigate("/orgchart")}
          className="px-4 py-2 bg-white text-red-900 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Go to Org Chart
        </button>
        <button
          onClick={() => navigate("/home")}
          className="px-4 py-2 bg-white text-red-900 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Members of the Faculty
        </button>
      </div>
      </div>

      <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-md">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="w-full h-[400px] object-contain transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prev}
            className="bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50"
          >
            <ArrowLeft className="text-white w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={next}
            className="bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50"
          >
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentImage ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

     
    </div>
  );
}

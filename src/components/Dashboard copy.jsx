import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Logo from "../assets/cvsu.ico";
import Footer from "./widgets/Footer";
import Modal from "./FacultyDetails/Modal"; // Correct path based on your file structure

const images = [
  {
    id: "ocampo",
    src: "/images/ocampo.jpg",
    title: "Dr. Juan Dela Cruz",
    details: "Ph.D. in Computer Science, Dean of the Department. With over 20 years of experience in academia and research.",
  },
  {
    id: "rostrollo",
    src: "/images/rostrollo.JPG",
    title: "Prof. Maria Santos",
    details: "Masters in Information Technology, Head of Research. Specializes in data science and machine learning.",
  },
  {
    id: "bacolor",
    src: "/images/bacolor.JPG",
    title: "Engr. Jose Rizal",
    details: "Masters in Computer Engineering, Senior Faculty. Expert in network security and embedded systems.",
  },
  {
    id: "ben",
    src: "/images/ben.jpg",
    title: "Mr. Andres Bonifacio",
    details: "BS in Computer Science, Junior Faculty. Focuses on web development and user interface design.",
  },
  {
    id: "salvador",
    src: "/images/salvador.jpeg",
    title: "Ms. Gabriela Silang",
    details: "BS in Information Technology, Part-time Lecturer. Industry professional with experience in software quality assurance.",
  },
];

export default function Dashboard() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const next = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // const handleSeeMore = (id) => {};

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-red-900 to-red-800 py-6 px-6 rounded-2xl shadow-lg max-w-5xl mx-auto mt-12 font-funnel text-white">
        {/* ... header and buttons ... */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            src={Logo}
            alt="CVSU Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <div
            onClick={() => navigate("/home")}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
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
              View Organizational Chart
            </button>
            <button
              onClick={() => navigate("/home")}
              className="px-4 py-2 bg-white text-red-900 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Members of the Faculty
            </button>
          </div>
        </div>


        {/* Image Carousel */}
        <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-md">
          <img
            src={images[currentImage].src}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h-[400px] object-contain transition-opacity duration-700 ease-in-out cursor-pointer"
            onClick={() => openModal(images[currentImage])}
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

        {/* Carousel Dots */}
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
      <Footer textColor={"text-white"} />

      {/* Modal for displaying image details */}
      {selectedImage && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedImage.title}
        >
          <div className="flex flex-col md:flex-row gap-6 p-1">
            {/* Left Column: Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Right Column: Details */}
            <div className="md:w-2/3 flex flex-col">
              <p className="text-gray-600 mb-4 text-base">
                {selectedImage.details}
              </p>
              <button
                onClick={() => handleSeeMore(selectedImage.id)}
                className="mt-auto self-start font-semibold text-red-800 hover:underline"
              >
                See More →
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
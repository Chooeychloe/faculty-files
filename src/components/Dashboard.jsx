// src/Dashboard.jsx

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./widgets/Footer";
import Modal from "./FacultyDetails/Modal";
// import { Navigation } from "lucide-react";

const images = [
  {
    src: "/activities/ACCREDITATION MEETING 2024.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/COURTESY CALL 2025.jpg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/EXTENSION COLLABORATION (FINTECH)2025.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/FACULTY DEVELOPMENT APRIL 2025.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/FACULTY ORIENTATION 2025.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/GRADUATION PICTORIAL 2024.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/KAMUSTAHAN 2025.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/KAMUSTAHAN FEB2025.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/MAMBOG EXTENSION  2024.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/ORIENTATION REORIENTATION 2024.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/RESEARCH MEETING.jpeg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/T AND A 2024.jpg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
  {
    src: "/activities/T N A.jpg",
    title: "Sample title",
    date: "Sample Date",
    description: "Sample Description",
  },
];

export default function Dashboard() {
  const [currentImage, setCurrentImage] = useState(0); // State for Hero section
  // State for the hover-based carousel, starts in the middle
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(
    Math.floor(images.length / 2)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // --- Hero Section Functions ---
  const next = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  // --- Modal and Navigation Functions ---
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleSeeMore = (id) => {
    closeModal();
    navigate(`/person/${id}`);
  };

  // useEffect for the automatic Hero section slideshow
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      {/* <Header /> */}
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section (remains automatic) */}
        <section className="relative w-full h-[60vh] md:h-[80vh] bg-black flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            {images.map((image, index) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-40" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
              Welcome to the Department of Computer Studies
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-3xl drop-shadow-md">
              Fostering innovation and excellence in technology and computer
              science.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="mt-8 px-8 py-3 bg-red-800 text-white font-bold rounded-full hover:bg-red-900 transition-transform hover:scale-105"
            >
              Meet the Faculty
            </button>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Vision Section */}
          <section
            id="vision"
            className="flex flex-col md:flex-row items-center "
          >
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-800 pb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The premier university in historic Cavite globally recognized
                for excellence in character development, academics, research,
                innovation and sustainable community engagement.
              </p>
            </div>
            <div className="h-96 md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-800 pb-2">
                Mithiin ng Pamantasan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ang nangungunang pamantasan sa makasaysayang Kabite na
                kinikilala sa kahusayan sa paghubog ng mga indibidwal na may
                pandaigdigang kakayahan at kagandahang asal.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section
            id="vision"
            className="flex flex-col md:flex-row items-center gap-12 "
          >
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-800 pb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cavite State University shall provide excellent, equitable and
                relevant educational opportunities in the arts, sciences and
                technology through quality instruction and responsive research
                and development activities. It shall produce professional,
                skilled and morally upright individuals for global
                competitiveness.
              </p>
            </div>
            <div className="h-96 md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-800 pb-2">
                Hangarin ng Pamantasan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ang Cavite State university ay makapagbigay ng mahusay, pantay
                at makabuluhang edukasyon sa sining, agham at teknolohiya sa
                pamamagitan ng may kalidad na pagtuturo at tumutugon sa
                pangangailangang pananaliksik at mga gawaing pangkaunlaran.
                Makalikha ito ng mga indibidwal ng dalubhasa, may kasaysayan at
                kagandahan-asal sa pandaigdigang kakayahan.
              </p>
            </div>
          </section>

          {/* Program Objectives Section */}
          <section id="objectives" className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Department Objectives
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                <h4 className="font-bold text-xl text-red-900 mb-2">
                  Objective 1
                </h4>
                <p className="text-gray-600">
                  Provide in-depth knowledge across fundamental areas of
                  Information Technology and Computer Science and be successful
                  professionals in diverse career paths.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                <h4 className="font-bold text-xl text-red-900 mb-2">
                  Objective 2
                </h4>
                <p className="text-gray-600">
                  Deliver skilled graduates in designing and developing hardware
                  and software systems of varying complexity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                <h4 className="font-bold text-xl text-red-900 mb-2">
                  Objective 3
                </h4>
                <p className="text-gray-600">
                  Inculcate teaching principles in the field of technological
                  information and application that become key factors in
                  personal, social, and economic growth of every student.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                <h4 className="font-bold text-xl text-red-900 mb-2">
                  Objective 4
                </h4>
                <p className="text-gray-600">
                  Develop technological researches applying the mathematical
                  foundations, algorithmic principles, and theories, which
                  contribute to the application of technical standards and
                  interoperability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                <h4 className="font-bold text-xl text-red-900 mb-2">
                  Objective 5
                </h4>
                <p className="text-gray-600">
                  Strengthen IT linkages with government and non-government
                  organizations.
                </p>
              </div>
            </div>
          </section>

          {/* --- HOVER-BASED CAROUSEL SECTION --- */}
          <section id="carousel">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-8">
              Highlights
            </h3>
            {/* MODIFIED: The parent container no longer needs extra padding for arrows */}
            <div className="relative w-full h-[450px] flex items-center justify-center">
              {images.map((image, index) => {
                const offset = index - currentCarouselIndex;
                const isCenter = offset === 0;
                const isAdjacent = Math.abs(offset) <= 2;

                let transformStyle = `translateX(${offset * 35}%) scale(${
                  isCenter ? 1 : 0.7
                })`;
                let opacityStyle = isAdjacent ? 1 : 0;
                let zIndex = images.length - Math.abs(offset);

                if (!isAdjacent) {
                  transformStyle = `translateX(${offset * 35}%) scale(0.5)`;
                }

                return (
                  <div
                    key={image.id}
                    className="absolute w-[70%] md:w-[50%] lg:w-[40%] aspect-[4/3] transition-all duration-500 ease-in-out"
                    style={{
                      transform: transformStyle,
                      opacity: opacityStyle,
                      zIndex: zIndex,
                      pointerEvents: isAdjacent ? "auto" : "none",
                    }}
                    onMouseEnter={() => setCurrentCarouselIndex(index)}
                    onClick={() => isCenter && openModal(image)}
                  >
                    <div
                      className={`relative w-full h-full ${
                        isCenter ? "cursor-pointer" : ""
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                          isCenter ? "opacity-0" : "opacity-40"
                        } rounded-xl`}
                      ></div>
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer textColor={"text-gray-600"} />

      {/* Modal for displaying image details */}
      {selectedImage && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title="">
          <div className="flex flex-col md:flex-row gap-6 p-1">
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{selectedImage.date}</p>
              <p className="text-gray-600 mb-4 text-base flex-grow">
                {selectedImage.description}
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
    </div>
  );
}

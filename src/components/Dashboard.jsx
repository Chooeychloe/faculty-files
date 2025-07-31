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
        id: "ocampo",
        src: "/images/ocampo.jpg",
        title: "Dr. Juan Dela Cruz",
        date: "Published on 2024-07-28",
        description: "Dr. Juan Dela Cruz is the Dean of the Department of Computer Science. With a Ph.D. in Computer Science, his research focuses on artificial intelligence and machine learning. He has published numerous papers and has led several successful industry-sponsored projects.",
    },
    {
        id: "rostrollo",
        src: "/images/rostrollo.JPG",
        title: "Prof. Maria Santos",
        date: "Published on 2024-07-27",
        description: "Prof. Maria Santos, with a Masters in Information Technology, serves as the Head of Research. Her expertise lies in database systems and software engineering. She is a dedicated mentor to students and a key contributor to the department's curriculum development.",
    },
    {
        id: "bacolor",
        src: "/images/bacolor.JPG",
        title: "Engr. Jose Rizal",
        date: "Published on 2024-07-26",
        description: "Engr. Jose Rizal is a Senior Faculty member holding a Masters in Computer Engineering. His areas of interest include computer networks and cybersecurity. He is known for his engaging teaching style and his commitment to hands-on learning.",
    },
];

export default function Dashboard() {
    const [currentImage, setCurrentImage] = useState(0); // State for Hero section
    // State for the hover-based carousel, starts in the middle
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(Math.floor(images.length / 2));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    // --- Hero Section Functions ---
    const next = useCallback(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }, []);

    const prev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

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
        <div className="flex flex-col min-h-screen bg-gray-50">
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
                            Fostering innovation and excellence in technology and computer science.
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
                    <section id="vision" className="flex flex-col md:flex-row items-center gap-12 mb-20 ">
                        <div className="md:w-1/2">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-800 pb-2">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be a premier department in computer studies, recognized for its innovative teaching, research, and community service. We envision producing globally competitive graduates who are leaders in their respective fields.
                            </p>
                        </div>
                        <div className="h-96 md:w-1/2">
                            <img 
                                src="/images/rostrollo.JPG" 
                                alt="Our Vision" 
                                className="rounded-lg shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section id="mission" className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
                         <div className="md:w-1/2">
                             <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-800 pb-2">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The Department of Computer Studies is committed to providing quality education, fostering a culture of research and innovation, and engaging in community extension services. We aim to equip students with the knowledge, skills, and values needed to succeed in the ever-evolving world of technology.
                            </p>
                        </div>
                        <div className="h-96 md:w-1/2">
                           <img 
                                src="/images/ocampo.jpg" 
                                alt="Our Mission" 
                                className="rounded-lg shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </section>

                    {/* Program Objectives Section */}
                    <section id="objectives" className="mb-16">
                        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Program Educational Objectives</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                                <h4 className="font-bold text-xl text-red-900 mb-2">Objective 1</h4>
                                <p className="text-gray-600">Produce graduates who are proficient in designing, developing, and implementing software solutions.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                                <h4 className="font-bold text-xl text-red-900 mb-2">Objective 2</h4>
                                <p className="text-gray-600">Develop professionals who can work effectively in teams and communicate clearly on technical subjects.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
                                <h4 className="font-bold text-xl text-red-900 mb-2">Objective 3</h4>
                                <p className="text-gray-600">Encourage lifelong learning and professional development to adapt to the rapid advancements in technology.</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* --- HOVER-BASED CAROUSEL SECTION --- */}
                    <section id="carousel">
                        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-8">Highlights</h3>
                        {/* MODIFIED: The parent container no longer needs extra padding for arrows */}
                        <div className="relative w-full h-[450px] flex items-center justify-center">
                            {images.map((image, index) => {
                                const offset = index - currentCarouselIndex; 
                                const isCenter = offset === 0;
                                const isAdjacent = Math.abs(offset) <= 2;

                                let transformStyle = `translateX(${offset * 35}%) scale(${isCenter ? 1 : 0.7})`;
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
                                            pointerEvents: isAdjacent ? 'auto' : 'none',
                                        }}
                                        
                                        onMouseEnter={() => setCurrentCarouselIndex(index)}
                                        onClick={() => isCenter && openModal(image)}
                                    >
                                        <div className={`relative w-full h-full ${isCenter ? 'cursor-pointer' : ''}`}>
                                            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isCenter ? 'opacity-0' : 'opacity-40'} rounded-xl`}></div>
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
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title="" 
                >
                    <div className="flex flex-col md:flex-row gap-6 p-1">
                        <div className="md:w-1/3 flex-shrink-0">
                            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto object-cover rounded-lg"/>
                        </div>
                        <div className="md:w-2/3 flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{selectedImage.date}</p>
                            <p className="text-gray-600 mb-4 text-base flex-grow">{selectedImage.description}</p>
                            <button onClick={() => handleSeeMore(selectedImage.id)} className="mt-auto self-start font-semibold text-red-800 hover:underline">
                                See More →
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
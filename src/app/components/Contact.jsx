"use client"; 
import { useEffect, useState } from "react"; 
import AOS from "aos"; 
import "aos/dist/aos.css"; // Import AOS styles 

const Contact = () => { 
    const [formData, setFormData] = useState({ 
        name: "", 
        email: "", 
        message: "", 
    }); 

    useEffect(() => { 
        AOS.init({ 
            duration: 2000, // Duration of animation 
            once: true, // Animation happens only once on scroll 
        }); 
    }, []); 

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData((prev) => ({ ...prev, [name]: value, })); 
    }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log("Form Data Submitted:", formData); 
        // Add your form submission logic here (e.g., API call) 
    }; 

    return ( 
        <section id="contact" className="pb-32 px-4 lg:px-16 bg-gray-50" data-aos="fade-up"> 
            <div className="container mx-auto max-w-screen-lg"> 
                {/* Heading */} 
                <h2 className="pt-10 text-center text-5xl font-semibold pb-10"> 
                    MY <span className="text-gradient uppercase text-4xl lg:text-6xl font-semibold"
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)", // Gradient from blue to pink
                  WebkitBackgroundClip: "text", // For Safari
                  color: "transparent",
                }}>Contact</span> 
                </h2> 
                {/* Layout: Contact Details + Form */} 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> 
                    {/* Left Side: Personal Details */} 
                    <div className="p-6 bg-white rounded-lg" data-aos="fade-right"> 
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6"> Get in Touch </h3> 
                        <p className="text-gray-600 mb-6"> I’m available for collaborations, consulting, or just a friendly chat. Feel free to reach out through any of the below. </p> 
                        <ul className="space-y-4 text-gray-800"> 
                            <li> 
                                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"> LinkedIn </a> 
                            </li> 
                            <li> 
                                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"> Twitter </a> 
                            </li> 
                            <li> 
                                <a href="mailto:your.email@example.com" className="hover:text-blue-600 transition-colors"> Email: ahmadjunaid4210@gmail.com</a> 
                            </li> 
                            <li> 
                                <p className="text-gray-800">Phone: +92 (303) 4333-204</p> 
                            </li> 
                        </ul> 
                    </div> 
                    {/* Right Side: Contact Form */} 
                    <div className="p-8 bg-white rounded-lg shadow-lg" data-aos="zoom-in-left"> 
                        <form id="contact-form" onSubmit={handleSubmit} className="space-y-4"> 
                            <div className="space-y-2"> 
                                {/* Name Field */} 
                                <div> 
                                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2"> Your Name </label> 
                                    <input type="text" id="name" name="name" className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" value={formData.name} onChange={handleChange} required /> 
                                </div> 
                                {/* Email Field */} 
                                <div> 
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2"> Your Email </label> 
                                    <input type="email" id="email" name="email" className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" value={formData.email} onChange={handleChange} required /> 
                                </div> 
                                {/* Message Field */} 
                                <div> 
                                    <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2"> Your Message </label> 
                                    <textarea id="message" name="message" className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here" rows="4" value={formData.message} onChange={handleChange} required ></textarea> 
                                </div> 
                            </div> 
                            <button type="submit" className="w-full bg-blue-400 text-white py-3 rounded-lg text-lg hover:bg-blue-500 transition-all duration-300"> Send Message </button> 
                        </form> 
                    </div> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default Contact;

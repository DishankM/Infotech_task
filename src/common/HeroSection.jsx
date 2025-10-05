import React from "react";
import { Star } from "lucide-react";
import admintion from "../assets/adm.png";
import cap from '../assets/cap.png';

const HeroSection = () => {
  return (
    <section className="mt-20 relative max-h-screen flex items-center bg-gradient-to-b from-pink-400 to-pink-100 overflow-hidden">
      {/* Background Section and Decorative Circles */}
      {/* Full-width container for the pink background area */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100"></div>
      
      {/* Large Decorative Circle 1 (The main one behind the person) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full bg-pink-200 opacity-40 mix-blend-multiply filter blur-2xl"></div>

      
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-red-50 opacity-30 mix-blend-multiply filter blur-3xl"></div>


      <div className="max-w-7xl mx-auto px lg:px-12 w-[90%] grid lg:grid-cols-2 gap-10 items-center relative z-1 py-20 lg:py-0">
        {/* LEFT SECTION */}
        <div className="text-center lg:text-left space-y-2 mt-18">
          {/* Heading */}
          <h1 className="text45xl md:text-4xl lg:text-6xl font-bold text-black leading-tight">
            <span className="block ">Your Resume</span>
            <span className="block">
              <span className="text-red-600 font-extrabold relative inline-block">
                Deserves A Yes
                <span className="absolute left-0 right-0 bottom-[-6px] h-[3px] bg-red-600 "></span>
              </span>{" "}
              Let'
            </span>
            
            <span className="block"> Make It Happen</span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed  lg:mx-0  lg:w-[73%] pt-4 font-semibold ">
            If Your resume isn't getting responses, it's Time For An Upgrade.
            Get An <span className="font-semibold text-red-600">ATS-Optimized Resume</span> Crafted By HR Experts To Help You Land More Interviews. 
            Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-6">
            <button className="bg-white text-red-600 font-semibold border-2 border-red-600 rounded-full px-8 py-3 shadow-md hover:bg-red-600 hover:text-white transition duration-300 uppercase tracking-wider">
              RESUME PACKAGES
            </button>
            <button className="bg-red-600 text-white font-semibold rounded-full px-8 py-3 shadow-md hover:bg-red-700 transition duration-300 uppercase tracking-wider">
              CONTACT US
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (Image + Overlays) */}
        <div className="relative flex justify-center lg:justify-end mt-16 ">
          {/* Main Image */}
          <div className="relative">
            <img
              src={admintion}
              alt="Resume Professional"
              className="w-[350px] sm:w-[420px] md:w-[440px] lg:w-[440px] object-contain drop-shadow-2xl"
            />

            {/* Rating Card */}
            <div className="absolute bottom-52 left-[-25px] bg-gradient-to-t from-white to-gray-300 shadow-lg rounded-md px-5 py-3 flex items-center gap-2 h-20 w-63">
              <span className="text-5xl font-bold text-green-600 ">4.9</span>
              <div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-[16px] font-bold ">
                  Instructor Rating
                </p>
              </div>
            </div>

            {/* Resume Created Badge */}
            <div className="absolute bottom-18 right-[-50px] bg-gray-50 shadow-lg rounded-md px-5 py-3 flex items-center gap-3 h-20 w-53">
              <div className=" ">
                <span className=""><img src={cap} alt="Graduation Cap" className="w-26"/></span>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">260+</p>
                <p className="text-gray-600 text-sm">Online Resume Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-35 right-1/15 w-150 h-150 bg-pink-300 rounded-full opacity-20"></div>
      <div className="absolute top-56 right-1/9 w-105 h-105 bg-pink-100 rounded-full opacity-40"></div>
    
      
    </section>
  );
};

export default HeroSection;

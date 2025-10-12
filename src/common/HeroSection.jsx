import React from "react";
import { Star } from "lucide-react";
import HeroImage from "../assets/HeroImage.png";
import  Underline  from "../assets/Underline.png";

const HeroSection = () => {
  return (
    <section className="mt-20 relative max-h-screen flex items-center bg-gradient-to-r from-[#ffb8b8] to-pink-[#FFD6BA] overflow-hidden">
      {/* Background Section and Decorative Circles */}
      {/* Full-width container for the pink background area */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#f4dfdf] to-pink-[#FFD6BA]"></div>
      
      {/* Large Decorative Circle 1 (The main one behind the person) */}
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-red-50 opacity-30 mix-blend-multiply filter blur-3xl"></div>


<div className="max-w-7xl mx-auto px lg:px-12 w-[90%] grid lg:grid-cols-2 gap-10 items-center relative z-1 py-20 lg:py-0">
  {/* LEFT SECTION */}
  <div className="text-center lg:text-left space-y-2 ">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight sm:justify-center lg:justify-start sm:items-center">
      {/* "Your Resume" on its own line */}
      <span className="block ">Your Resume</span>

      {/* "Deserves A Yes Let's" on a single line */}
      <span className="inline">
        <span className="text-red-600 font-extrabold whitespace-nowrap">
          Deserves A Yes&nbsp;
        </span>
        <span className="whitespace-nowrap">Let's</span>
      </span>

      {/* Underline Image - Now *always* following "Deserves A Yes Let's" */}
      <img src={Underline} alt="" className="mx-auto lg:mx-0 " />

      {/* "Make It Happen" on a new line */}
      <span className="block"> Make It Happen</span>
    </h1>

    {/* Description */}
    <p className="text-gray-700 text-sm leading-relaxed lg:mx-0 lg:w-[73%] font-semibold ">
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
  <div className="relative flex justify-center lg:justify-end mt-20 ">
    {/* Main Image */}
    <div className="relative">
      <img
        src={HeroImage}
        alt="Resume Professional"
        className="w-[350px] sm:w-[420px] md:w-[440px] lg:w-[660px] lg:h-[620px] object-contain drop-shadow-2xl"
      />


    </div>
  </div>
</div>

      
      
    </section>
  );
};

export default HeroSection;

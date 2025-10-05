import React from "react";
import resumeImg from "../assets/resume.png";
import coverImg from "../assets/Cover.png";
import linkedinImg from "../assets/likdin.png";
import interviewImg from  '../assets/Interview.png'

const WhatYouGetSection = () => {
  const features = [
    {
      id: 1,
      img: resumeImg,
      title: "A Resume That Passes ATS Filters",
      desc: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles.",
    },
    {
      id: 2,
      img: coverImg,
      title: "A Cover Letter That Gets Read",
      desc: "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
    },
    {
      id: 3,
      img: linkedinImg,
      title: "A LinkedIn Profile That Works For You",
      desc: "Attract the right eyes, start conversations, and show up in recruiter searches.",
    },
    {
      id: 4,
      img: interviewImg,
      title: "Interview Confidence",
      desc: "Interview preparation with real HR professionals so you speak clearly, confidently, and convincingly.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-12 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Label */}
        <div className="inline-block bg-pink-200 text-pink-800 font-medium px-4 py-2 rounded-md text-sm mb-4">
          What You Get
        </div>

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          You’re Not Just Another Applicant And Your Resume Shouldn’t Look Like One
        </h2>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 p-8 transition duration-300 text-left flex flex-col items-start"
            >
              <div className="w-full flex justify-center mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-34 h-34 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;

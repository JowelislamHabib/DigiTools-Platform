import React from "react";
import bannerImg from "../../assets/banner.png";
import { LucidePlay } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} />
          <div>
            <h1 className="text-5xl font-bold">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-4">
              {" "}
              <button className="btn btn-primary rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r from-[#9514fa] to-[#4f39f6] text-base font-normal">
                Explore Products
              </button>
              <button className="btn btn-outline btn-primary rounded-full text-base font-normal">
                <LucidePlay /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

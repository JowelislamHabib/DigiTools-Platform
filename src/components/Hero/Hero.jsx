import React from "react";
import bannerImg from "../../assets/banner.png";
import { LucidePlay } from "lucide-react";
import dotImg from "../../assets/dot.svg";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="mt-20 mb-20">
          <div className="flex flex-wrap gap-4 lg:flex lg:justify-between lg:items-center">
            <div className="hero-left">
              <div className="flex bg-primary-content w-fit rounded-full pt-2 pb-2 pl-4 pr-4 text-base mb-4">
                <img src={dotImg} />
                <p className="text-base pl-2 bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent">
                  New: AI-Powered Tools Available
                </p>
              </div>

              <div className="flex flex-wrap flex-col">
                <h1 className="text-5xl lg:text-7xl font-extrabold text-[#101727]">
                  Supercharge Your <br />
                  Digital Workflow
                </h1>
                <p className="py-6 text-lg text-[627382]">
                  Access premium AI tools, design assets, templates, and
                  productivity <br />
                  software—all in one place. Start creating faster today.
                  <br />
                  Explore Products
                </p>
              </div>
              <div className="flex gap-4">
                <button className="btn btn-primary rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r from-[#9514fa] to-[#4f39f6] text-base font-normal">
                  Explore Products
                </button>
                <button className="btn btn-outline btn-primary rounded-full text-base font-normal">
                  <LucidePlay /> Watch Demo
                </button>
              </div>
            </div>
            <div className="hero-right">
              <img src={bannerImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

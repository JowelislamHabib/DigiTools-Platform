import React from "react";
import bannerImg from "../../assets/banner.png";
import { LucidePlay } from "lucide-react";
import dotImg from "../../assets/dot.svg";

const Hero = () => {
  return (
    <div className="container mx-auto p-2">
      <div>
        <div className="mt-20 mb-20">
          <div className="flex flex-wrap gap-4 lg:flex lg:justify-between lg:items-center">
            <div className="hero-left">
              <div className="flex bg-orange-50 w-fit rounded-full pt-2 pb-2 pl-4 pr-4 text-base mb-4">
                <img src={dotImg} />
                <p className="text-base pl-2 bg-linear-[-60deg] from-[#ff5858] to-[#f09819] bg-clip-text text-transparent">
                  New: AI-Powered Tools Available
                </p>
              </div>

              <div className="flex flex-wrap flex-col">
                <h1 className="text-4xl lg:text-7xl font-extrabold text-[#101727] lg:leading-24">
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
<a href="#product">                <button className="btn text-white border-0 rounded-full bg-linear-[-60deg] from-[#ff5858] to-[#f09819] hover:bg-linear-to-r from-[#f09819] to-[#4f39f6] text-base font-normal">
                  Explore Products
                </button></a>
                <button className="btn btn-outline text-orange-700 border-orange-700 rounded-full text-base font-normal">
                  <LucidePlay /> Watch Demo
                </button>
              </div>
            </div>
            <div className="hero-right">
              <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
  
  {/* content */}
  <div className="card bg-transparent text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)]">
<img src={bannerImg} />
  </div>
  
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

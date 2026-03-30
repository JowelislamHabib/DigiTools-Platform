import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto mt-30 mb-30">
      {/* Header */}
      <div className="text-center flex gap-4 flex-col mb-10">
        <h1 className="font-extrabold text-5xl text-[#101727]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382] text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch">
        {/* Starter */}
        <div className="card bg-base-100 shadow-sm h-full">
          <div className="card-body flex flex-col h-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Starter</h2>
              <p className="text-base text-neutral-400">
                Perfect for getting started
              </p>
              <p className="text-4xl font-medium">
                $0<span className="text-base text-neutral-500">/Month</span>
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 flex-1">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                High-resolution image generation
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Customizable style templates
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Batch processing capabilities
              </li>
            </ul>

            <div className="mt-auto">
              <button className="btn btn-primary w-full rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* Pro */}
        <div className="card bg-linear-to-l from-[#9514fa] to-[#4f39f6] shadow-sm h-full">
          <div className="card-body flex flex-col h-full">
            <div className="flex justify-center p-2">
              <span className="badge badge-md badge-soft bg-amber-100 border border-amber-100 text-red-800 rounded-full -mt-11">
                Most Popular
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Pro</h2>
              <p className="text-base text-white">
                Perfect for getting started
              </p>
              <p className="text-4xl text-white font-medium">
                $29<span className="text-base text-neutral-200">/Month</span>
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 flex-1 text-white">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                High-resolution image generation
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Customizable style templates
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Batch processing capabilities
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced AI tools
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority support
              </li>
            </ul>

            <div className="mt-auto">
              <button className="btn w-full rounded-full bg-white">
                <span className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise */}
        <div className="card bg-base-100 shadow-sm h-full">
          <div className="card-body flex flex-col h-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p className="text-base text-neutral-400">
                For teams and businesses
              </p>
              <p className="text-4xl font-medium">
                $99<span className="text-base">/Month</span>
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 flex-1">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                High-resolution image generation
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Customizable style templates
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Batch processing capabilities
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Dedicated support
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Custom integrations
              </li>
            </ul>

            <div className="mt-auto">
              <button className="btn btn-primary w-full rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

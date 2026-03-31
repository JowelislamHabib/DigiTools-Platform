import { useState } from "react";

const Card = ({ item }) => {
  const [buyNowbtn, setBuyNowbtn] = useState("Buy Now");

  return (
    <div>
      <div className="card  bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-end">
            <span
              className={`badge badge-md rounded-full badge-soft ${
                item.tagType === "new"
                  ? "badge-primary"
                  : item.tagType === "popular"
                    ? "badge-secondary"
                    : item.tagType === "best seller"
                      ? "badge-success"
                      : "badge-neutral"
              } uppercase`}
            >
              {item.tagType.toLowerCase()}
            </span>
          </div>
          <div className="p-4 border border-neutral-100 rounded-full w-fit">
            <img className="h-10 w-10" src={item.image} alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{item.name}</h2>
            <p className="line-clamp-2 text-base text-neutral-400">
              {item.description}
            </p>
            <p className="text-2xl font-medium capitalize">
              ${item.price}/
              <span className="text-xl text-neutral-500">{item.period}</span>
            </p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {item.features.map((feat, index) => (
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
                <span className="text-base">{feat}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={() => setBuyNowbtn("purchased")}
              className="btn btn-primary btn-block rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r from-[#9514fa] to-[#4f39f6]"
            >
              {buyNowbtn === "Buy Now" ? "Buy Now" : "Purchased"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

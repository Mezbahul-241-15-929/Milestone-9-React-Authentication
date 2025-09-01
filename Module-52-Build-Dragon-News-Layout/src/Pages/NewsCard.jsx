import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  // Generate stars based on rating number
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <FaStar key={i} className="text-orange-500" />
    ));
  };

  return (
    <div className=" rounded-2xl shadow-md bg-white overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-base-200 flex items-center justify-between p-4">
        <div className=" flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-black" />
          <FaShareAlt className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold px-4 pb-2">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full max-h-72 object-cover"
      />

      {/* Details */}
      <div className="px-4 py-3 text-gray-700 text-sm">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}...{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Read More
            </span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-base-300">
        <div className="flex items-center gap-1 text-sm">
          {renderStars(rating.number)}
          <span className="ml-2 font-semibold text-gray-700">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-sm gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

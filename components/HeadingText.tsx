import React from "react";

interface HeadingTextProps {
  title: String;
  description: String;
}

const HeadingText = ({ title, description }: HeadingTextProps) => {
  return (
    <div className="flex flex-col border-t-2">
      <h1 className="md:text-3xl text-2xl font-medium text-gray-900 mb-2">
        {title}
      </h1>
      <p className="text-sm leading-relaxed text-lime-500">{description}</p>
    </div>
  );
};

export default HeadingText;

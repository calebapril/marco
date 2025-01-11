import Image from "next/image";
import React from "react";

const Timeline: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        {/* Image Section (First on Mobile) */}
        <div className="order-1 md:order-2 md:col-span-3 flex justify-center">
          <Image
            src="/Timeline.png" // Replace with your image URL
            width={800} // Larger width for better display
            height={800} // Larger height for better display
            alt="MARCO Timeline Overview"
            className="rounded-lg w-full h-auto" // Ensure responsiveness
          />
        </div>

        {/* Heading Section */}
        <div className="order-2 md:order-1 md:col-span-2 space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">MARCO Timeline</h1>
          <p className="text-gray-600">March 7-15, 2025</p>
          <p className="text-gray-700">
            Plan your MARCO 2025 adventure today! Explore primary access per badge type across daily programming including Conference tracks, Festivals, and Exhibitions.
          </p>
          <a href="path/to/your/file.pdf" download>
          <button className="px-6 py-2 mt-4 bg-yellow-500 text-black rounded-md hover:bg-yellow-600">
            Download PDF
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

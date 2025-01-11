import React from 'react';

function AboutUs() {
  return (
    <section className="w-full mx-auto px-6 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        
        {/* Image and Links Column (on top for small screens) */}
        <div className="md:order-last lg:col-span-1 flex flex-col items-center bg-[#ffca51] rounded-md">
          <div className="w-full h-48 md:h-64 lg:h-72 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url("/event.jpg")' }}>
          </div>
          <div className="mt-4 text-center pb-5 font-medium">
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:underline">2025 TRACKS</a></li>
              <li><a href="#" className="text-black hover:underline">KEYNOTES</a></li>
              <li><a href="#" className="text-black hover:underline">FEATURED SPEAKERS</a></li>
              <li><a href="#" className="text-black hover:underline">FORMATS</a></li>
              <li><a href="#" className="text-black hover:underline">PANELPICKER®</a></li>
            </ul>
          </div>
        </div>

        {/* Heading Column */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[120%] text-black border-b-2 pb-2 mb-4">
            About the MARCO Conference
          </h2>
        </div>

        {/* Text Column */}
        <div className="lg:col-span-1">
          <p className="text-gray-600 mb-4">
            Featuring a variety of tracks that focus on the most important breakthroughs in technology, film, culture, and music, MARCO proves that the most unexpected discoveries happen when diverse topics and people come together.
          </p>
          <p className="font-semibold text-gray-800">
            See You at MARCO 2025
          </p>
          <p className="text-gray-600">
            Join us for MARCO 2025 from March 7–15 in Austin, TX. <a href="#" className="text-blue-500 hover:underline">Registration</a> and <a href="#" className="text-blue-500 hover:underline">housing</a> are now open! Stay tuned for announcements throughout the season by <a href="#" className="text-blue-500 hover:underline">subscribing</a> to Event Updates and community newsletters.
          </p>
          <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500">
            Attend
          </button>

          <p className='text-gray-600 mt-5 '>Itaú is the official 2025 MARCO Streaming Sponsor for Conference Keynotes and Featured Sessions, offering digital translation services in Spanish & Portuguese.</p>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
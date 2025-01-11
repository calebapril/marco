import Image from 'next/image';
import React from 'react';

function FeaturedSection2() {
  return (
    <section className="w-full mx-auto px-12 py-12 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Feature */}
        <div className="md:col-span-2 space-y-4">
          <div className="relative bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/DAY6.jpg" 
              alt="Conference Session" 
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-4 left-4 text-white">
                {/* <h2 className="text-2xl font-bold">ARVIND KRISHNA</h2>
                <p className="text-lg">CEO, IBM</p> */}
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-100">
            Keynote Arvind Krishna and More Featured Speakers Announced
          </h3>
          <p className="text-gray-400">
            Announcing the latest additions to the 2025 MARCO Conference with Keynote Arvind Krishna and Featured Speakers Candace Parker, Lidiane Jones, Ghazi and more!
          </p>
        </div>

        {/* Side Features */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/DAY7.jpg" 
                alt="Conference Session" 
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">First Round of Featured Speakers</h4>
              <p className="text-gray-400 text-sm">
                Catch up on the latest names, including Dr. Peter Attia, Johanna Faries, Douglas Rushkoff, and more.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/events.jpg" 
                alt="Conference Session" 
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">450+ Conference Sessions Announced</h4>
              <p className="text-gray-400 text-sm">
                Ideas and conversations from industry experts and creatives alike will touch down in Austin, Texas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedSection2;

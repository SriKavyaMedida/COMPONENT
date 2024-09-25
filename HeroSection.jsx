
const HeroSection = () => {
  return (
    <section className="relative pt-16 bg-gray-50 transition-transform duration-500 hover:scale-105">
      <div className="container mx-auto relative" id="hero">
        <img
          className="w-full object-cover rounded-lg shadow-lg"
          style={{ height: '550px' }}
          src="https://hubble-live-assets.s3.amazonaws.com/realaction/image_asset/file/100/content_Hiring.jpeg"
          alt="Example"
        />

        {/* Overlay button at the bottom center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
          <a href="https://theedumoon.com/become%20a%20tutor%20(2).html">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
              Become an Instructor
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

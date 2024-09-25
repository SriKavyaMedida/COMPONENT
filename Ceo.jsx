

const Ceo = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        {/* Vikas Kapuganti */}
        <img
          className="xl:w-1/6 lg:w-1/4 md:w-1/3 w-1/2 block mx-auto mb-10 object-cover object-center rounded"
          alt="Vikas Kapuganti"
          src="src\images\ceo.png"
        />
        <div className="flex flex-col text-center w-full">
          <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
            Vikas Kapuganti – Co-Founder & CEO, EduMoon
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Vikas Kapuganti is the co-founder and CEO of EduMoon, an ed-tech startup based in Visakhapatnam. Launched in 2020, EduMoon has grown into a community of over 12,000 students, offering courses, internships, and webinars to bridge the gap between academia and industry. Under Vikas' leadership, the startup has been valued at ₹3 crore and gained recognition in global competitions like the TiE University Global Pitch.
          </p>
        </div>
        {/* Ponnada Mahidhar */}
        <img
          className="xl:w-1/6 lg:w-1/4 md:w-1/3 w-1/2 block mx-auto mb-10 object-cover object-center rounded"
          alt="Ponnada Mahidhar"
          src="src\images\cmo.png"
        />
        <div className="flex flex-col text-center w-full">
          <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
            Ponnada Mahidhar – Co-Founder & CMO, EduMoon
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Ponnada Mahidhar is the co-founder of EduMoon, an ed-tech startup that supports students with academic and career resources. Under his leadership, EduMoon has grown to over 12,000 members, offering courses and internships, and is valued at ₹3 crore. Mahidhar is focused on bridging the gap between education and industry while expanding the platform’s reach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ceo;

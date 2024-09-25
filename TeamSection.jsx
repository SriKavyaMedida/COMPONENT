const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Brijesh',
      title: 'Chief Development Officer',
      imgSrc: 'src/images/team1.jpg',
      link: '#',
    },
    {
      name: 'Smruthi',
      title: 'Chief Organisation Officer',
      imgSrc: 'src/images/team2.jpg',
      link: '#',
    },
    {
      name: 'Shoukath Ali',
      title: 'Chief Technological Officer',
      imgSrc: 'src/images/team3.jpg',
      link: 'https://www.linkedin.com/in/shoukath-ali-shaik-9b2b43280/',
    },
    {
      name: 'Sowmya',
      title: 'Chief Event Designer',
      imgSrc: 'src/images/team4.jpg',
      link: '#',
    },
  ];

  return (
    <section className="text-white bg-[#2C3E50] body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="relative w-full h-56 mb-4">
                  <img 
                    alt="team" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                    src={member.imgSrc} 
                  />
                </div>
                <div className="w-full">
                  <a href={member.link} className="title-font font-medium text-lg text-white">
                    {member.name}
                  </a>
                  <h3 className="text-white mb-3">{member.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

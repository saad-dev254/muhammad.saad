import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior React Native Developer</h4>
                <h5>Interlink Multi Media</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Developed a React Native mobile app that increased user engagement.
              Optimized API calls and reduced load times for noticeably faster
              performance. Implemented REST APIs to connect backend services and
              debugged issues to improve overall user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Technomites</h5>
              </div>
              <h3>03/2022 – 12/2022</h3>
            </div>
            <p>
              Contributed to a large-scale mobile application using React Native,
              PHP, and Firebase. Designed and maintained backend services with PHP
              and MySQL, reducing downtime and improving stability. Developed new
              features and optimized database queries to further improve reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Mean3</h5>
              </div>
              <h3>08/2021 – 02/2022</h3>
            </div>
            <p>
              Developed multiple React Native applications with responsive,
              user-friendly designs. Collaborated with clients to gather requirements
              and provide tailored technical solutions, delivering high-quality apps
              that met both functional and aesthetic needs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web & React Native Developer</h4>
                <h5>BookingWhizz</h5>
              </div>
              <h3>06/2019 – 08/2021</h3>
            </div>
            <p>
              Built web and mobile applications using React Native, HTML, CSS,
              Bootstrap, and jQuery. Implemented responsive designs across devices,
              worked with clients to gather requirements, and delivered tailored
              solutions with 100% client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

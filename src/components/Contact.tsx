import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:saad.developer.1998@gmail.com"
                data-cursor="disable"
              >
                Email — saad.developer.1998@gmail.com
              </a>
            </p>
            <p>Karachi, Pakistan</p>
            <h4>Education</h4>
            <p>
              Bachelor of Business &amp; Information Technology (BBIT), Virtual
              University of Pakistan — 03/2024 – Present
            </p>
            <p>
              3-Year Diploma in Software Engineering, Aptech Learning — 09/2018
              – 09/2021
            </p>
            <p>
              Intermediate in Pre-Engineering, SRE Majeed Govt College — 2016 –
              2018
            </p>
          </div>
          <div className="contact-box">
            <h4>Languages</h4>
            <p>English — Intermediate</p>
            <h4>Strengths</h4>
            <p>
              Problem-solving skills (solved complex coding problems using React
              Native for better performance).
            </p>
            <p>
              Team player (collaborated with cross-functional teams to develop
              and deliver high-quality products).
            </p>
            <p>
              Attention to detail (ensured code quality through rigorous testing
              and review processes).
            </p>
            <h4>Key Achievements</h4>
            <p>
              Led cross-functional teams to deliver complex mobile applications on
              time and within budget.
            </p>
            <p>
              Contributed to open-source projects (including Bootstrap, React, and
              React Native libraries) to improve accessibility and performance.
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>MUHAMMAD SAAD</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

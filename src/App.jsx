import React, { useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Aakash from "../src/media/aakash.jpeg";
import aakash from "../src/media/Akash.jpg";
import realestate from "../src/media/realestate.jpg";
import carrental from "../src/media/carrental.jpg";
import doctorapp from "../src/media/doctorapp.jpg";
import insurance from "../src/media/insurance.jpg";
import ScrollReveal from "scrollreveal";

const App = () => {
  useEffect(() => {
    // ScrollReveal
    const srScript = document.createElement("script");
    srScript.src = "https://unpkg.com/scrollreveal";
    srScript.async = true;
    document.body.appendChild(srScript);
    // srScript.onload = () => {
    //   const ScrollReveal = window.ScrollReveal;
    //   if (ScrollReveal) {
    //     ScrollReveal().reveal(
    //       ".home-content, .home-img, .about-content, .about-img, .portfolio-box, .contact form",
    //       {
    //         origin: "top",
    //         distance: "50px",
    //         duration: 1000,
    //         delay: 200,
    //         reset: false,
    //       }
    //     );
    //   }
    // };
    // Typed.js
    const typedScript = document.createElement("script");
    typedScript.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    typedScript.async = true;
    typedScript.onload = () => {
      const Typed = window.Typed;
      if (Typed) {
        new Typed(".multiple-text", {
          strings: ["Frontend Developer", "React Developer", "UI Enthusiast"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
        });
      }
    };
    document.body.appendChild(typedScript);
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(".home-content", {
      origin: "left",
      distance: "60px",
      duration: 1000,
      delay: 200,
      reset: true, // 👈 enables repeat animation
    });

    ScrollReveal().reveal(".home-img", {
      origin: "right",
      distance: "60px",
      duration: 1000,
      delay: 300,
      reset: true,
    });

    ScrollReveal().reveal(".about-img", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 100,
      reset: true,
    });

    ScrollReveal().reveal(".about-content", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".portfolio-box", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 100,
      interval: 100,
      reset: true,
    });

    ScrollReveal().reveal(".contact form", {
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="#" className="logo">
          Portfolio..
        </a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hi, Myself</h3>
          <h1>Aakash</h1>
          <h3>
            and I'm a <span className="multiple-text"></span>
          </h3>
          <p>
            A developer focused on creating engaging and user-friendly
            interfaces, with proficiency in various frontend technologies like
            HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, Styled
            Components, SCSS, React.js, React Native, Next.js, Three.js,
            Node.js, AdminJS, Docker, Kubernetes, MongoDB, SQL, Figma, Redux,
            Context API, React Hook Form, Yup, React Query, GSAP, Framer Motion,
            JWT and a desire to collaborate with backend developers to deliver
            exceptional user experiences.
          </p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/aakash-r-164700208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/aakashr30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* <a href="#">
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
          <a
            href="/Aakash_R_Frontend_Resume.pdf"
            // download
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img src={Aakash} alt="Aakash" />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={aakash} alt="Aakash profile" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <p>
            I am Aakash, a Frontend Developer with nearly two years of
            professional experience and a strong portfolio of personal
            projects...
          </p>
          <p>
            I'm currently working at
            <strong> Yella Insurance Broking Private Limited</strong>, where
            I’ve been building high-performance insurance platforms using:
          </p>
          <ul>
            <li>React.js, Next.js, JavaScript, and TypeScript</li>
            <li>Tailwind CSS, Bootstrap, and Styled Components</li>
            <li>React Hook Form and Yup</li>
            <li>Figma, CSS3, and SCSS</li>
          </ul>
          <p>
            I optimize performance using React Query, code splitting, lazy
            loading, and image optimization. I manage state with Redux and
            Context API.
          </p>
          <p>
            <strong>Personal Projects:</strong>
          </p>
          <ul>
            <li>
              <strong>Real Estate Application:</strong> Full-stack app with
              real-time chat.
              <br />
              <em>Tech Stack:</em> React.js, Context API, Node.js, MongoDB,
              Socket.io.
            </li>
            <li>
              <strong>Car Rental Platform:</strong> PWA with 3D car views.
              <br />
              <em>Tech Stack:</em> Next.js, Three.js, Tailwind, Vercel.
            </li>
            <li>
              <strong>Doctor Consultation Mobile App:</strong> Smooth
              appointments and records.
              <br />
              <em>Tech Stack:</em> React Native, Node.js, MongoDB.
            </li>
            <li>
              <strong>Insurance Company Page Design:</strong> UI/UX prototype.
              <br />
              <em>Tools:</em> Figma, Canva.
            </li>
          </ul>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="portfolio-container">
          {[
            {
              title: "Real Estate Application",
              desc: "Full-stack platform with real-time chat, auth, and listing.",
              img: realestate,
              link: "https://github.com/aakashr30?tab=repositories",
            },
            {
              title: "Car Showcase & Rental Platform",
              desc: "PWA for renting cars with 3D and offline support.",
              img: carrental,
              link: "https://github.com/aakashr30?tab=repositories",
            },
            {
              title: "Doctor Consultation App",
              desc: "Book appointments and manage records.",
              img: doctorapp,
              link: "https://github.com/aakashr30?tab=repositories",
            },
            {
              title: "Insurance Company Page Design",
              desc: "Modern UI with Figma and Canva.",
              img: insurance,
              link: "https://github.com/aakashr30?tab=repositories",
            },
          ].map((item, idx) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-box"
              key={idx}
            >
              <img src={item.img} alt="project" />
              <div className="portfolio-layer">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <i className="fa-regular fa-share-from-square"></i>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form
          action="https://formsubmit.co/raakashraj2002@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="input-box">
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="Email Address"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              name="Mobile Number"
              placeholder="Mobile Number"
              required
            />
            <input
              type="text"
              name="Email Subject"
              placeholder="Email Subject"
            />
          </div>
          <textarea
            name="Message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-text">
          <p>&copy; 2025 by @aakash | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;

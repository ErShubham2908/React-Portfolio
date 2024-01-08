import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h1>About Me</h1>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>
                                <span style={{ fontSize: "20px" }}>1.5+</span>{" "}
                                years
                            </small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>
                                <span style={{ fontSize: "20px" }}>10+</span>{" "}
                                Completed Toy Projects
                            </small>
                            <br />
                            <small>
                                <span style={{ fontSize: "20px" }}>5+</span>{" "}
                                Completed Industry Ready Projects
                            </small>
                        </article>
                    </div>
                    <p>
                        As a Frontend Developer at CollegeDekho, I specialize in
                        creating user-friendly and visually appealing web
                        applications using HTML, CSS, and JavaScript. Currently,
                        I am focused on developing the PrepBytes Dashboard, the
                        home page, landing pages of different components, and
                        the login section. I actively generate new React-based
                        project ideas to enhance proficiency, creativity, and
                        maintain a professional approach. I hold a B.Tech degree
                        in Information Technology from KIT's College of
                        Engineering (Autonomous), Kolhapur, which I completed in
                        May 2021. Throughout my education, I gained expertise in
                        responsive design and collaborating with
                        cross-functional teams. Passionate about staying updated
                        with emerging technologies, I strive to deliver
                        exceptional user experiences. I am now seeking new
                        opportunities to utilize my skills and contribute to
                        innovative projects.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;

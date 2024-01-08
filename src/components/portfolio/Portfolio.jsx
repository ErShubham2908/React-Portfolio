import React from "react";
import IMG1 from "../../assets/Img1.png";
import IMG2 from "../../assets/Img2.png";
import IMG3 from "../../assets/Img3.png";
import IMG4 from "../../assets/Img4.png";
import IMG5 from "../../assets/Img5.png";
import IMG6 from "../../assets/Img6.png";
import IMG7 from "../../assets/Img7.png";
import IMG8 from "../../assets/Img8.png";
import IMG9 from "../../assets/Img9.png";

import "./portfolio.css";

const Portfolio = () => {
    const soloProjects = [
        {
            id: 1,
            title: "Tic Tac Toe Game",
            img: IMG1,
            category : 'JavaScript',
            link: "https://ershubham2908.github.io/Tic-Tac-Toe-Game-JavaScript/",
            github: "https://github.com/ErShubham2908/Tic-Tac-Toe-Game-JavaScript",
        },
        {
            id: 2,
            title: "Weather Check",
            category : 'JavaScript',
            img: IMG2,
            link: "https://anisha-mymusic-app.netlify.app/",
            github: "https://github.com/ErShubham2908/JavaScript-Weather-API",
          },
          {
            id: 3,
            title: "Calculator",
            category : 'JavaScript',
            img: IMG3,
            link: "https://ershubham2908.github.io/Calculator-using-inline-javascript/",
            github: "https://github.com/ErShubham2908/Calculator-using-inline-javascript",
          },
          {
            id: 4,
            title: "To Do App",
            category : 'JavaScript',
            img: IMG4,
            link: "https://ershubham2908.github.io/JavaScript-ToDo/",
            github: "https://github.com/ErShubham2908/JavaScript-ToDo",
          },
          {
            id: 5,
            title: "GIF Search",
            category : 'JavaScript',
            img: IMG5,
            link: "https://ershubham2908.github.io/JavaScript-GIF-Search/",
            github: "https://github.com/ErShubham2908/JavaScript-GIF-Search",
          },
          {
            id: 6,
            title: "Dice Game",
            category : 'JavaScript',
            img: IMG6,
            link: "https://play-quiz-app.netlify.app/",
            github: "https://github.com/ErShubham2908/JavaScript-Dice-Game",
        },
        {
          id: 7,
          title: "CRUD By Context API",
          img: IMG7,
          category : 'React',
          link: "https://shubham07-crudbycontextapi.netlify.app/",
          github: "https://github.com/ErShubham2908/CURD-ContextAPI",
      },
      {
          id: 8,
          title: "Multi-Step Form",
          category : 'React',
          img: IMG8,
          link: "https://shubham07-multistepform.netlify.app/",
          github: "https://github.com/ErShubham2908/JavaScript-Weather-API",
        },
        {
          id: 9,
          title: "React Blog App",
          category : 'React',
          img: IMG9,
          link: "https://shubhamkitian007-react-project.netlify.app/home",
          github: "https://github.com/Shubhamkitian007/React-Project",
        },
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h1>Portfolio</h1>
            <h2>HTML, CSS & JavaScript Project</h2>
            <div className="container portfolio__container">
                {soloProjects.filter((item) => item.category === "JavaScript").map((pro) => (
                    <article className="portfolio__item" key={pro.id}>
                        <div className="portfolio__item-image">
                            <img src={pro.img} alt={pro.title} />
                        </div>
                        <h3>{pro.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={pro.github} className="btn" target="_blank">
                                GitHub
                            </a>
                            <a href={pro.link} className="btn btn-primary" target="_blank">
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
            <h2>React Project</h2>
            <div className="container portfolio__container">
                {soloProjects.filter((item) => item.category === "React").map((pro) => (
                    <article className="portfolio__item" key={pro.id}>
                        <div className="portfolio__item-image">
                            <img src={pro.img} alt={pro.title} />
                        </div>
                        <h3>{pro.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={pro.github} className="btn" target="_blank">
                                GitHub
                            </a>
                            <a href={pro.link} className="btn btn-primary" target="_blank">
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

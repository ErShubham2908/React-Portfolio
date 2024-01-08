import React from "react";
import IMG1 from "../../assets/Img1.png";
import IMG2 from "../../assets/Img2.png";
import IMG3 from "../../assets/Img3.png";
import IMG4 from "../../assets/Img4.png";
import IMG5 from "../../assets/Img5.png";
import IMG6 from "../../assets/Img6.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Tic Tac Toe Game",
      img: IMG1,
      link: "https://anisha-react-game.netlify.app/",
      github: "https://github.com/Anishaagupta/ReactGame",
    },
    {
      id: 2,
      title: "Music App",
      img: IMG2,
      link: "https://anisha-mymusic-app.netlify.app/",
      github: "https://github.com/Anishaagupta/MusicApp-Js",
    },
    {
      id: 3,
      title: "Pizza App",
      img: IMG3,
      link: "https://anisha-pizza-app.netlify.app/",
      github: "https://github.com/Anishaagupta/pizza-app",
    },

    {
      id: 4,
      title: "To Do App",
      img: IMG4,
      link: "https://anisha-taskapp-react.netlify.app/",
      github: "https://github.com/Anishaagupta/Todo-React",
    },
    {
      id: 5,
      title: "Credit Card App",
      img: IMG5,
      link: "https://anisha-credit-card.netlify.app/",
      github: "https://github.com/Anishaagupta/Credit-card-assignment",
    },
    {
      id: 6,
      title: "Quiz App",
      img: IMG6,
      link: "https://play-quiz-app.netlify.app/",
      github: "https://github.com/Anishaagupta/Quiz-App",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <h3>{pro.title}</h3>
            <div className="portfolio__item-cta">
              <a href={pro.github} className="btn">
                GitHub
              </a>
              <a href={pro.link} className="btn btn-primary">
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

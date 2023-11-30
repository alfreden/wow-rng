import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Import the css file here
import "../../styles.css";

const Cards = ({ cards }) => {
  const cardsContainerRef = useRef(null);
  const overlayRef = useRef(null);
  
  useEffect(( ) => { 
    document.body.style = `--opacity: 1; --x: 50%; --y:${cardsContainerRef.current.offsetTop + 50}px; --animationWidth: ${cardsContainerRef.current.offsetWidth * cards.length}`;
  }, [cardsContainerRef])

  const CardDiv = ({id, children}) => {
    const [targetCard, inView] = useInView({
      threshold: 1,
    });
    
    const [style, setStyle] = useState({ color: '' });

    useEffect(() => {
      setTimeout(function () {
       
        setStyle({ textShadow: '1px 1px 10px #fff, 1px 1px 10px #ccc' });
      }, 10400);
    }, []);

    return (
      <div style={inView ? style : {textShadow: ''}} ref={targetCard} className="card startAnimation" >
        {children}
      </div>
    )
  }

  return (
    <main className="main flow" ref={overlayRef}>
      <h1 className="main__heading"></h1>
      <div className="main__cards cards  " ref={cardsContainerRef}>
        <div className="cards__inner startAnimation">
          {cards.map((card) => (
            <CardDiv id={card.id} key={card.id} >
              <div className="imgContainer">
              <img src={`/wow-rng-page/images/${card.img}.jpg`} alt="img"/>
              </div>
              <div className="hero_header_container">
                <h1 className="hero_header">{card.title} {card.content}</h1>
              </div>
            </CardDiv>
          ))}
        </div>
        <div className="overlay cards__inner">
          {cards.map((card) => (
            <div
              className={card.content + ' card startAnimation'}
              key={card.id + 1}
            >
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cards;
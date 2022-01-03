import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

function Card() {
  const [people, setPeople] = useState([
    {
      name: "Richard Hendricks",
      url: "https://d1qxviojg2h5lt.cloudfront.net/images/01DVE8XQTBZY43FEMZQ3Q97XGT/middleditch.valley570.png",
    },
    {
      name: "Erlich Bachman",
      url: "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/22/1496427861-erlich-1920.jpg",
    },
  ]);

  //   Use Effect Hook which runs on the basis of a condition;
  //   useEffect(() => {
  //     db.collection("people").onSnapshot((snapshot) =>
  //       setPeople(snapshot.docs.map((doc) => doc.data()))
  //     );
  //   });

  return (
    <div>
      <div className="tinder__cardcontainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${person.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h2>{person.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;

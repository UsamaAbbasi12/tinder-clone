import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";
// import database from "./firebase";

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
    {
      name: "Dinesh Chugtai",
      url: "https://www.hardwoodandhollywood.com/pop-culture-spin/wp-content/uploads/sites/7/2016/02/1f1bc7da-b859-40f8-b454-4d9dcbdf00db.jpg",
    },
    {
      name: "Brain Cox",
      url: "https://apidyn.royalsociety.org/images/fellows/P22678-Brian-Cox.jpg",
    },
    {
      name: "Jine Yang",
      url: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/2019/11/06/jianyang.png?itok=p8trcyBP",
    },
    {
      name: "gilfoyle",
      url: "https://i.ytimg.com/vi/ySDX02WD0og/maxresdefault.jpg",
    },
  ]);

  //   Use Effect Hook which runs on the basis of a condition;
  // useEffect(() => {
  //   db.collection("people").onSnapshot((snapshot) =>
  //     setPeople(snapshot.docs.map((doc) => doc.data()))
  //   );
  // },[]);

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

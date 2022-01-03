import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
const styles = {
  padding: "10px",
  color: "white",
  backgroundColor: "black",
  opacity: "0.7",
};
const IMG =
  "https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png";
function Header() {
  return (
    <div className="header">
      <IconButton style={styles} className="header__icon">
        <PersonIcon fontSize="large" />
      </IconButton>

      <img src={IMG} alt="Tinder" className="header__img" />
      <IconButton style={styles} className="header__icon" size="large">
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;

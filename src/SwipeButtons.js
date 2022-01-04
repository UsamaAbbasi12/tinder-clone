import React from "react";
import "./Styles/SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
function SwipeButtons() {
  return (
    <div className="swipe__buttons">
      <ReplayIcon className="swipe__button reply" fontSize="large" />
      <CloseIcon className="swipe__button close" fontSize="large" />
      <StarRateIcon className="swipe__button star" fontSize="large" />
      <FavoriteIcon className="swipe__button fav" fontSize="large" />
      <FlashOnIcon className="swipe__button flash" fontSize="large" />
    </div>
  );
}

export default SwipeButtons;

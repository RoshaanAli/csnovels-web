import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OngoingNovelsMapper from "./OngoingNovelsMapper";
import BOOK_CARD from "../Assets/Images/book-card.png";
import { connect } from "react-redux";

function FavoritesComp({ title, books, favoriteBookHandler }) {
  return (
    <div className="section-div ongoing_novel">
      <div className="section-heading-div">
        <p className="section-heading">{title || "MY FAVORITES"}</p>
      </div>

      {/* </div> */}
      <div className="row row-425 spacing-adjust">
        {books?.map((item, idx) => (
          <OngoingNovelsMapper
            key={idx}
            item={item}
            favoriteBookHandler={favoriteBookHandler}
            onClick={() => console.log("Book Card")}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesComp;

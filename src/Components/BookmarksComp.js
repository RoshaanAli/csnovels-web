import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RenderBookmarks from "./RenderBookmarks";
import BOOK_CARD from "../Assets/Images/book-card.png";
import { connect } from "react-redux";

function BookmarksComp({ booksReducer, title }) {
  const bookmarks = booksReducer?.bookmarks;

  return (
    <div className="section-div ongoing_novel">
      <div className="section-heading-div">
        <p className="section-heading">{title || "BOOKMARKS"}</p>
      </div>

      <div className="row row-425 spacing-adjust">
        {bookmarks?.length > 0 ? bookmarks.map((item, idx) => (
          <RenderBookmarks
            key={idx}
            item={item}
            onClick={() => console.log("Book Card")}
          />
        ))
        :
        <h3 className="mt-5 mb-5">No Bookmarks</h3>
      
      }
      </div>
    </div>
  );
}

const mapStateToProps = ({ booksReducer }) => {
  return {
    booksReducer,
  };
};
export default connect(mapStateToProps, null)(BookmarksComp);

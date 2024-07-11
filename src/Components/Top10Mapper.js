import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { imageUrl } from "../config";
import * as actions from "../store/actions/actions";


function Top10Mapper({authReducer, item, index, onClick, getBook }) {
  const navigate = useNavigate();
  return (
    <div
      className="top10Books"
      onClick={() => {
        navigate(`/book`, {
          replace: true,
          state: {
            book: item,
          },
        });
      }}
    >
      <img src={`${imageUrl}/${item?.image?.name}`} className="top10-image" />
      <p className={`top10BookColor_${index + 1}`}>
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </p>
      <div className="top10Books-details">
        <p className="top10-book-title">{item?.Title}</p>
        <p className="top10-book-genre">{item?.categories?.name}</p>
        <div className="star-and-rating">
          <StarRatings
            starDimension={"12"}
            rating={1}
            starRatedColor="gray"
            numberOfStars={1}
            name="rating"
          />
          <p className="top10-book-rating">{item.totalRates}</p>
        </div>
      </div>
    </div>
  );
}

const mapstatetoprops = ({ authReducer, booksReducer,  }) => {
  return { authReducer, booksReducer,  };
};
export default connect(mapstatetoprops, actions)(Top10Mapper);

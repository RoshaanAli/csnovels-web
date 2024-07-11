import React, { useEffect, useState } from "react";
import "../Styles/ReadbookPage.css";
import Header from "../Components/Header";
import BOOK_CARD from "../Assets/Images/book-card.png";
import Logo from "../Assets/Images/csnovels-logo.svg";
import CHECK from "../Assets/Images/check.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "react-infinite-scroll-component";
import $ from "jquery";
import * as actions from "../store/actions/actions";
import {
  faTimes,
  faLock,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";

function ReadBookPage({
  authReducer,
  booksReducer,
  getChapterContent,
  getChapterTitles,
}) {
  const [fontSize, setFontSize] = useState(14);
  const [chaptersTitles, setChaptersTitles] = useState(false);
  const isLogin = authReducer?.isLogin;
  const [chapterSets, setChapterSets] = useState(null);
  const [toggleContentAndOptions, setToggleContentAndOptions] = useState("");
  const accessToken = authReducer?.accessToken;
  const location = useLocation();
  const bookId = location.state.bookId;
  const BOOK_IMAGE = location.state.bookImage;
  const [chaptersRange, setChaptersRange] = useState([]);
  const BOOK_NAME = location.state.bookName;
  const [hasMoreData, setHasMoreData] = useState(true);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  useEffect(() => {
    getChapterTitles(bookId, accessToken);
  }, []);

  const onPressYellowButton = () => {
    $("body").removeClass("black_bg , white_bg");
    $("body").toggleClass("yellow_bg");
  };

  const onPressBlackButton = () => {
    $("body").removeClass("yellow_bg , white_bg");
    $("body").toggleClass("black_bg");
  };

  const onPressWhiteButton = () => {
    $("body").removeClass("yellow_bg , black_bg");
    $("body").toggleClass("white_bg");
  };

  const _onPressFontSizeHandler = () => {
    if (fontSize < 20 && fontSize > 14) {
      $("body p").css({
        "font-size": fontSize,
      });
    } else {
      $("body p").css({
        "font-size": fontSize,
      });
    }
  };

  const _onPressApplyFont = (fontType) => {
    if (fontType == 1) {
      $("body  p").css("font-family", "Nunito Sans, sans-serif");
    } else {
      $("body  p").css("font-family", "Montserrat");
    }
  };

  useEffect(() => {
    _onPressFontSizeHandler();
  }, [fontSize]);

  useEffect(() => {
    if (booksReducer?.chaptersTitles?.length > 0) {
      const CHAPTERS_LENGTH = booksReducer?.chaptersTitles?.length;
      const CHAPTERS = [...booksReducer?.chaptersTitles];
      const CHAPTERS_SETS = new Array(
        Math.ceil(CHAPTERS_LENGTH / Math.trunc(CHAPTERS_LENGTH / 4))
      )
        .fill()
        .map((_) => CHAPTERS?.splice(0, Math.trunc(CHAPTERS_LENGTH / 4)));
      let RANGE_SETS = [];
      let lastInnerArrLength = 0;
      CHAPTERS_SETS?.map((ele, idx) => {
        RANGE_SETS.push(
          `${lastInnerArrLength + 1}-${lastInnerArrLength + ele?.length}`
        );
        lastInnerArrLength = lastInnerArrLength + ele?.length;
      });
      setChaptersRange(
        RANGE_SETS?.map((ele, idx) => ({ index: idx, set: ele }))
      );
      console.log(CHAPTERS_SETS);
      console.log(RANGE_SETS);
      setChapterSets(CHAPTERS_SETS);
      setChaptersTitles(CHAPTERS_SETS[0]);
      setSelectedRange({ index: 0, set: RANGE_SETS[0] });
      setSelectedChapterId(booksReducer?.chaptersTitles[0]?._id);
    }
  }, [booksReducer?.chaptersTitles]);

  useEffect(() => {
    if (selectedChapterId) {
      getChapterContent(selectedChapterId, bookId, accessToken);
    }
  }, [selectedChapterId]);

  const getOtherChapters = () => {
    getChapterContent(selectedChapterId, bookId, accessToken);
  };

  useEffect(() => {
    let newList = [];

    chaptersRange?.filter((ele, idx) => {
      if (ele?.index === selectedRange?.index) {
        newList = chapterSets[idx];
      }
    });
    setChaptersTitles(newList);
  }, [selectedRange]);

  return (
    <>
      <Header />
      <div className="read-book-body">
        <section className="side_bar_func">
          <div className="icons_sidebar">
            <div className="hamburger">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  setToggleContentAndOptions(
                    toggleContentAndOptions === "display_tables"
                      ? ""
                      : "display_tables"
                  );
                }}
              />
            </div>
            <div className="settings">
              <FontAwesomeIcon
                icon={faCog}
                onClick={() => {
                  setToggleContentAndOptions(
                    toggleContentAndOptions === "display_options"
                      ? ""
                      : "display_options"
                  );
                }}
              />
            </div>
          </div>
        </section>
        <section className="table-"></section>
        <section className="section-1 my_readbook_sec1">
          <div className="row">
            <div className="col-lg-6 left-header">
              <div className="logo">
                <img src={Logo} className="img-fluid" alt="" />
              </div>
              <div className="book-title">
                <h3>{`${BOOK_NAME} / Characters as of ${booksReducer?.chapterContent[0]?.content}`}</h3>
              </div>
            </div>
            <div className=" col-lg-6 right-header">
              {!isLogin && (
                <a href="#" className="btn-sm">
                  SIGN IN
                </a>
              )}
            </div>
          </div>
        </section>
        <section
          className={`chapter-sec my_readbook_sec2 ${
            toggleContentAndOptions === "display_tables"
              ? "display_tables"
              : toggleContentAndOptions === "display_options"
              ? "display_options"
              : ""
          }`}
        >
          <div className="container">
            <div className="book_img">
              <img src={BOOK_IMAGE} className="img-fluid" alt="book-image" />
              <span className="original">Original</span>
            </div>
            <div className="book_text">
              <h3>{BOOK_NAME}</h3>
              {/* <h2>
                Author: <span>easyread</span>
              </h2> */}
              <h4>© CSNovels</h4>
            </div>
            <div className="hr_book">
              <img src={BOOK_CARD} className="img-fluid" alt="" />
            </div>

            {/* Book Content Paragraphs  */}
            {/* <InfiniteScroll
              dataLength={booksReducer?.chapterContent?.length}
              scrollThreshold={"200px"}
              next={() => getOtherChapters()}
              hasMore={hasMoreData}
              inverse={true}
              loader={
                <div className="mt-3 mb-3 d-flex justify-content-center align-items-center">
                  <Loader
                    type="TailSpin"
                    color="darkgrey"
                    height={40}
                    width={40}
                  />
                </div>
              }
            > */}
            <div className="chapter_content">
              <h3>
                {`${booksReducer?.chapterContent[0]?.content}: ${chaptersTitles?.[0]?.title}`}
              </h3>
              {booksReducer?.chapterContent?.map(
                (ele, idx) =>
                  idx !== 0 && <p className="mt-2">{ele?.content}</p>
              )}
            </div>
            {/* </InfiniteScroll> */}
          </div>

          <div className="table_content visible_table">
            <h4>Table of Contents</h4>
            <span className="close">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setToggleContentAndOptions("");
                }}
              />
            </span>
            <span> Volume 1</span>
            <ul className="chapter_headings">
              {chaptersTitles?.length > 0 &&
                chaptersTitles?.map((ele, idx) => {
                  return (
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedChapterId(ele?._id);
                        }}
                        style={{
                          color:
                            selectedChapterId === ele?._id ? "#3b66f5" : "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        {`${ele?.name?.match(/(\d+)/)[0]}.`}&nbsp; &nbsp;
                        {`${ele?.title}`}
                      </a>
                    </li>
                  );
                })}
            </ul>
            {/* <ul className="chapter-count">
              <li className="lock">
                <a href="#">Prologue </a>
                <FontAwesomeIcon
                  icon={faLock}
                  onClick={() => {
                    setToggleContentAndOptions("");
                  }}
                />
              </li>
              <li>
                <a href="#">Opening day of The Ancient World</a>
              </li>
              <li>
                <a href="#">The Divine Class </a>
              </li>
              <li>
                <a href="#">Chaos in both worlds</a>
              </li>
              <li>
                <a href="#">Slaying monsters and getting another quest </a>
              </li>
            </ul> */}
            <div className="chapters_range">
              <ul>
                {chaptersRange?.length > 0 &&
                  chaptersRange?.map((ele, idx) => (
                    <li>
                      <a
                        className={
                          selectedRange?.index == ele?.index && "blue-line"
                        }
                        href="#"
                        onClick={(e) => {
                          setSelectedRange(ele);
                          e.preventDefault();
                        }}
                      >
                        {ele.set}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="table_content display_visible">
            <h4>Display Options</h4>
            <span className="close">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setToggleContentAndOptions("");
                }}
              />
            </span>
            <span>Background</span>
            <div className="bg-change-main">
              <div
                onClick={() => onPressWhiteButton()}
                className="white-btn bg-changer"
              >
                <img src={CHECK} alt="" className="img-fluid" />
              </div>
              <div
                onClick={() => onPressYellowButton()}
                className="yellow-btn bg-changer"
              >
                <img src={CHECK} alt="" className="img-fluid" />
              </div>
              <div
                onClick={() => onPressBlackButton()}
                className="black-btn bg-changer"
              >
                <img src={CHECK} alt="" className="img-fluid" />
              </div>
            </div>
            <span>Font</span>
            <div className="font-changer">
              <div className="nunito-font" onClick={() => _onPressApplyFont(1)}>
                <p>Nunito Sans</p>
              </div>
              <div className="merri-font" onClick={() => _onPressApplyFont(2)}>
                <p>Merriweather</p>
              </div>
            </div>
            <span>Size</span>
            <div className="size-changer">
              <div
                className="increasing_size"
                onClick={() => {
                  if (fontSize < 20) {
                    setFontSize(fontSize + 1);
                  }
                }}
              >
                A+
              </div>
              <div className="size">{fontSize}</div>
              <div
                className="decreasing_size"
                onClick={() => {
                  if (fontSize >= 14) {
                    setFontSize(fontSize - 1);
                  }
                }}
              >
                A-
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const mapStateToProps = ({ authReducer, booksReducer }) => {
  return {
    authReducer,
    booksReducer,
  };
};

export default connect(mapStateToProps, actions)(ReadBookPage);

/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

import BuddyAvatar from "../components/BuddyAvatar";
import AddBuddyBtn from "../components/AddBuddyBtn";
import SearchResults from "../components/SearchResults";

const SearchArea = ({ prepopulatedBuddy }) => {
  const [activeQuery, setActiveQuery] = useState("");
  const [textareaHover, setTextareaHover] = useState("");

  const handleCloseBtn = () => {setActiveQuery("");};
  const handleSearchQuery = e => {setActiveQuery(e.target.value);};

  const handleTextAreaMouseEnter = () => {setTextareaHover(true)}
  const handleTextAreaMouseOut = () => {setTextareaHover(false);}

  return (
    <div
      className={"search-container"}
      sx={{
        margin: "200px 0",
        maxWidth: "100%",
        display: "flex",
        alignItems: "baseline",
        overflowX: "hidden",
        position: "relative"
      }}
    >
      {prepopulatedBuddy ? (
        <div
          sx={{
            position: "absolute",
            marginRight: "40px"
          }}
        >
          <BuddyAvatar
            buddy={prepopulatedBuddy}
            nameLabel={false}
            startSmall
          />
        </div>
      ) : (
        <div sx={{ width: "112px" }}>
          <img
            sx={{
              position: "relative",
              top: "-20px"
            }}
            src="/MagnifyingGlass.svg"
            alt="SearchIcon"
          />
        </div>
      )}
      <div
        sx={{
          transformOrigin: "0% 50%",
          animation: prepopulatedBuddy ? "shiftLeft 1s forwards ease" : "",
          position: "relative"
        }}
      >
        <textarea
          className="search-input"
          placeholder="Crypto Buddies"
          sx={{
            display: "block",
            maxWidth: "600px",
            fontSize: "128px",
            outline: "none",
            border: "none",
            color: "text",
            fontWeight: "bold",
            fontFamily: "heading",
            letterSpacing: "-6px",
            lineHeight: "1",
            overflowY: "hidden",
            resize: "none",
            background: "transparent",
            transition: "all .5s ease",
            marginLeft: prepopulatedBuddy ? "calc(136px + 52px)" : "0"
          }}
          onChange={handleSearchQuery}
          value={prepopulatedBuddy ? prepopulatedBuddy.name : activeQuery}
          disabled={prepopulatedBuddy}
          onMouseEnter={handleTextAreaMouseEnter}
          onMouseOut={handleTextAreaMouseOut}
        />
        {activeQuery && (
          <SearchResults
            limit={4}
            query={`
              {
                buddies(where: { name_contains: "${activeQuery}" }){
                  id
                  name
                  image
                }
              }
            `}
          />
        )}

        {prepopulatedBuddy && (
          <div sx={{ marginLeft: "calc(136px + 52px)", marginTop: "75px" }}>
            <AddBuddyBtn />
          </div>
        )}
      </div>
      <button
        sx={{
          position: "absolute",
          transition: "all .2s ease",
          left: !activeQuery ? "100%" : "90%",
          top: "53px"
        }}
        onClick={handleCloseBtn}
      >
        <img
          src="/CloseBtn.svg"
          alt="X"
          sx={{
            height: "32px",
            width: "32px"
          }}
        />
      </button>
      <style>{`
      button {
        border: none;
        background: transparent;
        outline: none;
        cursor: pointer;
      }
      textarea::placeholder {
        color: ${textareaHover ? "#B1B1B3" : "black"};
      }
      @keyframes shiftLeft {
        from {
          transform: translateX(-128px);
        }
        to {
          transform: translateX(0px);
        }
      }
    `}</style>
    </div>
  );
};

export default SearchArea;

/** @jsx jsx */
// import { useState } from "react";
import { jsx, Box } from "theme-ui";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "gatsby";

import BuddyAvatar from "../components/BuddyAvatar";

let freshBuddies = new Set();

const FreshBuddyList = ({query, limit}) => {
  const { loading, error, data } = useQuery(gql(query));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  function getRandomBuddy() {
    return data.buddies[Math.floor(Math.random() * data.buddies.length)];
  }

  const freshBuddyListPopulate = () => {
    if(freshBuddies.size === 0 ) {
      while (freshBuddies.size < limit) {
        freshBuddies.add(getRandomBuddy());
      }
      freshBuddies = Array.from(freshBuddies);
    }
  };

  freshBuddyListPopulate()

  if (freshBuddies.size === 0) {
    return "";
  } else {
    return (
      <Box sx={{ maxWidth: "1064px", margin: "auto" }}>
        <ul
          className={"BuddiesList"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            margin: "0 0 350px 0",
            padding: "0px"
          }}
        >
          {freshBuddies.map(buddy => (
            <li
              sx={{
                listStyle: "none",
                display: "flex",
                cursor: "pointer",
                padding: "0 23px 32px 0"
              }}
              key={buddy.id}
            >
              <Link
                to={`/details?buddy=${buddy.id}`}
                sx={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "black"
                }}
                state={{ buddy: buddy }}
              >
                <BuddyAvatar buddy={buddy} nameLabel={true} />
              </Link>
            </li>
          ))}
          <style>{`
            li * {transition: all .5s ease;}
            ul:hover li img {
              filter: opacity(0.5);
            }
            ul:hover li:hover img {
              transform: scaleY(1.1) scaleX(1.1);
              box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .5);
              filter: opacity(1);
            }
            ul:hover li:hover span {
              font-weight: 700;
            }
        `}</style>
        </ul>
      </Box>
    );
  }

};

export default FreshBuddyList;

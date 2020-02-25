/** @jsx jsx */
import { jsx } from "theme-ui";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "gatsby";

import BuddyAvatar from "../components/BuddyAvatar";

const SearchResults = (props) => {
  // Similair to BuddyList but hoisted these out
  // to account for div animations
  const { loading, error, data } = useQuery(gql(props.query));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const scopedBuddyList = () => {
    let scopedBuddies = [];
    let trueLimit
    if(props.limit) {
      // If there's less than the props.limit
      if (props.limit > data.buddies) {
        trueLimit = data.buddies;
      } else {
        trueLimit = props.limit
      }
      for (let i = 0; i < trueLimit; i++) {
        if (data.buddies[i] !== undefined) {
          scopedBuddies.push(data.buddies[i]);
        }
      }
    }
    return scopedBuddies;
  };

  return (
    <div
      className="search-results"
      sx={{ display: "flex", position: "relative", top: "-80px" }}
    >
      <ul
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          listStyle: "none",
          margin: "0 0 350px 0",
          padding: "0px"
        }}
      >
        {scopedBuddyList().length > 0 &&
          scopedBuddyList().map((buddy, idx) => (
            <li
              sx={{
                listStyle: "none",
                textAlign: "center",
                cursor: "pointer",
                padding: "0 56px 32px 0",
                animation: "fadeInUp .5s ease",
                animationDelay: 0.05 * (idx + 1) + "s",
                animationFillMode: "both"
              }}
              key={buddy.id + "-search-result"}
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
                <BuddyAvatar
                  buddy={buddy}
                  nameLabel={true}
                />
              </Link>
            </li>
          ))}
      </ul>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
          }
          to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default SearchResults;




/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import FreshBuddyList from "../components/FreshBuddyList";

const FreshBuddiesArea = () => {
  return (
    <div className="FreshBuddiesArea">
      <Box sx={{ maxWidth: "1064px", margin: "auto" }}>
        <h1 sx={{ padding: "60px 0" }}>Fresh cryptobuddies</h1>
      </Box>
      <FreshBuddyList
        limit={10}
        query={`
          {
            buddies {
              id
              name
              image
            }
          }
        `}
      />
    </div>
  );
};

export default FreshBuddiesArea;

/** @jsx jsx */
import { jsx } from "theme-ui";

const AddBuddyBtn = () => {
  return (
    <button
      sx={{
        background: "#BC40C7",
        color: "white",
        border: "1px solid #BC40C7",
        width: "280px",
        height: "72px",
        fontWeight: "bold",
        fontSize: "20px",
        fontFamily: "heading",
        boxShadow: "0px 4px 64px 0px rgba(188, 164, 199, .32)"
      }}
      onClick={() => alert("ADD_BUDDY_ACTION")}
    >
      Add Buddy
      <style>{`
        button:active {
          color: #BC40C7;
          background: white;
        }
      `}</style>
    </button>
  );
};

export default AddBuddyBtn;

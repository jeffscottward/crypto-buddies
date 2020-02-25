/** @jsx jsx */
import { jsx } from "theme-ui";

const AddBuddyBtn = () => {
  return (
    <button
      className="add-buddy-btn"
      sx={{
        background: "#BC40C7",
        color: "white",
        border: "1px solid #BC40C7",
        width: "280px",
        height: "72px",
        fontWeight: "bold",
        fontSize: "20px",
        fontFamily: "heading",
        cursor: "pointer",
        boxShadow: "0px 4px 64px 0px rgba(188, 164, 199, .32)",
        outline: "none"
      }}
      onClick={() => alert("ADD_BUDDY_ACTION")}
    >
      Add Buddy
      <style>{`
        .add-buddy-btn:active {
          color: #BC40C7;
          background: white;
        }
      `}</style>
    </button>
  );
};

export default AddBuddyBtn;

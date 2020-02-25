/** @jsx jsx */
import { jsx } from "theme-ui";

const BuddyAvatar = ({buddy, nameLabel, startSmall }) => {
  return (
    <div>
      <img
        src={buddy.image}
        alt={buddy.name}
        data-id={buddy.id}
        sx={{
          display: "block",
          borderRadius: "50%",
          width: "168px",
          height: "168px",
          marginBottom: "10px",
          animation: startSmall ? "enlargeFadeIn 1s forwards ease" : "",
          transformOrigin: startSmall ? "0% 50%" : ""
        }}
      />
      {nameLabel && (
        <span sx={{ display: "block", color: "#0A0912" }}>{buddy.name}</span>
      )}
      <style>{`
        @keyframes enlargeFadeIn {
          from {
            transform: scaleX(.3333) scaleY(.3333);
            opacity: 0;
          }
          to {
            transform: scaleX(1) scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BuddyAvatar;

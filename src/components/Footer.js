/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const Footer = () => {
  return (
    <Box sx={{paddingBottom: "40px"}}>
      <p sx={{textAlign: "center",fontSize: "12px",color: "gray"}}>
        <span sx={{ fontStyle: "italic" }}>Made with</span>
        <span> &hearts;</span>
      </p>
    </Box>
  );
};

export default Footer;




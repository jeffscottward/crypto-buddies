/** @jsx jsx */
import { jsx, Box } from "theme-ui";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Details = ({children}) => {
  return (
    <Box sx={{ fontFamily: "heading", margin: "auto", padding: "40px" }}>
      <Navigation />
      {children}
      <Footer />
    </Box>
  );
};

export default Details;

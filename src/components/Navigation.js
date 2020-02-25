/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Link } from "gatsby";


const Navigation = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
    <Link to={`/`}>
      <img
        src="/logo.png"
        alt="Logo"
        sx={{
          height: "24px",
          width: "auto"
        }}
      />
    </Link>
    <img
      src="/user.svg"
      alt="User"
      sx={{
        height: "22px",
        width: "auto"
      }}
    />
  </Box>
);

export default Navigation

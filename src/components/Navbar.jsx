import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      {/* <Paper
      sx={{
        ml:"10px",
        boxShadow: 'none',
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"50%",
        borderBottomRightRadius:"50%",
        borderBottomLeftRadius:"10px",
        background:"red",
        color:"white",padding:"0 10px"
      
      }}
    >
  <h5>Rakesh</h5>
    </Paper> */}
   
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../logo.jpg";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#212121",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={Logo} alt="logo" height={48} style={{ borderRadius: 50 }} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

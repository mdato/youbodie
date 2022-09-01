import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <>
      <h1 className="titulo" style={{ color: "#27777d", fontSize: 50, marginTop:-10 }}>
      <LiveTvIcon sx={{ color: "#27777d", fontSize: 40 }} /> BodieTube
      </h1>
      <Paper
        component="form"
        onSubmit={onhandleSubmit}
        sx={{
          variant: "outlined",
          w: 50,
          borderRadius: 2,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <IconButton
          type="submit"
          sx={{ p: "5px", color: "#27777D" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;

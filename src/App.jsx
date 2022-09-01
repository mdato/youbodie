import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, Feeds, VideoInfo, Searching, ChannelInfo } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#212121" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feeds />} />
          <Route path="/video/:id" exact element={<VideoInfo />} />
          <Route path="/channel/:id" exact element={<ChannelInfo />} />
          <Route path="/search/:searchTerm" exact element={<Searching />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

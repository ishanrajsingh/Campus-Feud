import React from "react"; // ✅ ADD THIS

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./routes/Display";
import Judge from "./routes/Judge";
import LeaderboardDisplay from "./routes/LeaderboardDisplay";
import LeaderboardEdit from "./routes/LeaderboardEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/judge" element={<Judge />} />
        <Route path="/leaderboard" element={<LeaderboardDisplay />} />
        <Route path="/leaderboard/edit" element={<LeaderboardEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
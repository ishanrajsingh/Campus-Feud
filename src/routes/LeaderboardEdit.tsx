import React, { useState } from "react";
import { useGameStore } from "../store/useGameStore";

export default function LeaderboardEdit() {
  const teams = useGameStore((s) => s.teams);
  const addTeam = useGameStore((s) => s.addTeam);
  const updateScore = useGameStore((s) => s.updateScore);
  const removeTeam = useGameStore((s) => s.removeTeam);
  const editTeamName = useGameStore((s) => s.editTeamName);

  const [teamName, setTeamName] = useState("");
  const [points, setPoints] = useState<number>(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Leaderboard Control</h2>

      {/* ADD TEAM */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button
          onClick={() => {
            if (teamName.trim()) {
              addTeam(teamName);
              setTeamName("");
            }
          }}
        >
          Add Team
        </button>
      </div>

      {/* TEAM LIST */}
      {teams.map((team, i) => (
        <div
          key={i}
          style={{
            marginBottom: 15,
            border: "1px solid gray",
            padding: 12,
            borderRadius: 8,
          }}
        >
          {/* 🔥 EDIT NAME */}
          <input
            value={team.name}
            onChange={(e) => editTeamName(i, e.target.value)}
            style={{ fontWeight: "bold", marginBottom: 5 }}
          />

          <div>Score: {team.score}</div>

          {/* 🔥 POINT INPUT */}
          <div style={{ marginTop: 8 }}>
            <input
              type="number"
              placeholder="Points"
              onChange={(e) => setPoints(Number(e.target.value))}
            />

            <button onClick={() => updateScore(i, points)}>➕</button>
            <button onClick={() => updateScore(i, -points)}>➖</button>
          </div>

          {/* 🔥 REMOVE */}
          <button
            style={{ marginTop: 10, color: "red" }}
            onClick={() => removeTeam(i)}
          >
            ❌ Remove Team
          </button>
        </div>
      ))}
    </div>
  );
}
import React from "react";
import { useGameStore } from "../store/useGameStore";

export default function LeaderboardDisplay() {
  const teams = useGameStore((s) => s.teams);

  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const maxScore = Math.max(...sortedTeams.map((t) => t.score), 1);

  return (
    <div className="leaderboard">
      <h1>🏆 LEADERBOARD</h1>

      <div className="bars">
        {sortedTeams.map((team, i) => {
          const width = (team.score / maxScore) * 100;

          return (
            <div key={team.name} className="barRow">
              {/* 🏅 RANK */}
              <div className={`rank rank-${i}`}>
                {i === 0 && "🥇"}
                {i === 1 && "🥈"}
                {i === 2 && "🥉"}
                {i > 2 && `#${i + 1}`}
              </div>

              {/* TEAM NAME */}
              <div className="teamName">{team.name}</div>

              {/* BAR */}
              <div className="barContainer">
                <div
                  className="bar"
                  style={{
                    width: `${width}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  <span className="score">{team.score}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
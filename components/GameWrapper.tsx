"use client";

import dynamic from "next/dynamic";

const Game = dynamic(() => import("./Game"), {
  ssr: false,
  loading: () => (
    <div className="hover-card mt-4 h-100 animate-pulse rounded-xl p-8" />
  ),
});

export default function GameWrapper() {
  return <Game />;
}

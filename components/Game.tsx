"use client";

import { useRef, useEffect } from "react";
import { Sword, Heart, Coins, Skull } from "lucide-react";
import { motion } from "framer-motion";
import { useRPG } from "@/hooks/useRPG";
import type { StatusCardProps, ButtonVariant } from "@/types";

export default function Game() {
  // hook connection
  const {
    level,
    hp,
    gold,
    location,
    enemy,
    logs,
    heal,
    buyWeapon,
    startFight,
    attack,
    resetGame,
    setLocation,
    addLog,
  } = useRPG();

  // auto scroll
  const logContainerRef = useRef<HTMLDivElement>(null);

  // effect to scroll
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // conditional rendering
  const renderActions = () => {
    switch (location) {
      case "VILA":
        return (
          <>
            <GameButton onClick={() => setLocation("LOJA")}>
              Ir para a Loja
            </GameButton>
            <GameButton onClick={() => setLocation("FLORESTA")}>
              Explorar a Floresta
            </GameButton>
            <GameButton onClick={() => startFight(2)} variant="danger">
              Enfrentar o Dragão
            </GameButton>
          </>
        );
      case "LOJA":
        return (
          <>
            <GameButton onClick={heal}>Comprar Poção (10g)</GameButton>
            <GameButton onClick={buyWeapon}>Comprar Arma (30g)</GameButton>
            <GameButton onClick={() => setLocation("VILA")}>
              Voltar para a praça
            </GameButton>
          </>
        );
      case "FLORESTA":
        return (
          <>
            <GameButton onClick={() => startFight(0)}>
              Lutar contra Goblin
            </GameButton>
            <GameButton onClick={() => startFight(1)}>
              Lutar contra Minotauro
            </GameButton>
            <GameButton onClick={() => setLocation("VILA")}>Fugir</GameButton>
          </>
        );
      case "BATALHA":
        return (
          <>
            <GameButton onClick={attack} variant="danger">
              Atacar
            </GameButton>
            <GameButton onClick={() => addLog("Você esquivou!")}>
              Esquivar
            </GameButton>
            <GameButton onClick={() => setLocation("VILA")}>Fugir</GameButton>
          </>
        );
      case "VITORIA":
      case "DERROTA":
        return (
          <GameButton onClick={resetGame} variant="primary">
            Jogar Novamente
          </GameButton>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="hover-card relative mt-4 flex flex-col gap-5 overflow-hidden rounded-xl border-white/10 p-6 md:p-8"
    >
      {/* player status */}
      <div className="grid grid-cols-3 gap-3">
        <StatusCard
          icon={Sword}
          label="Level"
          value={level}
          color="text-blue-400"
          border="border-blue-500/50"
          bg="from-blue-500/5"
        />
        <StatusCard
          icon={Heart}
          label="HP"
          value={hp}
          color="text-emerald-400"
          border="border-emerald-500/50"
          bg="from-emerald-500/5"
        />
        <StatusCard
          icon={Coins}
          label="Gold"
          value={gold}
          color="text-yellow-400"
          border="border-yellow-500/50"
          bg="from-yellow-500/5"
        />
      </div>

      {/* enemy status */}
      <div
        className={`transition-all duration-500 ${location === "BATALHA" ? "h-20 opacity-100" : "h-0 overflow-hidden opacity-0"}`}
      >
        {enemy && (
          <div className="hover-card flex items-center justify-between rounded-xl border border-red-500/20 bg-red-900/10 p-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-red-500/20 bg-red-500/10 p-2 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <Skull className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-red-300 uppercase">
                  Inimigo
                </span>
                <strong className="block text-lg tracking-tight text-white">
                  {enemy.name}
                </strong>
              </div>
            </div>
            <div className="pr-2 text-right">
              <span className="mb-1 block text-[10px] font-bold text-red-300 uppercase">
                HP
              </span>
              <div className="text-2xl font-black text-red-500/90 tabular-nums drop-shadow-md">
                {enemy.currentHp}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* game log */}
      <div
        ref={logContainerRef}
        className="hover-card game-scroll flex h-[160px] flex-col gap-2 overflow-y-auto rounded-xl bg-black/20 p-4 shadow-inner"
      >
        {logs.map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-b border-white/5 pb-1 text-sm leading-relaxed font-light text-gray-300 last:border-0"
          >
            {log}
          </motion.p>
        ))}
      </div>

      {/* action buttons */}
      <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
        {renderActions()}
      </div>
    </motion.div>
  );
}

function StatusCard({
  icon: Icon,
  label,
  value,
  color,
  border,
  bg,
}: StatusCardProps) {
  return (
    <div
      className={`hover-card flex flex-col items-center justify-center rounded-xl border-t-2 p-3 ${border} bg-gradient-to-b ${bg} to-transparent`}
    >
      <div className="mb-1 flex items-center gap-1">
        <Icon className={`h-3 w-3 ${color}`} />
        <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
          {label}
        </span>
      </div>
      <strong className={`text-xl font-bold ${color}`}>{value}</strong>
    </div>
  );
}

interface GameButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: ButtonVariant;
}

function GameButton({
  children,
  onClick,
  variant = "default",
}: GameButtonProps) {
  const styles: Record<ButtonVariant, string> = {
    default:
      "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/50 cursor-pointer",
    danger:
      "bg-red-500/10 hover:bg-red-500/20 border-red-500/20 hover:border-red-500/50 text-red-200 cursor-pointer",
    primary:
      "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 hover:border-blue-500/50 text-blue-200 cursor-pointer",
  };

  return (
    <button
      onClick={onClick}
      className={`flex h-14 items-center justify-center rounded-xl border px-2 text-xs font-medium tracking-wide uppercase transition-all sm:text-sm ${styles[variant]} text-white`}
    >
      {children}
    </button>
  );
}

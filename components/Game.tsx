"use client";

import { useRef, useEffect } from "react";
import { Sword, Heart, Coins, Skull } from "lucide-react";
import { motion } from "framer-motion";
import { useRPG } from "../hooks/useRPG";

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
            <Button onClick={() => setLocation("LOJA")}>Ir para a Loja</Button>
            <Button onClick={() => setLocation("FLORESTA")}>
              Explorar a Floresta
            </Button>
            <Button onClick={() => startFight(2)} variant="danger">
              Enfrentar o Dragão
            </Button>
          </>
        );
      case "LOJA":
        return (
          <>
            <Button onClick={heal}>Comprar Poção (10g)</Button>
            <Button onClick={buyWeapon}>Comprar Arma (30g)</Button>
            <Button onClick={() => setLocation("VILA")}>Voltar para a praça</Button>
          </>
        );
      case "FLORESTA":
        return (
          <>
            <Button onClick={() => startFight(0)}>Lutar contra Goblin</Button>
            <Button onClick={() => startFight(1)}>Lutar contra Minotauro</Button>
            <Button onClick={() => setLocation("VILA")}>Fugir</Button>
          </>
        );
      case "BATALHA":
        return (
          <>
            <Button onClick={attack} variant="danger">
              Atacar
            </Button>
            <Button onClick={() => addLog("Você esquivou!")}>Esquivar</Button>
            <Button onClick={() => setLocation("VILA")}>Fugir</Button>
          </>
        );
      case "VITORIA":
      case "DERROTA":
        return (
          <Button onClick={resetGame} variant="primary">
            Jogar Novamente
          </Button>
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
      transition={{ duration: 0.5 }}
      className="hover-card rounded-xl p-6 md:p-8 flex flex-col gap-5 border-white/10 relative overflow-hidden mt-4"
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
        className={`transition-all duration-500 ${location === "BATALHA" ? "opacity-100 h-20" : "opacity-0 h-0 overflow-hidden"}`}
      >
        {enemy && (
          <div className="hover-card bg-red-900/10 border border-red-500/20 rounded-xl p-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-red-500/10 p-2 rounded-full border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <Skull className="text-red-400 w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-red-300 uppercase font-bold tracking-wider">
                  Inimigo
                </span>
                <strong className="block text-white text-lg tracking-tight">
                  {enemy.name}
                </strong>
              </div>
            </div>
            <div className="text-right pr-2">
              <span className="text-[10px] text-red-300 uppercase font-bold block mb-1">
                HP
              </span>
              <div className="text-2xl font-black text-red-500/90 drop-shadow-md tabular-nums">
                {enemy.currentHp}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* game log */}
      <div
        ref={logContainerRef}
        className="hover-card rounded-xl p-4 h-[160px] flex flex-col gap-2 overflow-y-auto game-scroll bg-black/20 shadow-inner"
      >
        {logs.map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-gray-300 font-light border-b border-white/5 pb-1 last:border-0 leading-relaxed"
          >
            {log}
          </motion.p>
        ))}
      </div>

      {/* action buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {renderActions()}
      </div>
    </motion.div>
  );
}

function StatusCard({ icon: Icon, label, value, color, border, bg }: any) {
  return (
    <div
      className={`hover-card rounded-xl p-3 flex flex-col items-center justify-center border-t-2 ${border} bg-gradient-to-b ${bg} to-transparent`}
    >
      <div className="flex items-center gap-1 mb-1">
        <Icon className={`w-3 h-3 ${color}`} />
        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
          {label}
        </span>
      </div>
      <strong className={`text-xl font-bold ${color}`}>{value}</strong>
    </div>
  );
}

function Button({ children, onClick, variant = "default" }: any) {
  const styles = {
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
      className={`h-14 font-medium rounded-xl px-2 text-xs sm:text-sm transition-all border uppercase tracking-wide flex items-center justify-center ${styles[variant as keyof typeof styles]} text-white`}
    >
      {children}
    </button>
  );
}

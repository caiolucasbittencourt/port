"use client";

import { useState } from "react";

// exported types
export type Location =
  | "VILA"
  | "LOJA"
  | "FLORESTA"
  | "BATALHA"
  | "VITORIA"
  | "DERROTA";

export interface Enemy {
  name: string;
  level: number;
  maxHp: number;
  currentHp: number;
}

// constants
const WEAPONS = [
  { name: "Mãos vazias", power: 1 },
  { name: "Espada Enferrujada", power: 5 },
  { name: "Lança de Guarda", power: 10 },
  { name: "Adaga Sombria", power: 50 },
  { name: "Besta Matadora", power: 100 },
];

const ENEMIES = [
  { name: "Goblin", level: 5, hp: 20 },
  { name: "Minotauro", level: 10, hp: 250 },
  { name: "Dragão Ancestral", level: 20, hp: 500 },
];

export const useRPG = () => {
  // player status
  const [level, setLevel] = useState(1);
  const [hp, setHp] = useState(100);
  const [gold, setGold] = useState(50);
  const [weaponIndex, setWeaponIndex] = useState(0);
  const [inventory, setInventory] = useState<string[]>(["Mãos vazias"]);

  // game state
  const [location, setLocation] = useState<Location>("VILA");
  const [enemy, setEnemy] = useState<Enemy | null>(null);
  const [enemyIndex, setEnemyIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    "Bem-vindo(a) ao Save the Village! Seu objetivo é derrotar o dragão que está ameaçando a vila. Você está na praça central. O vento sopra suavemente e os aldeões caminham com pressa.",
  ]);

  const addLog = (msg: string) => setLogs((prev) => [...prev, msg]);

  // actions
  const heal = () => {
    if (gold >= 10) {
      setGold((g) => g - 10);
      setHp((h) => h + 10);
      addLog("Você comprou uma poção. (+10 HP)");
    } else {
      addLog('O mercador balança a cabeça: "Moedas insuficientes, viajante."');
    }
  };

  const buyWeapon = () => {
    if (weaponIndex >= WEAPONS.length - 1) {
      addLog("Você já tem a melhor arma!");
      return;
    }
    if (gold >= 30) {
      setGold((g) => g - 30);
      setWeaponIndex((w) => w + 1);
      const newWeapon = WEAPONS[weaponIndex + 1];
      setInventory([...inventory, newWeapon.name]);
      addLog(`Você comprou: ${newWeapon.name}!`);
    } else {
      addLog("Você conta suas moedas... não é o suficiente para a arma.");
    }
  };

  const startFight = (index: number) => {
    setEnemyIndex(index);
    const mob = ENEMIES[index];
    setEnemy({
      name: mob.name,
      level: mob.level,
      maxHp: mob.hp,
      currentHp: mob.hp,
    });
    setLocation("BATALHA");
    addLog(`Um ${mob.name} furioso apareceu!`);
  };

  const attack = () => {
    if (!enemy) return;

    // player turn
    const playerDmg =
      WEAPONS[weaponIndex].power + Math.floor(Math.random() * level);
    const hit = Math.random() > 0.1; // 90%

    if (hit) {
      const newEnemyHp = enemy.currentHp - playerDmg;
      setEnemy({ ...enemy, currentHp: newEnemyHp });
      addLog(`Você causou ${playerDmg} de dano no ${enemy.name}.`);

      if (newEnemyHp <= 0) {
        const reward = enemy.level * 20;
        setGold((g) => g + reward);
        setLevel((l) => (l === 1 ? 5 : l + 5));
        setLocation(enemyIndex === 2 ? "VITORIA" : "VILA");
        addLog(`Você derrotou o ${enemy.name} e ganhou ${reward} gold!`);
        setEnemy(null);
        return;
      }
    } else {
      addLog("Você errou o ataque!");
    }

    // enemy turn
    const enemyDmg = Math.max(
      0,
      enemy.level * 2 - Math.floor(Math.random() * level),
    );
    setHp((h) => {
      const newHp = h - enemyDmg;
      if (newHp <= 0) {
        setLocation("DERROTA");
        addLog("Você caiu em batalha...");
        return 0;
      }
      return newHp;
    });
    addLog(`O ${enemy.name} te atacou: -${enemyDmg} HP.`);
  };

  const resetGame = () => {
    setLevel(1);
    setHp(100);
    setGold(50);
    setWeaponIndex(0);
    setInventory(["Mãos vazias"]);
    setLocation("VILA");
    setLogs([
      "Jogo reiniciado. Você está na praça central. O vento sopra suavemente e os aldeões caminham com pressa.",
    ]);
  };

  return {
    // state
    level,
    hp,
    gold,
    location,
    enemy,
    logs,
    inventory,
    // actions
    heal,
    buyWeapon,
    startFight,
    attack,
    resetGame,
    setLocation,
    addLog,
  };
};

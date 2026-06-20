import { useState } from "react";

const GOLD = "#c9a84c";
const GOLD2 = "#e8c96a";
const NAVY = "#0a1628";
const NAVY2 = "#0f2040";
const CARD = "#0d1e35";
const BORDER = "#1e3254";
const CREAM = "#f5f0e8";
const MUTED = "#8a9bb5";
const GREEN = "#52b788";
const RED = "#e07040";

const MATCHES = [
  {
    id: "m1", date: "10 May 2026", opponent: "Bells Yew Green CC U13 North", opponentShort: "BYG",
    venue: "Chalket Lane", toss: "BYG won toss, elected to bowl",
    pemburyScore: "132/5", pemburyOvers: 20, opponentScore: "127/6", opponentOvers: 20,
    result: "WIN", margin: "5 runs",
    batting: [
      { name: "Sam Brewis",        runs: 30, balls: 30, fours: 2, sixes: 0, out: "retired n.o.",          sr: 100.00 },
      { name: "Molly Cairns",      runs: 13, balls: 19, fours: 1, sixes: 0, out: "b B Sheriff",           sr:  68.42 },
      { name: "Jake Nicholson",    runs: 23, balls: 15, fours: 4, sixes: 0, out: "b I Seagren",           sr: 153.33 },
      { name: "Harry Brown",       runs:  1, balls:  2, fours: 0, sixes: 0, out: "c J Bowen b I Seagren", sr:  50.00 },
      { name: "Caleb Baker-Swain", runs: 24, balls: 29, fours: 3, sixes: 0, out: "run out",               sr:  82.76 },
      { name: "Petrus Leung",      runs:  7, balls: 24, fours: 1, sixes: 0, out: "not out",               sr:  29.17 },
      { name: "Dominic Meeks",     runs:  1, balls:  2, fours: 0, sixes: 0, out: "run out",               sr:  50.00 },
      { name: "Dexter Robles",     runs: null, balls: null, out: "dnb" },
      { name: "Eleanor Pateman",   runs: null, balls: null, out: "dnb" },
    ],
    bowling: [
      { name: "Harry Brown",       overs: 2, runs: 11, wkts: 0, econ: 5.50 },
      { name: "Molly Cairns",      overs: 4, runs: 27, wkts: 1, econ: 6.75 },
      { name: "Dominic Meeks",     overs: 2, runs:  9, wkts: 0, econ: 4.50 },
      { name: "Eleanor Pateman",   overs: 2, runs: 18, wkts: 0, econ: 9.00 },
      { name: "Jake Nicholson",    overs: 3, runs: 15, wkts: 1, econ: 5.00 },
      { name: "Petrus Leung",      overs: 2, runs: 16, wkts: 0, econ: 8.00 },
      { name: "Caleb Baker-Swain", overs: 2, runs:  7, wkts: 0, econ: 3.50 },
      { name: "Dexter Robles",     overs: 3, runs: 18, wkts: 2, econ: 6.00 },
    ],
    extras: { nb: 4, wd: 12, b: 15, lb: 2, total: 33 },
    fow: "34/1 M Cairns · 85/2 J Nicholson · 86/3 H Brown · 129/4 C Baker-Swain · 132/5 D Meeks",
  },
  {
    id: "m2", date: "19 May 2026", opponent: "Leigh CC Kent U13", opponentShort: "Leigh",
    venue: "Chalket Lane", toss: "Pembury won toss, elected to bat",
    pemburyScore: "104/4", pemburyOvers: 16, opponentScore: "93/4", opponentOvers: 16,
    result: "WIN", margin: "11 runs",
    batting: [
      { name: "Sam Brewis",        runs: 31, balls: 38, fours: 3, sixes: 0, out: "retired n.o.",      sr:  81.58 },
      { name: "Caleb Baker-Swain", runs: 18, balls: 22, fours: 1, sixes: 0, out: "b C Portwood",      sr:  81.82 },
      { name: "Freddie Hall",      runs: 10, balls: 13, fours: 0, sixes: 0, out: "run out (O Ward)",   sr:  76.92 },
      { name: "Bailey Osman",      runs:  5, balls:  6, fours: 0, sixes: 0, out: "run out (T Lever)",  sr:  83.33 },
      { name: "Jake Nicholson",    runs: 11, balls: 10, fours: 1, sixes: 0, out: "not out",            sr: 110.00 },
      { name: "Dominic Meeks",     runs:  0, balls:  2, fours: 0, sixes: 0, out: "b F Drew",           sr:   0.00 },
      { name: "Harry Brown",       runs:  1, balls:  4, fours: 0, sixes: 0, out: "not out",            sr:  25.00 },
      { name: "Molly Cairns",      runs: null, balls: null, out: "dnb" },
      { name: "Dexter Robles",     runs: null, balls: null, out: "dnb" },
    ],
    bowling: [
      { name: "Harry Brown",       overs: 3, runs: 18, wkts: 2, econ:  6.00 },
      { name: "Jake Nicholson",    overs: 2, runs:  7, wkts: 0, econ:  3.50 },
      { name: "Dexter Robles",     overs: 3, runs: 11, wkts: 1, econ:  3.67 },
      { name: "Freddie Hall",      overs: 2, runs: 14, wkts: 1, econ:  7.00 },
      { name: "Dominic Meeks",     overs: 2, runs: 23, wkts: 0, econ: 11.50 },
      { name: "Bailey Osman",      overs: 2, runs: 15, wkts: 0, econ:  7.50 },
      { name: "Caleb Baker-Swain", overs: 2, runs:  2, wkts: 0, econ:  1.00 },
    ],
    extras: { nb: 2, wd: 21, b: 5, lb: 0, total: 28 },
    fow: "63/1 C Baker-Swain · 86/2 B Osman · 89/3 F Hall · 89/4 D Meeks",
  },
  {
    id: "m3", date: "24 May 2026", opponent: "Tunbridge Wells Borderers U13", opponentShort: "Borderers",
    venue: "Chalket Lane", toss: "Borderers won toss, elected to bowl",
    pemburyScore: "151/3", pemburyOvers: 20, opponentScore: "132/6", opponentOvers: 20,
    result: "WIN", margin: "19 runs",
    batting: [
      { name: "Sam Brewis",        runs: 27, balls: 25, fours: 3, sixes: 0, out: "c T Bell b B Daplyn", sr: 108.00 },
      { name: "Caleb Baker-Swain", runs:  1, balls:  2, fours: 0, sixes: 0, out: "b N Bellala",         sr:  50.00 },
      { name: "Dexter Robles",     runs: 18, balls: 35, fours: 1, sixes: 0, out: "run out (S Murphy)",  sr:  51.43 },
      { name: "Freddie Hall",      runs: 33, balls: 31, fours: 4, sixes: 0, out: "retired n.o.",        sr: 106.45 },
      { name: "Jake Nicholson",    runs: 18, balls: 22, fours: 1, sixes: 0, out: "not out",             sr:  81.82 },
      { name: "Molly Cairns",      runs:  5, balls:  5, fours: 1, sixes: 0, out: "not out",             sr: 100.00 },
      { name: "Avery Fell",        runs: null, balls: null, out: "dnb" },
      { name: "Tristan Durrant",   runs: null, balls: null, out: "dnb" },
      { name: "Eleanor Pateman",   runs: null, balls: null, out: "dnb" },
      { name: "Dominic Meeks",     runs: null, balls: null, out: "dnb" },
    ],
    bowling: [
      { name: "Jake Nicholson",    overs: 2, runs:  5, wkts: 0, econ:  2.50 },
      { name: "Tristan Durrant",   overs: 2, runs: 14, wkts: 0, econ:  7.00 },
      { name: "Dominic Meeks",     overs: 2, runs: 12, wkts: 0, econ:  6.00 },
      { name: "Eleanor Pateman",   overs: 2, runs:  8, wkts: 0, econ:  4.00 },
      { name: "Avery Fell",        overs: 2, runs: 19, wkts: 0, econ:  9.50 },
      { name: "Dexter Robles",     overs: 2, runs: 13, wkts: 1, econ:  6.50 },
      { name: "Bailey Osman",      overs: 2, runs: 20, wkts: 0, econ: 10.00 },
      { name: "Freddie Hall",      overs: 2, runs: 14, wkts: 1, econ:  7.00 },
      { name: "Caleb Baker-Swain", overs: 2, runs:  5, wkts: 3, econ:  2.50 },
      { name: "Molly Cairns",      overs: 2, runs: 18, wkts: 1, econ:  9.00 },
    ],
    extras: { nb: 8, wd: 30, b: 8, lb: 3, total: 49 },
    fow: "6/1 C Baker-Swain · 63/2 S Brewis · 78/3 D Rubles",
  },
  {
    id: "m4", date: "31 May 2026", opponent: "Speldhurst CC U13 B", opponentShort: "Speldhurst",
    venue: "Away", toss: "Speldhurst won toss, elected to bowl",
    pemburyScore: "142/9", pemburyOvers: 20, opponentScore: "86/10", opponentOvers: 19.4,
    result: "WIN", margin: "56 runs",
    batting: [
      { name: "Sam Brewis",        runs:  3, balls:  3, fours: 0, sixes: 0, out: "b B Connolly",               sr: 100.00 },
      { name: "Molly Cairns",      runs: 35, balls: 38, fours: 4, sixes: 0, out: "not out",                    sr:  92.11 },
      { name: "Caleb Baker-Swain", runs:  2, balls:  4, fours: 0, sixes: 0, out: "run out (J Meyers-Lamptey)", sr:  50.00 },
      { name: "Eleanor Pateman",   runs:  1, balls: 11, fours: 0, sixes: 0, out: "b M Lloyd",                  sr:   9.09 },
      { name: "Avery Fell",        runs:  1, balls:  8, fours: 0, sixes: 0, out: "c ? b J Meyers-Lamptey",     sr:  12.50 },
      { name: "Dominic Meeks",     runs:  3, balls:  6, fours: 0, sixes: 0, out: "b J Meyers-Lamptey",         sr:  50.00 },
      { name: "Jake Nicholson",    runs: 30, balls: 14, fours: 6, sixes: 0, out: "retired n.o.",               sr: 214.29 },
      { name: "Dexter Robles",     runs:  6, balls: 12, fours: 0, sixes: 0, out: "b A Hussein",                sr:  50.00 },
      { name: "Tristan Durrant",   runs:  4, balls:  2, fours: 1, sixes: 0, out: "b J Foster",                 sr: 200.00 },
      { name: "Freddie Hall",      runs:  9, balls: 11, fours: 1, sixes: 0, out: "run out (A Other, M Lloyd)", sr:  81.82 },
      { name: "Harry Brown",       runs:  8, balls: 10, fours: 1, sixes: 0, out: "b A Hussein",                sr:  80.00 },
    ],
    bowling: [
      { name: "Harry Brown",       overs: 2,   runs: 11, wkts: 0, econ: 5.50 },
      { name: "Jake Nicholson",    overs: 2,   runs:  4, wkts: 0, econ: 2.00 },
      { name: "Tristan Durrant",   overs: 2,   runs: 13, wkts: 0, econ: 6.50 },
      { name: "Dominic Meeks",     overs: 2,   runs:  8, wkts: 2, econ: 4.00 },
      { name: "Avery Fell",        overs: 2,   runs:  5, wkts: 0, econ: 2.50 },
      { name: "Eleanor Pateman",   overs: 2,   runs: 13, wkts: 1, econ: 6.50 },
      { name: "Freddie Hall",      overs: 2,   runs:  6, wkts: 0, econ: 3.00 },
      { name: "Dexter Robles",     overs: 2,   runs:  6, wkts: 1, econ: 3.00 },
      { name: "Caleb Baker-Swain", overs: 2,   runs:  8, wkts: 2, econ: 4.00 },
      { name: "Molly Cairns",      overs: 1.4, runs:  6, wkts: 3, econ: 3.60 },
    ],
    extras: { nb: 14, wd: 14, b: 10, lb: 2, total: 40 },
    fow: "4/1 S Brewis · 10/2 C Baker-Swain · 26/3 E Pateman · 34/4 A Fell · 52/5 D Meeks · 107/6 T Durrant · 124/7 D Rubles · 132/8 H Brown · 142/9 F Hall",
  },
  {
    id: "m5", date: "07 Jun 2026", opponent: "Cowdrey CC U13 C", opponentShort: "Cowdrey",
    venue: "Chalket Lane", toss: "Cowdrey won toss, elected to bowl",
    pemburyScore: "144/1", pemburyOvers: 20, opponentScore: "113/7", opponentOvers: 19.4,
    result: "WIN", margin: "31 runs",
    batting: [
      { name: "Sam Brewis",        runs: 30, balls: 58, fours: 3, sixes: 0, out: "retired n.o.",        sr:  51.72 },
      { name: "Caleb Baker-Swain", runs: 26, balls: 39, fours: 1, sixes: 0, out: "run out (S Coleman)", sr:  66.67 },
      { name: "Jake Nicholson",    runs:  9, balls: 18, fours: 0, sixes: 0, out: "not out",             sr:  50.00 },
      { name: "Freddie Hall",      runs: 11, balls:  5, fours: 2, sixes: 0, out: "not out",             sr: 220.00 },
      { name: "Dominic Meeks",     runs: null, balls: null, out: "dnb" },
      { name: "Toby Waterman",     runs: null, balls: null, out: "dnb" },
      { name: "Eleanor Pateman",   runs: null, balls: null, out: "dnb" },
      { name: "Dexter Robles",     runs: null, balls: null, out: "dnb" },
      { name: "Avery Fell",        runs: null, balls: null, out: "dnb" },
    ],
    bowling: [
      { name: "Jake Nicholson",    overs: 3,   runs: 19, wkts: 0, econ: 6.33 },
      { name: "Caleb Baker-Swain", overs: 2.4, runs: 13, wkts: 2, econ: 4.88 },
      { name: "Dominic Meeks",     overs: 3,   runs: 12, wkts: 1, econ: 4.00 },
      { name: "Avery Fell",        overs: 2,   runs: 11, wkts: 0, econ: 5.50 },
      { name: "Dexter Robles",     overs: 3,   runs: 15, wkts: 2, econ: 5.00 },
      { name: "Toby Waterman",     overs: 2,   runs: 15, wkts: 0, econ: 7.50 },
      { name: "Eleanor Pateman",   overs: 2,   runs: 13, wkts: 0, econ: 6.50 },
      { name: "Freddie Hall",      overs: 2,   runs: 15, wkts: 1, econ: 7.50 },
    ],
    extras: { nb: 10, wd: 40, b: 17, lb: 1, total: 68 },
    fow: "116/1 C Baker-Swain",
  },
  {
    id: "m6", date: "14 Jun 2026", opponent: "Linden Park CC U13 Giants", opponentShort: "Linden Park",
    venue: "Chalket Lane", toss: "Linden Park won toss, elected to field",
    pemburyScore: "147/5", pemburyOvers: 20, opponentScore: "97/9", opponentOvers: 20,
    result: "WIN", margin: "50 runs",
    batting: [
      { name: "Sam Brewis",        runs:  3, balls:  2, fours: 0, sixes: 0, out: "run out",               sr: 150.00 },
      { name: "Molly Cairns",      runs: 30, balls: 32, fours: 3, sixes: 0, out: "retired n.o.",           sr:  93.75 },
      { name: "Caleb Baker-Swain", runs: 30, balls: 33, fours: 3, sixes: 0, out: "retired n.o.",           sr:  90.91 },
      { name: "Dominic Meeks",     runs:  1, balls:  4, fours: 0, sixes: 0, out: "c T King b S Westwell",  sr:  25.00 },
      { name: "Jake Nicholson",    runs: 32, balls: 27, fours: 4, sixes: 0, out: "retired n.o.",           sr: 118.52 },
      { name: "Bailey Osman",      runs:  3, balls:  5, fours: 0, sixes: 0, out: "c Unsure b S Clark",     sr:  60.00 },
      { name: "Freddie Hall",      runs:  6, balls:  8, fours: 0, sixes: 0, out: "run out",               sr:  75.00 },
      { name: "Eleanor Pateman",   runs:  6, balls:  6, fours: 0, sixes: 0, out: "not out",               sr: 100.00 },
      { name: "Avery Fell",        runs:  0, balls:  0, fours: 0, sixes: 0, out: "run out",               sr:   0.00 },
      { name: "Austin Slonecki",   runs:  1, balls:  1, fours: 0, sixes: 0, out: "not out",               sr: 100.00 },
    ],
    bowling: [
      { name: "Jake Nicholson",    overs: 2, runs:  3, wkts: 0, econ:  1.50 },
      { name: "Caleb Baker-Swain", overs: 2, runs: 14, wkts: 1, econ:  7.00 },
      { name: "Avery Fell",        overs: 2, runs: 10, wkts: 0, econ:  5.00 },
      { name: "Freddie Hall",      overs: 2, runs:  5, wkts: 3, econ:  2.50 },
      { name: "Eleanor Pateman",   overs: 2, runs: 11, wkts: 0, econ:  5.50 },
      { name: "Bailey Osman",      overs: 2, runs: 10, wkts: 1, econ:  5.00 },
      { name: "Dominic Meeks",     overs: 2, runs:  9, wkts: 0, econ:  4.50 },
      { name: "Austin Slonecki",   overs: 2, runs: 12, wkts: 0, econ:  6.00 },
      { name: "Molly Cairns",      overs: 2, runs:  7, wkts: 1, econ:  3.50 },
    ],
    extras: { nb: 10, wd: 13, b: 12, lb: 0, total: 35 },
    fow: "3/1 S Brewis · 83/2 D Meeks · 99/3 A Slonecki · 113/4 C Baker-Swain · 146/5 A Fell",
  },
  {
    id: "m7", date: "19 Jun 2026", opponent: "Leigh CC Kent U13", opponentShort: "Leigh (A)",
    venue: "Leigh CC", toss: "Leigh won toss, elected to field",
    pemburyScore: "151/6", pemburyOvers: 20, opponentScore: "110/6", opponentOvers: 20,
    result: "WIN", margin: "41 runs",
    batting: [
      { name: "Sam Brewis",        runs:  8, balls: 17, fours: 1, sixes: 0, out: "b F Drew",             sr:  47.06 },
      { name: "Molly Cairns",      runs: 38, balls: 40, fours: 5, sixes: 0, out: "not out",               sr:  95.00 },
      { name: "Freddie Hall",      runs:  0, balls:  2, fours: 0, sixes: 0, out: "b F Drew",              sr:   0.00 },
      { name: "Caleb Baker-Swain", runs: 12, balls: 15, fours: 1, sixes: 0, out: "run out (H Mattheus)", sr:  80.00 },
      { name: "Jake Nicholson",    runs: 30, balls: 14, fours: 4, sixes: 1, out: "retired n.o.",          sr: 214.29 },
      { name: "Bailey Osman",      runs: 13, balls: 10, fours: 3, sixes: 0, out: "b O Rich",              sr: 130.00 },
      { name: "Dexter Robles",     runs:  1, balls:  4, fours: 0, sixes: 0, out: "b H Mattheus",          sr:  25.00 },
      { name: "Harry Brown",       runs:  7, balls:  8, fours: 1, sixes: 0, out: "not out",               sr:  87.50 },
      { name: "Avery Fell",        runs:  1, balls:  7, fours: 0, sixes: 0, out: "b C Portwood",          sr:  14.29 },
    ],
    bowling: [
      { name: "Harry Brown",       overs: 3, runs: 14, wkts: 2, econ:  4.67 },
      { name: "Jake Nicholson",    overs: 3, runs: 15, wkts: 0, econ:  5.00 },
      { name: "Avery Fell",        overs: 3, runs: 28, wkts: 0, econ:  9.33 },
      { name: "Bailey Osman",      overs: 2, runs: 10, wkts: 0, econ:  5.00 },
      { name: "Freddie Hall",      overs: 2, runs:  9, wkts: 1, econ:  4.50 },
      { name: "Dexter Robles",     overs: 3, runs: 17, wkts: 0, econ:  5.67 },
      { name: "Molly Cairns",      overs: 2, runs:  8, wkts: 1, econ:  4.00 },
      { name: "Caleb Baker-Swain", overs: 2, runs:  3, wkts: 2, econ:  1.50 },
    ],
    extras: { nb: 10, wd: 12, b: 17, lb: 2, total: 41 },
    fow: "39/1 S Brewis · 39/2 F Hall · 107/3 C Baker-Swain · 124/4 D Robles · 128/5 B Osman · 136/6 A Fell",
  },
];

function seasonStats() {
  const p = {};
  MATCHES.forEach(m => {
    m.batting.forEach(b => {
      if (!p[b.name]) p[b.name] = { bat: [], bowl: [] };
      if (b.runs !== null) p[b.name].bat.push(b);
    });
    m.bowling.forEach(b => {
      if (!p[b.name]) p[b.name] = { bat: [], bowl: [] };
      p[b.name].bowl.push(b);
    });
  });
  return Object.entries(p).map(([name, d]) => {
    const runs  = d.bat.reduce((s,b) => s + b.runs, 0);
    const balls = d.bat.reduce((s,b) => s + (b.balls||0), 0);
    const dis   = d.bat.filter(b => !b.out.includes("not out") && !b.out.includes("retired")).length;
    const hs    = d.bat.length ? Math.max(...d.bat.map(b=>b.runs)) : 0;
    const avg   = dis > 0 ? (runs/dis).toFixed(1) : runs > 0 ? "∞" : "—";
    const sr    = balls > 0 ? ((runs/balls)*100).toFixed(1) : "—";
    const ov    = d.bowl.reduce((s,b)=>s+b.overs,0);
    const br    = d.bowl.reduce((s,b)=>s+b.runs,0);
    const wk    = d.bowl.reduce((s,b)=>s+b.wkts,0);
    const ec    = ov > 0 ? (br/ov).toFixed(2) : "—";
    const best  = d.bowl.length ? d.bowl.reduce((bst,b)=>(b.wkts>bst.wkts||(b.wkts===bst.wkts&&b.runs<bst.runs))?b:bst) : null;
    return { name, runs, inn: d.bat.length, dis, avg, hs, sr, ov, br, wk, ec, best };
  }).sort((a,b)=>b.runs-a.runs);
}

const SEASON = seasonStats();
const WINS = MATCHES.filter(m => m.result === "WIN").length;

// ── style helpers ──────────────────────────────────────────────────────────────
const th = (left) => ({
  fontFamily:"monospace", fontSize:10, letterSpacing:1.5, textTransform:"uppercase",
  color:GOLD, padding:"10px 13px", textAlign:left?"left":"right",
  whiteSpace:"nowrap", background:NAVY2, borderBottom:`2px solid ${GOLD}`,
});
const tdBase = (left) => ({
  padding:"9px 13px", textAlign:left?"left":"right", whiteSpace:"nowrap",
  borderBottom:`1px solid ${BORDER}`, fontSize: left ? 13 : 12,
  fontFamily: left ? "sans-serif" : "monospace",
  fontWeight: left ? 500 : 400,
});

function colourFor(val, type) {
  if (type === "runs")  return val >= 30 ? GOLD2 : CREAM;
  if (type === "sr")    return parseFloat(val) >= 150 ? GOLD2 : parseFloat(val) >= 100 ? GREEN : CREAM;
  if (type === "wkts")  return val >= 3 ? GOLD2 : val >= 1 ? GREEN : CREAM;
  if (type === "econ")  return parseFloat(val) < 5 ? GREEN : parseFloat(val) > 9 ? MUTED : CREAM;
  if (type === "truns") return val >= 100 ? GOLD2 : val >= 50 ? GREEN : CREAM;
  if (type === "hs")    return val >= 30 ? GOLD2 : CREAM;
  if (type === "tsr")   return parseFloat(val) >= 120 ? GOLD2 : parseFloat(val) >= 90 ? GREEN : CREAM;
  if (type === "twkts") return val >= 5 ? GOLD2 : val >= 2 ? GREEN : CREAM;
  if (type === "tec")   return parseFloat(val) < 5 ? GREEN : parseFloat(val) > 8 ? MUTED : CREAM;
  if (type === "best")  return val && val[0] >= "3" ? GOLD2 : val && val[0] >= "1" ? GREEN : CREAM;
  return CREAM;
}

export default function App() {
  const [view, setView]     = useState("overview");
  const [matchId, setMId]   = useState(null);
  const [mTab, setMTab]     = useState("batting");
  const [sTab, setSTab]     = useState("batting");

  const goMatch = (id) => { setMId(id); setMTab("batting"); setView("match"); };
  const m = MATCHES.find(x => x.id === matchId);

  const NavBtn = ({ label, active, onClick }) => (
    <button onClick={onClick} style={{
      background: active ? GOLD : "transparent", color: active ? NAVY : MUTED,
      border: `1px solid ${active ? GOLD : BORDER}`,
      fontFamily:"monospace", fontSize:11, letterSpacing:1, textTransform:"uppercase",
      padding:"7px 14px", borderRadius:3, cursor:"pointer",
    }}>{label}</button>
  );

  const TabBtn = ({ label, active, onClick }) => (
    <button onClick={onClick} style={{
      background:"transparent", color: active ? GOLD : MUTED,
      border:"none", borderBottom:`2px solid ${active ? GOLD : "transparent"}`,
      fontFamily:"monospace", fontSize:11, letterSpacing:1, textTransform:"uppercase",
      padding:"8px 14px", cursor:"pointer",
    }}>{label}</button>
  );

  const SH = ({ icon, title }) => (
    <div style={{ display:"flex", alignItems:"center", gap:12, margin:"26px 0 14px" }}>
      <div style={{ width:26, height:26, background:GOLD, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12 }}>{icon}</div>
      <h2 style={{ fontFamily:"Georgia,serif", fontSize:18, fontWeight:700, color:CREAM }}>{title}</h2>
      <div style={{ flex:1, height:1, background:BORDER }} />
    </div>
  );

  return (
    <div style={{ background:NAVY, minHeight:"100vh", padding:"28px 16px 60px", fontFamily:"sans-serif", color:CREAM }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>

        {/* HEADER */}
        <header style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ display:"inline-block", background:GOLD, color:NAVY, fontFamily:"monospace", fontSize:10, letterSpacing:2, textTransform:"uppercase", padding:"4px 12px", borderRadius:2, marginBottom:10 }}>
            U13 Tunbridge Wells Division 2 · 2026
          </div>
          <h1 style={{ fontFamily:"Georgia,serif", fontSize:"clamp(22px,5vw,42px)", fontWeight:900, color:CREAM, lineHeight:1.1, marginBottom:6 }}>
            Pembury CC <span style={{ color:GOLD }}>Blue Caps</span>
          </h1>
          <div style={{ fontFamily:"monospace", fontSize:11, color:MUTED, letterSpacing:1.5, textTransform:"uppercase" }}>
            {WINS}/{MATCHES.length} · Unbeaten
          </div>
        </header>

        {/* NAV */}
        <nav style={{ display:"flex", gap:8, marginBottom:26, flexWrap:"wrap" }}>
          <NavBtn label="Overview"     active={view==="overview"} onClick={()=>setView("overview")} />
          <NavBtn label="Season Stats" active={view==="season"}   onClick={()=>setView("season")} />
          {MATCHES.map(x => (
            <NavBtn key={x.id} label={`vs ${x.opponentShort}`}
              active={view==="match" && matchId===x.id}
              onClick={()=>goMatch(x.id)} />
          ))}
        </nav>

        {/* ══ OVERVIEW ══ */}
        {view === "overview" && (
          <div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))", gap:12, marginBottom:32 }}>
              {[
                { label:"Played",   value:MATCHES.length, color:GOLD2 },
                { label:"Won",      value:WINS,           color:GREEN },
                { label:"Lost",     value:MATCHES.length-WINS, color:MATCHES.length-WINS>0?RED:CREAM },
                { label:"Unbeaten", value:"✓",            color:GREEN },
              ].map(s => (
                <div key={s.label} style={{ background:CARD, border:`1px solid ${BORDER}`, borderRadius:4, padding:"14px 16px", textAlign:"center" }}>
                  <div style={{ fontFamily:"Georgia,serif", fontSize:32, fontWeight:900, color:s.color, lineHeight:1 }}>{s.value}</div>
                  <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, letterSpacing:1, textTransform:"uppercase", marginTop:5 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <SH icon="🏏" title="Matches" />
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:14 }}>
              {MATCHES.map(x => (
                <div key={x.id} onClick={()=>goMatch(x.id)}
                  style={{ background:CARD, border:`1px solid ${BORDER}`, borderTop:`3px solid ${x.result==="WIN"?GREEN:RED}`, borderRadius:4, padding:"14px 16px", cursor:"pointer" }}
                  onMouseEnter={e=>e.currentTarget.style.background="#122840"}
                  onMouseLeave={e=>e.currentTarget.style.background=CARD}
                >
                  <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, letterSpacing:1, textTransform:"uppercase", marginBottom:5 }}>{x.date}</div>
                  <div style={{ fontSize:13, fontWeight:500, marginBottom:8, lineHeight:1.4 }}>vs {x.opponent}</div>
                  <div style={{ fontFamily:"monospace", fontSize:12, color:GOLD2, marginBottom:8 }}>
                    {x.pemburyScore} <span style={{color:MUTED}}>({x.pemburyOvers}ov)</span>
                    <span style={{color:MUTED,margin:"0 5px"}}>vs</span>
                    {x.opponentScore} <span style={{color:MUTED}}>({x.opponentOvers}ov)</span>
                  </div>
                  <span style={{
                    display:"inline-block", borderRadius:2, padding:"2px 7px",
                    fontFamily:"monospace", fontSize:9, letterSpacing:1, textTransform:"uppercase",
                    background: x.result==="WIN"?"rgba(82,183,136,0.15)":"rgba(193,68,14,0.15)",
                    color: x.result==="WIN"?GREEN:RED,
                    border:`1px solid ${x.result==="WIN"?"rgba(82,183,136,0.3)":"rgba(193,68,14,0.3)"}`,
                    marginRight:8,
                  }}>{x.result}</span>
                  <span style={{ fontFamily:"monospace", fontSize:10, color:MUTED }}>{x.margin}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ MATCH DETAIL ══ */}
        {view === "match" && m && (
          <div>
            <button onClick={()=>setView("overview")} style={{ background:"none", border:`1px solid ${BORDER}`, color:MUTED, fontFamily:"monospace", fontSize:10, letterSpacing:1, textTransform:"uppercase", padding:"5px 11px", borderRadius:3, cursor:"pointer", marginBottom:18 }}>← Back</button>

            <div style={{ background:CARD, border:`1px solid ${BORDER}`, borderRadius:6, padding:"18px 20px", marginBottom:22 }}>
              <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, letterSpacing:1, textTransform:"uppercase", marginBottom:6 }}>{m.date} · {m.venue}</div>
              <h2 style={{ fontFamily:"Georgia,serif", fontSize:20, color:CREAM, marginBottom:14 }}>vs {m.opponent}</h2>
              <div style={{ display:"flex", gap:20, flexWrap:"wrap", alignItems:"flex-end" }}>
                <div>
                  <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, letterSpacing:1, marginBottom:2 }}>PEMBURY</div>
                  <div style={{ fontFamily:"Georgia,serif", fontSize:26, color:GOLD2 }}>
                    {m.pemburyScore} <span style={{ fontSize:12, color:MUTED, fontFamily:"monospace" }}>({m.pemburyOvers} ov)</span>
                  </div>
                </div>
                <div style={{ fontFamily:"monospace", fontSize:14, color:BORDER, paddingBottom:3 }}>vs</div>
                <div>
                  <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, letterSpacing:1, marginBottom:2 }}>{m.opponentShort.toUpperCase()}</div>
                  <div style={{ fontFamily:"Georgia,serif", fontSize:26, color:CREAM }}>
                    {m.opponentScore} <span style={{ fontSize:12, color:MUTED, fontFamily:"monospace" }}>({m.opponentOvers} ov)</span>
                  </div>
                </div>
                <div style={{ marginLeft:"auto", textAlign:"right" }}>
                  <span style={{
                    display:"inline-block", borderRadius:2, padding:"2px 7px",
                    fontFamily:"monospace", fontSize:9, letterSpacing:1, textTransform:"uppercase",
                    background: m.result==="WIN"?"rgba(82,183,136,0.15)":"rgba(193,68,14,0.15)",
                    color: m.result==="WIN"?GREEN:RED,
                    border:`1px solid ${m.result==="WIN"?"rgba(82,183,136,0.3)":"rgba(193,68,14,0.3)"}`,
                  }}>{m.result}</span>
                  <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, marginTop:4 }}>{m.margin}</div>
                </div>
              </div>
              {m.toss && <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, marginTop:10, paddingTop:10, borderTop:`1px solid ${BORDER}` }}>Toss: {m.toss}</div>}
            </div>

            <div style={{ display:"flex", borderBottom:`1px solid ${BORDER}`, marginBottom:16 }}>
              {["batting","bowling","extras"].map(t => <TabBtn key={t} label={t} active={mTab===t} onClick={()=>setMTab(t)} />)}
            </div>

            {mTab === "batting" && (
              <div>
                <div style={{ overflowX:"auto", borderRadius:6, border:`1px solid ${BORDER}`, background:CARD }}>
                  <table style={{ width:"100%", borderCollapse:"collapse" }}>
                    <thead>
                      <tr>
                        {["Player","R","B","4s","6s","SR","Dismissal"].map((h,i) => (
                          <th key={h} style={th(i===0||i===6)}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {m.batting.filter(b=>b.out!=="dnb").map((b,i) => (
                        <tr key={i}>
                          <td style={{...tdBase(true),  color:CREAM}}>{b.name}</td>
                          <td style={{...tdBase(false), color:colourFor(b.runs,"runs")}}>{b.runs}</td>
                          <td style={{...tdBase(false), color:CREAM}}>{b.balls}</td>
                          <td style={{...tdBase(false), color:CREAM}}>{b.fours}</td>
                          <td style={{...tdBase(false), color:CREAM}}>{b.sixes}</td>
                          <td style={{...tdBase(false), color:colourFor(b.sr,"sr")}}>{b.sr != null ? b.sr.toFixed(1) : "—"}</td>
                          <td style={{...tdBase(true),  color:MUTED, fontSize:11}}>{b.out}</td>
                        </tr>
                      ))}
                      {m.batting.filter(b=>b.out==="dnb").length > 0 && (
                        <tr>
                          <td colSpan={7} style={{ padding:"7px 13px", fontFamily:"monospace", fontSize:10, color:MUTED, borderBottom:`1px solid ${BORDER}` }}>
                            DNB: {m.batting.filter(b=>b.out==="dnb").map(b=>b.name).join(", ")}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                {m.fow && <p style={{ fontFamily:"monospace", fontSize:10, color:MUTED, marginTop:8, lineHeight:1.7 }}>FoW: {m.fow}</p>}
              </div>
            )}

            {mTab === "bowling" && (
              <div style={{ overflowX:"auto", borderRadius:6, border:`1px solid ${BORDER}`, background:CARD }}>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <thead>
                    <tr>
                      {["Bowler","O","R","W","Econ"].map((h,i) => <th key={h} style={th(i===0)}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {m.bowling.map((b,i) => (
                      <tr key={i}>
                        <td style={{...tdBase(true),  color:CREAM}}>{b.name}</td>
                        <td style={{...tdBase(false), color:CREAM}}>{b.overs}</td>
                        <td style={{...tdBase(false), color:CREAM}}>{b.runs}</td>
                        <td style={{...tdBase(false), color:colourFor(b.wkts,"wkts")}}>{b.wkts}</td>
                        <td style={{...tdBase(false), color:colourFor(b.econ,"econ")}}>{b.econ != null ? b.econ.toFixed(2) : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {mTab === "extras" && (
              <div style={{ background:CARD, border:`1px solid ${BORDER}`, borderRadius:6, padding:22 }}>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))", gap:18 }}>
                  {[["nb","No Balls"],["wd","Wides"],["b","Byes"],["lb","Leg Byes"],["total","Total"]].map(([k,label]) => (
                    <div key={k} style={{ textAlign:"center" }}>
                      <div style={{ fontFamily:"Georgia,serif", fontSize:28, color:k==="total"?GOLD2:CREAM }}>{m.extras[k]}</div>
                      <div style={{ fontFamily:"monospace", fontSize:10, color:MUTED, letterSpacing:1, textTransform:"uppercase", marginTop:4 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ══ SEASON STATS ══ */}
        {view === "season" && (
          <div>
            <div style={{ display:"flex", borderBottom:`1px solid ${BORDER}`, marginBottom:20 }}>
              <TabBtn label="Batting" active={sTab==="batting"} onClick={()=>setSTab("batting")} />
              <TabBtn label="Bowling" active={sTab==="bowling"} onClick={()=>setSTab("bowling")} />
            </div>

            {sTab === "batting" && (
              <div>
                <SH icon="🏏" title="Season Batting" />
                <div style={{ overflowX:"auto", borderRadius:6, border:`1px solid ${BORDER}`, background:CARD }}>
                  <table style={{ width:"100%", borderCollapse:"collapse" }}>
                    <thead>
                      <tr>
                        {["Player","Inn","NO","Runs","HS","Avg","SR"].map((h,i)=><th key={h} style={th(i===0)}>{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {SEASON.filter(p=>p.inn>0).map((p,i) => (
                        <tr key={i}>
                          <td style={{...tdBase(true),  color:CREAM}}>{p.name}</td>
                          <td style={{...tdBase(false), color:CREAM}}>{p.inn}</td>
                          <td style={{...tdBase(false), color:CREAM}}>{p.inn-p.dis}</td>
                          <td style={{...tdBase(false), color:colourFor(p.runs,"truns")}}>{p.runs}</td>
                          <td style={{...tdBase(false), color:colourFor(p.hs,"hs")}}>{p.hs}</td>
                          <td style={{...tdBase(false), color:CREAM}}>{p.avg}</td>
                          <td style={{...tdBase(false), color:colourFor(p.sr,"tsr")}}>{p.sr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontFamily:"monospace", fontSize:10, color:MUTED, marginTop:8 }}>Avg = runs ÷ dismissals · ∞ = never dismissed · retired n.o. = not out</p>
              </div>
            )}

            {sTab === "bowling" && (
              <div>
                <SH icon="⚾" title="Season Bowling" />
                <div style={{ overflowX:"auto", borderRadius:6, border:`1px solid ${BORDER}`, background:CARD }}>
                  <table style={{ width:"100%", borderCollapse:"collapse" }}>
                    <thead>
                      <tr>
                        {["Player","O","R","W","Econ","Best"].map((h,i)=><th key={h} style={th(i===0)}>{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {[...SEASON].filter(p=>p.ov>0).sort((a,b)=>b.wk-a.wk).map((p,i) => {
                        const bestStr = p.best ? `${p.best.wkts}/${p.best.runs}` : "—";
                        return (
                          <tr key={i}>
                            <td style={{...tdBase(true),  color:CREAM}}>{p.name}</td>
                            <td style={{...tdBase(false), color:CREAM}}>{p.ov%1===0?p.ov:p.ov.toFixed(1)}</td>
                            <td style={{...tdBase(false), color:CREAM}}>{p.br}</td>
                            <td style={{...tdBase(false), color:colourFor(p.wk,"twkts")}}>{p.wk}</td>
                            <td style={{...tdBase(false), color:colourFor(p.ec,"tec")}}>{p.ec}</td>
                            <td style={{...tdBase(false), color:colourFor(bestStr,"best")}}>{bestStr}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        <footer style={{ fontFamily:"monospace", fontSize:10, color:BORDER, textAlign:"center", marginTop:52, letterSpacing:0.5 }}>
          Pembury CC Under 13 Blue Caps · Season 2026 · Updated {MATCHES[MATCHES.length-1].date}
        </footer>
      </div>
    </div>
  );
}

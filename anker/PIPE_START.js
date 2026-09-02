// PIPE_START.js

import { LOAD_PIPE } from "./LOAD/LOAD_PIPE.js";
import { SAVE_PIPE } from "./SAVE/SAVE_PIPE.js";
import { PIPE_CORE } from "./PIPE/PIPE_CORE.js";

export async function PIPE_START(key = "ANKER"){

  // 1 — LOAD
  const loaded = await LOAD_PIPE(key);

  // 2 — RESPO (Bewertung)
  const respo = {
    axis: (loaded.data.axis || 0) % 756,
    tick: (loaded.data.tick || 0) + 1,
    orbit: ((loaded.data.tick || 0) % 3),
    pulse: Math.random() > 0.5 ? "good" : "neutral"
  };

  // 3 — SAVE
  SAVE_PIPE(key, respo);

  // 4 — PIPE
  PIPE_CORE(respo);

  return respo;
}

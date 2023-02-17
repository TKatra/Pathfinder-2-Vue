import type { GamePhase } from "../enum/gamePhase.enum";

export interface GameState {
  phase: GamePhase;
}
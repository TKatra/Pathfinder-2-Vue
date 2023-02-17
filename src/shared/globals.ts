import { reactive } from 'vue'
import { GamePhase } from './enum/gamePhase.enum'
import type { GameState } from './interfaces/gameState.interface'

export const gameState = reactive({
  phase: GamePhase.Setup
} as GameState)

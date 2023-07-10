import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Character } from '@/lib/rpg'

interface CharacterState {
  data: Character
  replace: (by: Character) => void
}

export const useCharacterStore = create<CharacterState>()(
  devtools(
    persist(
      (set) => ({
        data: new Character(),
        replace: (by) => set(() => ({ data: by })),
      }),
      {
        name: 'character-storage',
      }
    )
  )
)

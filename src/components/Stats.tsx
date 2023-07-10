import { Character, STAT } from '@/lib/rpg'
import { useCharacterStore } from '@/services/zustand/store'
import { ChangeEvent } from 'react'

export default function Stats() {
  const character = useCharacterStore((state) => state.data)
  const replaceCharacter = useCharacterStore((state) => state.replace)

  const hChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!character) return null

    const newChar = new Character(character)
    switch (evt.target.name) {
      case STAT.STR:
        newChar.setStr(evt.target.valueAsNumber)
        break
      case STAT.DEX:
        newChar.setDex(evt.target.valueAsNumber)
        break
      case STAT.CON:
        newChar.setCon(evt.target.valueAsNumber)
        break
      case STAT.INT:
        newChar.setInt(evt.target.valueAsNumber)
        break
      case STAT.WIS:
        newChar.setWis(evt.target.valueAsNumber)
        break
      case STAT.CHA:
        newChar.setCha(evt.target.valueAsNumber)
        break
    }

    replaceCharacter(newChar)
  }

  if (!character) return null
  console.log(character)

  return (
    <div className="Stats">
      <h2>Stats</h2>
      <label>
        STR:
        <input
          type="number"
          name="STR"
          value={character.strBase}
          onChange={hChange}
        />
        ({character.str()})
      </label>
      <label>
        DEX:
        <input
          type="number"
          name="DEX"
          value={character.dexBase}
          onChange={hChange}
        />
        ({character.dex()})
      </label>
      <label>
        CON:
        <input
          type="number"
          name="CON"
          value={character.conBase}
          onChange={hChange}
        />
        ({character.con()})
      </label>
      <label>
        INT:
        <input
          type="number"
          name="INT"
          value={character.intBase}
          onChange={hChange}
        />
        ({character.int()})
      </label>
      <label>
        WIS:
        <input
          type="number"
          name="WIS"
          value={character.wisBase}
          onChange={hChange}
        />
        ({character.wis()})
      </label>
      <label>
        CHA:
        <input
          type="number"
          name="CHA"
          value={character.chaBase}
          onChange={hChange}
        />
        ({character.cha()})
      </label>
    </div>
  )
}

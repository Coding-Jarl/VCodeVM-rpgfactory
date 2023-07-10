'use client'
import { useCharacterStore } from '@/services/zustand/store'

export default function Skills() {
  const character = useCharacterStore((state) => state.data)

  return (
    <div className="Skills">
      <h2>Skills</h2>
      {character.skills.map((elt) => {
        return (
          <p key={elt.label}>
            <input type="checkbox" disabled checked={elt.training} />
            {character.skill(elt.label)} {elt.label} ({elt.stat})
          </p>
        )
      })}
    </div>
  )
}

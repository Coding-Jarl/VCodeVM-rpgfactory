'use client'
import { Player, Character } from '../lib/rpg'

export default function Home() {
  const player1: Player = {
    avatar: '',
    mail: '',
    name: 'ValhallaCode',
  }
  const guillaumec37 = new Character('Warthog')
  const sevdoris = new Character('Héhé')

  const hChangeStr = (evt)=>{
    guillaumec37.setStr(evt.target.value)
    console.log(guillaumec37.strBase)
  }

  return (
    <main>
      <div className="Header">Header</div>
      <div className="Proficiencies">Proficiencies</div>
      <div className="Equipments">Equipments</div>
      <div className="Attacks">Attacks</div>
      <div className="Features">Features</div>
      <div className="Fluffs">Fluffs</div>
      <div className="Values">Values</div>
      <div className="Stats">
        Stats
        <input type="number" value={guillaumec37.strBase} onChange={hChangeStr} />
      </div>
      <div className="Skills">Skills</div>
    </main>
  )
}

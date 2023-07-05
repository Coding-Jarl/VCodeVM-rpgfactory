'use client'
import { useEffect, useState } from 'react'
import { Character } from '../lib/rpg'

export default function Home() {
  // useMemo ?
  // KO par Guillaume: useRef

  // KO: Immer (classes POO)
  // immutableJS ?

  // KO: Variable à l'arrache
  // const guillaumec37 = new Character('Warthog')

  const [guillaumec37, setGuillaume] = useState<Character|null>(null)

  useEffect(()=>{
    setGuillaume(new Character('Warthog'))
  }, [])

  const hChange = (evt)=>{
    if(!guillaumec37) return null

    const newChar = new Character(guillaumec37.name, guillaumec37)
    switch(evt.target.name){
      case 'STR':
        newChar.setStr(evt.target.value)
        break;
      case 'DEX':
        newChar.setDex(evt.target.value)
        break;
      case 'CON':
        newChar.setCon(evt.target.value)
        break;
      case 'INT':
        newChar.setInt(evt.target.value)
        break;
      case 'WIS':
        newChar.setWis(evt.target.value)
        break;
      case 'CHA':
        newChar.setCha(evt.target.value)
        break;
                                    
    }

    setGuillaume(newChar)
  }

  if(!guillaumec37) return null

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
        <h2>Stats</h2>
        <label>
          STR: 
          <input type="number" name="STR" value={guillaumec37.strBase} onChange={hChange} />
          ({guillaumec37.str()})
        </label>
        <label>
          DEX: 
          <input type="number" name="DEX" value={guillaumec37.dexBase} onChange={hChange} />
          ({guillaumec37.dex()})
        </label>
        <label>
          CON: 
          <input type="number" name="CON" value={guillaumec37.conBase} onChange={hChange} />
          ({guillaumec37.con()})
        </label>
        <label>
          INT: 
          <input type="number" name="INT" value={guillaumec37.intBase} onChange={hChange} />
          ({guillaumec37.int()})
        </label>
        <label>
          WIS: 
          <input type="number" name="WIS" value={guillaumec37.wisBase} onChange={hChange} />
          ({guillaumec37.wis()})
        </label>
        <label>
          CHA: 
          <input type="number" name="CHA" value={guillaumec37.chaBase} onChange={hChange} />
          ({guillaumec37.cha()})
        </label>
      </div>
      <div className="Skills">
        <h2>Skills</h2>
        {guillaumec37.skills.map( (elt)=>{
          return <p key={elt.label}>
            <input type="checkbox" disabled checked={elt.training}/>
            {guillaumec37.skill(elt.label)} {elt.label} ({elt.stat})
          </p>
        } )}
      
      </div>
    </main>
  )
}

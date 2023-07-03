import { Character } from '@/lib/rpg'
import {
  Stats,
  Values,
  Fluffs,
  Skills,
  Attacks,
  Features,
  Proficiencies,
  Equipments,
} from '@/components/RPG'
import styles from './page.module.scss'
import type { Player } from '@/lib/rpg'
import type { FC } from 'react'


const Page: FC = () => {
  // @TODO: use react context (https://react.dev/reference/react#context-hooks)
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
    <main className={styles.main}>
      <div className={styles.container}>
          <Stats />
          <Values />
          <Fluffs />
          <Skills />
          <Attacks />
          <Features />
          <Proficiencies />
          <Equipments />
      </div>
    </main>
  )
}

export default Page

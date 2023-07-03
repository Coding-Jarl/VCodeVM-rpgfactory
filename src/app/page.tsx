import { Character } from '@/lib/rpg'
import { Header } from '@/components/Layout/Header'
import styles from './page.module.scss'
import type { Player } from '@/lib/rpg'
import type { FC } from 'react'


const Page: FC = () => {
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
      <Header />
    </main>
  )
}

export default Page

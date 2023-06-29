import { Player, Character } from '../types/rpg'

export default function Home() {
  const player1: Player = {
    avatar: '',
    mail: '',
    name: 'ValhallaCode',
  }
  const guillaumec37 = new Character('Warthog')
  const sevdoris = new Character('Héhé')

  return (
    <main>
      <ul>
        <li>{player1.name}</li>
        <li>Guillaume&apos;s name: {guillaumec37.name}</li>
        <li>All-Win: {sevdoris.roll(-1) ? 'Success' : 'Failure'}</li>
        <li>Easy: {sevdoris.roll(5) ? 'Success' : 'Failure'}</li>
        <li>Hard: {sevdoris.roll(15) ? 'Success' : 'Failure'}</li>
        <li>All-Fail: {sevdoris.roll(25) ? 'Success' : 'Failure'}</li>
      </ul>
      <hr />
      <section>
        <h2>{guillaumec37.name}</h2>
        <h3>Stats:</h3>
        <ul>
          <li>STR: {guillaumec37.strBase}</li>
          <li>DEX: {guillaumec37.dexBase} </li>
          <li>CON: {guillaumec37.conBase} </li>
          <li>INT: {guillaumec37.intBase} </li>
          <li>WIS: {guillaumec37.wisBase} </li>
          <li>CHA: {guillaumec37.chaBase} </li>
        </ul>
      </section>
      <section>
        <h2>{sevdoris.name}</h2>
        <h3>Stats:</h3>
        <ul>
          <li>STR: {sevdoris.strBase}</li>
          <li>DEX: {sevdoris.dexBase} </li>
          <li>CON: {sevdoris.conBase} </li>
          <li>INT: {sevdoris.intBase} </li>
          <li>WIS: {sevdoris.wisBase} </li>
          <li>CHA: {sevdoris.chaBase} </li>
        </ul>
      </section>
    </main>
  )
}

export type Player = {
  name: string
  mail: string
  avatar: string
}

export class Die {
  nbFaces: number

  constructor(faces: number) {
    this.nbFaces = faces
  }

  roll() {
    return Math.floor(Math.random() * this.nbFaces) + 1
  }
}

export class Character {
  name: string
  // race: string
  // class: string
  // lvl: number
  // skills: any

  strBase: number
  dexBase: number
  conBase: number
  intBase: number
  wisBase: number
  chaBase: number

  skills: Array<Skill>

  constructor(name: string) {
    const d6 = new Die(6)
    this.name = name

    this.strBase = d6.roll() + d6.roll() + d6.roll()
    this.dexBase = d6.roll() + d6.roll() + d6.roll()
    this.conBase = d6.roll() + d6.roll() + d6.roll()
    this.intBase = d6.roll() + d6.roll() + d6.roll()
    this.wisBase = d6.roll() + d6.roll() + d6.roll()
    this.chaBase = d6.roll() + d6.roll() + d6.roll()

    this.skills = new Array<Skill>()
  }

  str() {
    return (this.strBase - 10) / 2
  }
  dex() {
    return (this.dexBase - 10) / 2
  }
  con() {
    return (this.conBase - 10) / 2
  }
  int() {
    return (this.intBase - 10) / 2
  }
  wis() {
    return (this.wisBase - 10) / 2
  }
  cha() {
    return (this.chaBase - 10) / 2
  }

  roll(threshold: number) {
    const d20 = new Die(20)
    const result = d20.roll()

    switch (result) {
      case 1:
        return false
      case 20:
        return true
      default:
        return result > threshold
    }
  }
}

export type Party = {
  startDate: Date
  endDate: Date
  location: string
  organizer: Player
  players: Map<Player, Character>
  game: Game
}

export type Game = {
  name: string
  editor: string
  author: string
}

export type Skill = {
  label: string
  stat: string
  score: number
  training: boolean
}

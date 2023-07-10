// ----- TYPES

export type Player = {
  name: string
  mail: string
  avatar: string
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
  stat: STAT
}

// ----- CLASSES

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
  // race: string
  // class: string
  lvl = 1

  strBase!: number
  dexBase!: number
  conBase!: number
  intBase!: number
  wisBase!: number
  chaBase!: number

  currExpPoints = 0
  skills: Array<{
    label: string
    stat: STAT
    training: boolean
  }> = []
  miscProficiencies: Array<string> = ['Language: Common', 'Weapons: Common']

  name = 'Anon'
  alignment = 'Neutral'
  background = ''
  personnalityTraits: Array<string> = []
  ideals: Array<string> = []
  bonds: Array<string> = []
  flaws: Array<string> = []

  constructor(old?: Character) {
    if (old) {
      Object.assign(this, old)
      return
    }

    this.strBase = 10
    this.dexBase = 10
    this.conBase = 10
    this.intBase = 10
    this.wisBase = 10
    this.chaBase = 10

    for (const skill of SKILLS) {
      this.skills.push({
        label: skill.label,
        stat: skill.stat,
        training: false,
      })
    }
  }

  setName(name: string) {
    this.name = name
  }

  str() {
    return Math.floor((this.strBase - 10) / 2)
  }
  dex() {
    return Math.floor((this.dexBase - 10) / 2)
  }
  con() {
    return Math.floor((this.conBase - 10) / 2)
  }
  int() {
    return Math.floor((this.intBase - 10) / 2)
  }
  wis() {
    return Math.floor((this.wisBase - 10) / 2)
  }
  cha() {
    return Math.floor((this.chaBase - 10) / 2)
  }

  setStr(newValue: number) {
    this.strBase = newValue
  }
  setDex(newValue: number) {
    this.dexBase = newValue
  }
  setCon(newValue: number) {
    this.conBase = newValue
  }
  setInt(newValue: number) {
    this.intBase = newValue
  }
  setWis(newValue: number) {
    this.wisBase = newValue
  }
  setCha(newValue: number) {
    this.chaBase = newValue
  }

  proficiencyScore() {
    return Math.floor((this.lvl - 1) / 4) + 2
  }

  save(stat: STAT) {
    switch (stat) {
      case 'STR':
        return this.str()
      case 'DEX':
        return this.dex()
      case 'CON':
        return this.con()
      case 'INT':
        return this.int()
      case 'WIS':
        return this.wis()
      case 'CHA':
        return this.cha()
    }
  }
  skill(name: string) {
    let res = 0
    const skill = this.skills.find((elt) => elt.label === name)
    if (!skill) return 0

    switch (skill.stat) {
      case STAT.STR:
        res += this.str()
        break
      case STAT.DEX:
        res += this.dex()
        break
      case STAT.CON:
        res += this.con()
        break
      case STAT.INT:
        res += this.int()
        break
      case STAT.WIS:
        res += this.wis()
        break
      case STAT.CHA:
        res += this.cha()
        break
    }

    if (skill.training) res += this.proficiencyScore()

    return res
  }
  hasMiscProficiency(name: string) {
    return this.miscProficiencies.includes(name)
  }

  roll() {
    const d20 = new Die(20)
    const result = d20.roll()

    switch (result) {
      case 1:
        return false
      case 20:
        return true
      default:
        return result
    }
  }
  rollAdvantage() {
    const result1 = this.roll()
    const result2 = this.roll()

    if (result1 === true || result2 === true) return true
    if (result1 === false && result2 === false) return false
    if (result1 === false) return result2
    if (result2 === false) return result1

    return Math.max(result1, result2)
  }
  rollDisadvantage() {
    const result1 = this.roll()
    const result2 = this.roll()

    if (result1 === false || result2 === false) return false
    if (result1 === true && result2 === true) return true
    if (result1 === true) return result2
    if (result2 === true) return result1

    return Math.min(result1, result2)
  }
}

// ----- DATA
export enum STAT {
  STR = 'STR',
  DEX = 'DEX',
  CON = 'CON',
  INT = 'INT',
  WIS = 'WIS',
  CHA = 'CHA',
}

const SK_ACROBATIC: Skill = { label: 'Acrobatics', stat: STAT.DEX }
const SK_ANIMAL_HANDLING: Skill = { label: 'Animal Handling', stat: STAT.WIS }
const SK_ARCANA: Skill = { label: 'Arcana', stat: STAT.INT }
const SK_ATHLETICS: Skill = { label: 'Athletics', stat: STAT.STR }
const SK_DECEPTION: Skill = { label: 'Deception', stat: STAT.CHA }
const SK_HISTORY: Skill = { label: 'History', stat: STAT.INT }
const SK_INSIGHT: Skill = { label: 'Insight', stat: STAT.WIS }
const SK_INITIMIDATION: Skill = { label: 'Initimidation', stat: STAT.CHA }
const SK_INVESTIGATION: Skill = { label: 'Investigation', stat: STAT.WIS }
const SK_MEDICINE: Skill = { label: 'Medicine', stat: STAT.WIS }
const SK_NATURE: Skill = { label: 'Nature', stat: STAT.INT }
const SK_PERCEPTION: Skill = { label: 'Perception', stat: STAT.WIS }
const SK_PERFORMANCE: Skill = { label: 'Performance', stat: STAT.CHA }
const SK_PERSUASION: Skill = { label: 'Persuasion', stat: STAT.CHA }
const SK_RELIGION: Skill = { label: 'Religion', stat: STAT.INT }
const SK_SLEIGHT_OF_HAND: Skill = { label: 'Sleight of Hand', stat: STAT.DEX }
const SK_STEALTH: Skill = { label: 'Stealth', stat: STAT.DEX }
const SK_SURVIVAL: Skill = { label: 'Survival', stat: STAT.WIS }

const SKILLS: Skill[] = [
  SK_ACROBATIC,
  SK_ANIMAL_HANDLING,
  SK_ARCANA,
  SK_ATHLETICS,
  SK_DECEPTION,
  SK_HISTORY,
  SK_INSIGHT,
  SK_INITIMIDATION,
  SK_INVESTIGATION,
  SK_MEDICINE,
  SK_NATURE,
  SK_PERCEPTION,
  SK_PERFORMANCE,
  SK_PERSUASION,
  SK_RELIGION,
  SK_SLEIGHT_OF_HAND,
  SK_STEALTH,
  SK_SURVIVAL,
]

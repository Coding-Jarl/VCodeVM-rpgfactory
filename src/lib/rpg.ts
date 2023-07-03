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
  // race: string
  // class: string
  lvl=1
  
  strBase: number
  dexBase: number
  conBase: number
  intBase: number
  wisBase: number
  chaBase: number
  
  currExpPoints=0
  skills: Array<Skill>
  miscProficiencies: Array<string>=["Language: Common", "Weapons: Common"]
  
  name: string
  alignment="Neutral"
  background=""
  personnalityTraits:Array<string>=[]
  ideals:Array<string>=[]
  bonds:Array<string>=[]
  flaws:Array<string>=[]

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

  setStr(str:number){
    this.strBase=str
  }
  
  saveStr(){
    return this.str()
  }
  saveDex(){
    return this.dex()
  }
  saveCon(){
    return this.con()
  }
  saveInt(){
    return this.int()
  }
  saveWis(){
    return this.wis()
  }
  saveCha(){
    return this.cha()
  }
  
  proficiency(){
    return Math.floor((this.lvl-1)/4)+2
  }
  skill(name:string){
    let res=0;
    const skill = this.skills.find((elt)=>elt.label===name)
    if(!skill) return 0;

    switch(skill.stat) {
      case "STR":
        res +=this.str();
        break;
      case "DEX":
        res +=this.dex();
        break;
      case "CON":
        res +=this.con();
        break;
      case "INT":
        res +=this.int();
        break;
      case "WIS":
        res +=this.wis();
        break;
      case "CHA":
        res +=this.cha();
        break;
    }

    if(skill.training)
      res+=this.proficiency()
    
    return res
  }
  miscProficiency(name:string){
    return this.miscProficiencies.includes(name);
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
  training: boolean
}




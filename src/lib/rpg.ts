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
  lvl: number=1
  
  strBase: number
  dexBase: number
  conBase: number
  intBase: number
  wisBase: number
  chaBase: number
  
  currExpPoints:number=0
  skills:Array<Skill>=new Array<Skill>()
  miscProficiencies: Array<string>=["Language: Common", "Weapons: Common"]
  
  name: string
  alignment:string="Neutral"
  background: string=""
  personnalityTraits:Array<string>=[]
  ideals:Array<string>=[]
  bonds:Array<string>=[]
  flaws:Array<string>=[]

  constructor(name: string, old?:Character) {
    this.name = old?.name || name

    this.strBase = old?.strBase || 10
    this.dexBase = old?.dexBase || 10
    this.conBase = old?.conBase || 10
    this.intBase = old?.intBase || 10
    this.wisBase = old?.wisBase || 10
    this.chaBase = old?.chaBase || 10

    if(old) {
      this.skills = old.skills
    } else {
      this.skills.push({
        label:"Acrobatics", 
        stat:"DEX", 
        training:false
      })
      this.skills.push({
        label:"Animal Handling", 
        stat:"WIS", 
        training:false
      })
      this.skills.push({
        label:"Arcana", 
        stat:"INT", 
        training:false
      })
      this.skills.push({
        label:"Athletics", 
        stat:"STR", 
        training:false
      })
      this.skills.push({
        label:"Deception", 
        stat:"CHA", 
        training:false
      })
      this.skills.push({
        label:"History", 
        stat:"INT", 
        training:false
      })
      this.skills.push({
        label:"Insight", 
        stat:"WIS", 
        training:false
      })
      this.skills.push({
        label:"Initimidation", 
        stat:"CHA", 
        training:false
      })
      this.skills.push({
        label:"Investigation", 
        stat:"WIS", 
        training:false
      })
      this.skills.push({
        label:"Medicine", 
        stat:"WIS", 
        training:false
      })
      this.skills.push({
        label:"Nature", 
        stat:"INT", 
        training:false
      })
      this.skills.push({
        label:"Perception", 
        stat:"WIS", 
        training:false
      })
      this.skills.push({
        label:"Performance", 
        stat:"CHA", 
        training:false
      })
      this.skills.push({
        label:"Persuasion", 
        stat:"WIS", 
        training:false
      })
      this.skills.push({
        label:"Religion", 
        stat:"INT", 
        training:false
      })
      this.skills.push({
        label:"Sleight of Hand", 
        stat:"DEX", 
        training:false
      })
      this.skills.push({
        label:"Stealth", 
        stat:"DEX", 
        training:false
      })
      this.skills.push({
        label:"Survival", 
        stat:"WIS", 
        training:false
      })
    }
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

  setStr(newValue:number){
    this.strBase=newValue
  }
  setDex(newValue:number){
    this.dexBase=newValue
  }
  setCon(newValue:number){
    this.conBase=newValue
  }
  setInt(newValue:number){
    this.intBase=newValue
  }
  setWis(newValue:number){
    this.wisBase=newValue
  }
  setCha(newValue:number){
    this.chaBase=newValue
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




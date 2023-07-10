'use client'
import Header from '@/components/Header'
import Proficiencies from '@/components/Proficiencies'
import Equipments from '@/components/Equipments'
import Attacks from '@/components/Attacks'
import Features from '@/components/Features'
import Fluffs from '@/components/Fluffs'
import Values from '@/components/Values'
import Stats from '@/components/Stats'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <Header />
      <Proficiencies />
      <Equipments />
      <Attacks />
      <Features />
      <Fluffs />
      <Values />
      <Stats />
      <Skills />
    </main>
  )
}

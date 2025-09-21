import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import OlympicHistory from './components/OlympicHistory'
import SummerVsWinter from './components/SummerVsWinter'
import Timeline from './components/Timeline'
import CeremoniesSymbols from './components/CeremoniesSymbols'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <OlympicHistory />
      <SummerVsWinter />
      <Timeline />
      <CeremoniesSymbols />
      <Footer />
    </div>
  )
}
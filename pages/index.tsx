import Navbar from '../components/Navbar'
import HeadPage from '../components/HeadPage'
import Hero from '../components/Hero'
import OpenSource from '../components/OpenSource'
import Feactures from '../components/Feactures'
// import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeadPage />
      <main>
        <Navbar />
        <Hero />
        <OpenSource />
        <Feactures />
      </main>
    </>
  )
}

export default Home

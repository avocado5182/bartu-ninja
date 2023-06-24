import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Josefin_Sans } from 'next/font/google'
const josefin_sans = Josefin_Sans({ subsets: ['latin'] })
import styles from './homeHero.module.css'

const HeroSketchWrapper = dynamic(() => import('./sketch'), {
  ssr: false,
})

export default function HomeHeroWrapper() {
    return(
        <div className={styles.hero}>
          {/* <!--
              background with moving shapes with my name as text in the front
              maybe the moving shapes can react to mouse?
              100vw, 100vh
          -->

          <h1 class="heroTitle">Bartu</h1>
          <a class="heroBtn" href="#projects" style="top:calc(50% - 3.5em)">Go to my projects</a>
          <a class="heroBtn" href="notes" style="top:calc(50%)">See my class notes</a>

          <div class="dummy"></div> */}

          <HeroSketchWrapper></HeroSketchWrapper>

          <h1 className={`${styles.heroTitle} ${josefin_sans.className}`}>Bartu</h1>
          <Link href="#projects" className={`${styles.heroBtn} ${styles.heroBtnFirst}`}>Go to my projects</Link>
          <Link href="/notes" className={`${styles.heroBtn} ${styles.heroBtnSecond}`}>See my class notes</Link>
        </div>
    )
}
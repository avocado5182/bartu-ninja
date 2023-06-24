import Image from 'next/image'
import Navbar from './navbar'
import Footer from './footer'
import styles from './page.module.css'
import HomeHeroWrapper from './homeHero'
import ProjectsCarousel from './projectsCarousel.js'

import complexius from '../../public/complexius.png'
import gwarun from '../../public/gwarun-featuregraphic.png'
import manicIsland from '../../public/manic_island.gif'

const imgs = [
  complexius,
  gwarun,
  manicIsland,
]

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar>
      </Navbar>

      <div className={styles.content}>
        <HomeHeroWrapper></HomeHeroWrapper>

        <div className={styles.projects} id="projects">
          <ProjectsCarousel images={imgs}></ProjectsCarousel>
        </div>

        <div className={styles.about} id="about">
          <Image className={styles.aboutImg} width={0} height={0} sizes="100vh" alt="A photo of me" src={"https://camo.githubusercontent.com/d0e27f505fef14198d5b4c6075b15d6aa9c0fe8b0083e933a710c53288138e8d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f656d6f6a69732f3737393832383439353933323938313237392e6769663f763d31"}></Image>
          <h1 tabIndex={2}>About me</h1>

          <p tabIndex={3}>orem ipsum dolor sit amet consectetur, adipisicing elit. Quas molestiae consequuntur illo odio
                blanditiis,
                ad in quisquam. Deserunt, magni consectetur! Fugit et blanditiis a quisquam! Ipsam magni enim
                reprehenderit
                sequi nesciunt error dolores dicta pariatur harum nobis quo temporibus soluta facere id dolor, quisquam
                aliquam commodi impedit illo culpa exercitationem aliquid beatae praesentium. Quisquam illo labore eaque
                magnam itaque, nesciunt, eos explicabo ducimus distinctio officiis delectus corporis sint vitae aperiam
                quia, aliquid possimus eveniet. Beatae nemo fuga ipsa distinctio, aut tempore officia. Ex voluptatum
                sint
                est aut il</p>
        </div>
      </div>

      <Footer>
      </Footer>
    </main>
  )
}

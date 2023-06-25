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

        <div className={styles.projects} id="projects" tabIndex={2} >
          <h1 tabIndex={3}>Projects</h1>

          <ProjectsCarousel images={imgs}></ProjectsCarousel>
        </div>

        <div className={styles.about} id="about">
          <Image className={styles.aboutImg} width={0} height={0} sizes="100vh" alt="A photo of me" src={"https://camo.githubusercontent.com/d0e27f505fef14198d5b4c6075b15d6aa9c0fe8b0083e933a710c53288138e8d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f656d6f6a69732f3737393832383439353933323938313237392e6769663f763d31"}></Image>
          <h1 tabIndex={4}>About me</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam eget felis eget nunc lobortis mattis
            aliquam faucibus purus. Mollis aliquam ut porttitor leo a diam. At erat pellentesque adipiscing commodo elit at. Est ante in nibh mauris cursus mattis. Elementum pulvinar
            etiam non quam lacus suspendisse faucibus interdum posuere. Arcu ac tortor dignissim convallis. Semper auctor neque vitae tempus quam pellentesque. Ipsum faucibus vitae
            aliquet nec ullamcorper sit. Id eu nisl nunc mi ipsum faucibus vitae. At tellus at urna condimentum mattis pellentesque id nibh. Malesuada nunc vel risus commodo. Amet est
            placerat in egestas erat.
            <br></br><br></br>
            Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Consectetur adipiscing elit duis tristique. Aliquet risus feugiat
            in ante metus dictum at tempor. Arcu felis bibendum ut tristique et egestas quis. At consectetur lorem donec massa sapien faucibus et molestie. Hac habitasse platea
            dictumst vestibulum rhoncus est pellentesque. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Netus et malesuada fames ac turpis. Ac turpis egestas maecenas pharetra convallis posuere morbi. Nunc sed
            blandit libero volutpat sed cras ornare arcu dui. Mi sit amet mauris commodo quis imperdiet. Aliquet eget sit amet tellus cras adipiscing enim eu. Euismod elementum nisi
            quis eleifend quam adipiscing. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Condimentum vitae sapien pellentesque habitant morbi. Aliquet
            bibendum enim facilisis gravida neque convallis a cras. Fermentum dui faucibus in ornare quam.
            <br></br><br></br>
            Id aliquet lectus proin nibh nisl condimentum id. Neque vitae tempus quam pellentesque. Tristique sollicitudin nibh sit amet commodo nulla. Porttitor leo a diam
            sollicitudin tempor id eu. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Massa sed elementum tempus egestas. Pharetra magna ac placerat vestibulum
            lectus. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Ac tincidunt vitae semper quis lectus
            nulla at volutpat diam. Egestas purus viverra accumsan in nisl nisi scelerisque.
          </p>
        </div>
      </div>

      <Footer>
      </Footer>
    </main>
  )
}

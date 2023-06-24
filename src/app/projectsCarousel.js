'use client'

import Flickity from 'react-flickity-component'
import styles from './projectsCarousel.module.css'

const flickityOptions = {
    // options
    cellAlign: 'center',
    imagesLoaded: true,
    // wrapAround: true,
    percentPosition: true,
    dragThreshold: 50,
    selectedAttraction: 0.01,
    friction: 0.15,
    initialIndex: 0,
}

import CarouselCell from './carouselCell'

const projects = {
    items: [
        { id: 0, title: "Project 1", link: "https://google.com", description: "This is project 1", image: 0 },
        { id: 1, title: "Project 2", link: "https://youtube.com", description: "This is project 2", image: 1 },
        { id: 2, title: "Project 3", link: "https://wikipedia.com", description: "This is project 3", image: 2 },
        { id: 3, title: "Roblox", link: "https://roblox.com", description: "This is problox", image: 1 },

    ]
}

export default function ProjectsCarousel(props) {
    return (
        <Flickity
            className={styles.mainCarousel} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={false} // default false
            static={true} // default false
        >
            {/* {projects.items.map(item => <div className={styles.carouselCell} key={item.id}>{item.title}: {item.description}</div>)} */}

            {projects.items.map(item =>
                <CarouselCell
                    key={item.id}
                    title={item.title}
                    link={item.link}
                    description={item.description}
                    image={props.images[item.image]}
                >
                </CarouselCell>
          )}
        </Flickity>
    )
}
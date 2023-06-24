import Image from "next/image"
import Link from "next/link"
import styles from "./carouselCell.module.css"

export default function CarouselCell(props) {
    return (
        <div className={styles.carouselCell}>
            <Image className={styles.carouselCellImg} alt="A photo of me" src={props.image}></Image>
            <div className={styles.carouselCellText}>
                <Link target="_blank" href={props.link}>
                    <h1>{props.title}</h1>
                </Link>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
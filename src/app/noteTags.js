import styles from "./noteTags.module.css";
const tagsColors = {
    "course": "#150050",
    "unit": "#3F0071",
};

export default function NoteTags(props) {
    if (!props.note) return null;
    let tags = [];
    for (let tag in tagsColors) {
        if (!props.note.hasOwnProperty(tag)) continue;
        tags.push({
            color: tagsColors[tag],
            content: props.note[tag],
        });
    }

    return (
        <div className={styles.container}>
            {tags.map(({color, content}) => {
                return (
                    <div className={styles.tag} style={{
                        backgroundColor: color,
                    }} key={`${props.note.id}_${content}`}>
                        <p>{content}</p>
                    </div>
                )
            })}
        </div>
    );
}
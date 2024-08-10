import styles from './Card.module.css';

export default function Card(props) {
    function convertToDateTime(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <article className={styles.card}>
            <div className={styles.cardImgWrapper}>
                <img className={styles.cardImg} src={props.imageUrl}
                     alt="Mount Fuji"/>
            </div>
            <div className={styles.info}>
                <div className={styles.location}>
                    <img className={styles.mapIcon} src="/images/map-icon.svg" alt="map icon"/>
                    <p>{props.location.location}</p>
                    <a href={props.location.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <time dateTime={convertToDateTime(props.startDate)}>{props.startDate} -</time>
                <time dateTime={convertToDateTime(props.endDate)}>{props.endDate}</time>
                <p>{props.description}</p>
            </div>
        </article>
    );
}
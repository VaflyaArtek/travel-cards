import styles from './CardList.module.css'
import data from '../../Data.js'
import Card from './Card.jsx';

export default function CardList() {
    const arr = data.map(item => {
        return <Card key={item.id} {...item} />
    })
    return (
        <section className={styles.cardList}>
            {arr}
        </section>
    );
}
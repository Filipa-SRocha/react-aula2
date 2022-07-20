import Card from './Card';
import styles from './Cards.module.css';

const Cards = () => {
	return (
		<section className={styles.cardsSectionContainer}>
			<h2 className={styles.cardsTitle}>
				Estamos aprendendo React com o melhor professor de todos!
			</h2>
			<div className={styles.cards}>
				<Card texto='Cogumelo 1'></Card>
				<Card texto='Cogumelo 2'></Card>
				<Card texto='Cogumelo 3'></Card>
			</div>
		</section>
	);
};

export default Cards;

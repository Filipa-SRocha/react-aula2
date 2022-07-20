import cogumelo from '../images/cogumelo.png';
import styles from './Card.module.css';

const Card = ({ texto }) => {
	return (
		<div className={styles.card}>
			<img
				className={styles.cardImg}
				src={cogumelo}
				alt='Imgem de um cogumelo'
			/>
			<p>{texto}</p>
		</div>
	);
};

export default Card;

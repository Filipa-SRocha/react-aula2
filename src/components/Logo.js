import cogumelo from '../images/cogumelo.png';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<div className={styles.logoContainer}>
			<a href='#'>
				<img
					className={styles.logoImg}
					src={cogumelo}
					alt='imagem de um cogumelo'
				/>
			</a>

			<small>Melhores alunos do Vemser de todos os tempos</small>
		</div>
	);
};

export default Logo;

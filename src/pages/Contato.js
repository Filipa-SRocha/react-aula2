import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import styles from './Contato.module.css';

const Contacto = () => {
	return (
		<section>
			<Header />
			<section className={styles.formPageContainer}>
				<h1>Contato</h1>
				<Form />
			</section>

			<Footer />
		</section>
	);
};

export default Contacto;

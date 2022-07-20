import Menu from './Menu';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Menu isFooter={true} />
			<address>Av. Andarai 531 - Porto Alegre</address>
		</footer>
	);
};

export default Footer;

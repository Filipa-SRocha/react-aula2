import Logo from './Logo';
import Menu from './Menu';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Menu isFooter={false} />
		</header>
	);
};

export default Header;

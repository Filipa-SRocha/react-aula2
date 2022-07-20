import ItemMenu from './ItemMenu.js';
import styles from './Menu.module.css';

const Menu = ({ isFooter }) => {
	const classe = isFooter ? `${styles.menuFooter}` : `${styles.menu}`;

	return (
		<nav>
			<ul className={classe}>
				<ItemMenu value='Home' />
				<ItemMenu value='Sobre' />
				<ItemMenu value='Contacto' />
			</ul>
		</nav>
	);
};

export default Menu;

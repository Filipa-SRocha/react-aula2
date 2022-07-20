import styles from './ItemMenu.module.css';

const ItemMenu = ({ value }) => {
	return (
		<li>
			<a className={styles.itemLink} href='#'>
				{value}
			</a>
		</li>
	);
};

export default ItemMenu;

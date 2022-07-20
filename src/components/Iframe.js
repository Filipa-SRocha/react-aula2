import styles from './Iframe.module.css';

const Iframe = (props) => {
	return (
		<div className={styles.iframeContainer}>
			<iframe {...props} />
		</div>
	);
};

export default Iframe;

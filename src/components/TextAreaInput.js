import styles from './TextAreaInput.module.css';

const TextAreaInput = ({ label, id, placeholder }) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<textarea id={id} placeholder={placeholder} rows={8} cols={40}></textarea>
		</div>
	);
};

export default TextAreaInput;

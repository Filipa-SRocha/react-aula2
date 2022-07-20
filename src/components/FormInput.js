import styles from './FormInput.module.css';

const FormInput = ({ label, placeholder, id, type }) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<input name={id} id={id} placeholder={placeholder} type={type} />
		</div>
	);
};

export default FormInput;

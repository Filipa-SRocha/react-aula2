import styles from './SelectInput.module.css'

const SelectInput = ({ label, option1, value1, option2, value2, id }) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id}>
				<option value={value1}> {option1}</option>
				<option value={value2}>{option2}</option>
			</select>
		</div>
	);
};

export default SelectInput;

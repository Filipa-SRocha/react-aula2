import FormInput from './FormInput';
import SelectInput from './SelectInput';
import TextAreaInput from './TextAreaInput';
import styles from './Form.module.css';

const Form = () => {
	return (
		<form className={styles.formContainer}>
			<FormInput
				label='Digite o seu nome completo: '
				id='name'
				placeholder='Nome completo'
				type='text'
			/>
			<FormInput
				label='Digite o seu email: '
				id='email'
				placeholder='email'
				type='email'
			/>
			<SelectInput
				label='Qual o motivo do contacto?'
				option1='Problema no site'
				value1='problema'
				option2='Pedido de contacto'
				value2='contato'
				id='motivo'
			/>

			<TextAreaInput
				label='Digite sua mensagem: '
				id='mensagem'
				placeholder='Sua mensagem...'
			/>
			<button className={styles.formButton} type='submit'>
				salvar
			</button>
		</form>
	);
};

export default Form;

import styles from './MainText.module.css';

const MainText = ({ isHome }) => {
	const paragrafo1 =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis suscipit dolor minus nesciunt blanditiis pariatur, necessitatibus sit, ratione tempore, enim porro error reiciendis perferendis eligendi maiores vero maxime neque!';

	const paragrafo2 =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo maxime doloremque at, distinctio architecto accusamus illum eos ea autem atque nemo molestias est, esse quidem magni. Corrupti vel ratione minima id quam quae non sequi unde, repudiandae, eveniet cupiditate voluptatem magnam, magni enim molestiae ducimus commodi! Iusto, tempore ea.';

	const sectionClass = isHome
		? `${styles.mainTextSection}`
		: `${styles.regularTextsection}`;
	const textClass = isHome ? `${styles.mainText}` : `${styles.regularText}`;

	return (
		<section className={sectionClass}>
			<p className={textClass}>{paragrafo2}</p>
			<p className={textClass}>{paragrafo1}</p>
		</section>
	);
};

export default MainText;

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainText from '../components/MainText';
import Iframe from '../components/Iframe';
import styles from './Sobre.module.css';

const Sobre = () => {
	const url = 'https://www.youtube.com/embed/h9HiHkEar-Y';

	return (
		<section>
			<Header></Header>
			<section className={styles.sectionContainer}>
				<h1>Sobre a DBC</h1>
				<Iframe
					width={560}
					height={315}
					src={url}
					title='YouTube video player'
					frameBorder={0}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>

				<MainText isHome={false} />
			</section>
			<Footer></Footer>
		</section>
	);
};

export default Sobre;

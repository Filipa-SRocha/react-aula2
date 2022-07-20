import Header from '../components/Header';
import Cards from '../components/Cards';
import MainText from '../components/MainText';
import Iframe from '../components/Iframe';
import Footer from '../components/Footer';

const Home = () => {
	const url =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4087503063893!2d-51.203485185318556!3d-29.996417481899837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-PT!2sbr!4v1658262275206!5m2!1spt-PT!2sbr';

	return (
		<section>
			<Header></Header>
			<Cards></Cards>
			<MainText isHome={true} />
			<h2> Endereço da DBC</h2>
			<Iframe
				width={600}
				height={450}
				src={url}
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				title='Mapa DBC'
			/>
			<Footer />
		</section>
	);
};

export default Home;

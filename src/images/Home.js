import Header from '../components/Header';
import Cards from '../components/Cards';
import MainText from '../components/MainText';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Cards></Cards>
			<MainText />
			<Map></Map>
			<Footer />
		</div>
	);
};

export default Home;

import './index.css';
// import { Component } from 'react';
import Navbar from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Body content="I am Dah Coding Khid!" />
			<Body content="The brain behind Alphascid Technologies" />
			<Body content="My React Journey Starting Soon. Yay!" />
			<Body content="And I am already loving it!" />
			<Body content="I am making it with determination!" />
			<Body content="I trust in my God!" />
			<Body content="It is so fun guys!" />
			<Body content="Let's give it a try together!" />
			<Body content="And make mama PROUD!" />
			<Footer />
		</div>
	);
}

export default App;

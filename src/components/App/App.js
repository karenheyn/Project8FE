import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='main-container'>
				<nav>
					<Navbar />
				</nav>
				<main>
					<Route path='/' exact component={Home} />
				</main>
			</div>
		);
	}
}

export default App;

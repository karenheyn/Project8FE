import React, { Component } from "react";
import "./TopFiveListings.css";
class TopFive extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let images = this.props.data.map((item, key) => {
			console.log();
			return (
				<div className='TopFiveItem' key={key}>
					<img src={item.imageUrl} key={key} />
				</div>
			);
		});
		let slicedImages = images.slice(0, 5);
		return <div className='TopFive'>{slicedImages}</div>;
	}
}
export default TopFive;

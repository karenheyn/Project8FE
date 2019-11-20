import React, { Component } from "react";
import "./TopFiveListings.css";
class TopFive extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let images = this.props.data.map(item => {
			console.log();
			return (
				<div className='TopFiveItem'>
					<img src={item.imageUrl} />
				</div>
			);
		});
		let slicedImages = images.slice(0, 5);
		return <div className='TopFive'>{slicedImages}</div>;
	}
}
export default TopFive;

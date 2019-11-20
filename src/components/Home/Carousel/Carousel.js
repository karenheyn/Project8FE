import React from "react";

import "./Carousel.css";

let carouselArray = [];

const Carousel = props => {
	//   console.log(carouselArray);
	const topFive = props.data.slice(25, 30);
	//   console.log(topFive.map(image => image.imageUrl));
	topFive.map(item => {
		carouselArray.push({
			src: item.imageUrl,
			altText: "404",
			caption: item.name,
			// header: 'Slide 1 Header',
			key: item.name
		});
		return item;
	});
	// console.log(carouselArray);
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide'
			data-ride='carousel'
		>
			<ol className='carousel-indicators'>
				<li
					data-target='#carouselExampleIndicators'
					data-slide-to='0'
					className='active'
				></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='4'></li>
			</ol>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img
						className='d-block w-100'
						src={carouselArray[0].src}
						alt='First slide'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>{carouselArray[0].caption}</h5>
					</div>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						src={carouselArray[1].src}
						alt='Second slide'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>{carouselArray[1].caption}</h5>
					</div>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						src={carouselArray[2].src}
						alt='Third slide'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>{carouselArray[2].caption}</h5>
					</div>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						src={carouselArray[3].src}
						alt='Fourth slide'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>{carouselArray[3].caption}</h5>
					</div>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						src={carouselArray[4].src}
						alt='Fifth slide'
					/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>{carouselArray[4].caption}</h5>
					</div>
				</div>
			</div>
			<a
				className='carousel-control-prev'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	);
};

export default Carousel;

import React, { Component } from "react";
import "./RestaurantDetail.css";
import "../Backdrop/Backdrop";
import Mapbox from "../Mapbox/Mapbox";
import Form from "../../stories/Forms/Forms";
import Review from "../../components/Review/Review";
import CreateReview from "../CreateReview/CreateReview";
const axios = require("axios");

const reviewsUrl = "https://dc-100-restaurants-db.herokuapp.com/reviews";

class RestaurantDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showReviews: false,
			loading: true,
			reviewData: []
			// thisRestaurantsReviews: []
		};
	}
	getAllData = async () => {
		await axios.get(reviewsUrl).then(res => {
			let allReviewData = res.data;
			console.log(allReviewData);
			const reviews = allReviewData.map(item => {
				const newReview = {};
				newReview.id = item._id;
				newReview.restReviewId = item.restaurantId;
				newReview.reviewName = item.name;
				newReview.reviewRating = item.rating;
				newReview.reviewContent = item.review;
				return newReview;
			});
			this.setState({ reviewData: reviews, loading: false });
			console.log("got reviews");
		});
	};
	componentDidMount() {
		this.getAllData();
	}

	render() {
		console.log(this.state.reviewData);
		console.log(this.props.currentData);
		const restReviewsArray = [];

		this.state.reviewData.map(item => {
			if (item.restReviewId === this.props.currentData.data._id) {
				restReviewsArray.push(item);
			}
			console.log(restReviewsArray);
		});

		if (!this.state.loading) {
			return (
				<div className='rest-detail-box-container'>
					<div
						className='detail-overlay'
						onMouseDown={() => this.props.closeClickedRestaurantDetails(true)}
					></div>
					<div className='rest-detail-container'>
						<div className='rest-image-container'>
							<img
								className='rest-image-picture'
								src={this.props.currentData.data.imageUrl}
								alt='whoops'
							/>
						</div>
						<div className='rest-data-details'>
							<div className='rest-data-name'>
								<span>{this.props.currentData.data.name}</span>
								<div className='rest-data-content'>
									<div className='rest-data location'>
										<span className='rest-data-street'>
											{this.props.currentData.data.location.address},
										</span>
										<span className='rest-data-city'>
											{this.props.currentData.data.location.city}
										</span>
									</div>
								</div>
							</div>
							<div className='rest-data-info'>
								<div className='rest-data'>
									<div className='rest-data-description'>
										<h2>Phone Number</h2>
									</div>
									<div className='rest-data-content'>
										{this.props.currentData.data.phone}
									</div>
								</div>
								<div className='rest-data'>
									<div className='rest-data-description'>
										<h2>Categories</h2>
									</div>
									<div className='rest-data-categories'>
										<ul>
											{this.props.currentData.data.categories.map(item => {
												return <li>{item}</li>;
											})}
										</ul>
									</div>
								</div>
								<div className='rest-data'>
									<div className='rest-data-description'>
										<h2>Webstite</h2>
									</div>
									<div className='rest-data-content'>
										<a href={this.props.currentData.data.yelpUrl}>
											Visit on Yelp
										</a>
									</div>
								</div>
								<div className='rest-data'>
									<div className='rest-data-description'>
										<h2>Rating</h2>
									</div>{" "}
									<div className='rest-data-content'>
										{this.props.currentData.data.rating}
									</div>
								</div>
							</div>
							<div className='mapbox'>
								<Mapbox coordinates={this.props.currentData.data} />
							</div>
							<div className='rest-data create review'>
								<CreateReview
									restaurantId={this.props.currentData.data._id}
									afterCreate={this.getAllData}
								/>
								{restReviewsArray.length === 0 ? <h1>No Reviews!</h1> : null}
								<div className='reviews-total-container'>
									{restReviewsArray.map(item => {
										return (
											<Review
												reviewProps={item}
												afterCreate={this.getAllData}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return <div>LOADING</div>;
		}
	}
}
export default RestaurantDetail;

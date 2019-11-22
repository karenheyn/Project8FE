import React, { Component } from "react";
import "./RestaurantDetail.css";
import "../Backdrop/Backdrop";
import Mapbox from "../Mapbox/Mapbox";
import Form from "../../stories/Forms/Forms";
import Review from "../../components/Review/Review";
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

	componentDidMount() {
		const getAllData = async () => {
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
		// const createReviewsArray = async () => {

		// }
		getAllData();
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
						<div className='rest-details-data'>
							<h1 className='rest-data-name'>
								{this.props.currentData.data.name}
							</h1>
							<h3 className='rest-data-location'>
								{`${this.props.currentData.data.location.address}, 
                ${this.props.currentData.data.location.city}`}
							</h3>
							<h3>Categories:</h3>
							{this.props.currentData.data.categories.map(item => {
								return <h3>{item}</h3>;
							})}
							<a href={this.props.currentData.data.yelpUrl}>Yelp Url</a>
							<h4>Phone Number: {this.props.currentData.data.phone}</h4>
							<h5>Rating: {this.props.currentData.data.rating}</h5>

							<Mapbox coordinates={this.props.currentData.data} />

							<Form type='comment' name='name' label='Name' comment />
							{this.state.reviewData.length >= 1 ? (
								<h1>No Reviews!</h1>
							) : (
								<h1>NO</h1>
							)}

							<div className='reviews-total-container'>
								{restReviewsArray.map(item => {
									return <Review reviewProps={item} />;
								})}
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

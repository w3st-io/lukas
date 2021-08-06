const companyInfo = require('../companyInfo')

module.exports = {
	// Caraousel Slider //
	caraousel: [
		{
			caption:'',
			text: '',
			img: require('../../assets/images/pages/index/slide1.jpg'),
		},
		{
			caption: '',
			text: '',
			img: require('../../assets/images/pages/index/slide2.jpg'),
		},
	],

	// Main Details Company Info //
	mainDetails: {
		caption1: companyInfo.companyCaption1,
		address: companyInfo.address,
		googleMapsLink: companyInfo.googleMapsLink,
		hoursOfOperation: companyInfo.hoursOfOperation,
		text: 'By the hour, apointments only',
	},

	sliderImages: [],

	moreDetails: {
		row1: {
			image: require('../../assets/images/pages/index/blackmarble.jpg'),
		},

		row2: {
			header: 'Our Food',
			
			text: 'insert food details here',

			image: require('../../assets/images/pages/index/wwcdfy.jpg'),
		},
	
		row3: {
			header: 'Meet Pamela',
			
			description1: 'Pamela, Owner and Founder of Balance Within is dedicated to assisting people to find peace within their lives.',

			description2: 'As a Intuitive Healer, Reiki Practitioner and Wellness Coach - I offer my gifts, tools and teachings to assist others in their wellness journey for optimal health and it starts with mind, body and spirit - Reiki Energy Healing, Chakra Clearing and Attunements, Crystal Healing, Sound Bowl Healing...',

			caraousel: [
				{
					caption: '',
					text: '',
					img: require('../../assets/images/pages/index/owner.jpg'),
				},
			],
		},
	},
}
module.exports = {
	name: "chris-snowden.me", // optional, falls back to object key
	description: "Chris' Personal web site",
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		freshChrome: "site"
	},
	urls: [
		"https://www.chris-snowden.me/",
		"https://www.chris-snowden.me/contact",
		"https://www.chris-snowden.me/projects",
	]
};

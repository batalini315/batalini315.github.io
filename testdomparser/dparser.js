const axios = require('axios.js');
const domParser = require('dom-parser.js');

var cache = {};
async function crawler(url, id, cb) {
	cache[url] = cache[url] ? cache[url] : await axios.get(url)
			.catch(function (e) {
				console.error("Err near the axios.get", e);
			});
	return cb(cache[url].data, id);
}

function getInnerHTML_example_using_dom_parser(x, id) {
	let r = null;
	try {
		let dp = new domParser({errorHandler: (e) => {
				clog(e);
			}});
		let xmldoc = dp.parseFromString(x, 'text/html');
		let el = xmldoc.getElementById(id);
		r = el.innerHTML;
	} catch (e) {
		console.error(e);
	}
	return JSON.stringify(r);
}

function getInnerHTML(x, id) {
	let resultAsString = null;
	// Please write your code here
	// Please don't use any standard or nonstandard DOMParser
	return resultAsString;
}

(async () => {
	let url = "https://www.amazon.com/dp/B01I5X5SQE"
	let id = 'SalesRank';
	let r1 = await crawler(url, id, getInnerHTML_example_using_dom_parser);
	let r2 = await crawler(url, id, getInnerHTML_example_using_dom_parser);
	console.log('Does the "getInnerHTML_example_using_dom_parser" function work correctly?', r1 === r2);
	let r3 = await crawler(url, id, getInnerHTML);
	console.log('Does the "getInnerHTML" function work correctly?', r3 === r2);
})()

var searchTerm = "";
var numRecords = 0;
var startYear = "";
var endYear = "";


function search() {
	// ***** TEST *****
	searchTerm = "Dogs";
	numRecords = 5;
	startYear = 2000;
	endYear = 2007;

	// // Real Code to fetch
	// searchTerm = $(" ***** ").text();
	// numRecords = parseInt($(" ***** ").val());
	// startYear = $(" ***** ").html();
	// endYear = $(" ***** ").html();
	// console.log(searchTerm);
	// console.log(numRecords);
	// console.log(startYear);
	// console.log(endYear);

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var pages = Math.ceil(numRecords/10);

	url += '?' + $.param({
		'api-key': "20221c5d00e0410eb508015a63098539",
		'q': searchTerm,
		'page': pages,
		'begin_date': startYear + "0101",
		'end_date': endYear + "0101"
	});

	// ***** TEST *****
	console.log(url);

	$.ajax({
		url: url,
		method: "GET"
	}).done(function(response){
		
		// ***** TEST *****
		console.log(response);

	}).fail(function(err) {
 		throw err;
	});


}

function clear() {

}

search();
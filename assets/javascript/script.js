var searchTerm = "";
var numRecords = 0;
var startYear = "";
var endYear = "";


function search() {

	// $( "div.demo-container" ).text()

	// ***** DUMMY VARIABLES *****
	// searchTerm = "Dogs";
	// numRecords = 5;
	// startYear = 2000;
	// endYear = 2007;

	// grabs inputs from text boxes
	searchTerm = $("#searchInput").val().trim();
	numRecords = $("#numRecords").val().trim();
	parseInt(numRecords);
	startYear = $("#startYear").val().trim();
	endYear = $("#endYear").val().trim();

	// // Real Code to fetch  <--- Uncomment and replace "*****" values with target divs from HTML
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

	$.ajax({
		url: url,
		method: "GET"
	}).done(function(response){

		console.log(response);
		
		// ***** TEST *****
		// <--- Need to replace with div creation iteration (loop through response object)

			var objectDiv = response.response;

			for (i=0; i<objectDiv.docs.length; i++) {

				// logging results
				console.log(objectDiv.docs[i].headline.main);
				console.log(objectDiv.docs[i].source);
				console.log(objectDiv.docs[i].pub_date);
				console.log(objectDiv.docs[i].web_url);
				console.log("_________");

				// creates an html element for each return query
				var articleDiv = $("<div class='well'>");

				// appends gray boxes for each return query
				$("#topArticles").append(articleDiv);

				// creates an array of each parameter to query
				var returnParams = [

					$("<p>").html("<h2>" + objectDiv.docs[i].headline.main),
					$("<p>").html("<h4>" + objectDiv.docs[i].source),
					$("<p>").html(objectDiv.docs[i].pub_date),
					$("<p>").html("<a href>" + objectDiv.docs[i].web_url),
					
					]

					// pushes results to individual divs
					$(articleDiv).html(returnParams);

			} 


	}).fail(function(err) {
 		throw err;
	});


}


// click button functionality

	$("#search").on("click", function(event) {
		// alert("search");
		// event.preventDefault();
		search();

	});

	$("#clear").on("click", function() {
		// alert("clear");
		clear();
	});


// clears result div
function clear() {
	$("#topArticles").html('');

}


// search();
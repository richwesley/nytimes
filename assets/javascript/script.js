var searchTerm = "";
var numRecords = 0;
var startYear = "";
var endYear = "";


function search() {
	// ***** TEST *****
	searchTerm = "Shrek";
	numRecords = 5;
	startYear = 2000;
	endYear = 2007;

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
		
		// ***** TEST *****
		// <--- Need to replace with div creation iteration (loop through response object)
		console.log(response);
			

			var objectDiv = response.response;

			for (i=0; i<objectDiv.docs.length; i++) {

				var articleDiv = $("<div class='well'>");

				$("#topArticles").append(articleDiv);

				// console.log(objectDiv.docs[i].headline.main);

				console.log(objectDiv.docs[i].headline.main);
				console.log(objectDiv.docs[i].source);
				console.log(objectDiv.docs[i].pub_date);
				console.log(objectDiv.docs[i].web_url);
				console.log("_________");

				var title = $("<p>").text(objectDiv.docs[i].headline.main);
				// var source =$("<p>").text(objectDiv.docs[i].source);


				$(".well").append(title);
				// $(".well").append(source);

			} 


	}).fail(function(err) {
 		throw err;
	});


}

// click button functionality

	$("#search").on("click", function() {
		// alert("search");
		search();
	});

	$("#clear").on("click", function() {
		// alert("clear");
		clear();
	});

function clear() {
	$("#topArticles").html('');

	// Clear result content divs   <---  ***** Need to Code *****

}


search();
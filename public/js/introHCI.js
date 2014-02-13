'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	var detailz = $(this).next();

			$.get("/project/" + idNumber, function(result){
				detailz.html(result.summary);
			});


	console.log("User clicked on project " + idNumber);
}

//function addProject(result){//
//	console.log(result);
//}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {

	var woop = $(this).next();

	$.get("/palette/", function(result){
		woop.html(result.summary);
	});
	console.log("User clicked on color button");
}

var myDTP = new FlaterialDateTimePicker(document.getElementById('dateInput'), {
	minDate: null,
	// minDate: "10-10-2016",
	
	maxDate: null,
	// maxDate: "30-12-2018",
	
	currentDate: null,
	// currentDate: "31-10-2016",
	
	currentTime: null,
	// currentTime: "13:35",
	
	date: true,

	time: false,
	
	format: "dddd DD MMMM YYYY - HH:mm"
});

console.error(myDTP);
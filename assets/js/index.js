$(function() {
  var options = {
    xaxis: {
        axisLabel: "2012",
    },
    yaxes: {
      axisLabel: "Gold Price(USD)"
    }
  };
	var student = [{
			score: 2,
			grade: 27
		},{
			score: 1,
			grade: 29
		},{
			score: 5,
			grade: 41
		},{
			score: 5,
			grade: 53
		},{
			score: 3,
			grade: 56
		},{
			score: 2,
			grade: 61
		},{
			score: 5,
			grade: 65
		},{
			score: 1,
			grade: 72
	}];
	var d1 = [];
	for (var i = 0; i < student.length; i++) {
		d1.push([student[i].grade, student[i].score]);
	}

	console.log(d1);

	$.plot("#chart", [{
		label: 'IEET',
		data: d1
	}],options);

	
});
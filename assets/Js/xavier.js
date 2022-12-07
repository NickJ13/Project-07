function getSingleSeasonStatsByTeamAndCurrentYear(teamName="Rutgers"){
    var queryURL = `https://api.collegefootballdata.com/stats/season?team=${teamName}&year=2022`
    $.ajax({
        headers: {
            "Authorization": "Bearer NjbIvt5CZURrTLM3snOfwmg9qhSrVzB3UJ6Pn2JFIGmS0Zf1ANV5nkMKth9De+4W",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "https://nickj13.github.io/Project-07"
    },
        url: queryURL,
        method: "GET"
    }).then(function(res) {
        console.log(res);
    })
}

$('.btn').click(function(event){
    event.preventDefault();
    var college1 = $('#college-1').val();
    returnData(college1);
    var college2 = $('#college-2').val();
    returnData(college2);
    
    
    
})

getSingleSeasonStatsByTeamAndCurrentYear();

// year
// integer
// (query)	
// Year filter (required if no team specified)

// team
// string
// (query)	

// conference
// string
// (query)	

// startWeek
// integer
// (query)	

// endWeek
// integer
// (query)
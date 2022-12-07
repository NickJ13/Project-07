function getSingleSeasonStatsByTeamAndCurrentYear(teamName = "Rutgers") {
var queryURL = "https://api.collegefootballdata.com/stats/season?year=2022&team=Rutgers"

    console.log(queryURL)
    // https://api.collegefootballdata.com/stats/season?year=2022&team=Rutgers
    $.ajax({
        headers: {
            "Authorization": "Bearer NjbIvt5CZURrTLM3snOfwmg9qhSrVzB3UJ6Pn2JFIGmS0Zf1ANV5nkMKth9De+4W",
            "accept": "application/json",
            // "Access-Control-Allow-Origin": "https://nickj13.github.io/"
    },
        url: queryURL,
        method: "GET"
    }).then(function(res) {
        console.log(res);
    })
    // fetch(queryURL, {
    //     method: "GET",
    //     headers: {
    //         "Authorization": "Bearer NjbIvt5CZURrTLM3snOfwmg9qhSrVzB3UJ6Pn2JFIGmS0Zf1ANV5nkMKth9De+4W",
    //         "accept": "application/json"
    //     },
    //     mode: "no-cors"
    // }).then(function(response) {
    //     return response.json()
    // }).then(function(data) {
    //     console.log(data)
    // }).catch(function(err) {
    //     console.log(err)
    // })
}

$('.btn').click(function (event) {
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
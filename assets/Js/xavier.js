// function getSingleSeasonStatsByTeamAndCurrentYear(teamName = "Rutgers") {
// var queryURL = "https://api.collegefootballdata.com/stats/season?year=2022&team=Rutgers"

//     console.log(queryURL)
//     // https://api.collegefootballdata.com/stats/season?year=2022&team=Rutgers
//     $.ajax({
//         headers: {
//             "Authorization": "Bearer NjbIvt5CZURrTLM3snOfwmg9qhSrVzB3UJ6Pn2JFIGmS0Zf1ANV5nkMKth9De+4W",
//             "accept": "application/json",
//             // "Access-Control-Allow-Origin": "https://nickj13.github.io/"
//     },
//         url: queryURL,
//         method: "GET"
//     }).then(function(res) {
//         console.log(res);
//     })
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
// }

var college1Data = []
var college2Data = []

function returnFootballStats(name) {
    var queryURL = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/' + name
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(res) {
        // console.log(res)
        var data = []
        data.push(res.team.name)
        data.push(res.team.record.items[0].summary)
        data.push(res.team.standingSummary)
        data.push(res.team.links[0].href)
        console.log(data)
        return data
    })
}

$('.btn').click(function (event) {
    event.preventDefault();
    var college1 = $('#college-1').val();
    college1Data = returnFootballStats(college1);
    console.log(college1Data)
    var college2 = $('#college-2').val();
    college2Data = returnFootballStats(college2);
    console.log(college2Data)



})

// getSingleSeasonStatsByTeamAndCurrentYear();

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
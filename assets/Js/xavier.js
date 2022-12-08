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

// var football1Data = []
// var football2Data = []

// async function returnFootballStats(name) {
//     var queryURL = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/' + name
//     var data = await $.ajax({
//         url: queryURL,
//         method: 'GET'
//     }).then(function(res) {
//         var data = []
//         data.push(res.team.name, res.team.record.items[0].summary, res.team.standingSummary, res.team.links[0].href)
//         console.log(data)
//         return data
//     })
//     return data;
// }

// $('.btn').click(async function (event) {
//     event.preventDefault();
    // football1Data = []
    // football2Data = []
    // var college1 = $('#college-1').val();
    // var football1Complete = await returnFootballStats(college1);
    // football1Data.concat(football1Complete);
    // console.log(college1Complete)
    // var college2 = $('#college-2').val();
    // var football2Complete = await returnFootballStats(college2)
    // football2Data.concat(football2Complete);
    // console.log(college2Complete)
// 

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
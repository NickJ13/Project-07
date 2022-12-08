
var football1Data = []; //team name, record, conference standing, website.
var football2Data = [];
var college1Data = []; // city, population, tuition, school website, state.
var college2Data = [];

async function returnData(name) {
  var queryURL =
    "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" +
    name +
    "&api_key=kh5rCjQLNGljULfkmR1gb4fSHmO157RceOJDxMCZ";
  var data = await $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    var unsortedList = res.results;
    unsortedList.sort(function (a, b) {
      return b.latest.student.size - a.latest.student.size;
    });
    var data = [];
    data.push(
      unsortedList[0].latest.school.city,
      unsortedList[0].latest.student.size,
      unsortedList[0].latest.cost.tuition.in_state,
      unsortedList[0].latest.school.school_url,
      unsortedList[0].latest.school.state
    );
    return data;
  });
  return data;
}

async function returnFootballStats(name) {
  var queryURL =
    "http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/" +
    name;
  var data = await $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    var data = [];
    data.push(
      res.team.name,
      res.team.record.items[0].summary,
      res.team.standingSummary,
      res.team.links[0].href
    );
    return data;
  });
  return data;
}

$(".btn").click(async function (event) {
  event.preventDefault();
  football1Data = [];
  football2Data = [];
  college1Data = [];
  college2Data = [];
  var college1 = $("#college-1").val();
  football1Data = await returnFootballStats(college1);
  //   football1Data.concat(football1Complete);
  college1Data = await returnData(college1);
  var college2 = $("#college-2").val();
  football2Data = await returnFootballStats(college2);
  //   football2Data.concat(football2Complete);
  college2Data = await returnData(college2);
  console.log(football1Data);
  console.log(football2Data);
  console.log(college1Data);
  console.log(college2Data);
});


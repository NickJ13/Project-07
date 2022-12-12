var data1 = {
  name: "",
  city: "",
  size: 0,
  tuition: 0,
  url: "",
  state: "",
  teamName: "",
  record: "",
  standing: "",
  teamUrl: "",
};
var data2 = {
  name: "",
  city: "",
  size: 0,
  tuition: 0,
  url: "",
  state: "",
  teamName: "",
  record: "",
  standing: "",
  teamUrl: "",
};

async function returnData(name) {
  var queryURL =
    "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" +
    name +
    "&api_key=kh5rCjQLNGljULfkmR1gb4fSHmO157RceOJDxMCZ";
  var schoolData = await $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    var unsortedList = res.results;
    unsortedList.sort(function (a, b) {
      return b.latest.student.size - a.latest.student.size;
    });
    var schoolData = {
      name: unsortedList[0].latest.school.name,
      city: unsortedList[0].latest.school.city,
      size: unsortedList[0].latest.student.size,
      tuition: unsortedList[0].latest.cost.tuition.in_state,
      url: unsortedList[0].latest.school.school_url,
      state: unsortedList[0].latest.school.state,
    };
    return schoolData;
  });
  return schoolData;
}

async function returnFootballStats(name) {
  var queryURL =
    "http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/" +
    name;
  var data = await $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    var footballData = {
      teamName: res.team.name,
      record: res.team.record.items[0].summary,
      standing: res.team.standingSummary,
      teamUrl: res.team.links[0].href,
    };
    return footballData;
  });
  return data;
}

function displayData() {

var statsDiv = $("#college1SchoolStats")
var stats2Div = $("#college2SchoolStats")
  var col1name = data1.name;
  var col1NameP = $("<p>").text(`${col1name}`);
  statsDiv.append(col1NameP);
  var col1City = data1.city;
  var col1CityP = $("<p>").text(`${col1City}`);
  statsDiv.append(col1CityP);
  var col1size = data1.size;
  var col1sizeP = $("<p>").text(`Student Population: ${col1size}`);
  statsDiv.append(col1sizeP);
  var col1Tuition = data1.tuition;
  var col1TuitionP = $("<p>").text(`In-State Tuition:$${col1Tuition}`);
  statsDiv.append(col1TuitionP);
  var col1state = data1.state;
  var col1stateP = $("<p>").text(`${col1state}`);
  statsDiv.append(col1stateP);
  var col1url = data1.url;
  var col1urlP = $("<a>").attr('href',`${col1url}`).text('College Website');
  statsDiv.append(col1urlP);
  var col1teamName = data1.teamName;
  var col1teamNameP = $("<p>").text(`${col1teamName}`);
  statsDiv.append(col1teamNameP);
  var col1Record = data1.record;
  var col1RecordP = $("<p>").text(`${col1Record}`);
  statsDiv.append(col1RecordP);
  var col1Standing = data1.standing;
  var col1StandingP = $("<p>").text(`${col1Standing}`);
  statsDiv.append(col1StandingP);
  var col1teamUrl = data1.teamUrl;
  var col1teamUrlP = $("<a>").attr('href',`${col1teamUrl}`).text('Team Site');
  statsDiv.append(col1teamUrlP);

  var col2name = data2.name;
  var col2NameP = $("<p>").text(`${col2name}`);
  stats2Div.append(col2NameP);
  var col2City = data2.city;
  var col2CityP = $("<p>").text(`${col2City}`);
  stats2Div.append(col2CityP);
  var col2size = data2.size;
  var col2sizeP = $("<p>").text(`Student Population: ${col2size}`);
  stats2Div.append(col2sizeP);
  var col2Tuition = data2.tuition;
  var col2TuitionP = $("<p>").text(`In-State Tuition:$${col2Tuition}`);
  stats2Div.append(col2TuitionP);
  var col2state = data2.state;
  var col2stateP = $("<p>").text(`${col2state}`);
  stats2Div.append(col2stateP);
  var col2url = data2.url;
  var col2urlP = $("<a>").attr('href',`${col2url}`).text('College Website');
  stats2Div.append(col2urlP);
  var col2teamName = data2.teamName;
  var col2teamNameP = $("<p>").text(`${col2teamName}`);
  stats2Div.append(col2teamNameP);
  var col2Record = data2.record;
  var col2RecordP = $("<p>").text(`${col2Record}`);
  stats2Div.append(col2RecordP);
  var col2Standing = data2.standing;
  var col2StandingP = $("<p>").text(`${col2Standing}`);
  stats2Div.append(col2StandingP);
  var col2teamUrl = data2.teamUrl;
  var col2teamUrlP = $("<a>").attr('href',`${col2teamUrl}`).text('Team Site');
  stats2Div.append(col2teamUrlP);


  console.log(statsDiv)
      // console.log(college2StatsDiv)
}

$(".btn").click(async function (event) {
  event.preventDefault();
  $('#college1SchoolStats').empty();
  $('#college2SchoolStats').empty();

  var college1 = $("#college-1").val();
  var football1Data = await returnFootballStats(college1);
  var college1Data = await returnData(college1);
  var college2 = $("#college-2").val();
  var football2Data = await returnFootballStats(college2);
  var college2Data = await returnData(college2);
  data1.name = college1Data.name;
  data1.city = college1Data.city;
  data1.size = college1Data.size;
  data1.tuition = college1Data.tuition;
  data1.url = college1Data.url;
  data1.state = college1Data.state;
  data2.name = college2Data.name;
  data2.city = college2Data.city;
  data2.size = college2Data.size;
  data2.tuition = college2Data.tuition;
  data2.url = college2Data.url;
  data2.state = college2Data.state;

  data1.teamName = football1Data.teamName;
  data1.record = football1Data.record;
  data1.standing = football1Data.standing;
  data1.teamUrl = football1Data.teamUrl;
  data2.teamName = football2Data.teamName;
  data2.record = football2Data.record;
  data2.standing = football2Data.standing;
  data2.teamUrl = football2Data.teamUrl;

  displayData();
  console.log(data1, data2);


});


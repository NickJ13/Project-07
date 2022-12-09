// var football1Data = []; //team name, record, conference standing, website.
// var football2Data = [];
// var college1Data = []; // schoo name, city, population, tuition, school website, state.
// var college2Data = [];
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
  }
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
    // var data = [];
   var schoolData = {
      name: unsortedList[0].latest.school.name,
      city: unsortedList[0].latest.school.city,
      size: unsortedList[0].latest.student.size,
      tuition: unsortedList[0].latest.cost.tuition.in_state,
      url: unsortedList[0].latest.school.school_url,
      state: unsortedList[0].latest.school.state,
    };
    // data.push(
    //   unsortedList[0].latest.school.name,
    //   unsortedList[0].latest.school.city,
    //   unsortedList[0].latest.student.size,
    //   unsortedList[0].latest.cost.tuition.in_state,
    //   unsortedList[0].latest.school.school_url,
    //   unsortedList[0].latest.school.state
    // );
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
    // data.push(
    //   res.team.name,
    //   res.team.record.items[0].summary,
    //   res.team.standingSummary,
    //   res.team.links[0].href
    // );
    return footballData;
  });
  return data;
}

$(".btn").click(async function (event) {
  event.preventDefault();
//   football1Data = {};
//   football2Data = {};
//   college1Data = [];
//   college2Data = [];
// colleges = [];
  var college1 = $("#college-1").val();
  var football1Data = await returnFootballStats(college1);
  //   football1Data.concat(football1Complete);
  var college1Data = await returnData(college1);
  var college2 = $("#college-2").val();
  var football2Data = await returnFootballStats(college2);
  //   football2Data.concat(football2Complete);
  var college2Data = await returnData(college2);
  // colleges[0].name=colleges1data.name
  // colleges[0].name=colleges1data.name
  data1.name=college1Data.name
  data1.city=college1Data.city
  data1.size=college1Data.size
  data1.tuition=college1Data.tuition
  data1.url=college1Data.url
  data1.state=college1Data.state
  data2.name=college2Data.name
  data2.city=college2Data.city
  data2.size=college2Data.size
  data2.tuition=college2Data.tuition
  data2.url=college2Data.url
  data2.state=college2Data.state

  data1.teamName = football1Data.teamName
  data1.record = football1Data.record
  data1.standing = football1Data.standing
  data1.teamUrl = football1Data.teamUrl
  data2.teamName = football2Data.teamName
  data2.record = football2Data.record
  data2.standing = football2Data.standing
  data2.teamUrl = football2Data.teamUrl


  // for (var i=6; i<data1.length; i++) {
  //   data1[i]=football1Data[i]
  //   data2[i]=football2Data[i]
  // }

  // colleges.forEach(i => {
  //   for (let n in i) {
  //     i[n]=0
  //     i[n]=1
  //   }
  // })

  // console.log(football1Data);
  // console.log(football2Data);
  // console.log(college1Data);
  // console.log(college2Data);
  console.log(data1, data2)
});


// schoo name, city, population, tuition, school website, state

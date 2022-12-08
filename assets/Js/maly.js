

$("#collegeOneName").text(college1Data[0]);
$("#collegeTwoName").text(college2Data[0]);
// $("#collegeOneSchoolStats").text(`${college1} School Stats`);
// $("#collegeTwoSchoolStats").text(`${college2} School Stats`);
// $("#collegeOneSportsStats").text(`${college1} Sports Stats`);
// $("#collegeTwoSportsStats").text(`${college2} Sports Stats`);
// break

function displayData (dataToDisplay) { // dataToDisplay => [{name, city, size, tuition, school_url, state},{name, city, size, tuition, school_url, state}]
    var college1StatsDiv = $("<div id='college1SchoolStats'>")
    var college2StatsDiv = $("<div id='college2SchoolStats'>")
    for (var i = 0; i < dataToDisplay.length; i++) {
        var html = `<p>${dataToDisplay[i].name}</p><p>${dataToDisplay[i].city}</p><p></p><p></p><p></p>`;
        $(`<div id='college${i+1}SchoolStats'>`).html(html);
    }

}

var collegeOneStatsDiv = $("<div id='collegeOneSchoolStats'>")

var collegeOneCity = college1Data[0];
var collegeOneCityText = $("<p>").text(`${college1Data.name}`);
collegeOneStatsDiv.append(collegeOneCityText)

var collegeOnePop = college1Data[1];
var collegeOnePopText = $("<p>").text(`${collegeOnePop}`);
collegeOneStatsDiv.append(collegeOnePopText)

var collegeOneTuition = college1Data[2];
var collegeOneTuitionText = $("<p>").text(`${collegeOneTuition}`);
collegeOneStatsDiv.append(collegeOneTuitionText)

var collegeOneWebsite = college1Data[3];
var collegeOneWebsiteText = $("<p>").text(`${collegeOneWebsite}`);
collegeOneStatsDiv.append(collegeOneWebsiteText)

// break

// var collegeTwoStatsDiv = $("<div id='collegeTwoSchoolStats'>")

var collegeTwoCity = res[1].latest.school.city;
var collegeTwoCityText = $("<p1>").text(`${collegeTwoCity}`);
collegeTwoStatsDiv.append(collegeTwoCityText)

var collegeTwoPop = res[1].latest.student.size;
var collegeTwoPopText = $("<p2>").text(`${collegeTwoPop}`);
collegeTwoStatsDiv.append(collegeTwoPopText)

var collegeTwoTuition = res[1].latest.cost.tuition.in_state;
var collegeTwoTuitionText = $("<p3>").text(`${collegeTwoTuition}`);
collegeTwoStatsDiv.append(collegeTwoTuitionText)

var collegeTwoWebsite = res[1].latest.school.school_url;
var collegeTwoWebsiteText = $("<p3>").text(`${collegeTwoWebsite}`);
collegeTwoStatsDiv.append(collegeTwoWebsiteText)

//break

var collegeOneSportsDiv = $("<div id='collegeOneSportStats'>")

var teamOneName = res.team.name;
var teamOneNameText = $("<p1>").text(`${teamOneName}`);
collegeOneSportsDiv.append(teamOneName)

var teamOneRecord = res.team.record.items[1].summary;
var teamOneRecordText = $("<p2>").text(`${teamOneRecord}`);
collegeOneSportsDiv.append(teamOneRecordText)

var teamOneConf = res.standingSummary;
var teamOneConfText = $("<p3>").text(`${teamOneConf}`);
collegeOneSportsDiv.append(teamOneConfText)

var teamOneWeb = res.team.links[0].href;
var teamOneWebText = $("<p3>").text(`${teamOneWeb}`);
collegeOneSportsDiv.append(teamOneWebText)

//break

var collegeTwoSportsDiv = $("<div id='collegeTwoSportStats'>")

var teamTwoName = res.team.name;
var teamTwoNameText = $("<p1>").text(`${teamTwoName}`);
collegeTwoSportsDiv.append(teamTwoNameText)

var teamTwoRecord = res.team.record.items[1].summary;
var teamTwoRecordText = $("<p2>").text(`${teamTwoRecord}`);
collegeTwoSportsDiv.append(teamTwoRecordText)

var teamTwoConf = res.standingSummary;
var teamTwoConfText = $("<p3>").text(`${teamTwoConf}`);
collegeTwoSportsDiv.append(teamTwoConfText)

var teamTwoWeb = res.team.links[0].href;
var teamTwoWebText = $("<p3>").text(`${teamOneWeb}`);
collegeTwoSportsDiv.append(teamTwoWebText)



















var button = $(".Btn");
var inputField = $(".inputField");



// function inputColleges () {
//     collegeName.each(function(i){
//         $(this).children("textarea").val(localStorage.getItem($(this).attr("id")));
// })
// }


button.on('click', function (i){
    inputField.each(function() {
        localStorage.setItem($(this).attr("id"), $(this).children("textarea").val());
    })
});

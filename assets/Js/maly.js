

$("#collegeOneName").text(`${college1}`)
$("#collegeTwoName").text(`${college2}`)

$("#collegeOneSchoolStats").text(`${college1} School Stats`)
$("#collegeTwoSchoolStats").text(`${college2} School Stats`)

$("#collegeOneSportsStats").text(`${college1} Sports Stats`)
$("#collegeTwoSportsStats").text(`${college2} Sports Stats`)

// break

var collegeOneStatsDiv = $("<div id='collegeOneSchoolStats'>")

var collegeOneCity = res.city;
var collegeOneCityText = $("<p1>").text(`${collegeCity}`);
collegeOneStatsDiv.append(collegeOneCityText)

var collegeState = res.state;
var collegeStateText = $("<p2>").text(`${collegeState}`);
collegeOneStatsDiv.append(collegeStateText)

var collegeWebsite = res.school_url;
var collegeWebsiteText = $("<p3>").text(`${collegeWebsite}`);
collegeOneStatsDiv.append(collegeWebsiteText)

// break

var collegeTwoStatsDiv = $("<div id='collegeTwoSchoolStats'>")

var collegeCity = res.city;
var collegeCityText = $("<p1>").text(`${collegeCity}`);
collegeTwoStatsDiv.append(collegeCityText)

var collegeState = res.state;
var collegeStateText = $("<p2>").text(`${collegeState}`);
collegeTwoStatsDiv.append(collegeStateText)

var collegeWebsite = res.school_url;
var collegeWebsiteText = $("<p3>").text(`${collegeWebsite}`);
collegeOneStatsDiv.append(collegeWebsiteText)

//break

var collegeOneSportsDiv = $("<div id='collegeOneSportStats'>")

var teamOneName = res.team.displayName;
var teamOneNameText = $("<p1>").text(`${teamOneName}`);
collegeOneSportsDiv.append(teamOneName)

var teamOneRecord = res.record[0].summary;
var teamOneRecordText = $("<p2>").text(`${teamOneRecord}`);
collegeOneSportsDiv.append(teamOneRecordText)

var teamOneConf = res.standingSummary;
var teamOneConfText = $("<p3>").text(`${teamOneConf}`);
collegeOneSportsDiv.append(teamOneConfText)

//break

var collegeTwoSportsDiv = $("<div id='collegeTwoSportStats'>")

var teamTwoName = res.team.displayName;
var teamTwoNameText = $("<p1>").text(`${teamTwoName}`);
collegeTwoSportsDiv.append(teamTwoNameText)

var teamTwoRecord = res.record[0].summary;
var teamTwoRecordText = $("<p2>").text(`${teamTwoRecord}`);
collegeTwoSportsDiv.append(teamTwoRecordText)

var teamTwoConf = res.standingSummary;
var teamTwoConfText = $("<p3>").text(`${teamTwoConf}`);
collegeTwoSportsDiv.append(teamTwoConfText)



















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

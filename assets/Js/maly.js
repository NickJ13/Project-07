

$("#collegeOneName").text(`${college1}`)
$("#collegeTwoName").text(`${college2}`)

$("#collegeOneSchoolStats").text(`${college1} School Stats`)
$("#collegeTwoSchoolStats").text(`${college2} School Stats`)

$("#collegeOneSportsStats").text(`${college1} Sports Stats`)
$("#collegeTwoSportsStats").text(`${college2} Sports Stats`)

// break

var collegeOneStatsDiv = $("<div id='collegeOneSchoolStats'>")

var collegeOneCity = res[1].latest.school.city;
var collegeOneCityText = $("<p1>").text(`${collegeOneCity}`);
collegeOneStatsDiv.append(collegeOneCityText)

var collegeOnePop = res[1].latest.student.size;
var collegeOnePopText = $("<p2>").text(`${collegeOnePop}`);
collegeOneStatsDiv.append(collegeOnePopText)

var collegeOneTuition = res[1].latest.cost.tuition.in_state;
var collegeOneTuitionText = $("<p3>").text(`${collegeOneTuition}`);
collegeOneStatsDiv.append(collegeOneTuitionText)

var collegeOneWebsite = res[0].latest.school.school_url;
var collegeOneWebsiteText = $("<p3>").text(`${collegeOneWebsite}`);
collegeOneStatsDiv.append(collegeOneWebsiteText)

// break

var collegeTwoStatsDiv = $("<div id='collegeTwoSchoolStats'>")

var collegeTwoCity = res[1].latest.school.city;
var collegeTwoCityText = $("<p1>").text(`${collegeTwoCity}`);
collegeTwoStatsDiv.append(collegeTwoCityText)

var collegeTwoPop = res[1].latest.student.size;
var collegeTwoPopText = $("<p2>").text(`${collegeTwoPop}`);
collegeTwoStatsDiv.append(collegeTwoPopText)

var collegeTwoTuition = res[1].latest.cost.tuition.in_state;
var collegeTwoTuitionText = $("<p3>").text(`${collegeTwoTuition}`);
collegeTwoStatsDiv.append(collegeTwoTuitionText)

var collegeTwoWebsite = res[0].latest.school.school_url;
var collegeTwoWebsiteText = $("<p3>").text(`${collegeTwoWebsite}`);
collegeTwoStatsDiv.append(collegeTwoWebsiteText)

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



$("#collegeOneName").text(`${college1}`)
$("#collegeTwoName").text(`${college2}`)

$("#collegeOneSchoolStats").text(`${college1} School Stats`)
$("#collegeTwoSchoolStats").text(`${college2} School Stats`)

$("#collegeOneSportsStats").text(`${college1} Sports Stats`)
$("#collegeTwoSportsStats").text(`${college2} Sports Stats`)

// break

var collegeOneStatsDiv = $("<div id='collegeOneSchoolStats'>")

var collegeCity = res.city;
var collegeCityText = $("<p1>").text(`${collegeCity}`);
collegeOneStatsDiv.append(collegeCityText)

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

var collegeTwoSportsDiv = $("<div id='collegeOneSportStats'>")

var teamMastcot = res.mascot;
var teamMascotText = $("<p1>").text(`${teamMascot}`);
collegeTwoSportsDiv.append(teamMascotText)

var teamConf = res.confrence;
var teamConfText = $("<p2>").text(`${teamConf}`);
collegeTwoSportsDiv.append(teamConfText)

var teamRecord = res.record;
var teamRecordText = $("<p3>").text(`${teamRecord}`);
collegeTwoSportsDiv.append(teamRecordText)

















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

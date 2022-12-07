var collegeCity = res[].city;
var collegeCityText = $("<p1>").text(`${collegeCity}`);

var collegeState = res.state;
var collegeStateText = $("<p2>").text(`${collegeState}`);

var collegeWebsite = res.school_url;
var collegeWebsiteText = $("<p3>").text(`${collegeWebsite}`);











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

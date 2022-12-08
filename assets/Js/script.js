
// var collegeTest = $(this).attr('#college-1').val();


// console.log(queryURL);

function returnData(name){
    //var splitName = name.replaceAll(' ', '%20');
    var queryURL = 'https://api.data.gov/ed/collegescorecard/v1/schools?school.name=' + name + '&api_key=kh5rCjQLNGljULfkmR1gb4fSHmO157RceOJDxMCZ';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(res) {
        var unsortedList = res.results;
        unsortedList.sort(function(a, b){
            return b.latest.student.size - a.latest.student.size;
        });
        
        console.log(unsortedList);
        
        // console.log(res.results[0].latest.student.size);
        console.log(res.results[0].school.name);
        console.log(res);
    })
}

$('.btn').click(function(event){
    event.preventDefault();
    var college1 = $('#college-1').val();
    returnData(college1);
    var college2 = $('#college-2').val();
    returnData(college2);
    
    
    
})
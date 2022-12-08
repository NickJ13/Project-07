
// var collegeTest = $(this).attr('#college-1').val();


// console.log(queryURL);

async function returnData(name){
    //var splitName = name.replaceAll(' ', '%20');
    var queryURL = 'https://api.data.gov/ed/collegescorecard/v1/schools?school.name=' + name + '&api_key=kh5rCjQLNGljULfkmR1gb4fSHmO157RceOJDxMCZ';
    var data = await $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(res) {
        var unsortedList = res.results;
        unsortedList.sort(function(a, b){
            return b.latest.student.size - a.latest.student.size;
        });
        var data = [];
        console.log(unsortedList);
        data.push(unsortedList[0].latest.school.city, unsortedList[0].latest.student.size, unsortedList[0].latest.cost.tuition.in_state, unsortedList[0].latest.school.school_url, unsortedList[0].latest.school.state);
        // console.log(res.results[0].latest.student.size);
        console.log(res.results[0].school.name);
        console.log(res);
        return data;
    })
}

$('.btn').click(async function(event){
    event.preventDefault();
    var college1 = $('#college-1').val();
    college1Data = await returnData(college1);
    var college2 = $('#college-2').val();
    college2Data = await returnData(college2);
    
    
    
})
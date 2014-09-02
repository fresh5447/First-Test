$(function(){

    $('#submit').on('click', function () {
        var formInput = $('#url').val();
        $.ajax('http://domains.bootname.com/api/v1/domain/' + formInput, {
            type: 'GET',
            dataType: 'JSONP',
//            data: {'callback' : jQuery123},
            success: function (results) {
                console.log(results);
                results.forEach(function(display){
                    $('#outcome').text("Available Names: " + display.available + display.domain);
                    if(display.available){
                        $('#outcome').text("Your domain is available!").css("color", "green");
                    } else{
                        $('#outcome').text("Your domain is unavailable! but this one is: " + display.domain + "!").css("color", "red");
                    }
                });

            },
            error: function (error) {

            }
        });
    });


});


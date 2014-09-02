$(function(){

    var matchURL = function(input) {

        $('submit').on('click', function () {
            var formInput = $('url').val();

            $.ajax('http://domains.bootname.com/', {
                type: 'POST',
                dataType: 'JSONP',
                success: function (results) {
                    var url = "";
                        if(url == formInput){
                            $('div').text("Your domain is unavailable!").addClass("addGreen");
                        } else {
                            $('div').text("Your domain is available!").addClass("addGreen");
                        };
                },
                error: function (error) {
                    alert("Error Message");
                }
            });
        });
    }

    matchURL();
});




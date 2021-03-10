apimock = (function () {

    var seats = [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]];
    var mockdata = [];
	var function1W = {"movie": {"name": "Your Name", "genre": "Drama"}, "seats": seats, "date": "2016-08-25 10:20"};
	var function2W = {"movie": {"name": "A Silence Voice", "genre": "Drama"}, "seats": seats, "date": "2015-09-01 16:20"};
	var function3W = {"movie": {"name": "SuperHeroes Movie 2", "genre": "Action"}, "seats": seats, "date": "2021-09-01 16:20"};
    var function1Y = {"movie": {"name": "SuperHeroes Movie", "genre": "Action"}, "seats": seats, "date": "2018-12-19 17:00"};
    var function2Y = {"movie": {"name": "The Night", "genre": "Horror"}, "seats": seats, "date": "2018-12-19 19:40"};
    var function3Y = {"movie": {"name": "SuperHeroes Movie", "genre": "Action"}, "seats": seats, "date": "2018-12-19 14:30"};
    var function4Y = {"movie": {"name": "The Enigma", "genre": "Drama"}, "seats": seats, "date": "2018-12-20 17:00"};
	var function1Z = {"movie": {"name": "Tensei Shitara Slime Datta Ken", "genre": "Fantasy"}, "seats": seats, "date": "2020-10-25 13:20"};
	var function2Z = {"movie": {"name": "The Boys", "genre": "Action"}, "seats": seats, "date": "2020-09-01 16:20"};
	var function3Z = {"movie": {"name": "Breaking Bad", "genre": "Action"}, "seats": seats, "date": "2021-09-01 16:20"};

    mockdata["cinemaX"] = {"name": "cinemaX", "functions": [{"movie": {"name": "The Enigma", "genre": "Drama"}, "seats": seats, "date": "2018-12-18 15:30"}, {"movie": {"name": "The Enigma 2", "genre": "Drama"}, "seats": seats, "date": "2018-12-18 15:30"}]};
    mockdata["cinemaY"] = {"name": "cinemaY", "functions": [function1Y, function2Y, function3Y, function4Y]};
	mockdata["cinemaZ"] = {"name": "cinemaZ", "functions": [function1Z, function2Z,function3Z]};
	mockdata["cinemaW"] = {"name": "cinemaW", "functions": [function1W, function2W,function3W]};

    return {
        getFunctionsByCinema: function (cinema_name, callback) {
            callback(mockdata[cinema_name]);
        },
        getFunctionsByCinemaAndDate: function (cinema_name, fdate, callback) {
            callback(
                    mockdata[cinema_name].functions.filter(
                    funct => funct.date.includes(fdate))
            );
        }

    }

})();







/*
 Example of use:
 var fun=function(list){
 console.log(list);
 }
 apimock.getFunctionsByCinema("cinemaX",fun);
 apimock.getFunctionsByCinemaAndDate("cinemaX","2018-12-18",fun);*/
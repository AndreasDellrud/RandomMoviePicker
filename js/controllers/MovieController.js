/**
 * MovieController
 */
'use strict';
var app = angular.module('RandomMoviePicker');    
app.controller('MovieController', ['$scope', '$http', function($scope, $http){
    $scope.newMovie = function(){
        $http.get("http://www.omdbapi.com/?i="+ getRandomGoodMovieId() +"&plot=short&r=json")
            .success(function(data){
                $scope.randomMovie = 
                {
                    Title: data.Title,
                    Year: data.Year,
                    Plot: data.Plot,
                    Director: data.Director,
                    Actors: data.Actors,
                    Genre: data.Genre,
                    Rated: data.Rated,
                    Runtime: data.Runtime,
                    Metascore: data.Metascore,
                    imdbRating: data.imdbRating,
                    Poster: null	
                };
                getMoviePoster(data);
                isOnNetflix(data);
                $scope.loaded = true;
            })				
    };
    
    $scope.getBadMovie = function(){
        var movie = getRandomBadMovieId(); 
        $http.get("http://www.omdbapi.com/?i="+ movie +"&plot=short&r=json")
            .success(function(data){
                    $scope.randomMovie.Title = data.Title;
                    $scope.randomMovie.Year =  data.Year;
                    $scope.randomMovie.Plot = data.Plot;
                    $scope.randomMovie.Director = data.Director;
                    $scope.randomMovie.Actors = data.Actors;
                    $scope.randomMovie.Genre = data.Genre;
                    $scope.randomMovie.Rated = data.Rated;
                    $scope.randomMovie.Runtime = data.Runtime;
                    $scope.randomMovie.Metascore = data.Metascore;
                    $scope.randomMovie.imdbRating = data.imdbRating;
                    $scope.randomMovie.Poster = null;
                    console.log(data);
                    console.log(movie);	
                getMoviePoster(data);
                isOnNetflix(data);
                $scope.loaded = true;
            })	
    };
    
    function getMoviePoster(data){
        var movieId = data.imdbID;
        var apiKey = "39829a368ddffdfd9ccb7001d517ec85";
        $http.get("https://api.themoviedb.org/3/find/"+ movieId +"?external_source=imdb_id&api_key="+apiKey)
            .success(function(posterData){
                $scope.randomMovie.Poster = "http://image.tmdb.org/t/p/w342" + posterData.movie_results[0].poster_path;
            })
    }

    function isOnNetflix(data){
        var movieName = data.Title;
        $http.get("http://netflixroulette.net/api/api.php?title="+ movieName)
        .success(function(rouletteData){
            $scope.netflixLink = "http://www.netflix.com/title/"+ rouletteData.show_id;
            $scope.isMovieOnNetflix = true; 
        })
        .error(function(){
            $scope.isMovieOnNetflix = false;
            $scope.notOnNetflix = "Movie not on Netflix"
        })
    }
    
    function getRandomGoodMovieId(){
        var b = ["tt0111161","tt0068646","tt0071562","tt0468569","tt0050083","tt0108052","tt0110912","tt0060196","tt0167260","tt0137523","tt0120737","tt0080684","tt0109830","tt1375666","tt0073486","tt0167261","tt0133093","tt0099685","tt0076759","tt0047478","tt0317248","tt0114369","tt0102926","tt0114814","tt0038650","tt0118799","tt0110413","tt0064116","tt0816692","tt0245429","tt0120815","tt0120586","tt0034583","tt0021749","tt0054215","tt0082971","tt0047396","tt1675434","tt0027977","tt0120689","tt0103064","tt0253474","tt2582802","tt0407887","tt0088763","tt0209144","tt0172495","tt0078788","tt0057012","tt0043014","tt0482571","tt0078748","tt0110357","tt0032553","tt0405094","tt0095765","tt0081505","tt0050825","tt1853728","tt1345836","tt0910970","tt0169547","tt0095327","tt0090605","tt0033467","tt0053125","tt0364569","tt0119698","tt0052357","tt0082096","tt0086190","tt0087843","tt0022100","tt0211915","tt0051201","tt0105236","tt0112573","tt0435761","tt0066921","tt0180093","tt0075314","tt0036775","tt0056592","tt0056172","tt0338013","tt0093058","tt2096673","tt0086879","tt0070735","tt0045152","tt0040522","tt0062622","tt0208092","tt0071853","tt0012349","tt0114709","tt0059578","tt0119488","tt0042876","tt0361748","tt0053604","tt0042192","tt1832382","tt0097576","tt0040897","tt0017136","tt0055630","tt0086250","tt0372784","tt0053291","tt0041959","tt0105695","tt1187043","tt1049413","tt2106476","tt0081398","tt0363163","tt0119217","tt0057115","tt0095016","tt0071315","tt0018455","tt0113277","tt0047296","tt0457430","tt0031679","tt0050212","tt0096283","tt0015864","tt0089881","tt0044741","tt0050976","tt0083658","tt1305806","tt0050986","tt0120735","tt0017925","tt0080678","tt0112641","tt0347149","tt1291584","tt0993846","tt0434409","tt1205489","tt0055031","tt0118715","tt0268978","tt1392190","tt0032976","tt0077416","tt0892769","tt0061512","tt0031381","tt0116282","tt0117951","tt0046912","tt1255953","tt0167404","tt3659388","tt0758758","tt0025316","tt0266543","tt2267998","tt0978762","tt0084787","tt0477348","tt1979320","tt0033870","tt0266697","tt0046268","tt0395169","tt0079470","tt0091763","tt0064115","tt0469494","tt0074958","tt0053198","tt0060827","tt0092005","tt0052311","tt2024544","tt0093779","tt2278388","tt0245712","tt0107207","tt0405159","tt0075686","tt0032551","tt0052618","tt1130884","tt1028532","tt0087544","tt3011894","tt0046911","tt0079944","tt0083987","tt0036868","tt0107290","tt0032138","tt0401792","tt0440963","tt0246578","tt0056801","tt0044079","tt0112471","tt0114746","tt0088247","tt0338564","tt0107048","tt0120382","tt0198781","tt0058946","tt0353969","tt0848228","tt0073195","tt1201607","tt0075148","tt0072684","tt0072890","tt0083922","tt0050613","tt0113247","tt2015381","tt1220719","tt1504320","tt2084970","tt0044706","tt0058461","tt0325980","tt1392214","tt0092067","tt1454029","tt0038787","tt0046250","tt0061184","tt0374546","tt0070511","tt0101414","tt0048424","tt0052561","tt0047528","tt0381681","tt0111495","tt0118694","tt0053779","tt0061722","tt0169102","tt0062229","tt0049406","tt0069293"];

        return b[Math.floor((Math.random() * 250))];
    }
    
    function getRandomBadMovieId(){
        var b = ["tt4458206", "tt0270846", "tt0421051", "tt4009460", "tt0060666", "tt0417056", "tt0808240", "tt1316037", "tt0330994", "tt1213644", "tt0339034", "tt0463392", "tt0804492", "tt1309000", "tt0364986", "tt0470833", "tt0096870", "tt0830861", "tt0473310", "tt0953989", "tt0317676", "tt0059464", "tt0785077", "tt2071491", "tt0089280", "tt0118589", "tt2344678", "tt0249516", "tt0473024", "tt1623780", "tt0362165", "tt0054673", "tt0096149", "tt0060753", "tt0343788", "tt0086026", "tt1674047", "tt0456014", "tt4404474", "tt0367677", "tt0799949", "tt0061191", "tt0369226", "tt3036740", "tt0057970", "tt0131550", "tt0087258", "tt0252060", "tt0174917", "tt0093405", "tt0058615", "tt0055946", "tt0162930", "tt0299930", "tt0315775", "tt0185183", "tt0081693", "tt0075343", "tt0174685", "tt0057181", "tt0116839", "tt0118836", "tt0469849", "tt0469999", "tt0118665", "tt0057507", "tt0451109", "tt0055562", "tt2814362", "tt0072666", "tt0100665", "tt0066476", "tt0086972", "tt0117550", "tt0058548", "tt0929809", "tt0168172", "tt0318497", "tt0053464", "tt0088772", "tt0092297", "tt1572311", "tt0109376", "tt0382028", "tt0116165", "tt0053241", "tt0112873", "tt0054333", "tt1073498", "tt0073396", "tt0077834", "tt0050717", "tt0088100", "tt0105643", "tt0037798", "tt0804452", "tt0426615", "tt0110169", "tt0099656", "tt0466342"];
        console.log(b.length);
        
        return b[Math.floor((Math.random() * 100))];
    }
}]);
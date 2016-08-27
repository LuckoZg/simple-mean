app.controller('PregledController', ['$scope', '$routeParams', 'Film', function($scope, $routeParams, Film){
	console.log("PregledController");

	$scope.$parent.active = "pregled";
	$scope.abeceda = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','z'];

	var slovo = "";
	if($routeParams.slovo)
		slovo = $routeParams.slovo;

	Film.get(slovo, function(docs){
		$scope.filmovi = docs;
	});

}]);
app.controller('UnosController', ['$scope', 'Film', function($scope, Film){
	console.log("UnosController");

	$scope.$parent.active = "unos";
	$scope.message = false;
	$scope.film = {};

	Film.get("", function(docs){
		$scope.filmovi = docs;
	});

	Film.getZanrovi(function(docs){
		$scope.zanrovi = docs;
	});

	$scope.godine = [];
	var d = new Date();
	var n = d.getFullYear();
	for(var i = n; i >= 1900; i--)
	{
		$scope.godine.push(i);
	}

	$scope.post = function(){
		var formData = new FormData();
        var element = angular.element('#img');
        formData.append("slika", element[0].files[0]);
        formData.append("naslov", $scope.film.naslov);
        formData.append("zanr", $scope.film.zanr);
        formData.append("godina", $scope.film.godina);
        formData.append("trajanje", $scope.film.trajanje);

		Film.post(formData, function(response){
			if(response.error)
			{
				$scope.type = "danger";
				$scope.message = "Sva polja su obavezna";
			}
			else
			{
				$scope.film = {};
				element.val(null);
				$scope.filmovi.push(response);
				$scope.type = "success";
				$scope.message = "Film je uspješno unesen";
			}
		});
	}

	$scope.delete = function(id, index){
		Film.delete(id, function(response){
			$scope.filmovi.splice(index, 1);
			$scope.type = "success";
			$scope.message = "Film je obrisan";
		});
	}

}]);
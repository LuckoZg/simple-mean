app.factory('Film', ['$location', '$route', '$http', 'ImageUpload', function($location, $route, $http, ImageUpload){
	
	var Film = {

		get: function(slovo, callback){
			$http.get("/api/" + slovo).success(function(response){
				callback(response);
			}).error(function(err){
				console.log(err);
			});
		},

		getZanrovi: function(callback){
			$http.get("/api/zanrovi").success(function(response){
				callback(response);
			}).error(function(err){
				console.log(err);
			});
		},

		post: function(formdata, callback){
			ImageUpload('/api', formdata, function(response){
				callback(response);
			});
		},

		delete: function(id, callback){
			$http.delete("/api/" + id).success(function(response){
				callback(response);
			}).error(function(err){
				console.log(err);
			});
		}

	};
	
	return Film;

}]);
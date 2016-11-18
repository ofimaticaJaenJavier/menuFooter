var app = angular.module('ServicioPrincipal',[])
app.factory('ServicioPrincipal',
['$http',
function ($http) {
  return {
    recuperarurllarga: function (urlshort) {
      return $http({
        method: 'GET',
        timeout: 30000,
        url: 'js/datos.json',
        //url: window.localStorage.getItem("UrlEmpresa")+'/api/validateuserws',
        headers:{ 'Content-Type':'application/json','Access-Control-Allow-Origin':'*'},
      });
    }    
  }
}]);

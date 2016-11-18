
var app = angular.module('MenuFooter', []);

app.directive('menuFooter', ["$ionicGesture", "$ionicPlatform", "ServicioPrincipal", "$state", "$ionicPopup", function ($ionicGesture, $ionicPlatform,
    ServicioPrincipal, $state, $ionicPopup) {
    return {
        templateUrl: "menuFooter/menuFooter.html",
        

        link: function (scope, element, attrs) {
            scope.gesture = {
                used: ''
            };
            scope.flag = "http://ofimenutesting.cloudapp.net/content/Images/flags/es.svg";


            scope.onGesture = function (gesture) {
                scope.gesture.used = gesture;
                console.log(gesture);
                scope.hidden = false;
                if (gesture == "Swipe Up") {
                    scope.showClass = "contenedor-menu-show"
                    scope.showCapaOscurecer = "capaoscurecer-show"
                }
                if (gesture == "Swipe Down") {
                    scope.showClass = "";
                    scope.showCapaOscurecer = ""
                }



                scope.resultado = {};

                ServicioPrincipal.recuperarurllarga()
                    .success(function (urllong) {
                        scope.resultado = urllong.Idiomas;
                        console.log(urllong.Idiomas);
                    })
                    .error(function (error) {
                        console.log(error)
                    })


                scope.showAlert = function (template) {
                    var alertPopup = $ionicPopup.show({
                        templateUrl: template,
                        scope: scope
                    });

                    alertPopup.then(function (res) {
                        console.log('Thank you for not eating my delicious ice cream cone');
                    });

                    scope.cerrar = function () {
                        alertPopup.close();
                    };
                };
                
                scope.seleccionarBandera = function (idioma) {

                    console.log(idioma);
                    scope.flag = (idioma);
                    scope.cerrar()

                }

            };




        }

    }
}]);



/*app.controller('homeCtrl', ["$scope", "$ionicGesture", function ($scope, $ionicGesture) {
    $scope.slide = false;
    console.log("asdsd")
    $scope.gesture = {
        used: ''
    };
    $scope.onGesture = function (gesture) {
        $scope.gesture.used = gesture;
        console.log(gesture);
        $scope.hidden = false;
        if (gesture == "Swipe Up") {
            $scope.showClass = "contenedor-menu-show"
            $scope.showCapaOscurecer = "capaoscurecer-show"
        }
        if (gesture == "Swipe Down") {
            $scope.showClass = "";
            $scope.showCapaOscurecer = ""
        }
    }
}]);
*/
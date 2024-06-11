var app = angular.module('barclays', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "components/home.html",
          controller: ['$scope', function($scope) {
          }]
      })
      .state('carDetails', {
          url: "/car/:carId",
          params:{
            car:null
          },
          templateUrl: "components/carDetails.html",
          controller: ['$scope', '$stateParams', function($scope, $stateParams) {
             $scope.$parent.car = $stateParams.car;
             console.log($stateParams);
             if($scope.$parent.car == null){
                $scope.$parent.car = {
                    name:"KIA PICANTO 1.0 2 5DR",
                    carId:"C14358",
                    price:"5,995",
                    regYear:"2013 (13)",
                    mileage:"9,000",
                    engineSize:"1.0L",
                    fuelType:"Petrol",
                    gearBox:"Manual",
                    bodyStyle:"HatchBack",
                    colour:"Red",
                    imgUrl:"img/car1.jpg",
                    description:"One Owner, Only 9000 Miles, Up to 12 Months Warranty, Full Year MOT, Free Road Tax, Great Fuel Economy, Multi-Function Steering Wheel, Air Conditioning, Electric Windows, Electric Power Fold Mirrors, Remote Central Locking, Sony CD/MP3 Stereo System, Auxiliary/USB Connection, Bluetooth, Traction Control, Front Fog Lights, Alloy Wheels, ABS, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. RED, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £5,995"            
                }
             }
          }]
      });
}]);
app.directive('bxSlider', function () {
    var BX_SLIDER_OPTIONS = {
        auto: true,
        autoControls:false
    };

    return {
        restrict: 'A',
        require: 'bxSlider',
        priority: 0,
        controller: function() {},
        link: function (scope, element, attrs, ctrl) {
            var slider;
            ctrl.update = function() {
                slider && slider.destroySlider();
                slider = element.bxSlider(BX_SLIDER_OPTIONS);
            };
        }
    }
})
.directive('bxSliderItem', ['$timeout', function($timeout) {
    return {
        require: '^bxSlider',
        link: function(scope, elm, attr, bxSliderCtrl) {
            if (scope.$last) {
                bxSliderCtrl.update();
            }
        }
    }
}])
.directive('docListWrapper', ['$timeout', function ($timeout) {
    return {
        restrict: 'C',
        priority: 500,
        replace: false,
        templateUrl: 'components/banner-large-tmpl.html',
        scope: { docs: '=docs'},
        link: function (scope, element, attrs) {
        }
    };
}])
.directive('etalageAngular', function () {
    var ETL_OPTIONS = {
        thumb_image_width:350,
        thumb_image_height:450,
        source_image_width: 900,
        source_image_height: 1200,
        show_hint: true,
        click_callback: function(image_anchor, instance_id){
            console.log('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
        }
    };

    return {
        restrict: 'A',
        templateUrl: 'components/etalage-tmpl.html',
        controller: function() {},
        link: function (scope, element, attrs, ctrl) {
            element.etalage(ETL_OPTIONS);
        }
    }
});
app.controller('carCtrl', ['$scope', function($scope) {
  $scope.showCar = function(car){
    $scope.car = car;
  };
  
  $scope.addToCart = function(data){
      $('#productModal').modal('hide'); 
      $('#cartModal').modal('show'); 
      $scope.cartItems.push(data);
  }; 
  $scope.docs = [
    {"larImage" : "img/car1.jpg"},
    {"larImage" : "img/car2.jpg"},
    {"larImage" : "img/car3.jpg"},
    {"larImage" : "img/car4.jpg"},
    {"larImage" : "img/car5.jpg"},
    {"larImage" : "img/car6.jpg"},
  ];
  $scope.cartItems = [];
  $scope.car = {};
  $scope.cars = [{
      name:"KIA PICANTO",
      carId:"C14358",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car1.jpg",
      description:"One Owner, Only 9000 Miles, Up to 12 Months Warranty, Full Year MOT, Free Road Tax, Great Fuel Economy, Multi-Function Steering Wheel, Air Conditioning, Electric Windows, Electric Power Fold Mirrors, Remote Central Locking, Sony CD/MP3 Stereo System, Auxiliary/USB Connection, Bluetooth, Traction Control, Front Fog Lights, Alloy Wheels, ABS, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. RED, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £5,995"
  },{
      name:"JAGUAR XJ",
      carId:"C14355",
      price:"6,995",
      regYear:"2004 (54)",
      mileage:"102,000",
      engineSize:"4.2L",
      fuelType:"Petrol",
      gearBox:"Automatic",
      bodyStyle:"Saloon",
      colour:"Silver",
      imgUrl:"img/car2.jpg",
      description:"Full Leather Interior, Electric Heated Memory Seats, Heated Rear Seats, Satellite Navigation, Front and Rear Parking Sensors, Multi-Function Steering Wheel, Sport Mode, Heated Front Windscreen, Electrically Operated Rear Sun Blind, Headlight Washers, Dual Zone Climate Air Conditioning, Electric Windows, Electric Power Fold Mirrors, Remote Central Locking, Multi-Changer CD Stereo System, Traction Control, Cruise Control, Front Fog Lights, Alloy Wheels, ABS, Lumbar Support, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Body Coloured Bumpers, Immobiliser, Anti-Theft System, Multi-Point Safety Checked, Part Exchange Welcome. Platinum Silver, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"JAGUAR XJ",
      carId:"C14355",
      price:"6,995",
      regYear:"2004 (54)",
      mileage:"102,000",
      engineSize:"4.2L",
      fuelType:"Petrol",
      gearBox:"Automatic",
      bodyStyle:"Saloon",
      colour:"Silver",
      imgUrl:"img/car2.jpg",
      description:"Full Leather Interior, Electric Heated Memory Seats, Heated Rear Seats, Satellite Navigation, Front and Rear Parking Sensors, Multi-Function Steering Wheel, Sport Mode, Heated Front Windscreen, Electrically Operated Rear Sun Blind, Headlight Washers, Dual Zone Climate Air Conditioning, Electric Windows, Electric Power Fold Mirrors, Remote Central Locking, Multi-Changer CD Stereo System, Traction Control, Cruise Control, Front Fog Lights, Alloy Wheels, ABS, Lumbar Support, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Body Coloured Bumpers, Immobiliser, Anti-Theft System, Multi-Point Safety Checked, Part Exchange Welcome. Platinum Silver, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"VAUXHALL CORSA",
      carId:"C14350",
      price:"6,995",
      regYear:"2012 (12)",
      mileage:"41,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car3.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN MICRA",
      carId:"C14387",
      price:"6,695",
      regYear:"2011 (61)",
      mileage:"12,000",
      engineSize:"1.2L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Black",
      imgUrl:"img/car4.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"NISSAN SUNNY",
      carId:"C14300",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"Red",
      imgUrl:"img/car5.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  },{
      name:"KIA PICANTO 1.0",
      carId:"C14394",
      price:"5,995",
      regYear:"2013 (13)",
      mileage:"9,000",
      engineSize:"1.0L",
      fuelType:"Petrol",
      gearBox:"Manual",
      bodyStyle:"HatchBack",
      colour:"White",
      imgUrl:"img/car6.jpg",
      description:"One Owner + Main Dealer, Only 41000 Miles, Up to 12 Months Warranty, Full Year MOT, Low Road Tax Band, Great Fuel Economy, Air Conditioning, Electric Windows, Electric Mirrors, Remote Central Locking, CD/MP3 Stereo System, Auxiliary Connection, Front Fog Lights, Alloy Wheels, ABS, Sports Interior, Lumbar Support, Height Adjustable Drivers Seat, Split/Folding Rear Seats, Isofix Child Seat Anchor Points, 3x3 Point Rear Seat Belts, Power Steering, Adjustable Steering, Multi-Airbags, Service Indicator, Trip Computer, Rear Wiper, Body Coloured Bumpers, Immobiliser, Serviced (if required), Multi-Point Safety Checked, Low Rate Finance Arranged (subject to status), Part Exchange Welcome. Glacier White, Black Horse approved dealer. Over 100 cars available please see our website www.kccarsales.co.uk., £6,995"
  }];

    $scope.showCarDetails = function(e){
        TweenMax.to(e.target, 1, {"background-position":"90% 60%"});
        TweenMax.to($(e.target).siblings(".up"), 0.5, {"top":"0"});
        TweenMax.to($(e.target).siblings(".down"), 0.5, {"bottom":"0"});
    };
    $scope.hideCarDetails = function(e){
        TweenMax.to(e.target, 1, {"background-position":"20% 20%"});
        TweenMax.to($(e.target).siblings(".up"), 0.5, {"top":"-50"});
        TweenMax.to($(e.target).siblings(".down"), 0.5, {"bottom":"-50"});
    };
    $scope.scrollDown = function(i){
        TweenMax.to(window, 2, {scrollTo:i*window.innerHeight, ease:Back.easeInOut});
    };   
    $scope.hideSideBar = function(){
        TweenMax.to($(".sidebar"), 1, {ease:Back.easeIn, right:"-35%"});
        TweenMax.to($(".sidebar-overlay"), 1, {ease:Back.easeOut, display:"none", opacity:0});
    };  
}]);
var app = angular.module("WatFood",[])
app.controller("FoodController",['$scope','$timeout', function($scope,$timeout)
{
	var DominosPizza = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=http://www.dominos.ca/><strong><span>Domino\'s Pizza</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>SUN-WED 11AM-2AM, THURS-SAT: 11AM-3AM</p>'+
        '<p>(519) 747 -7300</p>'+
        '<p>2-450 Columbia St. W.</p>'+
        '</div>'+
        '</div>';
 var infowindow1 = new google.maps.InfoWindow({
          content: DominosPizza
        });

var EastSideMarios = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=http://www.eastsidemarios.com/locations/ontario/waterloo/university/><strong><span>East Side Mario\'s</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>ALL WEEK: 11AM-11PM</p>'+
        '<p>(519) 725 - 9310</p>'+
        '<p>170 University Ave. W.</p>'+
        '</div>'+
        '</div>';
 var infowindow2 = new google.maps.InfoWindow({
          content: EastSideMarios
        });

var GinosPizza = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=http://www.ginospizza.ca/><strong><span>Gino\'s Pizza</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>ALL WEEK: 11AM-4AM</p>'+
        '<p>(519) 747 - 4466</p>'+
        '<p>253 King St. N.</p>'+
        '</div>'+
        '</div>';
var infowindow3 = new google.maps.InfoWindow({
          content: GinosPizza
        });

var MongolianGrill = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=http://www.mongoliangrillwaterloo.ca/><strong><span>Mongolian Grill</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>MON-THURS: 11AM-10PM, FRI-SAT: 11AM-11PM, SUN: 11:30AM-10PM</p>'+
        '<p>(519) 747 - 4400</p>'+
        '<p>170 University Ave. W.</p>'+
        '</div>'+
        '</div>';
var infowindow4 = new google.maps.InfoWindow({
        content: MongolianGrill
        });
var MrPaninoBeijingHouse = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=http://www.mrpaninosbeijinghouse.ca/?utm_source=google&utm_medium=organic&utm_campaign=google%20places><strong><span>Mr.Panino\'s Beijing House</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>ALL WEEK: 11AM-11PM</p>'+
        '<p>(519) 888 - 1039</p>'+
        '<p>160 University Ave. W.</p>'+
        '</div>'+
        '</div>';
var infowindow5 = new google.maps.InfoWindow({
          content: MrPaninoBeijingHouse
        });

var MuchoBurrito = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=https://muchoburrito.com/><strong><span>Mucho Burrito</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>SUN,WED,FRI,SAT: 10:30AM-3AM; MON,TUES,THURS: 10:30AM-11PM</p>'+
        '<p>(519) 885 - 1916</p>'+
        '<p>220 King St. N.</p>'+
        '</div>'+
        '</div>';
var infowindow6 = new google.maps.InfoWindow({
          content: MuchoBurrito
        });

var SwissChalet = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=https://www.swisschalet.com/store/waterloo/weber-street><strong><span>Swiss Chalet</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>11:30AM-10:00PM, SUN: 11:OOAM-9:30PM</p>'+
        '<p>(519) 884 - 9410</p>'+
        '<p>267 Weber St. N.</p>'+
        '</div>'+
        '</div>';

 var infowindow7 = new google.maps.InfoWindow({
          content: SwissChalet
        });

var WilliamsFreshCafe = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=https://williamsfreshcafe.com/><strong><span>William\'s Fresh Cafe</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>SUN 7:30 AM-12AM, MON-SAT 7:30 AM-12AM</p>'+
        '<p>(519) 888 - 7254</p>'+
        '<p>170 University Ave. W.</p>'+
        '</div>'+
        '</div>';
 var infowindow8 = new google.maps.InfoWindow({
          content: WilliamsFreshCafe
        });

var CampusPizza = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://www.campuspizza.ca/"><strong><span>Campus Pizza</span></strong></a></h1>'+
            '<div id="bodyContent">'+
            '<p>10AM-5AM</p> '+
            '<p>(519) 747 - 9888</p> '+
            '<p>160 University Ave. W. Waterloo</p>'+
            '</div>'+
            '</div>';
             var infowindow8 = new google.maps.InfoWindow({
          content: WilliamsFreshCafe
        });
var MabellasItalianKitchen = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"><a href=http://www.mambellas.com/p/home-page.html><strong><span>Mabella\'s Italian Kitchen</span></strong></a></h1>'+
        '<div id="bodyContent">'+
        '<p>MON-FRI: 8AM-3PM</p>'+
        '<p>(519) 885 - 2244</p>'+
        '<p>160 Columbia St. W.</p>'+
        '</div>'+
        '</div>';
 var infowindow9 = new google.maps.InfoWindow({
          content: MabellasItalianKitchen
        });
 var infoWindow = new google.maps.InfoWindow;
if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    var locations = [
      [WilliamsFreshCafe, 43.472421, -80.538573, 1],
      [MongolianGrill, 43.472134, -80.539197, 2],
      [DominosPizza, 43.467593, -80.568417, 3],
      [MrPaninoBeijingHouse, 43.472131, -80.538093, 4],
      [EastSideMarios, 43.471629, -80.538587, 5],
      [CampusPizza, 43.472181, -80.538036, 6],
      [GinosPizza, 43.476694, -80.525293,7],
      [MabellasItalianKitchen, 32.466364, -84.992469,8],
      [SwissChalet, 43.479270, -80.521762,9],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: new google.maps.LatLng(43.471937, -80.537903),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

   

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}])
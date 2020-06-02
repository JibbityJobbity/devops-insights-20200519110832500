import React from 'react';

function MapContainer(props) {
	var map;
	var places;
	const nz = {lat: -41.0723336, lng: 171.5579181};

	// Create the script tag, set the appropriate attributes
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA3u6XxQ1moE4MMx6J_Mw2i2mfjllFwPGo&callback=initMap&libraries=places';
	script.defer = true;
	script.async = true;

	// Attach your callback function to the `window` object
	window.initMap = function() {
		map = new this.window.google.maps.Map(document.getElementById('map'), {
			zoom: 5,
			center: nz,
		});
		places = new this.window.google.maps.places.PlacesService(map);

		if(props.responseData === null || props.responseData === '') {
			var markers = [];
			let req = {
				query: 'new zealand city',
				fields: ['name', 'geometry'],
			};

			places.findPlaceFromQuery(req, (results, status) => {
				for (var i = 0; i < results.length; i++) {
					markers.push(new this.window.google.maps.Marker({position: results[i].geometry.location, map: map}));
				}
			});
		}
		else if (props.responseData.cod === 200) {

		}
	};

	// Append the 'script' element to 'head'
	document.head.appendChild(script);

	return (
		<div className="col-sm-8">
			<div id="map" style={{ height: "32em" }}></div>
		</div>
	)
}

export default MapContainer
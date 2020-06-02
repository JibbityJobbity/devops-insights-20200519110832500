import React from 'react';

function MapContainer() {
	var map;
	var places;

	// Create the script tag, set the appropriate attributes
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA3u6XxQ1moE4MMx6J_Mw2i2mfjllFwPGo&callback=initMap&libraries=places';
	script.defer = true;
	script.async = true;

	// Attach your callback function to the `window` object
	window.initMap = function() {
		map = new this.window.google.maps.Map(document.getElementById('map'), {
			zoom: 5,
			center: {lat: -41.0723336, lng: 171.5579181}
		});
		places = new this.window.google.maps.places.PlacesService(map);
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
let map, infoWindow;
const options = {
  center: { lat: 0.45966, lng: 101.410347 }, // menentikan latitude dan longitude
  zoom: 13, // menentukan level zoom
  mapTypeId: "hybrid",
  disableDefaultUI: true,
};

window.initMap = function(){
  // membuat peta
  map = new google.maps.Map(
    document.getElementById('googleMap'),
    options
  );

  

  infoWindow = new google.maps.InfoWindow({ content: '' });
  

  lokasi.forEach(el => {
    const { name, lat, lng } = el;
    const content = `<h5>${name}</h5>`;

    const marker = new google.maps.Marker({
      map,
      position: { lat, lng },
      icon: "assets/marker-icon.jpg",
    });

    // ketika marker diklik
    marker.addListener('click', () => {
      map.setCenter({ lat, lng });

      infoWindow.setPosition({ lat, lng });
      infoWindow.setContent(content);
      infoWindow.open(map);
    });
  });
}



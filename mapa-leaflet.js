(() => {

  'use strict';

  var mymap = L.map('mapa', {
    scrollWheelZoom: false
  }).setView([18, -70], 3);

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const tiles = L.tileLayer(tileUrl, {
    attribution
  })

  const locaciones = [{
    'nombre': 'Juan Pérez',
    'telefono': '1234123412',
    'correo': 'micorreo@correo.com',
    'ciudad': 'Cancún',
    'estado': 'Quintana Roo',
    'ofrece': 'Comida para perros',
    'latitud': 10,
    'longitud': -87,
  }, {
    'nombre': 'Juan Pérez',
    'telefono': '1234123412',
    'correo': 'micorreo@correo.com',
    'ciudad': 'Cancún',
    'estado': 'Quintana Roo',
    'ofrece': 'Paracetamol',
    'latitud': 10,
    'longitud': -85,
  }, {
    'nombre': 'Juan Pérez',
    'telefono': '1234123412',
    'correo': 'micorreo@correo.com',
    'ciudad': 'Cancún',
    'estado': 'Quintana Roo',
    'ofrece': 'Cubrebocas',
    'latitud': 8,
    'longitud': -70,
  }, {
    'nombre': 'Juan Pérez',
    'telefono': '1234123412',
    'correo': 'micorreo@correo.com',
    'ciudad': 'Cancún',
    'estado': 'Quintana Roo',
    'ofrece': 'Alimento para gatos',
    'latitud': 40,
    'longitud': -90,
  }, {
    'nombre': 'Juan Pérez',
    'telefono': '1234123412',
    'correo': 'micorreo@correo.com',
    'ciudad': 'Cancún',
    'estado': 'Quintana Roo',
    'ofrece': 'Insulina',
    'latitud': 35,
    'longitud': -80,
  }, {
    'nombre': 'Juan Pérez',
    'telefono': '1234123412',
    'correo': 'micorreo@correo.com',
    'ciudad': 'Cancún',
    'estado': 'Quintana Roo',
    'ofrece': 'Latas de atún',
    'latitud': 0,
    'longitud': -60,
  }, {
    'nombre': 'Juan Pérez',
    'telefono': '1234123412',
    'correo': 'micorreo@correo.com',
    'ciudad': 'Cancún',
    'estado': 'Quintana Roo',
    'ofrece': 'Guantes',
    'latitud': 10,
    'longitud': -87,
  }];

  tiles.addTo(mymap);

  for (let locacion of locaciones) {
    L.marker([locacion.latitud, locacion.longitud]).addTo(mymap)
      .bindPopup('<b>'+locacion.ofrece+'</b>' +
        '<br><b>Nombre: </b>' + locacion.nombre +
        '<br><b>Teléfono: </b>' + locacion.telefono +
        '<br><b>Correo: </b>' + locacion.correo +
        '<br><b>Ciudad: </b>' + locacion.ciudad +
        '<br><b>Estado: </b>' + locacion.estado);
  }


})();

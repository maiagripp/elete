const map = L.map('mapid').setView([-13.58, -51.24], 4);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//create Icon
const icon = L.icon({
  iconUrl: '/images/logo-icon.png',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/lar?id=${id}"> <img src="/images/arrow-white.svg"></a>`
  );

  //create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const laresSpan = document.querySelectorAll('.lares span');
laresSpan.forEach((span) => {
  const lar = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };
  addMarker(lar);
});

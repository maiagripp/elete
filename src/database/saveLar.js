function saveLar(db, lar) {
  return db.run(`INSERT INTO lares (
    lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
  ) VALUES (
    "${lar.lat}",
    "${lar.lng}",
    "${lar.name}",
    "${lar.about}",
    "${lar.whatsapp}",
    "${lar.images}",
    "${lar.instructions}",
    "${lar.opening_hours}",
    "${lar.open_on_weekends}"
  );
  `);
}

module.exports = saveLar;

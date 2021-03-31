const Database = require('./db');
const saveLar = require('./saveLar');

Database.then(async (db) => {
  //inserir dados na tabela
  await saveLar(db, {
    lat: '-13.38',
    lng: '-51.04',
    name: 'Lar dos Peludos',
    about: 'Um lar de passagem para o lar definitivo',
    whatsapp: '22999990000',
    images: [
      'https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
    ].toString(),
    instructions: 'Sempre aberto',
    opening_hours: 'Horário de visitas das 18h até 8h',
    open_on_weekends: '1',
  });

  //consultar dados da tabela
  const selectedLares = await db.all('SELECT * FROM lares');
  console.log(selectedLares);

  //consultar somente 1 lt, pelo id
  const lar = await db.all('SELECT * FROM lares WHERE id = "1"');
  console.log(lar);

  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM lares WHERE id = '3'"));
});

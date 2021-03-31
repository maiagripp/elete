const Database = require('./database/db');
const saveLar = require('./database/saveLar');
module.exports = {
  index(req, res) {
    return res.render('index');
  },

  async lar(req, res) {
    const id = req.query.id;
    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM lares WHERE id = "${id}"`);
      const lar = results[0];
      lar.images = lar.images.split(',');
      lar.firstImage = lar.images[0];
      if (lar.open_on_weekends == '0') {
        lar.open_on_weekends = false;
      } else {
        lar.open_on_weekends = true;
      }
      return res.render('lar', { lar });
    } catch (error) {
      console.log(error);
      return res.send('Erro no banco de dados!');
    }
  },

  async lares(req, res) {
    try {
      const db = await Database;
      const lares = await db.all('SELECT * FROM lares');
      return res.render('lares', { lares });
    } catch (error) {
      console.log(error);
      return res.send('Erro no bando de dados!');
    }
  },

  createLar(req, res) {
    return res.render('create-lar');
  },

  async saveLar(req, res) {
    const fields = req.body;

    // validar se todos os campos estao preenchidos
    if (Object.values(fields).includes('')) {
      return res.send('Todos os campos devem ser preenchidos!');
    }

    try {
      //salvar um lartemporário
      const db = await Database;
      await saveLar(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirecionamento
      return res.redirect('/lares');
    } catch (error) {
      console.log(error);
      return res.send('Erro no banco de dados!');
    }
  },
};

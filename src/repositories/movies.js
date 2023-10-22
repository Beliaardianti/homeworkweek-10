const movies = require('../models/movies');


module.exports = {
  create(args) {
    return movies.create(args);
  },

  update(id, args) {
    return movies.update(args, {
      where: {
        id,
      },
    });
  },

  findAll(args) {
    return movies.findAll(args);
  },

  delete(id) {
    return movies.destroy({where: {id}});
  },

  find(id) {
    return movies.findByPk(id);
  },

  attributesFind(id, attributesArr) {
    return movies.findByPk(id, {
      attributes: attributesArr,
    });
  },

  findByEmail(email) {
    return User.findOne({where: {email}});
  },
};
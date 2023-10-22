const {users} = require('../models/users');

module.exports = {
  create(args) {
    return User.create(args);
  },

  update(id, args) {
    return users.update(args, {
      where: {
        id,
      },
      
    });
  },

  findAll(args) {
    return users.findAll(args);
  },

  delete(id) {
    return users.destroy({where: {id}});
  },

  find(id) {
    return users.findByPk(id);
  },

  attributesFind(id, attributesArr) {
    return users.findByPk(id, {
      attributes: attributesArr,
    });
  },

  findByEmail(email) {
    return users.findOne({where: {email}});
  },
};
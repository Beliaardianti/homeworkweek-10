const model = require('../models/users');
const bcrypt = require('bcrypt');
require('dotenv').config();
const controller = {};


controller.getAll = async function(req, res, next) {
  try {
    const result = await model.findAll();

    if (result.length > 0) {
      res.status(200).json({
        message: "success",
        data: result
      });
    } else {
      res.status(200).json({
        message: "error",
        data: []
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error
    });
  }
};


controller.post = async function (req, res) {
  try {
    const users = await model.users.create({
      email : req.body.email,
      gender : req.body.gender,
      password : req.body.password,
      role : req.body.role
    })
    res.status(201).json({
      message: 'berhasil tambah data',
      data: users
    })

  } catch (error) {
    res.status(404).json({
      message: error.message
    })

  }
}

exports.findOne = (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.body.id;
  Users.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Pengguna tidak ditemukan!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Kesalahan saat mengambil pengguna berdasarkan ID pengguna: " + id
      });
    });
};


exports.update = (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.body.id;
  Users.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pengguna berhasil diperbarui."
        });
      } else {
        res.send({
          message: "Proses pembaruan gagal."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Kesalahan saat memperbarui pengguna dengan ID pengguna: " + id
      });
    });
};


exports.delete = (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.body.id;
  Users.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pengguna berhasil dihapus."
        });
      } else {
        res.send({
          message: "Proses penghapusan gagal."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Tidak dapat menghapus pengguna dengan ID pengguna: " + id
      });
    });
};

function validateRequest(req) {
  if (!req.body) {
    res.status(400).send({
      message: "Permintaan kosong!"
    });
    return;
  }
}

module.exports = controller;

const model = require('../models/movies');
const controller = {};

controller.getAll = async function(req, res) {
  try {
    const movies = await model.findAll();
    if (movies.length > 0) {
      res.status(200).json({
        message: "success",
        data: movies
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
  console.log(req.file);
  try {
    const movies = await model.create({
      title : req.body.title,
      genres : req.body.genres,
      year : req.body.year,
      photo : req.body.photo
   
    })
    res.status(201).json({
      message: 'berhasil tambah data',
      data: movies
    })

  } catch (error) {
    res.status(404).json({
      message: error.message
    })

  }
}

controller.put = async function(req, res) {
  try{
    const movies = await model.create({
      title : req.body.title,
      genres : req.body.genres,
      year : req.body.year,
      photo : req.body.photo
   
    },{
      where : {
        id : req.params.id
      }
    })
    res.status(201).json({
      message: 'berhasil update data',
      data: movies
    })


  } catch (error){
    res.status(404).json({
      message: error.message
    })

  }
}

controller.delete = async function (req, res){
  try {
    const movies = await model.destroy({
      where: {
        id : req.params.id
      }
    })
    res.status(200).json ({
      message: "berhasi hapus"
    })
} catch (error) {
  res.status(404).json({
    message: error.message
  })

}
}


module.exports = controller;

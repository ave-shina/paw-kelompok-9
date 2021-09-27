const express = require("express");
const router = express.Router();
const perusahaan = require("../models/Perusahaan");

// Route to read
router.get("/", (req, res, next) => {
  perusahaan
    .find((err, docs) => {
      res.render("home", { perusahaans: docs });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Route to add data
router.post("/add", (req, res, next) => {
  //Requesting datas from page
  const {nama, umur, pegawai} = req.body;

  console.log(nama, umur, pegawai);

  // Saving datas to mongoDB
  const Perusahaan = new perusahaan({
    nama,
    umur,
    pegawai,
  });

  Perusahaan.save((err) => {
    if (err) console.log("Something went wrong", err);
    else {
      console.log("Data saved successfully");
      res.redirect("/");
    }
  });
});

router.get('/edit/:id', (req, res, next) => {
  console.log(req.params.id);
  perusahaan.findOneAndUpdate({_id: req.params.id},req.body, { new: true }, (err, docs)=>{
      console.log(docs);
      
      console.log(docs.nama);
      
      res.render('edit', {perusahaan:docs});
  })
});

router.post('/edit/:id', (req, res, next) => {
  perusahaan.findByIdAndUpdate({_id: req.params.id},req.body, (err)=>{
      if (err) {
          console.log(err);
          next(err);
      } else {
          res.redirect('/');
      }
  })
});

//delete
router.get('/', (req,res,next)=>{
    perusahaan.findByIdAndDelete({_id: req.params.id}, (err, docs)=>{
        if(err){
            console.log("Terjadi kesalahan dalam penghapusan Data");
            next(err);
        }else{
            console.log("Data berhasil dihapus")
        }
    })
})
module.exports = router;

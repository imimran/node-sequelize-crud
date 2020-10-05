const express = require('express')
const router = express.Router()

const Product = require('../models/product')

router.get("/",  async (req, res) => {
   const product = await Product.findAll()
   res.send(product);
});


router.get('/:id', async (req, res) => {
   const product = await Product.findByPk(req.params.id)
   res.send(product);
});


router.post('/add', (req, res) => {
   const title = req.body.title;
   const price = req.body.price;
   const description = req.body.description;
   Product.create({
      title: title,
      price: price,
      description: description
   })
      .then(result => {
         // console.log(result);
         console.log('Created Product');
        res.send(result);
         
      })
      .catch(err => {
         console.log(err);
      });
});


router.put('/:id', (req, res) => {
     Product.update(
        {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        },
        {
           where: { id: req.params.id }
        }
     ).then(() => res.send('Success'))
})

  

router.delete('/:id', (req, res) => {
   Product.destroy({
      where:{
         id: req.params.id
      }
      
   }).then(() => res.send('Success'))
  
  

});

module.exports = router;
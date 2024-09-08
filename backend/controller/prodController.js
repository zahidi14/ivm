// const prodServ = require("../services/prodServ")

const productModel = require("../model/productModel")

exports.getAllProducts = async (req, res) => {
    try {
      const products = await productModel.getAllProducts();  // Fetch products
      console.log('Products:', products);  // Log to console
      res.json(products);  // Send products as JSON
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  };

  exports.insertProduct = async (req, res)=>{
    try{
      console.log({"body": req.body})
      const productData = req.body;
      const insert = await productModel.insertProduct(productData);
      res.status(201).json(insert)
    }catch(err){
      console.log("error inert", err)
      res.status(500).json({error :"error insert"})
    }
  }

  exports.updateProduct = async (req, res)=>{
    try{
      const id = req.params.id;
      const productData = req.body;
      const update = await productModel.updateProduct(id,productData);
      if (!update.length){
        res.status(404).json("data to be updated not found")
      }
      
      res.status(200).json(update)
    }catch(err){
      res.status(500).json({err: "error server"})
    }
  }

  exports.deleteProduct = async (req, res)=>{
    try{
      const id = req.params.id;
      const del = await productModel.deleteProduct(id);
if(del.length){
  res.status(404).json("data deleted")
}
res.status(200).json("data deleted")
    }catch(err){
      res.status(500).json("internal server errror")
    }
  }
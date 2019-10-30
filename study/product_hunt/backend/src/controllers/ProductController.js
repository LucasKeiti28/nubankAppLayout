const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    // return res.send("Teste");
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(product);
  },

  async delete(req, res) {
    const product = await Product.findOneAndDelete(req.params.id);

    return res.json({ message: "Deletado" });
  }
};

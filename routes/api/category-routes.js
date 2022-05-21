const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    // query database for all data in the category table, include all related data
    const catData = await Category.findAll({ include: { all: true } });
    // send successful response
    res.status(200).json(catData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    // query database for aspecific row of data in the category table, include all related data
    const catData = await Category.findByPk(req.params.id, {
      include: { all: true },
    });
    // return a 404 and error message if the queried id doesn't exist
    if (!catData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    // send successful response
    res.status(200).json(catData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // query db to create a new row in the category table with the request body
  try {
    const catData = await Category.create(req.body);
    // send successful response
    res.status(200).json(catData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const cat = await Category.findByPk(req.params.id);
    // return a 404 and error message if the queried id doesn't exist
    if (!cat) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    // query db to update the requested row in the category table with the request body
    const catData = await Category.update(
      { category_name: `${req.body.category_name}` },
      { where: { id: req.params.id } }
    );
    // send successful response
    res.status(200).json(catData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const cat = await Category.findByPk(req.params.id);
    // return a 404 and error message if the queried id doesn't exist
    if (!cat) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    // query db to delete the requested row in the tag table
    const catData = await Category.destroy({ where: { id: req.params.id } });
    // send successful response
    res.status(200).json(catData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

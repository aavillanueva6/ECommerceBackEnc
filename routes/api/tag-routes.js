const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // query database for all data in the tag table, include all related data
    const tagData = await Tag.findAll({ include: { all: true } });
    // send successful response
    res.status(200).json(tagData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // query database for aspecific row of data in the tag table, include all related data
    const tagData = await Tag.findByPk(req.params.id, {
      include: { all: true },
    });
    // return a 404 and error message if the queried id doesn't exist
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    // send successful response
    res.status(200).json(tagData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  // query db to create a new row in the tag table with the request body
  try {
    const tagData = await Tag.create(req.body);
    // send successful response
    res.status(200).json(tagData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // query db to see if the requested tag exists, if it doesn't return 404 and error message
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    // query db to update the requested row in the tag table with the request body
    const tagData = await Tag.update(
      { tag_name: `${req.body.tag_name}` },
      { where: { id: req.params.id } }
    );
    // send successful response
    res.status(200).json(tagData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    // query db to see if the requested tag exists, if it doesn't return 404 and error message
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    // query db to delete the requested row in the tag table
    const tagData = await Tag.destroy({ where: { id: req.params.id } });
    // send successful response
    res.status(200).json(tagData);
  } catch (err) {
    // if there is an error, log it and send an error response
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

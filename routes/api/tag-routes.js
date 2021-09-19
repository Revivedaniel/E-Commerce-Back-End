const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagsData = await Tag.findAll({
      //Including products
      include: [{model: Product, through: ProductTag, as: "product"}]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      //Including products
      include: [{model: Product, through: ProductTag, as: "product"}]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;

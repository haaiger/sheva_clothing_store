const router = require('express').Router();
const { Product, Photo } = require('../../db/models');

router.get('/', async (request, response) => {
  const products = await Product.findAll({
    raw: true,
  });

  const photos = await Photo.findAll({
    raw: true,
  });

  const mergedProducts = products.map((product) => {
    const { updatedAt, createdAt, ...fields } = product;
    const productPhotos = photos
      .filter((photo) => photo.productId === product.id)
      .map((photo) => photo.path);
    return { ...fields, photos: productPhotos };
  });

  response.json(mergedProducts);
});

router.get('/:id', async (request, response) => {
  const productId = request.params.id || 1;

  const product = await Product.findByPk(productId, {
    raw: true,
  });

  const photos = await Photo.findAll({
    where: { productId },
    raw: true,
  });

  const mergedProducts = {
    ...product,
    photos: photos.map((photo) => photo.path),
  };

  console.log(mergedProducts);
  response.json(mergedProducts);
});

module.exports = router;

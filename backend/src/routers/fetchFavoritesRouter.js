const router = require('express').Router();
const { Product, Photo } = require('../../db/models');

// Ручка для получения избранных товаров.
router.get('/:ids', async (request, response) => {
  const { ids } = request.params;
  const favoriteIds = ids.split('-').map((id) => Number(id));

  try {
    const products = await Product.findAll({
      where: { id: favoriteIds },
      raw: true,
    });

    const photos = await Photo.findAll({
      where: { productId: favoriteIds },
      raw: true,
    });

    const mergedProducts = products.map((product) => {
      const productPhotos = photos
        .filter((photo) => photo.productId === product.id)
        .map((photo) => photo.path);

      return {
        ...product,
        photos: productPhotos,
      };
    });

    mergedProducts.forEach((product) => {
      const { createdAt, updatedAt, ...productData } = product;
      Object.assign(product, productData);
    });

    response.json(mergedProducts);
  } catch (error) {
    console.error('Ошибка при получении избранных товаров: ', error);
    response
      .status(500)
      .json({ message: 'Ошибка при получении избранных товаров:', error });
  }
});

module.exports = router;

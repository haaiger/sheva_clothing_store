const router = require('express').Router();
const { Product, Photo } = require('../../db/models');

router.get('/', async (request, response) => {
  try {
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
  } catch (error) {
    console.error('Ошибка при получении продуктов: ', error);
    response.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

router.get('/:gender/:category/:productId', async (request, response) => {
  const { gender, category, productId } = request.params;

  try {
    const products = await Product.findAll({
      where: { category, gender },
      raw: true,
    });

    const productIds = products.map((product) => product.id);

    const photos = await Photo.findAll({
      where: { productId: productIds },
      raw: true,
    });

    const mergedProducts = products
      .filter((product) => product.id !== Number(productId))
      .map((product) => {
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
    console.error('Ошибка при получении аналогичных продуктов: ', error);
    response
      .status(500)
      .json({ message: 'Ошибка при получении аналогичных продуктов:', error });
  }
});

router.get('/:id', async (request, response) => {
  const productId = request.params.id || 1;

  try {
    const product = await Product.findByPk(productId, {
      raw: true,
    });

    const photos = await Photo.findAll({
      where: { productId },
      raw: true,
    });

    const mergedProduct = {
      ...product,
      photos: photos.map((photo) => photo.path),
    };

    delete mergedProduct.createdAt;
    delete mergedProduct.updatedAt;

    response.json(mergedProduct);
  } catch (error) {
    console.error('Ошибка при получении продукта: ', error);
    response
      .status(500)
      .json({ message: 'Ошибка при получении продукта:', error });
  }
});

module.exports = router;

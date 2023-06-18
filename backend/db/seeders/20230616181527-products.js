// const { products } = require('../../src/helpers/data');

const products = [
  {
    productName: 'БРЮКИ WIDE FIT',
    description:
      'Брюки свободного кроя из смесового хлопка. Регулируемый эластичный пояс, защипы. Боковые карманы, задний накладной карман. Складки на коленях.',
    price: '4 694,05',
    size: 'S,M,L,XL',
    gender: 'Male',
    color: 'ЭКРЮ,ЧЕРНЫЙ',
    category: 'Pants',
    brand: 'Zara',
    count: 74,
  },
  {
    productName: 'ШОРТЫ ИЗ ХОЛЩОВОЙ ТКАНИ С НАШИВКОЙ',
    description:
      'Шорты с эластичным поясом на регулируемых шнурках. Передние карманы, задний накладной карман. Контрастная нашивка снизу.',
    price: '2 996,62',
    size: 'S,M,L,XL',
    gender: 'Male',
    color:
      'ТЕМНО-ЗЕЛЕНЫЙ,КОРИЧНЕВЫЙ,ЖЕЛТОВАТО-БЕЛЫЙ,ЧЕРНЫЙ,СЕРОВАТО-КОРИЧНЕВЫЙ,ХАКИ,РЫЖЕВАТО-КОРИЧНЕВЫЙ',
    category: 'Shorts',
    brand: 'Zara',
    count: 36,
  },
  {
    productName: 'ШОРТЫ ИЗ ХОЛЩОВОЙ ТКАНИ С НАШИВКОЙ',
    description:
      'Шорты с эластичным поясом на регулируемых шнурках. Передние карманы, задний накладной карман. Контрастная нашивка снизу.',
    price: '2 996,62',
    size: 'S,M,L',
    gender: 'Male',
    color: 'КОРИЧНЕВЫЙ,ЖЕЛТОВАТО-БЕЛЫЙ,ЧЕРНЫЙ',
    category: 'Shorts',
    brand: 'Zara',
    count: 98,
  },
  {
    productName: 'ФУТБОЛКА ИЗ РЕЛЬЕФНОЙ ТКАНИ',
    description: 'Футболка с круглым вырезом и короткими рукавами.',
    price: '2 440,00',
    size: 'S,M,L',
    gender: 'Male',
    color: 'ЗЕЛЕНЫЙ,КОРИЧНЕВЫЙ,ЖЕЛТОВАТО-БЕЛЫЙ,ЧЕРНЫЙ',
    category: 'T-Shirt',
    brand: 'Zara',
    count: 36,
  },
  {
    productName: 'ФУТБОЛКА ИЗ ТРИКОТАЖА ЖЕМЧУЖНОЙ ВЯЗКИ',
    description:
      'Трикотажная футболка из смесового хлопка. Круглый вырез, короткие рукава.',
    price: '2 999,00',
    size: 'S,M,L,XL,XLL',
    gender: 'Male',
    color: 'БЕЛЫЙ',
    category: 'T-Shirt',
    brand: 'Zara',
    count: 1002,
  },
  {
    productName: 'ФУТБОЛКА ИЗ РЕЛЬЕФНОЙ ТКАНИ',
    description: 'Футболка с круглым вырезом и короткими рукавами.',
    price: '2 440,00',
    size: 'S,M,L,XL',
    gender: 'Male',
    color: 'СЕРОВАТО-КОРИЧНЕВЫЙ, ХАКИ, РЫЖЕВАТО-КОРИЧНЕВЫЙ',
    category: 'T-Shirt',
    brand: 'Zara',
    count: 17,
  },
  {
    productName: 'ЭЛАСТИЧНЫЙ ТОП НА ТОНКИХ БРЕТЕЛЯХ.',
    description: 'Облегающий топ из смесовой ткани с полиамидом. Круглый вырез и бретели.',
    price: '931,25',
    size: 'S,M,L',
    gender: 'Female',
    color: 'СИНИЙ, БЕЛЫЙ, РОЗОВЫЙ',
    category: 'T-Shirt',
    brand: 'Zara',
    count: 366,
  },
  {
    productName: 'ФУТБОЛКА С КАРМАНОМ.',
    description: 'Футболка с круглым вырезом, короткими рукавами и накладным карманом на груди.',
    price: '1 043,23',
    size: 'XS,S,M,L,XL',
    gender: 'Female',
    color: 'ПЕСОЧНЫЙ, БЕЛЫЙ, ЧЕРНЫЙ',
    category: 'T-Shirt',
    brand: 'Gucci',
    count: 278,
  },
  {
    productName: 'МИНИ-ПЛАТЬЕ.',
    description: 'Короткое платье с квадратным вырезом и тонкими бретелями.',
    price: '1 304,50',
    size: 'S,M,L',
    gender: 'Female',
    color: 'ЧЕРНЫЙ,ЗЕЛЕНЫЙ,КРАСНЫЙ',
    category: 'DRESS',
    brand: 'ZARA',
    count: 123,
  },
  {
    productName: 'ПРИТАЛЕННОЕ ДЖИНСОВОЕ ПЛАТЬЕ ZW.',
    description: 'Длинное приталенное платье с квадратным вырезом и открытыми плечами. Потайная застежка-молния.',
    price: '5 223,59',
    size: 'XS,S,M',
    gender: 'Female',
    color: 'СИНИЙ',
    category: 'DRESS',
    brand: 'PRADA',
    count: 25,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};

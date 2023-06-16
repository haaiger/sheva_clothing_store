// const { products } = require('../../src/helpers/data');

const products = [
  {
    productName: 'БРЮКИ WIDE FIT',
    description:
      'Брюки свободного кроя из смесового хлопка. Регулируемый эластичный пояс, защипы. Боковые карманы, задний накладной карман. Складки на коленях.',
    price: '4 694,05',
    size: 'S,M,L,XL',
    color: 'ЭКРЮ,ЧЁРНЫЙ',
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
    color: 'ЗЕЛЁНЫЙ,КОРИЧНЕВЫЙ,ЖЕЛТОВАТО-БЕЛЫЙ,ЧЕРНЫЙ',
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
    color: 'СЕРОВАТО-КОРИЧНЕВЫЙ, ХАКИ, РЫЖЕВАТО-КОРИЧНЕВЫЙ',
    category: 'T-Shirt',
    brand: 'Zara',
    count: 17,
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

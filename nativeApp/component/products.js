const product = () => {
  const products = [
    {
      id: '0',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹599 ',
      brand: 'Lymio',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '86%off',
      image: require('../images/hoodie01.jpeg'),
    },
    {
      id: '1',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹699 ',
      brand: 'Lymio',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie02.jpeg'),
    },
    {
      id: '2',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹999 ',
      brand: 'Trillion',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie03.jpeg'),
    },
    {
      id: '3',
      title: 'Hoodie || Sweet shirt for Women',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie04.jpeg'),
    },
    {
      id: '4',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹599 ',
      brand: 'Lymio',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '86%off',
      image: require('../images/hoodie01.jpeg'),
    },
    {
      id: '5',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹699 (88% Off)',
      brand: 'Lymio',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie02.jpeg'),
    },
    {
      id: '6',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹999 ',
      brand: 'Trillion',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie03.jpeg'),
    },
    {
      id: '7',
      title: 'Hoodie || Sweet shirt for Women',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie04.jpeg'),
    },
    {
      id: '8',
      title: 'Hoodie || Sweet shirt for Women',
      price: '₹599 (40% Off)',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie04.jpeg'),
    },
    {
      id: '9',
      title: 'Hoodie || Sweet shirt for Women',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie02.jpeg'),
    },
    {
      id: '10',
      title: 'Hoodie || Sweet shirt for Women',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie01.jpeg'),
    },
    {
      id: '11',
      title: 'Hoodie || Sweet shirt for Women',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie02.jpeg'),
    },
    {
      id: '12',
      title: 'Hoodie || for Women',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie03.jpeg'),
    },
    {
      id: '13',
      title: 'Hoodie || for Women',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie04.jpeg'),
    },
    {
      id: '14',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹599 ',
      brand: 'Lymio',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '86%off',
      image: require('../images/hoodie01.jpeg'),
    },
    {
      id: '15',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹699 ',
      brand: 'Lymio',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie02.jpeg'),
    },
    {
      id: '16',
      title: 'Hoodie || Sweet shirt for men',
      price: '₹999 ',
      brand: 'Trillion',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season longthe hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie03.jpeg'),
    },
    {
      id: '17',
      title: 'Hoodie || forWomen',
      price: '₹599 ',
      brand: 'KSHS',
      quote:
        'This hoodie is made of high-quality materials that will keep you warm and comfortable all season long the hood is lined with fleece for extra warmth. Second, this hoodie has a stylish design that will look great with any outfit.',
      offer: '76%off',
      image: require('../images/hoodie04.jpeg'),
    },
  ];
  return products;
};
export default product;

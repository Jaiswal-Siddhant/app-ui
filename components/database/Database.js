//category=[table,sofa]


export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'table',
    productName: 'Table',
    productPrice: 1799,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
    productImage: require('../../assets/table/table.png'),
    isAvailable: true,
    productImageList: [

      require('../../assets/table/table.png'),
      require('../../assets/table/table.png'),
      require('../../assets/table/table.png'),
    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/Table 2/Table-2.obj`
  },
  {
    id: 2,
    category: 'table',
    productName: 'Table',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
    productImage: require('../../assets/table/table.png'),
    isAvailable: true,
    productImageList: [

      require('../../assets/table/table.png'),
      require('../../assets/table/table.png'),
      require('../../assets/table/table.png'),
    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/table/table.obj`
  },
  {
    id: 3,
    category: 'table',
    productName: 'Table',
    productPrice: 1999,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    isOff: true,
    offPercentage: 18,
    productImage: require('../../assets/table/table.png'),
    isAvailable: true,
    productImageList: [
      require('../../assets/table/table.png'),
      require('../../assets/table/table.png'),
      require('../../assets/table/table.png'),
    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/table/table.obj`
  },
  {
    id: 4,
    category: 'sofa',
    productName: 'green sofa',
    productPrice: 1399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: false,
    productImage: require('../../assets/sofa/sofa1.png'),
    isAvailable: true,
    productImageList: [
      require('../../assets/sofa/sofa2.png'),
      require('../../assets/sofa/sofa2.png'),
      require('../../assets/sofa/sofa2.png')
    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/table/table.obj`
  },
  {
    id: 5,
    category: 'sofa',
    productName: 'white sofa',
    productPrice: 1499,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: require('../../assets/sofa/sofa2.png'),
    isAvailable: false,
    productImageList: [
      require('../../assets/sofa/sofa2.png'),
      require('../../assets/sofa/sofa2.png'),
      require('../../assets/sofa/sofa2.png')
    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/table/table.obj`
  },
  {
    id: 6,
    category: 'sofa',
    productName: 'SOFA',
    productPrice: 1299,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../../assets/sofa/sofa2.png'),
    isAvailable: true,
    productImageList: [
      require('../../assets/sofa/sofa2.png'),
      require('../../assets/sofa/sofa2.png'),
      require('../../assets/sofa/sofa2.png')
    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/table/table.obj`
  },
  {
    id: 7,
    category: 'sofa',
    productName: 'White and Green Sofa',
    productPrice: 1299,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../../assets/sofa/sofa2.png'),
    isAvailable: true,
    productImageList: [
      require('../../assets/sofa/sofa2.png'),
      require('../../assets/sofa/sofa1.png'),
      require('../../assets/sofa/sofa2.png'),

    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/table/table.obj`
  },
  {
    id: 8,
    category: 'table',
    productName: 'Table',
    productPrice: 1499,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
    productImage: require('../../assets/table/table.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/boat1.png'),
      require('../database/images/products/boat2.png'),
      require('../database/images/products/boat3.png'),
    ],
    modelSrc: `C:/Users/shail/Desktop/starter-kit/assets/table/table.obj`
  },
];

exports.serverUrl = 'http://192.168.41.34:4000/api/v1/';


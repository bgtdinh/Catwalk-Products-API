/* eslint-disable no-undef */
const chai = require('chai');
const chaiiHttp = require('chai-http');
const server = require('../index');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiiHttp);

const expectedProducts = [
  {
    id: 1,
    product_name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    product_description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140',
  },
  {
    id: 2,
    product_name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    product_description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69',
  },
  {
    id: 3,
    product_name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    product_description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40',
  },
  {
    id: 4,
    product_name: "Slacker's Slacks",
    slogan: 'Comfortable for everything, or nothing',
    product_description: "I'll tell you how great they are after I nap for a bit.",
    category: 'Pants',
    default_price: '65',
  },
  {
    id: 5,
    product_name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    product_description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99',
  },
];

describe('/GET products', () => {
  it('it should get 5 products by default', (done) => {
    chai.request(server)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.deep.equal(expectedProducts);
        done();
      });
  });
});

const expectedProductById = {
  id: 11,
  name: 'Air Minis 250',
  slogan: 'Full court support',
  description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
  category: 'Basketball Shoes',
  default_price: '49',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};

describe('/GET products by ID', () => {
  it('it should get products by ID', (done) => {
    chai.request(server)
      .get('/products/productId?product_id=11')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.deep.equal(expectedProductById);
        done();
      });
  });
});

const expectedStyle = {
  product_id: 1,
  results: [
    {
      styles_id: 1,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: 'null',
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      skus: {
        1: {
          quantity: 8,
          size: 'XS',
        },
        2: {
          quantity: 16,
          size: 'S',
        },
        3: {
          quantity: 17,
          size: 'M',
        },
        4: {
          quantity: 10,
          size: 'L',
        },
        5: {
          quantity: 15,
          size: 'XL',
        },
        6: {
          quantity: 4,
          size: 'XL',
        },
      },
    },
    {
      styles_id: 2,
      name: 'Desert Brown & Tan',
      original_price: '140',
      sale_price: 'null',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80',
        },
      ],
      skus: {
        7: {
          quantity: 16,
          size: 'S',
        },
        8: {
          quantity: 8,
          size: 'XS',
        },
        9: {
          quantity: 17,
          size: 'M',
        },
        10: {
          quantity: 10,
          size: 'L',
        },
        11: {
          quantity: 15,
          size: 'XL',
        },
        12: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
    {
      styles_id: 3,
      name: 'Ocean Blue & Grey',
      original_price: '140',
      sale_price: '100',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      skus: {
        13: {
          quantity: 8,
          size: 'XS',
        },
        14: {
          quantity: 16,
          size: 'S',
        },
        15: {
          quantity: 17,
          size: 'M',
        },
        16: {
          quantity: 10,
          size: 'L',
        },
        17: {
          quantity: 15,
          size: 'XL',
        },
        18: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
    {
      styles_id: 4,
      name: 'Digital Red & Black',
      original_price: '140',
      sale_price: 'null',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
          url: 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
      ],
      skus: {
        19: {
          quantity: 8,
          size: 'XS',
        },
        20: {
          quantity: 16,
          size: 'S',
        },
        21: {
          quantity: 17,
          size: 'M',
        },
        22: {
          quantity: 10,
          size: 'L',
        },
        23: {
          quantity: 15,
          size: 'XL',
        },
        24: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
    {
      styles_id: 5,
      name: 'Sky Blue & White',
      original_price: '140',
      sale_price: '100',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
      skus: {
        25: {
          quantity: 8,
          size: 'XS',
        },
        26: {
          quantity: 16,
          size: 'S',
        },
        27: {
          quantity: 17,
          size: 'M',
        },
        28: {
          quantity: 10,
          size: 'L',
        },
        29: {
          quantity: 15,
          size: 'XL',
        },
        30: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
    {
      styles_id: 6,
      name: 'Dark Grey & Black',
      original_price: '170',
      sale_price: 'null',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
      skus: {
        31: {
          quantity: 8,
          size: 'XS',
        },
        32: {
          quantity: 16,
          size: 'S',
        },
        33: {
          quantity: 17,
          size: 'M',
        },
        34: {
          quantity: 10,
          size: 'L',
        },
        35: {
          quantity: 15,
          size: 'XL',
        },
        36: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
  ],
};

describe('/GET styles by ID', () => {
  it('it should get styles by ID', (done) => {
    chai.request(server)
      .get('/products/styles?product_id=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.deep.equal(expectedStyle);
        done();
      });
  });
});

const expectedRelated = [
  2,
  3,
  8,
  7,
];

describe('/GET related by ID', () => {
  it('it should get related by ID', (done) => {
    chai.request(server)
      .get('/products/related?product_id=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.deep.equal(expectedRelated);
        done();
      });
  });
});

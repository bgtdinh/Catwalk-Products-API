const mongoose = require('mongoose');

const { Schema } = mongoose;

const featuresSchema = new Schema({
  feature:String,
  value:String,
});

const relatedSchema = new Schema({
  related_id:Number,
});

const photosSchema = new Schema({
  thumbnail_url:String,
  url:String,
});

const skusSchema = new Schema({
  sku_id: {
    type: Number,
    unique:true,
  },
  quantity:Number,
  size:String,
});


const stylesSchema = new Schema({
  style_id: {
    type: Number,
    unique:true,
  },
  name: String,
  original_price: String,
  sale_price: {
    type:String,
    default: null,
  },
  default: Boolean,
  photos: [photosSchema],
  skus:[skusSchema],
});

const productsSchema = new Schema({
  product_id: {
    type: Number,
    unique: true,
  },
  campus: String,
  product_name: String,
  slogan: String,
  description: String,
  category: String,
  default_price:String,
  created_at:String,
  updated_at:String,
  feature: [featuresSchema],
  styles: [stylesSchema],
  related:[relatedSchema],
});





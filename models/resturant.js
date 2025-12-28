const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    imageUrl: {
      type: String,
    },
    food:{
      type: Array,
      required: [true, "Food is required"],
    },
    time:{
        type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logo: {
      type: String,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    phone: { type: String },
    ratingCount: { type: String },
    code: { type: String },
    coods: { 
        id: { type: String },
         latitude: { type: Number },
         latitudeDelta: { type: Number },
         longitude: { type: Number },
         longitudeDelta: { type: Number },
         address: { type: String },
         title: { type: String },
     },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;        
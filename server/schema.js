import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  type: String,
  availability: String,
  page: String,
  model: String,
  name: String,
  price: String,
  description: String,
  main: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    img6: String,
  },
  wide: {
    img7: String,
    img8: String,
    img9: String,
    img10: String,
  },
});

export default mongoose.model("product", productSchema);

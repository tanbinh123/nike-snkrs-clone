import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    type: String,
    inventory: String,
    page: String,
    model: String,
    name: String,
    price: String,
    description: String,
    mainImg: String,
    prodImg1: String,
    prodImg2: String,
    prodImg3: String,
    prodImg4: String,
    prodImg5: String,
    prodImg6: String,
    wideImg1: String,
    wideImg2: String,
    wideImg3: String,
    wideImg4: String
});

export default mongoose.model('card', cardSchema);

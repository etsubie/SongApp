import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    title: String,
    genre: String,
    singer: String,
    imgUrl:String,
    audio: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    publishYear: Number
})

const songModel = mongoose.model('song', songSchema);

export default songModel;

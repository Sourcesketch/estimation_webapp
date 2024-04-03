import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TempSchema = new Schema({
    ttype: {
        type: String,
        required: true
    },
});

const Temp = mongoose.model('Temp', TempSchema);
export default Temp;
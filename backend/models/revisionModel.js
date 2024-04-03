import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const revisionSchema = new Schema({
    project_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
    temp_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Temp'
      }
});

const Revision = mongoose.model('Revision', revisionSchema);
export default Revision;

import mongoose from 'mongoose';
import Project from '../models/projectModel.js';
import Revision from '../models/revisionModel.js';

//create Revision 

const addRevision = (req, res) => {
    const revision = new Revision({
        name: req.body.name,
        reason: req.body.reason,
        project_id: mongoose.Types.ObjectId()
    });
    revision.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}

// get all Revisions

const getAllRevision = (req, res) => {
    Revision.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}

// get single Revision 

const getRevisionById = (req, res) => {
    Revision.findById(req.params.id).populate('project')
        .then((result)=>{
            res.send(result);
        }).catch((err) => {
            console.log(err);
        });
}
// delete Revision 

const deleteRevision = (req, res) => {
    Revision.findByIdAndRemove(req.params.id).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}
// update Revision details

const updateRevision = (req, res) => {
    const revision = Revision.findByIdAndUpdate(req.params.id);
    revision.updateOne({ name: req.body.name }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}
export { 
    addRevision,
    getAllRevision, 
    getRevisionById,
    deleteRevision,
    updateRevision
};


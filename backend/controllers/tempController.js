import Temp from '../models/tempModel.js';

// create template 
//Admin can only create
const createTemplate = (req, res) => {
    const temp = new Temp({    
        ttype: req.body.ttype,
    });
    temp.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}
// get all templates
const getTemplates = (req, res) => {
    Temp.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}
// get single template 
const getTempById = (req, res) => {
    Temp.findById(req.params.id)
        .then((result)=>{
            res.send(result);
        }).catch((err) => {
            console.log(err);
        });
}

//delete template 
// const deleteTemp = (req, res) => {
// const template = Temp.findById(req.params.id);
// template.remove().then((result) => {
//     res.send(result);
// }).catch((err) => {
//     console.log(err);
// });
// }

// update template 
// Admin can only update
const updateTemp = (req, res) => {
    const template = Temp.findById(req.params.id);
    template.updateOne({ ttype: req.body.ttype }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}

export { 
    createTemplate,
    getTemplates,
    getTempById,
    updateTemp
    // deleteTemp
};


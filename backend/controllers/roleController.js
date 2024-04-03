import Role from "../models/roleModal.js";


//Add Role 
const addRole = (req, res) => {
    const role = new Role({
        name: req.body.name,
        access_level: req.body.access_level,
    });
    role.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}

// get all roles

const getAllroles = (req, res) => {
    Role.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}

// get single Role 

const getRoleById = (req, res) => {
    Role.findById(req.params.id)
        .then((result)=>{
            res.send(result);
        }).catch((err) => {
            console.log(err);
        });
}
// delete Role 

const deleteRole = (req, res) => {
    Role.findByIdAndRemove(req.params.id).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}

// update Role details

const updateRole = (req, res) => {
    const role = Role.findByIdAndUpdate(req.params.id);
    role.updateOne({ 
        name: req.body.name,
        access_level: req.body.access_level,
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
}

export { addRole , getAllroles, getRoleById , deleteRole , updateRole};
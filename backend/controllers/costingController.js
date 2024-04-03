import Costing from "../models/costingModel.js";

//Post Costing

const postCosting = (req, res) => {
  Costing.findOne({ projectName: req.query.projectName })
    .then((costExist) => {
      if (costExist) {
        return res.status(422).json({ error: "cost already sent" });
      }
      const cost = new Costing({
        totalHours: req.query.totalHours,
        hourRate: req.query.hourRate,
        totalCost: req.query.totalCost,
        projectName: req.query.projectName,
      });
      cost
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//get Costing

const getCosting = (req, res) => {
  Costing.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get CostingByProject

const getCostingByProject = (req, res) => {
  Costing.find({projectName: req.query.projectName})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get update CostingByProject

const updateCosting = (req, res) => {
  Costing.findOneAndUpdate(
    {projectName: req.body.projectName},
    { 
      $set: { 
        totalHours: req.body.totalHours,
        hourRate: req.body.hourRate, 
        totalCost: req.body.totalCost
      }
  },
    { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { postCosting, getCosting, getCostingByProject, updateCosting };

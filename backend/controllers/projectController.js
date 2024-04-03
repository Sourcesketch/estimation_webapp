import Project from "../models/projectModel.js";

//create Project

const addProject = (req, res) => {
  const {
    proj_name,
    proj_type,
    prepared_by,
    proposal_for,
    created_date,
    version,
    proj_description,
    proj_tags,
    proj_status,
    terms_conditions,
    temp_id,
    resource_name,
  } = req.query;
  if (
    !proj_name ||
    !proj_type ||
    !prepared_by ||
    !proposal_for ||
    !created_date ||
    !proj_description ||
    !version
    // !temp_id ||
    // !resource_name
  ) {
    return res.status(422).json({ error: "please fill the field properly" });
  }
  Project.findOne({ proj_name: proj_name })
    .then((projectExist) => {
      if (projectExist) {
        return res.status(422).json({ error: "Project already exist" });
      }
      const proj = new Project({
        proj_name: proj_name,
        proj_type: proj_type,
        prepared_by: prepared_by,
        proposal_for: proposal_for,
        created_date: created_date,
        proj_description: proj_description,
        proj_tags: proj_tags,
        proj_status: proj_status,
        version: version,
        temp_id: temp_id,
        resource_name: resource_name,
        terms_conditions: terms_conditions,
      });
      proj
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

// get all projects by template

const getAllProject = (req, res) => {
  Project.find({ prepared_by: req.query.prepared_by })
    // .populate("temp_id", "ttype")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get all projects by template

const getAllProjectByResource = (req, res) => {
  Project.find({ resource_name: req.query.resource_name })
    // .populate("temp_id", "ttype")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get all projects by specific user

const getAllProjectByUSer = (req, res) => {
  Project.find()
    .populate("resource_name", "username")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// get single project

const getProjectById = (req, res) => {
  Project.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ message: "Project not found" });
      console.log(err);
    });
};

// get all projects whose status have completed of specific template i.e. vteams
const getAllProjectByStatusVC = (req, res) => {
  Project.find({
    proj_status: "Completed",
    temp_id: "6395ded86d71e15926fbbdc1",
  })
    .count()
    .then((result) => {
      res.send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};
// get all projects whose status have pending of specific template i.e. vteams
const getAllProjectByStatusVP = (req, res) => {
  Project.find({
    proj_status: "Pending for Review",
    temp_id: "6395ded86d71e15926fbbdc1",
  })
    .count()
    .then((result) => {
      res.send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};
// get all projects whose status have draft of specific template i.e. vteams
const getAllProjectByStatusVD = (req, res) => {
  Project.find({
    proj_status: "Draft",
    temp_id: "6395ded86d71e15926fbbdc1",
  })
    .count()
    .then((result) => {
      res.send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};
// get all projects whose status have completed of specific template i.e. vteams
const getAllProjectByStatusNC = (req, res) => {
  Project.find({
    proj_status: "Completed",
    temp_id: "6395df75a9038f587df95185",
  })
    .count()
    .then((result) => {
      res.send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};
// get all projects whose status have pending of specific template i.e. vteams
const getAllProjectByStatusNP = (req, res) => {
  Project.find({
    proj_status: "Pending for Review",
    temp_id: "6395df75a9038f587df95185",
  })
    .count()
    .then((result) => {
      res.send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};
// get all projects whose status have draft of specific template i.e. vteams
const getAllProjectByStatusND = (req, res) => {
  Project.find({
    proj_status: "Draft",
    temp_id: "6395df75a9038f587df95185",
  })
    .count()
    .then((result) => {
      res.send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};

// delete project

const deleteProject = (req, res) => {
  Project.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// update project details

const updateProject = (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.query._id },
    { proj_status: req.body.proj_status },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// update project details proj languages

const updateProjecByTags = (req, res) => {
  Project.findOneAndUpdate(
    { proj_name: req.body.proj_name },
    { proj_tags: req.body.proj_tags },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// update project details proj languages

const updateProjecByTerms = (req, res) => {
  Project.findOneAndUpdate(
    { proj_name: req.body.proj_name },
    { terms_conditions: req.body.terms_conditions },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// update project details proj languages

const updateProjectByTemp = (req, res) => {
  Project.findOneAndUpdate(
    { proj_name: req.body.proj_name },
    { temp_id: req.body.temp_id },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
//search project on the bais of project tags or project name
const searchProjectsByTags = (req, res) => {
  Project.find({
    $or: [
      { proj_name: req.query.proj_name },
      { proj_tags: { $in: [req.query.proj_tags] } },
    ],
  })
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// sort
const AscProjects = (req, res) => {
  Project.find({
    $or: [
      { resource_name: req.query.resource_name },
      { prepared_by: req.query.prepared_by },
    ],
  })
    .sort({ createdAt: 1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// sort by vteams
const ProjectSortByV = (req, res) => {
  Project.find({
    $and: [
      { temp_id: "6395ded86d71e15926fbbdc1" },
      {
        $or: [
          { resource_name: req.query.resource_name },
          { prepared_by: req.query.prepared_by },
        ],
      },
    ],
  })
    .sort()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// sort by nxb
const ProjectSortByN = (req, res) => {
  Project.find({
    $and: [
      { temp_id: "6395df75a9038f587df95185" },
      {
        $or: [
          { resource_name: req.query.resource_name },
          { prepared_by: req.query.prepared_by },
        ],
      },
    ],
  })
    .sort()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const DescProjects = (req, res) => {
  Project.find({
    $or: [
      { resource_name: req.query.resource_name },
      { prepared_by: req.query.prepared_by },
    ],
  })
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
export {
  addProject,
  getAllProject,
  getAllProjectByResource,
  getAllProjectByUSer,
  getAllProjectByStatusVC,
  getAllProjectByStatusVP,
  getAllProjectByStatusVD,
  getAllProjectByStatusNC,
  getAllProjectByStatusNP,
  getAllProjectByStatusND,
  getProjectById,
  deleteProject,
  updateProject,
  searchProjectsByTags,
  AscProjects,
  DescProjects,
  ProjectSortByV,
  ProjectSortByN,
  updateProjecByTags,
  updateProjecByTerms,
  updateProjectByTemp
};

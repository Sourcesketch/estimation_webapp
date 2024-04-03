import express from "express";
import {
  addProject,
  getAllProject,
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
  getAllProjectByResource,
  updateProjecByTags,
  updateProjecByTerms,
  updateProjectByTemp
} from "../controllers/projectController.js";
import {
  verifyToken,
  admin,
  level2,
  level1,
} from "../middlewares/authHandler.js";

const router = express.Router();

router.get("/", getAllProject);
router.get("/resource", getAllProjectByResource);
router.get("/comp", getAllProjectByStatusVC);
router.get("/pending", getAllProjectByStatusVP);
router.get("/draft", getAllProjectByStatusVD);
router.get("/Ncomp", getAllProjectByStatusNC);
router.get("/Npending", getAllProjectByStatusNP);
router.get("/Ndraft", getAllProjectByStatusND);

router.get("/Vsort", ProjectSortByV);
router.get("/Nsort", ProjectSortByN);

router.get("/userId", getAllProjectByUSer);
router.get("/search", searchProjectsByTags);
router.get("/asort", AscProjects);
router.get("/dsort", DescProjects);
router.post("/", addProject);
router.get("/:id", getProjectById);
router.delete("/:id", deleteProject);
router.put("/", updateProject);
router.put("/tags", updateProjecByTags);
router.put("/terms", updateProjecByTerms);
router.put("/temp", updateProjectByTemp);

export default router;

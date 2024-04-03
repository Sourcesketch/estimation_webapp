import express from 'express';
import {
 getTemplates,
 createTemplate,
 getTempById,
 updateTemp,
//  deleteTemp
} from '../controllers/tempController.js';
import { verifyToken, admin } from '../middlewares/authHandler.js';

const router = express.Router();

router.get('/',verifyToken, getTemplates); 
router.post('/',verifyToken, admin, createTemplate); //Admin can only create
router.get('/:id',verifyToken, getTempById);
// router.delete('/:id', deleteTemp);
router.put('/:id',verifyToken, admin, updateTemp); // Admin can only update 

export default router;

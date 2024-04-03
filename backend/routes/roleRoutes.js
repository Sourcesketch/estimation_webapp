import express from 'express';
import { addRole, getAllroles, getRoleById, deleteRole } from '../controllers/roleController.js';


const router = express.Router();

router.get('/', getAllroles);
router.post('/', addRole);
router.get('/:id', getRoleById);
router.delete('/:id', deleteRole);
// router.put('/:id', updateUser);
 


export default router;
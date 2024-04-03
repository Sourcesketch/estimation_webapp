import express from 'express';
import { addRevision, deleteRevision, getAllRevision, getRevisionById, updateRevision } from '../controllers/revisionController.js';

const router = express.Router();

router.get('/', getAllRevision);
router.post('/', addRevision);
router.get('/:id', getRevisionById);
router.delete('/:id', deleteRevision);
router.put('/:id', updateRevision);


export default router;
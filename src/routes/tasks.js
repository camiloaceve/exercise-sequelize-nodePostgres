import { Router } from 'express';
const router = Router();

import { createTask, deleteTask, getOneTask, getTask, getTaskByProject, updateTask } from '../controllers/task.controller'

router.post('/', createTask);
router.get('/',getTask);
router.get('/:id', getOneTask);

router.delete('/:id',deleteTask);
router.put('/:id', updateTask);

// Relation  api/tasks/project/:projectId
router.get('/project/:projectid', getTaskByProject);

export default router;
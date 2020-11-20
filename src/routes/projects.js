import { Router } from 'express';
const router = Router();

import { createProject, getOneProject, getProjects, deleteProject, updateProject } from '../controllers/project.controller';

router.post('/', createProject)
router.get('/', getProjects)

// get ProjectId
router.get('/:id', getOneProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

export default router;
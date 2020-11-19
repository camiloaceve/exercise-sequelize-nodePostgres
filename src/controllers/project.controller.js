import Project from '../models/Project';

export async function createProject(req, res) {
    const { name, priority, description, deliverydate} = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        });
        if (newProject) {
            return res.json({
                message: 'Project created',
                data: newProject
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
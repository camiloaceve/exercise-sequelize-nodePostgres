import Task from '../models/Task';

export async function getTask(req, res) {
    const { name, done, projectid} =  req.body;
    let newTask = await Task.create({
        name,
        done,
        projectid
    },{
        fields: ['name', 'done', 'projectid']
    });
    res.json({message: 'New task'});
}

export async function createTask(req, res) {

}

export async function getOneTask(req, res) {

}

export async function deleteTask(req, res) {

}

export async function updateTask(req, res) {

}
export async function getTaskByProject(req, res) {

}
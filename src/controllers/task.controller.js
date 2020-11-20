import Task from '../models/Tasks';


export async function getTask(req, res) {
    const tasks = await Task.findAll({
        attributes: ['id', 'projectid', 'name', 'done'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({tasks});
}

export async function createTask(req, res) {
    const { name, done, projectid } =  req.body;
    let newTask = await Task.create({
        name,
        done,
        projectid
    },{
        fields: ['name', 'done', 'projectid']
    });
    res.json({message: 'New task'});
}

export async function getOneTask(req, res) {
    try {
        const { id } =  req.params;
        const task = await Task.findOne({
            where: {id},
            attributes : [ 'id', 'name', 'done', 'projectid' ]
        });
        res.json(task);
    } catch (e) {
        console.log(e)
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Task deleted',
            coun: deleteRowCount
        })
    } catch (error) {
        console.log(error)
    }
}

export async function updateTask(req, res) {
    try {
        const { id
         }= req.params;
        const { name, done, projecid} = req.body;
        
        // all Task
        const task = await Task.findAll({
            attributes: [ 'name', 'done', 'projecid' ],
            where: {
                id
            }
        });
        if (task) {
            task.forEach(async task => {
                await task.update({
                    name,
                    done,
                    projecid
                });
            })
        }
        return res.json({
            message: 'Task update',
            data: task
        })
    } catch (error) {
        console.log(error)
    }
}

export async function getTaskByProject(req, res) {
    const { projectid } = req.params;
    const task = await Task.findAll({
        attributes: ['id', 'name', 'done', 'projectid'],
        where: { projectid }
    });
    res.json({task});
}
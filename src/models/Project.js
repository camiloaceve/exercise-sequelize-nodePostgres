import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Task from './Task';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate:{
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

/**Project.Task = Project.hasMany(Task);
Task.Project = Task.belongsTo(Project)*/
Project.hasMany(Task, { foreingKey: 'projectid', sourceKey: 'id'});
Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id' });

export default Project;
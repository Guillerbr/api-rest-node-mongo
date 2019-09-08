const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,     //referencia user id, comando moogoose para chave primaria
        ref: 'User',                             //relacionamento de tabelas
        require: true,

    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,   //referencia user id, comando moogoose para chave primaria
        ref: 'Task',                            //relacionamento de tabelas
    }],

    createdAt: {
        type: Date,
        default: Date.now,
    },

});




const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
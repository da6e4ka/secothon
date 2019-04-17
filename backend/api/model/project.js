const mongoose = require('mongoose');
const { Schema } = mongoose;

let fields = {
    title: { type: String, required: true },
    text: { type: String, required: true },
    problem: {type: String, required: true},
    solution: {type: String, required: true},
    uid: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    wants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    need: {type: Object, required: true}
};


const ProjectSchema = Schema(fields, {
    timestamps: { createdAt: 'creAt', updatedAt: 'upAt' }
});


ProjectSchema.methods.getProjectByUserId = async function (userId) {
    let project = await this.model('Project').findOne({"author": userId});
    if (project) return project;

    project = await this.model('Project').find({});
    let pr = project.filter(elem => userId in elem.users);
    return pr[0]
};

ProjectSchema.methods.deleteProject = async function () {
    let projectId = this._id;
    const Project = this.model('Project');
    const User = this.model('User');


    await User.updateMany(
        {project: projectId},
        {project: ""}
    );

    await Project.deleteOne(
        {_id: projectId}
    );

    console.log('=====PROJECT DELETED=====');
};


ProjectSchema.index({uid: 1}, {unique: true}); // 1 участник только 1 проект может заявить

module.exports = mongoose.model('Project', ProjectSchema);
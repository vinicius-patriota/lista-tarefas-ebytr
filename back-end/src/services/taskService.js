const { ObjectId } = require('mongodb');
const taskModel = require('../models/taskModel');
const Joi = require('joi');

const taskSchema = Joi.object({
  description: Joi.string().required(),
});

const addTask = async (description) => {
  const { error } = taskSchema.validate({ description });
  if (error) return { message: 'Invalid entries. Try again.' };

  const task = await taskModel.addTask(description);

  return task;
};

const removeTask = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { statusCode: 400, message: 'Invalid id. Try again.' };
  }

  const isDeleted = await taskModel.removeTask(id);

  return isDeleted;
};

const updateTask = async (id, description, check) => {
  if (!ObjectId.isValid(id)) {
    return { statusCode: 400, message: 'Invalid id. Try again.' };
  }

  const updatedTask = await taskModel.updateTask(id, description, check);

  return updatedTask;
};

module.exports = {
  addTask,
  removeTask,
  updateTask,
}
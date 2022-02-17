const taskService = require('../services/taskService');
const taskModel = require('../models/taskModel');

const getAllTasks = async (_req, res) => {
  const tasks = await taskModel.getAllTasks();

  res.status(200).json(tasks);
};

const addTask = async (req, res) => {
  const { description, check } = req.body;

  const task = await taskService.addTask(description);

  res.status(201).json(task);
};

const removeTask = async (req, res) => {
  const { id } = req.params;

  const result = await taskService.removeTask(id);

  if (result.statusCode) {
    return res
      .status(result.statusCode).json({ message: result.message });
  }

  res.status(204).send();
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { description, check } = req.body;

  const result = await taskService
    .updateTask(id, description, check);

  if (result.statusCode) {
    return res
      .status(result.statusCode).json({ message: result.message });
  }

  res.status(200).json(result);
};

module.exports = {
  getAllTasks,
  addTask,
  removeTask,
  updateTask,
}
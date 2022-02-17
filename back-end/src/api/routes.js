const express = require('express');
const cors = require('cors');

const taskController = require('../controllers/taskController');

const routes = express();


routes.use(cors());
routes.use(express.json());

routes.get("/task", taskController.getAllTasks);
routes.post("/task", taskController.addTask);
routes.delete("/task/:id", taskController.removeTask);
routes.put("/task/:id", taskController.updateTask);

module.exports = routes;
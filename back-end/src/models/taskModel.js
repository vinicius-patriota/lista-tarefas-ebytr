const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

const getAllTasks = async () => {
  const taskCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('tasks'));

  const tasks = await taskCollection.find().toArray();

  return tasks;
};

const addTask = async (description) => {
  if (!description) return false;

  const taskCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('tasks'));

  const { insertedId: _id } = await taskCollection
    .insertOne({ description });

  return {
    description,
  };
};

const removeTask = async (id) => {
  if (!id) return false;

  const taskCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('tasks'));

  await taskCollection
    .deleteOne({ _id: ObjectId(id) });

  return true;
};

const updateTask = async (id, description, check) => {
  if (!id) return false;

  const taskCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('tasks'));

  await taskCollection.updateOne(
    { _id: ObjectId(id) },
    { $set: { description, check } },
  );

  return { _id: id, description };
};

module.exports = {
  getAllTasks,
  addTask,
  removeTask,
  updateTask,
}
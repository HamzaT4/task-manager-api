const express = require('express');
const router = express.Router();
const {
  createTask,
  getUserTasks,
  updateTaskStatus
} = require('../controllers/taskController');

router.post('/tasks', createTask);
router.get('/users/:id/tasks', getUserTasks);
router.patch('/tasks/:id', updateTaskStatus);

module.exports = router;

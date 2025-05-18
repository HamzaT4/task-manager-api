// controllers/taskController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { createTaskSchema, updateStatusSchema } = require('../validators/taskValidator');

exports.createTask = async (req, res) => {
  const { error, value } = createTaskSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const user = await prisma.user.findUnique({ where: { id: value.userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const task = await prisma.task.create({ data: value });

    console.log(`Notification sent to user ${user.email} for new task: ${task.title}`);
    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getUserTasks = async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const tasks = await prisma.task.findMany({
      where: { userId },
    });
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ error: 'Error fetching tasks' });
  }
};

exports.updateTaskStatus = async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { error, value } = updateStatusSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { status: value.status },
    });
    return res.status(200).json(task);
  } catch (err) {
    return res.status(404).json({ error: 'Task not found' });
  }
};

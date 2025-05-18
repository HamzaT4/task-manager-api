const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  status: Joi.string().valid('pending', 'in_progress', 'completed').optional(),
  userId: Joi.number().integer().required()
});

const updateStatusSchema = Joi.object({
  status: Joi.string().valid('pending', 'in_progress', 'completed').required()
});

module.exports = { createTaskSchema, updateStatusSchema };
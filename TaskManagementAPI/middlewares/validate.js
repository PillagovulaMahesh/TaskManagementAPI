const Joi = require('joi');

const schemas = {
  createTask: Joi.object({
    title: Joi.string().max(100).required(),
    description: Joi.string().optional(),
    status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED').optional(),
    priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').required(),
    dueDate: Joi.date().optional(),
  }),
  updateTask: Joi.object({
    title: Joi.string().max(100).optional(),
    description: Joi.string().optional(),
    status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED').optional(),
    priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').optional(),
    dueDate: Joi.date().optional(),
  }),
};

module.exports = (schemaName) => (req, res, next) => {
  const schema = schemas[schemaName];
  if (!schema) return next();
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const validate = require('../middlewares/validate');

const router = express.Router();

router.post('/', validate('createTask'), createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.put('/:id', validate('updateTask'), updateTask);
router.delete('/:id', deleteTask);

module.exports = router;

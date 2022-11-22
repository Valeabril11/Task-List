const { Router } = require('express');
const pool = require('../db')
const router = Router();

const { getAllTasks, deleteTask ,getASingleTask, putUpdateTask,postCreatingATask } = require('../controllers/tasks.controllers');

router.get('/task', getAllTasks)
router.get('/task/:id', getASingleTask)
router.post('/task', postCreatingATask)
router.delete('/task/:id', deleteTask)
router.put('/task/:id', putUpdateTask)

module.exports = router;
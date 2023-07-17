const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const { User } = require('./models');
const { Course } = require('./models');
const PORT = 5001;

const app = express();

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());


app.post('/api/users', async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: 'User Created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User Created failed',
      data: error,
    });
  }
});
app.get('/api/users', async (req, res, next) => {
  try {
    const result = await User.findAll();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Users fetched failed',
      data: error,
    });
  }
});
app.get('/api/users/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await User.findOne({ where: { id: id } });
    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User fetched failed',
      data: error,
    });
  }
});

app.put('/api/users/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await User.update(req.body, { where: { id: id } });
    res.status(200).json({
      success: true,
      message: 'User update successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User fetched failed',
      data: error,
    });
  }
});

app.delete('/api/users/:id', async(req, res, next) => {
  
  const id = req.params.id;
  try {
    const result = await User.destroy({ where: { id: id } }, id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'cannot delete user',
      data: error,
    });
  }

});



//for courses
app.post('/api/courses', async (req, res, next) => {
  try {
    const result = await Course.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Course Added successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to add course',
      data: error,
    });
  }
});
app.get('/api/courses', async (req, res, next) => {
  try {
    const result = await Course.findAll();
    res.status(200).json({
      success: true,
      message: 'Courses fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to fetch courses',
      data: error,
    });
  }
});
app.get('/api/courses/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Course.findOne({ where: { id: id } });
    res.status(200).json({
      success: true,
      message: 'Course fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Course fetched failed',
      data: error,
    });
  }
});

app.put('/api/courses/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Course.update(req.body, { where: { id: id } });
    res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Course Update failed',
      data: error,
    });
  }
});

app.delete('/api/courses/:id', async(req, res, next) => {
  
  const id = req.params.id;
  try {
    const result = await Course.destroy({ where: { id: id } }, id);
    res.status(200).json({
      success: true,
      message: 'Course deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'cannot delete Course',
      data: error,
    });
  }

});

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
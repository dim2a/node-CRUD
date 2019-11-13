const { Router } = require('express');
const User = require('../models/user');
const router = Router();

//Read
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server error',
    });
  }
});
//Create
router.post('/', async (req, res) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    res.status(201).json({ req: req.body, message: 'done', User });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server error',
    });
  }
});
//Update
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(+req.params.id);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    await user.save();
    res.status(200).json({ user });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server error',
    });
  }
});
//Delete
router.delete('/:id', async (req, res) => {
  try {
    // const users = await User.findAll({
    //   where: {
    //     id: +req.params.id,
    //   },
    // });
    // await users[0].destroy();
    const user = await User.findByPk(+req.params.id);
    await user.destroy();
    res.status(204).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server error',
    });
  }
});

module.exports = router;

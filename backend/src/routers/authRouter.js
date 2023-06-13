const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

router.get('/', async (request, response) => {
  // response.json(request.session.user || null);
  response.json('success');
});

router.post('/signup', async (request, response) => {
  try {
    const { password, email, username } = response.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = (
      await User.create({
        username,
        email,
        password: hashedPassword,
      })
    ).get();
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    request.session.user = user;
    return response.json({ message: 'Успешно зарегистрировались!', user });
  } catch (error) {
    return response.status(400).json({ message: 'Ошибка регистрации', error });
  }
});

router.post('/signin', async (request, response) => {
  try {
    const { password, email } = request.body;

    const finder = {};
    if (email) {
      finder.email = email;
    }

    const user = await User.findOne({
      where: finder,
      attributes: ['id', 'username', 'email', 'password'],
      raw: true,
    });
    if (!user) {
      return response.status(401).json({ message: 'Попробуйте снова!' });
    }
    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      delete user.password;
      request.session.user = user;
      return response.json({ message: 'Успешно авторизовались!', user });
    }

    return response.json(null);
  } catch (error) {
    return response
      .status(400)
      .json({ message: 'Ошибка авторизации!', error: error.message });
  }
});

router.get('/signout', (request, response) => {
  try {
    request.session.destroy();
    response.clearCookie('sheva');
    response.sendStatus(200).json({ message: 'Вы успешно вышли из аккаунта!' });
  } catch (error) {
    response
      .status(400)
      .json({ message: 'Ошибка выхода из аккаунта!', error: error.message });
  }
});

module.exports = router;

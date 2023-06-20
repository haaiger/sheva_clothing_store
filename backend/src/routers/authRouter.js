const jwt = require('jsonwebtoken');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/signup', async (request, response) => {
  try {
    const { password, email } = request.body;

    const existingUser = await User.findOne({
      where: { email },
      raw: true,
    });

    if (existingUser) {
      return response.json({
        message: 'Пользователь с таким email уже существует!',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = (
      await User.create({
        email,
        password: hashedPassword,
      })
    ).get();

    const payload = { userId: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;

    // request.session.user = user;

    return response.json({
      message: 'Успешно зарегистрировались!',
      token,
    });
  } catch (error) {
    return response.json({
      message: 'Ошибка регистрации, повторите попытку!',
      error,
    });
  }
});

router.post('/signin', async (request, response) => {
  try {
    const { password, email } = request.body;

    const user = await User.findOne({
      where: { email },
      raw: true,
    });

    if (!user) {
      return response
        .status(401)
        .json({ message: 'Пользователь с указанным email не найден!' });
    }

    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      const payload = { userId: user.id, email: user.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      delete user.password;

      // request.session.user = user;

      return response.json({
        message: 'Успешно авторизовались!',
        token,
      });
    }

    return response.json({ message: 'Неверный пароль. Попробуйте снова!' });
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

/* eslint-disable react/destructuring-assignment */
const jwt = require('jsonwebtoken');

module.exports = function AuthenticateToken(request, response, next) {
  const { authorization } = request.headers;

  if (!authorization) {
    const errorMessage = 'Отсутствует токен авторизации!';
    return response.status(401).json({ message: errorMessage });
  }

  jwt.verify(authorization, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      const errorMessage = 'Недействительный токен авторизации!';
      return response.status(403).json({ message: errorMessage });
    }
    request.user = decoded;
    next();
    return null;
  });
};

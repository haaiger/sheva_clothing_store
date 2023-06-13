module.exports = function (request, response, next) {
  console.log(request.session);

  if (request.session.user) {
    next();
  } else {
    response.status(403).json({ msg: 'Unauthorized' });
  }
};

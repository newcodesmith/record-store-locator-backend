function isValidId(req, res, next) {
  if (/^\d+$/.test(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

module.exports = { isValidId };

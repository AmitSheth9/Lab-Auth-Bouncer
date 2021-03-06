module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    if(req.user.email != 'admin') throw new Error('Not authorized');
    next();

  } catch (error) {
    console.error(error);
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
};

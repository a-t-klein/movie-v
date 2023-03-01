const {Favorites} = require('./FavoriteModel');
const favoriteController = {}

favoriteController.addFavorite = async (req, res, next) => {
  try {
    console.log('REQBODY', req.body)
    await Favorites.create(req.body);
    console.log('added_char');
    return next();
  } catch (err) {
    return next({
      log: 'Error in addFavorite!',
      status: 400,
      message: {err: `in favoriteController.addFavorite: ${err}`}
    });
  }
}

favoriteController.getFavorite = async (req, res, next) => {
    try {
      const results = await Favorites.find().exec()
      res.locals.favorites = results; 
      next();
    } catch (err) {
      return next({
        log: 'Error in getFavorite!',
        status: 400,
        message: {err: `in favoriteController.getFavorite: ${err}`}
      });
      
    }
}

module.exports = favoriteController;
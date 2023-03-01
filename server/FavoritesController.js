const models = require('./FavoriteModel');

const favoriteController = {}

favoriteController.addFavorite = async (req, res, next) => {
  try {
    models.Favorite.create(req.body , (err, respose) => {
      if(err){
        return next({
          log: 'Error in addFavorite!',
          status: 400,
          message: {err: `in favoriteController.addFavorite: ${err}`}
        })
      }
      console.log(req.body);
      return next()
    })
    
  } catch (error) {
    
  }
}

module.exports = favoriteController;
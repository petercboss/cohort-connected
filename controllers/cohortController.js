(()=>{
    const db = require('../models');

    module.exports = {
        findUser: (req, res) => {
            db.User
              .findOne({_id: req.params.id})
              .then(dbUser => res.json(dbUser))
              .catch(err => res.status(422).json(err));
        },
        createUser: (req, res) => {
            db.User
              .create(req.body)
              .then(dbUser => res.json(dbUser))
              .catch(err => res.status(422).json(err));
        },
        findNews: (req, res) => {
            db.News
              .find({})
              .then(dbNews => res.json(dbNews))
              .catch(err => res.status(422).json(err));
        },
        findEvents: (req, res) => {
            db.Events
              .find({})
              .then(dbEvents => res.json(dbEvents))
              .catch(err => res.status(422).json(err));
        },
        findJobs: (req, res) => {
            db.Job
              .find({})
              .then(dbJobs => res.json(dbJobs))
              .catch(err => res.status(422).json(err));
        },
        findFavorites: (req, res) => {
            db.User.findOne({ _id: req.params.id })
              .populate(`${req.params.favorite}`)
              .then(dbFavorites => res.json(dbFavorite))
              .catch(err => res.status(422).json(err));
        },
        createFavorite: (req, res) => {
            db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { [req.params.favorite]: result._id }}, { new: true })
              .then(dbFavorite => res.json(dbFavorite))
              .catch(err => res.status(422).json(err));
        },
        removeFavorite: (req, res) => {
            db.User.findOneAndUpdate({ _id: req.params.id }, { $pull: { [req.params.favorite]: result._id }})
              .then(dbFavorite => res.json(dbFavorite))
              .catch(err => res.status(422).json(err));
        }
    };
})();
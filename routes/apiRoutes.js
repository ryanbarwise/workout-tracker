

const db = require("../models")
module.exports = function(app) {
    // Add exercises to a previous workout plan.
    
    // Add new exercises to a new workout plan.
    
    // View exercise details (wieghts, reps, etc) on the stats page.
    // ---------------------------------------------------------------------------
  
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
        .then(workouts => {
          res.json(workouts);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.post("/api/workouts", function(req, res) {
        db.Workout.create({exercises: [req.body]})
  .then(workout => {
      req.json(workout)
  })
  .catch(({ message }) => {
    console.log(message);
    req.json({err: message})

  });
    });


    app.put("/api/workouts/:id", function(req, res) {
       db.Workout.findOneAndUpdate({_id:req.params.id}, { $push: {exercises: req.body} })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
})
    
  };
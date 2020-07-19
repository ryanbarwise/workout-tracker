const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      },
      sets: {
        type: Number,
        required: true
      },
      distance: {
        type: Number,
        required: true
      },
    },
  ],
});

// {
//   day: new Date().setDate(new Date().getDate()-10),
//   exercises: [
//     {
//       type: "resistance",
//       name: "Bicep Curl",
//       duration: 20,
//       weight: 100,
//       reps: 10,
//       sets: 4
//     }
//   ]
// },

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;

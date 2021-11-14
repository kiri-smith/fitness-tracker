const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now
    },
    workout: [
      {
        name: {
          type: String,
          trim: true,
          required: true
        },
        type: {
          type: String,
          trim: true,
          required: true
        },
        distance: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        }
      }
    ]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
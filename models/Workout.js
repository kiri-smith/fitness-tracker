const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
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
        duration: {
          type: Number,
          required: true
        },
        distance: {
          type: Number
        },
        weight: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        }
      }
    ]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
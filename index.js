function calculateBMI(weight, height) {
  console.log("input to function ok?", weight, height);
  const BMI = weight / (height * height);
  console.log("BMI:", BMI);
}

function bmiCalculator() {
  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  calculateBMI(82, 1.79);

  //   Comment out input checks for now
  //   console.log("WEIGHT: ", weightInKg);
  //   console.log("HEIGHT: ", heightInM);
  //   console.log("AGE: ", age);
  //   console.log("DAILY EXERCISE: ", dailyExercise);
  //   console.log("GENDER: ", gender);
}

bmiCalculator();

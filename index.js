function calculateBMI(weight, height) {
  // we can just return the expressions
  // That way we don't need another variable
  return weight / (height * height);
}

function bmiCalculator() {
  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  const BMI = calculateBMI(weightInKg, heightInM);

  console.log("WEIGHT: ", weightInKg);
  console.log("HEIGHT: ", heightInM);
  console.log("AGE: ", age);
  console.log("DAILY EXERCISE: ", dailyExercise);
  console.log("GENDER: ", gender);
  console.log("BMI: ", BMI);
}

bmiCalculator();

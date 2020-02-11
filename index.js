function calculateBMI(weight, height) {
  return weight / (height * height);
}

function calculateIdealWeight(height) {
  return 22.5 * height * height;
}

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
  const heightInCm = height * 100;

  let BMR;

  if (genderOfUser === "m") {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
  } else {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
  }

  return BMR;
}

function calculateDailyCalories(basalMetabolicRate, doesUserExercise) {
  return doesUserExercise === "yes"
    ? basalMetabolicRate * 1.6
    : basalMetabolicRate * 1.4;
}

function calculateDietWeeks(weightToLose) {
  console.log("input correct?", weightToLose);
  const weeks = Math.abs(weightToLose / 0.5);
  console.log(weeks);
}

function bmiCalculator() {
  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  const BMI = calculateBMI(weightInKg, heightInM);
  const idealWeightKg = calculateIdealWeight(heightInM);
  const BMR = calculateBMR(weightInKg, heightInM, age, gender);
  const dailyCalories = calculateDailyCalories(BMR, dailyExercise);
  const weightToLoseKg = weightInKg - idealWeightKg;
  calculateDietWeeks(-9.7);

  //   console.log("WEIGHT: ", weightInKg);
  //   console.log("HEIGHT: ", heightInM);
  //   console.log("AGE: ", age);
  //   console.log("DAILY EXERCISE: ", dailyExercise);
  //   console.log("GENDER: ", gender);
  //   console.log("BMI: ", BMI);
  //   console.log("IDEAL WEIGHT", idealWeightKg);
  //   console.log("BMR: ", BMR);
  //   console.log("DAILYCALORIES:", dailyCalories);
  //   console.log("WEIGHT TO LOSE", weightToLoseKg);
}

bmiCalculator();

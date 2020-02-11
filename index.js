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
  console.log("input ok?", basalMetabolicRate, doesUserExercise);
  let dailyCalories;

  if (doesUserExercise === "yes") {
    dailyCalories = basalMetabolicRate * 1.6;
  } else {
    dailyCalories = basalMetabolicRate * 1.4;
  }

  console.log(dailyCalories);
}

function bmiCalculator() {
  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  const BMI = calculateBMI(weightInKg, heightInM);
  const idealWeight = calculateIdealWeight(heightInM);
  const BMR = calculateBMR(weightInKg, heightInM, age, gender);
  calculateDailyCalories(1770, "yes");

  //   console.log("WEIGHT: ", weightInKg);
  //   console.log("HEIGHT: ", heightInM);
  //   console.log("AGE: ", age);
  //   console.log("DAILY EXERCISE: ", dailyExercise);
  //   console.log("GENDER: ", gender);
  //   console.log("BMI: ", BMI);
  //   console.log("idealWeight", idealWeight);
  //   console.log("BMR: ", BMR);
}

bmiCalculator();

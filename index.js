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
  return Math.abs(weightToLose / 0.5);
}

function calculateDietCalories(weightToLose, caloriesUsedDaily) {
  return weightToLose > 0 ? caloriesUsedDaily - 500 : caloriesUsedDaily + 500;
}

function validateNumberOfInputs(argv) {
  if (argv.length !== 7) {
    console.log(`
      You gave ${argv.length - 2} arguments(s) to the program
  
      Please provide 5 arguments for
      
      weight (kg), 
      height (m), 
      age (years), 
      wether you exercise daily (yes or no)
      and your gender (m or f)
      
      Example:
  
      $ node index.js 82 1.79 32 yes m
    `);

    process.exit();
  }
}

function bmiCalculator() {
  validateNumberOfInputs(process.argv);

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
  const dietWeeks = calculateDietWeeks(weightToLoseKg);
  const dietCalories = calculateDietCalories(weightToLoseKg, dailyCalories);
}

bmiCalculator();

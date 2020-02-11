function calculateBMI(weight, height) {
  return weight / (height * height);
}

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
  console.log("input to function ok?", weight, height, ageOfUser, genderOfUser);
  var heightInCm = height * 100;

  let BMR;

  if (genderOfUser === "m") {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
  } else {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
  }

  console.log("BMR inside function", BMR);
}

function bmiCalculator() {
  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  const BMI = calculateBMI(weightInKg, heightInM);
  calculateBMR(82, 1.79, 32, "m");

  //   Comment out other logs for now
  //   console.log("WEIGHT: ", weightInKg);
  //   console.log("HEIGHT: ", heightInM);
  //   console.log("AGE: ", age);
  //   console.log("DAILY EXERCISE: ", dailyExercise);
  //   console.log("GENDER: ", gender);
  //   console.log("BMI: ", BMI);
}

bmiCalculator();

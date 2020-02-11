function calculateBMI(weight, height) {
  return weight / (height * height);
}

function calculateIdealWeight(height) {
  console.log("input correct?", height);
  const idealWeight = 22.5 * height * height;
  console.log(idealWeight);
  return idealWeight;
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

function bmiCalculator() {
  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  const BMI = calculateBMI(weightInKg, heightInM);
  const idealWeight = calculateIdealWeight(1.79);
  console.log("Value in main function?", idealWeight);
  const BMR = calculateBMR(weightInKg, heightInM, age, gender);

  //   console.log("WEIGHT: ", weightInKg);
  //   console.log("HEIGHT: ", heightInM);
  //   console.log("AGE: ", age);
  //   console.log("DAILY EXERCISE: ", dailyExercise);
  //   console.log("GENDER: ", gender);
  //   console.log("BMI: ", BMI);
  //   console.log("BMR: ", BMR);
}

bmiCalculator();

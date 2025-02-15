// JavaScript for BMI Calculator and Caloric Deficit Calculator

document.addEventListener('DOMContentLoaded', () => {
    // BMI Calculator
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
      bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const heightCm = parseFloat(document.getElementById('height').value);
        const heightM = heightCm / 100;
        if (weight > 0 && heightM > 0) {
          const bmi = weight / (heightM * heightM);
          const bmiResult = document.getElementById('bmiResult');
          bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}.`;
        }
      });
    }
  
    // Caloric Deficit Calculator
    const calorieForm = document.getElementById('calorieForm');
    if (calorieForm) {
      calorieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bmr = parseFloat(document.getElementById('bmr').value);
        const deficit = parseFloat(document.getElementById('deficit').value);
        if (bmr > 0 && deficit > 0) {
          const dailyCalories = bmr - deficit;
          const calorieResult = document.getElementById('calorieResult');
          calorieResult.textContent = `To achieve your deficit, aim for ${dailyCalories.toFixed(0)} calories per day.`;
        }
      });
    }
  });
  
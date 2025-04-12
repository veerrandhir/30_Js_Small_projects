const form = document.querySelector("form");
// console.log(form) // checking wether the form is selected or not.
// if you get input form heignt and weight outside form , when form will load empty value will be stored , so taking value inside the form

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `${height}  is not valid`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight}  is not valid`;
  } else {
    // It will run program
    const BMI = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`; // Mera code ahan tak sahi hai baaki dekhna hai
  }

  //  Isme ham ye chahte hai ki BMI result ke sath ye remarks aaye "Underweight, normal ya Overweight "

  const newE1 = document.createElement("p");
  const node = document.createTextNode(function (remarksfn) {
    if (BMI <= 18.6) {
      results.innerHTML = `Under Weight ${BMI}`;
    } else if (BMI > 18.6 && BMI < 26.8) {
      results.innerHTML = `Normal Range ${BMI}`;
    } else {
      results.innerHTML = `Overweight ${BMI}`;
    }
    remarksfn();
  });
});
// Is code main ham silly mistake kiye the ye ki innerHTML ke sath hamesa = lagta hai but ham () laaye the last porject main bhi  ham silly mistake kiye the is cheej ko hamesa dhiyan dena chahiya hmko.

var weight=60;
var height=1.5;
var bmi=weight/(height*height)
console.log(bmi)
if(bmi<18.5){
    console.log("underweight")
}
else if(bmi>18.5 && bmi<24.9){
    console.log("Normal weight")
}
else if(bmi>25 && bmi<29.9){
    console.log("overweight")
}
else{
    console.log("obese")
}
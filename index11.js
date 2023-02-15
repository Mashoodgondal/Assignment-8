let physics=91;
let computer=71;
let Math = 98;
let Biology = 78;
let Chemistry=91;
let totalMarks =physics+computer+Biology+Chemistry+Math;
let percentage = (totalMarks/5)
console.log( percentage);
if (percentage>= 90) {
    console.log("Grade A")
}
else if(percentage>=80){
    console.log("Grade B")
}
else if(percentage>=70){
    console.log("Grade C")
}
else if(percentage>=60){
    console.log("D Grade")
}
else if(percentage>=40){
    console.log("E Grade")
}
else{
    console.log("Try again")
}
let monthNumber = 8;
if (monthNumber==1 || monthNumber == 3 || monthNumber==5 || monthNumber==7 || monthNumber==8 ||
     monthNumber == 10 || monthNumber ==12) {
    console.log("31 Days")
}
 else if (monthNumber ==2) {
    console.log("28 Days")
} else if(monthNumber == 4|| monthNumber == 6 || monthNumber ==9 || monthNumber== 11){
    console.log("30 Days")
}
else{
    console.log("Invalid condition")
}
    

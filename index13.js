let basicSalary = 5000;
let HRA;
let DA;
let grossSalary;
if (basicSalary <= 10000) {

    HRA = (20 / 100) * basicSalary;
    DA = (80 / 100) * basicSalary;
    grossSalary = HRA + DA;
}
else if (basicSalary <= 20000) {
    HRA = (25 / 100) * basicSalary;
    DA = (90 / 100) * basicSalary;
    grossSalary = HRA + DA;
}
else if (basicSalary > 20000) {
    HRA = (30 /100) * basicSalary;
    DA = (95 /100) * basicSalary;
    grossSalary = HRA + DA;
}
else {
    console.log(`Invalid`);
}
console.log(`GrossSalary= ${basicSalary + grossSalary}`);
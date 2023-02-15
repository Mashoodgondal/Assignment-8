let units = 225;
let unitPrice;
let additonalSurcharge;
let totalBill;


if (units <= 50) {
    unitPrice = 0.50 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;


} else if (units > 50 && units <= 150) {
    unitPrice = 0.75 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;


} else if (units > 150 && units <= 250) {
    unitPrice = 1.20 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;


} else {
    unitPrice = 1.50 * units;
    additonalSurcharge = (20 / 100) * unitPrice;
    totalBill = additonalSurcharge + unitPrice;

}

console.log(`Totalbill= ${totalBill}`);
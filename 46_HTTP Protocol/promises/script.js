//*************** Asinhronnij kod */
/*
setTimeout(callback, 2000);

function callback() {
    console.log("callback");
}
console.log("end of script"); // eto viveditsja pervim
*/

console.log("data request...");
setTimeout(() => {
    console.log("data preparation...");

    const product = {
        //poluchili dannie
        name: "phone",
        price: 100,
    };
    setTimeout(() => {
        product.status = "phone has been ordered";
        console.log(product);
    }, 2000);
}, 2000);
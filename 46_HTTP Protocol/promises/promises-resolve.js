/*
console.log("data request...");

const request = new Promise(function(resolve, reject) {
    //prinimaet 2 metoda. Resolve i reject eto callback funkcija. Promise eto objekt

    setTimeout(() => {
        console.log("data preparation...");

        const product = {
            //poluchili dannie
            name: "phone",
            price: 100,
        };
        resolve(product);
    }, 2000);
});

request.then((product) => {
    setTimeout(() => {
        product.status = "phone has been ordered";
        console.log(product);
    }, 2000);
});
*/

// request.then(() => {
//     console.log("data received");
// });

//*********** Task 2 - cepochka multiple promise */

console.log("data request...");

const request = new Promise(function(resolve, reject) {
    //prinimaet 2 metoda. Resolve i reject eto callback funkcija. Promise eto objekt

    setTimeout(() => {
        console.log("data preparation...");

        const product = {
            //poluchili dannie
            name: "phone",
            price: 100,
        };
        resolve(product);
    }, 2000);
});

request.then((product) => {
    const request2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = "phone has been ordered";
            console.log(product);
            resolve(product);
        }, 2000);
    });
    request2.then((data) => {
        // dannie kotorie poluchim v rezuljtate
        console.log("clients data received");
        console.log(data);
    });
});

//***************** Promises optimization */

console.log("data request...");

const request = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("data preparation...");

        const product = {
            name: "phone",
            price: 100,
        };
        resolve(product);
    }, 2000);
});

request.then((product) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                product.status = "phone has been ordered";
                console.log(product);
                resolve(product);
            }, 2000);
        })
        .then((data) => {
            data.modify = true;
            return data;
        })
        .then((data) => {
            console.log("data received");
            console.log(data);
        });
});
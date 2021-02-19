console.log("data request...");

const request = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("data preparation...");

        const product = {
            name: "phone",
            price: 100,
        };
        reject();
    }, 2000);
});

request
    .then((product) => {
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
    })
    .catch(() => {
        console.log("Error was detected!");
    })
    .finally(() => {
        console.log("End of code");
    });
//********************** Predusmotrenie oshibok i ih obrabotka */

//function gets random numbers
function f1() {
    if (Math.random() > 0.5) {
        throw new Error("Error is detected! Something went wrong!");
        // error = new Error('Error. Somenthing went wrong!')
    }
    return 100; // if no error return number 100. Everything is ok
}

try {
    const res = f1();
    console.log(res);
} catch (error) {
    // priletit objekt s soobsheniem ob osibke
    //esli pojmal osibku CATCH
    console.log(error.message); // vivedi osibku
} finally {
    // vipolnitsja v ljubom sluchae
    console.log("Good code");
}

//console.log("code end");
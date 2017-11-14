console.log('Starting App');
setTimeout(() => {
    console.log("2 mins");
}, 2000)
setTimeout(function () {
    console.log('1 mins');
}, 1000);
console.log('I will be printed second');

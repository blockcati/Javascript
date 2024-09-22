let count = 5;
const timer = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) clearInterval(timer);
}, 1000);
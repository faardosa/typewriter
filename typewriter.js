const str = "hello there from lighthouse labs";

let delay = 0;
const increment = 400;

for (let i of str) {
    setTimeout(() => {
        process.stdout.write(i);
    }, delay);
    delay += increment;
}

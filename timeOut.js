function doSomething(){
    console.log(5555);
}
console.log(444);
setTimeout(doSomething,4000);
console.log(333);
console.log(222);
setInterval(() => {
    console.log('do something');
}, 2000);
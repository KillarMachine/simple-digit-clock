let pro=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("1");
        console.log("Hacking inialisation.......");
        console.log("Ecrpytion Found!");
    }, 7000);
    reject("1");
}).catch(()=>{
    console.log("Ecrpytion Failed");
})
console.log(pro);
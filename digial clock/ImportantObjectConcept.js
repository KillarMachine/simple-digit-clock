let a={
    name:"waqar",
    fatherName:"Nisar",
    rollNo:23};
for(let i=0;i<Object.keys(a).length;i++){
    // console.log(Object.keys(a)[i],a[Object.keys(a)[i]]);
}
for(let key in a){// in is used for keys
    // console.log(key,a[key]);
}
// object in array

// Complex structures (objects in array)
let arr=[
    {hostName:"Aslam234",ID:324234,IP:"234.234.345.236"},
    {hostName:"janjam",ID:3242325,IP:"234.234.545.237"},
    {hostName:"sorrynoname",ID:324236,IP:"234.234.645.238"},
    {hostName:"backback",ID:324237,IP:"234.234.745.239"},
    {hostName:"fack.j",ID:324238,IP:"234.234.845.230"},
]
for(let key in arr){
    console.log(Object.keys(arr[key])[0],arr[key].hostName);
}
a={hostName:"fack.j",ID:324238,IP:"234.234.845.230"};

console.log(a);
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
let newArr=arr.map((x)=>{
    return x+1;
});

let newArr1=arr.reduce((x,y)=>{
    return x+y;
});
console.log(newArr);
console.log(newArr1);
let newArr3=arr.filter((x)=>{
    return x%2==0;
});

console.log(newArr3);
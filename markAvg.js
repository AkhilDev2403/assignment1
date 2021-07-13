let student ={
    
    "cs":95,
    "eng":99,
    "maths":80,
    "science":90,
    "lang":85
}

//converting objects into array
var arr = Object.entries(student)
//console.log(arr);

let total = 0
var res = arr.reduce((a,b) => total==0? total=a[1]+b[1]:total+=b[1]);
console.log(res);

//to get the total count of the array
var count = arr.length
//console.log(count);


//calculating the avarege value 
var avg = res/count
console.log(avg);
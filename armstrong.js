let rev=0, num=153, rem,org
org=num

while(num!=0){
    rem = num%10
    rev += rem*rem*rem
    num = Math.floor(num/10)
}

if(rev==org){
    console.log(`entered number ${org} is Armstrong`);
}
else{
    console.log("The number is Not Amstrong");
}
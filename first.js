console.log("HELLO BABYGIRL!");
name="TABU";
console.log(name);
age=908.34;
console.log(age);
x=null;
y=undefined;
console.log(x);
console.log(y);


product={
    title: "Pen",rting: 5,offer: 5,price: 270
};
console.log(product);


profile={
    name: "shradhakhapra", followers: "569K", following: 4, posts: 195, isfollower: true
};
console.log(profile);
console.log(profile.name);
console.log(profile["followers"]);
console.log(typeof profile["isfollower"]);67237

let grade;
no=67;
if(no>=90 && no<=100)
{
    grade="A";
}
else if(no>=70 && no<=89)
{
    grade="B";
}
else if(no>=60 && no<=69)
{
    grade="C";
}
else if(no>=50 && no<=59)
{
    grade="D";
}
else if(no>=0 && no<=49)
{
    grade="F";
}
console.log("Grade is: "+grade);

let fn=prompt("Enter your full name without spaces: ");
let un="@"+fn+fn.length;
console.log(un);

let items=[250,645,300,900,50]
let ind=0;
for(let i of items)
{
    console.log(`Value at index ${ind}=${i}`);
    items[ind]=items[ind]-(i/10);
    console.log(`Value after offer=${items[ind]}`);
    ind++;
}

const cv=(str)=>
{
    let count=0;
    for(let cha of str)
    {
        if(cha==="a" || cha==="e" || cha==="o" || cha==="i" || cha==="u")
        {
            count++;
        }
    }
    return count;
}

let nb=document.createElement("button");
nb.innerText="Click me";
nb.style.color="white";
nb.style.background="red";
document.querySelector("body").prepend(nb);

let para=document.querySelector("p");

let btn=document.querySelector("#mode");
let curr="light";
btn.addEventListener("click",()=>{
    if(curr==="light")
    {
        curr="dark";
        document.querySelector("body").style.background="black";
    }
    else{
         curr="light";
        document.querySelector("body").style.background="white";
    }
    console.log(curr);
});

class user
{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData()
    {
        console.log("some data");
    }
}
let student1=new user("Ranisha","srfgd@gmail.com");
let teacher2=new user("AF","sfvgd@gmail.com");
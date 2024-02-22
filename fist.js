//seclectrs,navgations

//selectors
let bodyName=document.getElementById("home");
console.log(bodyName);

let totallist=document.getElementsByTagName("ul")
console.log(totallist);

let bodyh= document.getElementsByClassName("sasi")
console.log(bodyh)

//navigations 

//childNode
let findchildNode=document.querySelector("ul");
console.log(findchildNode.childNodes);//in this case some white space is come like text,li,text,li,,,,like that

//children
let children=document.querySelector("ul");
console.log(findchildNode.children);//  inthis case avoided white space

//nextSiblings
let nextSiblings =document.querySelector("ul");
console.log(nextSiblings.nextSibling);//in this case some white space is come 

//nextElemenetsiblings
let nextESiblings =document.querySelector("ul li:nth-child(3)");
console.log(nextESiblings.nextElementSibling)//  inthis case avoided white space

//parent Element
let parentElement =document.querySelector("ul");
console.log(nextSiblings.parentElement.parentElement.parentElement.parentElement);
//  inthis case avoided white space

//lastchild
let lastchild =document.querySelector("ul");
console.log(nextSiblings.lastChild);//white space is comes dont use this

//last Element Child
let lastEchild =document.querySelector("ul");
console.log(lastEchild.lastElementChild);//  inthis case avoided white space

//fistElementchild
let fistElementchild =document.querySelector("ul");
console.log(fistElementchild.firstElementChild);//  inthis case avoided white space

//fistchild
let Fistchild=document.querySelector("ul");
console.log(Fistchild.firstChild);//white space is comes dont use this
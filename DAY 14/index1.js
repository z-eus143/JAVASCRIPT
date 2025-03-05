let n1 = 100;
let n2 = 200;
let n3 = 300;

switch(n1>n2){
    case true:
        console.log("n1 is greater than n2");
        break;
    case false:
        console.log("n2 is greater than n1");
        break;
    default:
        console.log("nothing is greater");
        break;
}

if(n1>n2){
    if(n1>n3){
        console.log("n1 is greater than n2 and n3");
    }else{
        console.log("n3 is greater than n1 and n2");
    }
}else{
    if(n2>n3){
        console.log("n2 is greater than n1 and n3");
    }else{
        console.log("n3 is greater than n1 and n2");
    }
}



var num = 3;

switch(num){
    case 1:
        console.log("hello");
        break;
    case 2:
        console.log("hii");
        break;
    case 3:
        console.log("bye");
        break;
    case 4:
        console.log("js");
        break;
    default:
        console.log("react");
        break;
}

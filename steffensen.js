function steffensen(a,b)
{
    const result= inputChecker(a,b);
        if(result)
        {
             const approx=0.0001;
             let x0=(a+b)/2.0;
             while(true)
             {
                 let fx0=definedFunction(x0);
                 let  ffx0=definedFunction(x0+fx0);
                 let reservedForCalculation=(parseFloat(fx0*fx0)/parseFloat(ffx0-fx0));
                 let x1=x0-reservedForCalculation;
                 let newResult=definedFunction(x1);
                 if(newResult<=approx)
                 {
                     alert(`the root is ${x1}`);
                     return;
                    // console.log("the root is ",c);
                 }
                 x0=x1;
             }
        }
        else{
            alert("invalid input");
            inputSystem();
        }
}
function inputChecker(a,b)
{
    if(a>b)
    {
        return false;
    }
    const fa=parseFloat(definedFunction(a));
    const fb=parseFloat(definedFunction(b));
    if((fa*fb)>0)
    {
        return false;
    }
return true;
}
function definedFunction(x)
{
return parseFloat(x*x+2*x-4);
}

function inputSystem(){
let a=parseFloat(prompt("give a"));
let b=parseFloat(prompt("give b"));
steffensen(a,b);
}
inputSystem();
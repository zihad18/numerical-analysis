function definedFunction(x)
{
return parseFloat(x*x+2*x-4);
}
function definedFunctionDerrivative(x)
{
return parseFloat(2*x+2);
}
function definedFunctionDerrivativeDerivative(x)
{
    return parseFloat(2);
}
function inputSystem(){
    let a=parseFloat(prompt("give a"));
    let b=parseFloat(prompt("give b"));
    halley(a,b);
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
 function halley(a,b)
    {
        const result= inputChecker(a,b);
        if(result)
        {
             const approx=0.0001;
             let x0=(a+b)/2.0;
             while(true)
             {
                 let fx0=definedFunction(x0);
                 let  fxx0=definedFunctionDerrivative(x0);
                 let fxxx0=definedFunctionDerrivativeDerivative(x0);
                 let reservedForCalculation=(2*fx0*fxx0)/((2*fxx0*fxx0)-(fxxx0*fx0));
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
    inputSystem();
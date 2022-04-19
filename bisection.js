function bisection(a,b){
   const result= inputChecker(a,b);
   if(result)
   {
        const approx=0.0001;
        while(Math.abs(definedFunction(b)-definedFunction(a))>approx)
        {
            let c=(a+b)/2.0;
            let newResult=definedFunction(c);
            if(Math.abs(newResult)<=approx)
            {
                alert(`the root is ${c}`);
                return;
               // console.log("the root is ",c);
            }
            else if((newResult*definedFunction(a))<0)
            {
                b=c;
            }
            else if((newResult*definedFunction(b))<0)
            {
                a=c;
            }
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
bisection(a,b);
}
inputSystem();
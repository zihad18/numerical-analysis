function definedFunction(x)
{
return parseFloat(x*x+2*x-4);
}
function inputSystem(){
    let a=parseFloat(prompt("give an initial aproximation "));
    fixedPoint(a);
}
function fixedPoint(a)
{
    const  approx=0.0001;
    while(true)
    {
        let b=definedFunction(a);
        if(Math.abs(b)<=approx)
        {
            alert(`the root is ${b}`);
            return ;
        }
        else{
            a=b;
        }
        i
    }
}
inputSystem();
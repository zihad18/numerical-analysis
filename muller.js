function muller(a,b)
{
   const result=inputChecker(a,b);
   if(result){
    let c=(a+b)/2.0;
    const approx=0.0001;
    while(true)
    {
        let fa=definedFunction(a);
        let fb=definedFunction(b);
        let fc=definedFunction(c);

        let h1=b-a;
        let h2=c-b;

      let  d1=(fb-fa)/h1;
      let  d2=(fc-fb)/h2;

      let p=(d2-d1)/(h1+h2);
      let q=p*h2 +d2;
      let r= fc;

      let x= c+ (-2*r)/(q+(Math.abs(q)/q)*Math.sqrt((q*q)-(4*p*r)));
      
      let fx=definedFunction(x);

      if(Math.abs(fx)<=approx)
      {
        alert(`the root is ${x}`);
        return;
      }
      a=b;
      b=c;
      c=x;



    }

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
muller(a,b);
}
inputSystem();
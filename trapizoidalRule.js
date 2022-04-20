function definedFunction(x)
{
return parseFloat(x*x+2*x-4);
}
function inputSystem(){
    let n=parseFloat(prompt("give the value of n"));
    let a=parseFloat(prompt("give the lower limit"));
    let b=parseFloat(prompt("give the upper limit"));
    trapizoidal(n,a,b);
    }
    function trapizoidal(n,a,b)
    {
        let sum=0.0;
        //console.log(sum);
        const h=parseFloat(parseFloat(b-a)/parseFloat(n));
        const inputxgenerator=(i)=>{
           return  parseFloat(a+h*i);};
        sum+=definedFunction(a);
        for (let i = 1; i <n ; i++) {
           let x=inputxgenerator(i);
            let fx=2.0*definedFunction(x);
          //  console.log(fx);
            sum+=fx;
        }
       // console.log(sum);
        let xn=inputxgenerator(n);
        const fx=definedFunction(xn);
        sum+=fx;
        //console.log(sum);
        sum=parseFloat(parseFloat(h*sum)/parseFloat(2));
        //console.log(sum);
        document.getElementById("intregation").innerHTML=  `The intregation result is : <strong>${sum}</strong>`;

    }
    inputSystem();
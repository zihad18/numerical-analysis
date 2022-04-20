const A =[
    [0.0,0.0,0.0,0.0,0.0],
    [0.0,9,3,4,7],
    [0.0,4,3,4,8],
    [0.0,1,1,1,3]
]
const x=[0.0,0.0,0.0,0.0];
gaussElimination();
function gaussElimination()
{
    let n=3;
    let m=4;

    for(let j=1; j<=n; j++){

        for(let i=1; i<=n; i++)
        {
            if(i>j)
            {
               let c=A[i][j]/A[j][j];
                for(let k=1; k<=n+1; k++)
                {
                    A[i][k]=A[i][k]-c*A[j][k];
                }
            }
        }

    }
    x[3]=parseFloat(parseFloat(A[3][4])/parseFloat(A[3][3]));
    for(let i=n-1; i>=1; i--)
    {
       let sum=0;
        for(j=i+1; j<=n; j++)
        {
            sum=sum+A[i][j]*x[j];
        }
        x[i]=parseFloat(parseFloat(A[i][n+1]-sum)/parseFloat(A[i][i]));
    }
    const parent=document.getElementById("result");
    parent.innerHTML=``;
    for(let i=1; i<=n; i++)
    {
        let child=document.createElement("p");
        child.innerHTML=`x[${i}]=${x[i]}`;
        parent.appendChild(child);
    }
}
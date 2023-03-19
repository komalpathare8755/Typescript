// create array and perform additon of all data and return 
//how to pass array to function and perform additon 
function Addition(Arr:number[]):number
{
   let  Sum: number=0;

   let  Cnt:number=0;
   
   for(Cnt=0;Cnt<Week.length;Cnt++)
    {
        Sum=Sum+Week[Cnt];
    }
    return Sum;
}
var Week:number[]=[10,20,30,40,50]

var Ret:number=0;

Ret=Addition(Week);

console.log("Addition is : "+Ret)
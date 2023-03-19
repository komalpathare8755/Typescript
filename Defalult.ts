
function Percentage( Marks:number=400,Outof:number=500):number
//Default parameter should be always  at the end of parameter list ;
{
let Ans:number=0;

Ans=(Marks/Outof)*100;

return Ans ;
}

var Per : number=0;

Per=Percentage( 220, 300 );
console.log("Percentage is :"+Per);

Per=Percentage( 220);
console.log("Percentage is :"+Per);

Per=Percentage( 220);
console.log("Percentage is :"+Per);
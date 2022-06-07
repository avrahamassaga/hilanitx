let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let setDay = dd + '/' + mm + '/' + yyyy; //final day
let hh = today.getHours(); 
let minu = today.getMinutes(); 
if (minu.toString().length<=1)minu="0"+minu;
let clock = hh +":"+minu; // final clock

let firstName = (localStorage.getItem('firstName'));
let lastName = (localStorage.getItem('lastName'));
let workerId = (localStorage.getItem('workerId'));

if(firstName!=='undefined'){
    firstName= JSON.parse(firstName);
    lastName= JSON.parse(lastName);
    workerId= JSON.parse(workerId);
}
export{setDay,clock,firstName,lastName,workerId}
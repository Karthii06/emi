import { useRef, useState } from 'react';
import './Emi.css'


function Emi(){


let [loanamt,setloan]=useState('')
let [interest,setinterest]= useState('')
let [months,setmonths] = useState('')
let [percent,setpercent] = useState('')
let loanamtRef= useRef(       )
let interestref=useRef()
let tenureref = useRef()

let getvalue = ()=>{
   console.log(loanamtRef.current.value);
   setloan(loanamtRef.current.value)
}
let getinterest=()=>{
   setinterest(interestref.current.value)
   let per=interest/100
   setpercent(per)
   
}
let getmonths= ()=>[
   setmonths(tenureref.current.value)
]
let getswitch=()=>{

}




return(
    
    <section className='full' >
        <article id='boxes'>
     <main id='firstbox'>
        <div id='one'>
            <h4 id='head'>Loan Amount</h4>
            <button id='loanamt' >₹{loanamt} </button>
            <input type="range" ref={loanamtRef} onChange={getvalue} min={100000}  max={300000000} id='firstslide'    />
            <span id='firstspan'>
            <span>₹1L</span>
            <span>₹30Cr</span>
            </span>
        </div>
        <div id='two'>
            <h4  id='head'>Illustrative Interest Rate p.a</h4>
            <button id='interest'>{interest}%</button>
            <input type="range"   id='secslide'  step={0.25}  min={1} max={20}    onChange={getinterest} ref={interestref}/>
            <span  id='secspan'>
            <span>1%</span>
            <span>10%</span>
            </span>
        </div>

        <div id='three'>
             <h4  id='head'> Tenure(Months
             <label htmlFor="" id='lab'>
             <input className='check' onChange={getswitch} type='checkbox' checked/>
             </label>)Years</h4>
             
            <button id='tenure' style={{height:'25px'}}>{months}</button>
            <input type="range" id='thirdslide' min={30} step={6} max={360} onChange={getmonths}  ref={tenureref} />
            <span  id='thirdspan'>
            <span>30Month</span>
            <span style={{width:'200px'}}>360 Months</span>
            </span>
            

        </div>
     </main>
  
     <main id='secondbox'>
        <article id='secondleft'>
     <div id='secleftcont'>
         <div id='val1'>
            Principal Amount
           <button id='color1'></button> 
               <h1 id='val11'>₹{loanamt}</h1>
         </div>

         <div id='val2'>
            <main>
         <h1>Interest Amount</h1>
         </main>
         <main>
            <button id='color2'></button>
              <h1 id='val22'>₹</h1> 
         </main>

            
         </div>

         <div id='val3'>
            <h1>Total Amount Payale</h1>
             <h1 id='val33'>₹{loanamt*percent}</h1>
         </div>

     </div>
     <div>
             <button id='circle' />
     </div>
     </article>

     <article >
        <button id='secondbutton1'> Your monthly EMI is ₹</ button>
     </article>
     <article >
        <button id='secondbutton2'>APPLY FOR HOME LOAN</button>
     </article>
     </main>
     </article>
  
  <article >
    <button id='thirdbox'>View Amortization Schedule <select name="" id="sel"></select></button>
  </article>


     </section>

)



}
export default Emi;
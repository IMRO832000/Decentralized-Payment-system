import React ,{useContext , useState} from 'react';
import {TransactionContext} from "../context/TransactionContext";

import { shortenAddress } from "../utils/shortenAddress";



 const Chtransaction =(addressTo, addressFrom, timestamp, message, amount)=>{
    const {currentAccount} = useContext(TransactionContext)
   // const {addressTo, addressFrom, timestamp, message, amount} = {...transaction};
   // console.log(currentAccount,adrto , addressFrom) 
    var chk =0;
    //const [chi, setChi] = useState(false);
    //console.log(transaction)
    if(JSON.stringify(currentAccount).toLowerCase()===JSON.stringify(addressFrom).toLowerCase()){
        //setChi(true);
        chk=1;
    }
    else if(JSON.stringify(currentAccount).toLowerCase()===JSON.stringify(addressTo).toLowerCase()){
        chk=2;
    }
   //console.log(JSON.stringify(currentAccount) , JSON.stringify(addressFrom))
    
    //console.log(addressTo, addressFrom , currentAccount ,message);

//console.log(chi)
//if(chk){
//console.log("values are equal")
// <TransactionsCard key={i} {...transaction}/> // this react hook can only be called at the top level , not conditionally
//}
//else{
  //  console.log("values aren't equal")
//}
//<TransactionsCard key={i} {...transaction}/> // this react hook can only be called at the top level , not conditionally
return chk;
}


const SentTransactionCard =({addressTo, addressFrom, timestamp, message, amount})=>{
    

let ch = Chtransaction(addressTo, addressFrom, timestamp, message, amount);

//console.log(ch,"chtransactionresult")

    return (
    
       <>
       
       { ch==1 ?(  
        <div className='bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-4 rounded-md hover:shadow-2xl'>

<div className='flex flex-col items-center w-full mt-3'>
<div className='display-flex justify-start w-full mb-6 p-2'>

<p className='text-white text-base'>
  From : {shortenAddress(addressFrom)}  
</p>


<p className='text-white text-base'>
  To : {shortenAddress(addressTo)}  
</p>

<p className='text-white text-base'>
    Amount : {amount} Eth

</p>
{message && (
    <>
    
    <p className='text-white text-base'>Msg : {message}</p>
    </>
)}
<br/>
<div className='bg-black p-3 px-8 w-max rounded-xl shadow-2xl'>
<p className='text-[#8c66ff] font-bold'>{timestamp}</p>
</div>

    </div>
</div>

        </div>
       ):(
<div></div>)


}
    </>
    
    )
}

const ReceivedTransactionCard =({addressTo, addressFrom, timestamp, message, amount})=>{
    

    let ch = Chtransaction(addressTo, addressFrom, timestamp, message, amount);
    
    //console.log(ch,"chtransactionresult")
    
        return (
        
           <>
           
           { ch==2 ?(  
            <div className='bg-[#181918] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-4 rounded-md hover:shadow-2xl'>
    
    <div className='flex flex-col items-center w-full mt-3'>
    <div className='display-flex justify-start w-full mb-6 p-2'>
    
    <p className='text-white text-base'>
      From : {shortenAddress(addressFrom)}  
    </p>
    
    
    <p className='text-white text-base'>
      To : {shortenAddress(addressTo)}  
    </p>
    
    <p className='text-white text-base'>
        Amount : {amount} Eth
    
    </p>
    {message && (
        <>
        
        <p className='text-white text-base'>Msg : {message}</p>
        </>
    )}
    <br/>
    <div className='bg-black p-3 px-8 w-max rounded-xl shadow-2xl'>
    <p className='text-[#8c66ff] font-bold'>{timestamp}</p>
    </div>
    
        </div>
    </div>
    
            </div>
           ):(
    <div></div>)
    
    
    }
        </>
        
        )
    }










const Transactions =() =>{
    const {currentAccount , transactions} = useContext(TransactionContext)
    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions' >
<div className='flex flex-col md:p-12 py-12 px-4'>
{currentAccount ? (

<>
<h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
          <br>
          </br>
          <h4 className="text-white text-xl font-bold text-center my-4">
          SENT TRANSACTIONS<br>
                      </br>
                      </h4>
<div className="flex flex-wrap justify-center items-center mt-10">
        
                     
        {transactions.reverse().map((transaction , i)=>(
          //Chtransaction(i, transaction) 
         <SentTransactionCard key={i} {...transaction}/> 
        ))}
        </div>
        
        <br>
        
        </br>

        <h4 className="text-white text-xl font-bold text-center my-4">
                            Receieved Transactions
                            </h4>



                            <div className="flex flex-wrap justify-center items-center mt-10">
                            {transactions.reverse().map((transaction , i)=>(
          //Chtransaction(i, transaction) 
         < ReceivedTransactionCard key={i} {...transaction}/> 
        ))}                  
           
           </div>








           </>



):(
<h3 className="text-white text-3xl text-center my-2 " style={{fontFamily:'monospace'}}>
            Connect your Wallet to view your transactions
          </h3>
)}






</div>
        </div>
    );

}
export default Transactions;
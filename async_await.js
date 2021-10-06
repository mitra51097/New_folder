const promise_xtn= function(){
const promise = new Promise(function(resolve, reject){
    const str1="zensarTech";
    const str2="zensartech";
    if(str1 === str2){
        resolve("Strings are matched");
    }else{
        reject("Strings are not matched");
    }
});
    return promise;
};
 async function demoPromise(){
     try {
         let message = await promise_xtn();
         console.log(message); 
     }catch (error){
         console.log("Error:"+ error);
     }
 }
 demoPromise();
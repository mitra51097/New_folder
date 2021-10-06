const promise = new Promise(function(resolve, reject){
    const str1="zensarTech";
    const str2="zensartech";
    if(str1 === str2){
        resolve();
    }else{
        reject();
    }
});
promise
    .then(function (){
        console.log("Promise resolved Successfully");
    })
    .catch(function(){
        console.log("Promise is rejected");
    });
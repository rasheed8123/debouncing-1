var timerid
function debouncing(func,time){
   if(timerid){
       clearInterval(timerid)
   }
    timerid = setTimeout(function(){
        func()
    },time)
}
async function search(){
    try{
    var k = document.querySelector("#search").value
    res1 = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ad13accd&s=${k}`)
    data2 = await res1.json();
    data3 = data2.Search
    console.log(data3)
    }
    catch(err){
        console.log(err)
    }
}
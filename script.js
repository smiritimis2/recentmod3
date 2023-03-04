let major=document.getElementById("main");
let search=document.getElementById("SEARCH");
let btn=document.getElementById("search");
let showmsg=document.getElementById("msg");

let arr=[];








btn.addEventListener("click",extract)

function extract()
{
 
  var date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  //var lblTime = document.getElementById("lblTime");
  //lblTime.innerHTML = time;

    console.log(date.getDate()+'/'+parseInt(date.getMonth()+1)+'/'+date.getFullYear())











  major.innerHTML="";
  let brr={search:`${search.value}`,
           date:date.getDate()+'/'+parseInt(date.getMonth()+1)+'/'+date.getFullYear()+ "        "+`${time}`}
  
  arr.push(brr);
console.log(arr);
//location.replace('/new.html');
localStorage.setItem("data" , JSON.stringify(arr))
//window.location.href = "login.html";


const apiUrl=`https://www.googleapis.com/books/v1/volumes?q=${search.value}`

fetch(apiUrl).then((apidata)=>{
     console.log(apidata);

      return apidata.json();

        })

.then((actualdata)=>{

         console.log(actualdata);
  let count=0;
  let find=search.value;
  for(let k=0;k<10;k++)
  
  {
          let mydata=actualdata.items[k];
          console.log(mydata.volumeInfo.title);
          console.log(find);

         //if(mydata.volumeInfo.title.toLowerCase().split(" ").join("")==find.toLowerCase().split(" ").join("")|| mydata.volumeInfo.authors[0].toLowerCase().split(" ").join("")==find.toLowerCase().split(" ").join(""))
         if(mydata.volumeInfo.title.toLowerCase().split(" ").join("").includes(find.toLowerCase().split(" ").join(""))|| mydata.volumeInfo.authors[0].toLowerCase().split(" ").join("").includes(find.toLowerCase().split(" ").join("")))
         
         {
           //console.log(mydata);
           /*let brr={search:`${search.value}`,
           date:`${time}`}
  
  arr.push(brr);*/




           showmsg.innerHTML="";
           showmsg.innerHTML=`Search result for ${find}`
           showmsg.style.color="white";
           count=1;
         search.value="";
            
            let cr=document.createElement('div');
            btn=document.createElement('button');
            btn.innerHTML="Buy Now";
            btn.style.height="25px";
            btn.style.width="180px";
            btn.style.borderRadius="7px";
            //border-radius: 8px;
            cr.innerHTML=`
          
            <img src=${mydata.volumeInfo.imageLinks.thumbnail} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" /> 
            <br>
            Title: ${mydata.volumeInfo.title}
            <br>
            
            <br>
            Authors  :${mydata.volumeInfo.authors[0]}
            <br>
            
            Rating :${mydata.volumeInfo.averageRating}
            <br>
            Published Date : ${mydata.volumeInfo.publishedDate}
            <br>
            Page count :${mydata.volumeInfo.pageCount}
            <br>
            `
            cr.append(btn);
            cr.style.height="400px";
            cr.style.width="200px";
            cr.style.borderStyle="solid";
            
            cr.style.borderRadius="2px";
            cr.style.borderColor="black"
            cr.style.display="block";
            cr.style.margin="10px";
            cr.style.borderColor="white";
            cr.style.backgroundColor="black";
            cr.style.color="white";
           
         major.append(cr);








         }
         else{
           showmsg.innerHTML="";
          showmsg.innerHTML=`Search item is not present`;
          showmsg.style.color="white";
         }

       };
       

     })
    
    }
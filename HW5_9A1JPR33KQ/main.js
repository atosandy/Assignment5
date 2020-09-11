
var image, attach;
attach +=1
image = './img/logo.png';

document.querySelector('img').src = image;
document.querySelector('.tit').textContent = 'Pase Covid 19 Tracker Application';

document.getElementById('first').innerHTML = '<p>Total Cases</p>' ;
document.getElementById('second').innerHTML = '<p>Total Deaths</p>';
document.getElementById('third').innerHTML = '<p>Total Recovery</p>';
document.getElementById('forth').innerHTML = '<p>Total Active</p>';


// getData()
// console.log(data);
// async function getData(){
//   url = 'https://atos-tracker.herokuapp.com/'
//   const response = await fetch(url)
//   const data = await response.json()
  
// table.forEach(detail => {

//   const columns = detail
  
//     document.querySelector('.big-col').innerHTML = data
  
    //https://github.com/bibleapi/biblepearls.net.git
    //https://secret-cove-38447.herokuapp.com/api/v1
    //https://atos-covid.herokuapp.com/
    
//   // });
//   console.log(data)
// }


const getInfo = () => {
  const response = fetch('https://gtl-covid-api.herokuapp.com/api/')
  .then(response => response.json())
    
  .then( data => {
    //console.log(data[data.length-1])
    
    //document.querySelector('.big-col').innerHTML = data[0].Active;
    //document.querySelector('.col-big').innerHTML = lastsixteen[0].Confirm;
    let data_constraint = 5;
    let lastsixteen = data.slice(data.length-13,data.length)
    //document.querySelector('.col-big').innerHTML = lastsixteen
    console.log({lastsixteen});

    lastsixteen.forEach((last) => {
      console.log(last)
      return document.getElementById('big-cola').append(
        last.Country, 
        last.Confirmed,
        last.Active,
        last.Recoveries,
        last.Deaths,
          
        )

    // const workarray = lastsixteen.map(country => 
    //   // `${country.Country} ${country.Confirmed} ${country.Active} ${country.Recoveries}
    //   // ${country.Deaths}
    //   // `
    //   {return document.getElementById('dataCall').innerHTML = country}
    // )
    
        
    });


    // let totalConfirm = 0
    // lastsixteen.forEach((item,index)=>{
    //   console.log(item.Confirmed)
    //   totalConfirm= totalConfirm + item.Confirmed

    // data.forEach((item,index) => {
    //      totalConfirm = item.Active + totalConfirm
    //    })
    
      
    
      
    //})

    //edited work
    // 
    // console.log("totalConfirm",totalConfirm)
    // for(i=0; i < data_constraint; i++){
    //   let seperator = document.createElement('div');
    // seperator.innerHTML = '&nbsp<br>';
    //   document.getElementById('dataCall').append(data[i].Active, seperator);

     

     

    // for (row in data){
    //   if (row <= 10){
    // //     let seperator = document.createElement('div');
    // // seperator.innerHTML = '&nbsp<br>';
    //   document.getElementById('dataCall').append(data[i].Active, seperator);
    //   }

    // }

    //let lastsixteen = data.slice(data.length-13,data.length)
    
    // for(let i=0; i< data_constraint; i++){
    //   document.querySelector('.good').append( 
    //   row = <tr>
    //       <td>${data[i].Country}</td>
    //       <td>${data[i].Confirmed}</td>
    //       <td>${data[i].Active}</td>
    //       <td>${data[i].Recoveries}</td>
    //     </tr>,
    //     table.innerHTML += row)
    // }

    //trial
    
    //workable options
    
   })
 
.catch(error => 'Response not found')
}
getInfo()



  
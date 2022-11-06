
//Details per country
const country_details=document.getElementById("country-details");
const API_COUNTRY_URL="https://restcountries.com/v3.1/name";

function countryData(nameCountry){fetch(`${API_COUNTRY_URL}/${nameCountry}`)
        .then((response1)=>response1.json())
        .then((data1)=>{

               
                 let div1=document.createElement('div');
                 let div2=document.createElement('div');
                 let div3=document.createElement('div');
                div1.setAttribute('class','country-single-card');
                div2.setAttribute('class','country-single-card');
                div3.setAttribute('class','country-single-card');

                let imagen1=document.createElement('img');
                imagen1.setAttribute("src",`${data1[0].flags.png}`)
                
                div1.appendChild(imagen1);

                let tittle1=document.createElement('p');
                tittle1.innerText=`Nombre ${data1[0].name.common}`;
                div1.appendChild(tittle1);

                let capital1=document.createElement('p');
                capital1.innerText=`Capital: ${data1[0].capital}`;
                div1.appendChild(capital1);

                
                

                let language=document.createElement('p');
                let languages_values=Object.values(data1[0].languages).join(", ");             
                language.innerText=`Language(s): ${languages_values}`;
                div2.appendChild(language);

                let currency=document.createElement('p');
                
                let currency_value=Object.values(data1[0].currencies)[0];
               
                currency.innerText=`Currency: ${currency_value.name} ${currency_value.symbol}`;
                div2.appendChild(currency);

                let region=document.createElement('p');
                region.innerText=`Region: ${data1[0].region}`
                div3.appendChild(region);

                let population =document.createElement('p');
                population.innerText=`Population: ${data1[0].population}`
                div3.appendChild(population);

                let time =document.createElement('p');
                time.innerText=`Time: ${data1[0].timezones}`
                div3.appendChild(time);

                country_details.appendChild(div1);
                country_details.appendChild(div2);
                country_details.appendChild(div3);
                HTMLResponse.replaceChildren(country_details);
                country_details.style.visibility="visible";
            
        })
        .catch((e)=>{console.log(e)})
            


}

//Routing

const routerFunction=(location)=>{

    let [,nameCountry]=location.split('details_');
    countryData(nameCountry);

}
const API_URL="https://restcountries.com";
const HTMLResponse= document.querySelector('#countries');


const prueba=document.querySelector("#prueba");
const onload=()=>{
    location.hash="_home";
    mainData();
    
}
window.addEventListener("load",()=>onload());
window.addEventListener("hashchange",()=>{
    routerFunction(location.hash)
});



//Home cards- all countries

function mainData(){fetch(`${API_URL}/v3.1/all`)
    .then((response)=>response.json())
    .then((all)=>{
        all.forEach(element => {

            
            let card = document.createElement('div');
            card.setAttribute('class','country-card');
            let tittle=document.createElement('h2');
            tittle.innerText=`${element.name.common}`;
            let population=document.createElement('p');
            population.innerText=`Population: ${element.population}`;
            let region=document.createElement('p');
            region.setAttribute("class","region");
            region.innerText=`Region: ${element.region}`;
            let capital=document.createElement('p');
            
            capital.innerText=`Capital: ${element.capital}`;

            let imagen=document.createElement('img');
            imagen.setAttribute('src', `${element.flags.png}`);

            let button=document.createElement('p');
            button.setAttribute("href",`{}`);
            button.innerHTML=`<a href="${location}_details_${element.name.common}">Ver más</a>`;
            

            card.appendChild(tittle);
            card.appendChild(imagen);
            card.appendChild(population);
            card.appendChild(region);
            card.appendChild(capital);
            card.appendChild(button);

            HTMLResponse.appendChild(card);
                 
           
        });
        
    })
    
    
}



   
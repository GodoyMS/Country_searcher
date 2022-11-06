function todos(){
            
    let region_card=document.getElementsByClassName('country-card');
    let region=document.getElementsByClassName("region");
    for (let a = 0; a < region_card.length; a++) { 
    if (!region[a].innerHTML.includes("Region")) {
        region_card[a].style.display="none";
    }
    else {
        region_card[a].style.display="list-item";
        region_card[a].style.listStyle="none";                      
}
}
}




function africa(){
    
    
    
    let region_card=document.getElementsByClassName('country-card');
    let region=document.getElementsByClassName("region");
    for (let a = 0; a < region_card.length; a++) { 
    if (!region[a].innerHTML.includes("Region: Africa")) {
        region_card[a].style.display="none";
        
    }
    else {
        region_card[a].style.display="list-item";
        region_card[a].style.listStyle="none";
                          
}
}
}

function americas(){
    
    let region_card=document.getElementsByClassName('country-card');
    let region=document.getElementsByClassName("region");
    for (let a = 0; a < region_card.length; a++) { 
    if (!region[a].innerHTML.includes("Region: Americas")) {
        region_card[a].style.display="none";
    }
    else {
        region_card[a].style.display="list-item";
        region_card[a].style.listStyle="none";                      
}
}
}

function europa(){
    
    let region_card=document.getElementsByClassName('country-card');
    let region=document.getElementsByClassName("region");
    for (let a = 0; a < region_card.length; a++) { 
    if (!region[a].innerHTML.includes("Region: Europe")) {
        region_card[a].style.display="none";
    }
    else {
        region_card[a].style.display="list-item";
        region_card[a].style.listStyle="none";                      
}
}
}


function oceania(){
    
    let region_card=document.getElementsByClassName('country-card');
    let region=document.getElementsByClassName("region");
    for (let a = 0; a < region_card.length; a++) { 
    if (!region[a].innerHTML.includes("Region: Oceania")) {
        region_card[a].style.display="none";
    }
    else {
        region_card[a].style.display="list-item";
        region_card[a].style.listStyle="none";                      
}
}
}

function asia(){
    
    let region_card=document.getElementsByClassName('country-card');
    let region=document.getElementsByClassName("region");
    for (let a = 0; a < region_card.length; a++) { 
    if (!region[a].innerHTML.includes("Region: Asia")) {
        region_card[a].style.display="none";
    }
    else {
        region_card[a].style.display="list-item";
        region_card[a].style.listStyle="none";                      
}
}
}
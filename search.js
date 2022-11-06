function search_country() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('country-card');
  
for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        x[i].style.display="list-item";
        x[i].style.listStyle="none";                      
    }
}
}
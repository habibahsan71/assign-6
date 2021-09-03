const searchBook = () =>{ 
    const searchField = document.getElementById("searchInput");
    const searchText = searchField.value; 

    //clearing searchField
    searchField.value ='';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then((res) => res.json())
    .then(data => displayBooks(data))

};

const displayBooks = docs =>{
    
    const numberFound = docs.numFound;
    const foundD = document.getElementById('found');
    if(numberFound == '0'){
        foundD.innerText ='No Result Found'
    }
    else{
        foundD.innerText = `
    Total result Found: ${numberFound}
    `
    }

    const searchResultAll = docs.docs; 
    const searchResult = document.getElementById('search-result');
    searchResult.textContent= '';
    searchResultAll.forEach(docs => {
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML= `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Book Name : ${docs.title}</h5>
                  <p class="card-text">Author Name: ${docs.author_name}</p>
                  <p class="card-text">First Publish date: ${docs.first_publish_year}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}

let proudctsDetils = [];
let proudcts = [];
function getAllProudacts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      proudcts = data;
      console.log(proudcts);
      displayProudacts();
    });
}
getAllProudacts();

function displayProudacts() {
  let trs = "";
  for (var i = 0; i < proudcts.length; i++) {
    trs += `
    <div class="col-sm-6 col-md-4 col-lg-3 mt-5" >
    <div class="card product h-100" >
      <div class="{image}">
       <img class="w-100" src="${proudcts[i].image}" alt="" srcset="" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="productDetils(${proudcts[i].id})" >
      </div>
      <div class="card-body">
        <h3 class="card-title h5 text-truncate" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="productDetils(${proudcts[i].id})" >${proudcts[i].title}  </h3>
        <p class="card-text text-muted small text-truncate">
          ${proudcts[i].description}
        </p>
      </div>
      <div class="card-footer d-flex  justify-content-around align-items-center ">
    
      <a class="w-25 " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="productDetils(${proudcts[i].id})">Detils </a>
       
        <p class=" price pb-0  rounded text-dark" >
        ${proudcts[i].price} $  
        </p>
      </div>
    </div>
  </div>
  `;
  }
  document.getElementById("tboddy").innerHTML = trs;
}
function categories(params) {
  fetch(`https://fakestoreapi.com/products/category/${params}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      proudcts = data;
      console.log(proudcts);
      displayProudacts();
    });
}

function productDetils(id) {
  document.getElementById("detils").innerHTML = ``;

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      proudctsDetils = data;
      document.getElementById("detils").innerHTML = `
          <div class="modal-body">
          <section  >
          <div class="products-data mt-4">
            <div class="row gy-3 align-items-center">
              <div class="col-md-4">
                <div class="image">
                <img class="w-100" src="${proudctsDetils.image}">
                </div>
              </div>
              <div class="col-md-8">
                <div class="prod-info">
                  <h1>${proudctsDetils.title}</h1>
                  <p class="text-muted mt-3">
                   ${proudctsDetils.description}
                  </p>
                  <hr />
                  <ul class="list-unstyled fw-semibold">
                    <li class="pt-2">
                      <span class="font-m fs-4">Category</span> :
                      <span class="text-muted">${proudctsDetils.category}</span>
                    </li>
                    <li class="pt-2">
                      <span class="font-m fs-4">Price</span> :
                      <span class="text-muted">${proudctsDetils.price}$</span>
                    </li>
                    <li class="pt-2">
                      <span class="font-m fs-4">rate</span> :
                      <span class="text-muted">${proudctsDetils.rating.rate}</span>
                    </li>
                    <li class="pt-2">
                      <span class="font-m fs-4">count</span> :
                      <span class="text-muted">${proudctsDetils.rating.count}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
          </div>
          
     
    
          `;
    });
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("links--catg");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// var links = document.getElementsByTagName('a');
// var len = links.length;

// for(var i=0; i<len; i++)
// {
// links[i].target = "_blank";
// }
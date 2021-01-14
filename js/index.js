var portfolios=[];
function Portfolio(id, landLordName){
  this.id =id;
  this.landlordName =landLordName;
  this.buildings=[];
}
function Building(id, landLordId, buildingName){
  this.id = id;
  this.landLordId = landLordId;
  this.buildingName = buildingName
  this.houses=[];
}

function House(id, buildingId, houseName, rent, tenant, tenantEmail){
  this.id = id;
  this.buildingId = buildingId;
  this.houseName = houseName;
  this.rent = rent;
  this.tenant = tenant;
  this.tenantEmail = tenantEmail;
  this.payments =[];
}
function Payments(id, houseId, month, amount, balance){
  this.id=id;
  this.houseId = houseId;
  this.month = month;
  this.amount = amount;
  this.balance = balance;
}



const parentRow = document.getElementById("row")

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
  .then((data)=>{
    data.map((userItem)=>{
      const column = document.createElement("div");
      column.className = "col-md-4 mt-4 mr-3";
  
      const card = document.createElement("div");
      card.className = "card";
      column.appendChild(card);
  
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);
  
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText= "Name: "+ userItem["name"];
      cardBody.appendChild(cardTitle);
  
      const cardSubtitle = document.createElement("h6");
      cardSubtitle.className = "card-subtitle mb-2 text-muted";
      cardSubtitle.innerText = "Phone: "+ userItem["phone"];
      cardBody.appendChild(cardSubtitle);

      const cardForm = document.createElement("form");
      cardForm.method = "GET";
      cardForm.action = "buildings.html";
      cardBody.appendChild(cardForm);
      
      const cardFormInput = document.createElement("input");
      cardFormInput.type = "hidden";
      cardFormInput.name = "id";
      cardFormInput.value = userItem["id"];
      cardForm.appendChild(cardFormInput);

      const cardFormSubmit = document.createElement("input");
      cardFormSubmit.type = "submit";
      cardFormSubmit.class = "btn btn-primary";
      cardFormSubmit.value = "view buildings";
      cardForm.appendChild(cardFormSubmit);

      var newPortfolio = new Portfolio(userItem["id"],userItem["name"]);
      portfolios.push(newPortfolio);
      console.log(portfolios);
      console.log(newPortfolio); 
      parentRow.appendChild(column);

    });
  });

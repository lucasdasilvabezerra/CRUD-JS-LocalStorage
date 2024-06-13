// Seleção
tableTbody = document.querySelector("table tbody");
addClientBtn = document.querySelector(".add-client-btn");
addModalContainer = document.querySelector(".add-modal-container");
editModalContainer = document.querySelector(".edit-modal-container");

addClientSubmit = document.querySelector("#add-client-submit");
editClientSubmit = document.querySelector("#edit-client-submit");

editNameInput = document.querySelector(".edit-name-input")
editEmailInput = document.querySelector(".edit-email-input")
editTelInput = document.querySelector(".edit-tel-input")
editCityInput = document.querySelector(".edit-city-input")
editClientSubmit = document.querySelector("#edit-client-submit")


// Old Values para filtrar em registros e dar upadate

let oldValues = {
  name: "",
  email: "",
  tel: "",
  city: ""
}
// Local Storage
let registrosArray = JSON.parse(localStorage.getItem("registros")) || [];


// Registro a ser alterado
let editTr; 
let deleteTr;
// Funções

addClient = (client) => {
  const clientTr = document.createElement("tr");

  const clientName = document.createElement("td");
  clientName.innerText = client.name;
  clientTr.appendChild(clientName);

  const clientEmail = document.createElement("td");
  clientEmail.innerText = client.email;
  clientTr.appendChild(clientEmail);

  const clientTel = document.createElement("td");
  clientTel.innerText = client.tel;
  clientTr.appendChild(clientTel);

  const clientCity = document.createElement("td");
  clientCity.innerText = client.city;
  clientTr.appendChild(clientCity);

  // Botões de Editar e Excluir
  const actionBtnsTd = document.createElement("td");

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "Editar";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "Excluir";

  const actionBtnsContainer = document.createElement("div");
  actionBtnsContainer.classList.add("action-btns");
  actionBtnsContainer.appendChild(editBtn);
  actionBtnsContainer.appendChild(deleteBtn);

  actionBtnsTd.appendChild(actionBtnsContainer);
  clientTr.appendChild(actionBtnsTd);
  tableTbody.appendChild(clientTr);
};

getClientData = () => {
  let client = {
    name: "Vazio",
    email: "Vazio",
    tel: "Vazio",
    city: "Vazio",
  };

  client.name = document.querySelector(".add-name-input").value;
  client.email = document.querySelector(".add-email-input").value;
  client.tel = document.querySelector(".add-tel-input").value;
  client.city = document.querySelector(".add-city-input").value;

  addClient(client);

  registrosArray.push(client);
  let registrosJSON = JSON.stringify(registrosArray);
  localStorage.setItem("registros", registrosJSON);

  
  toggleAddModal();
};

  // Add Modal

toggleAddModal = () => {
  addModalContainer.classList.toggle("hide");
};

  // Edit Modal

toggleEditModal = () => {
  editModalContainer.classList.toggle("hide");
};

updateClient = () =>{



    editTr.children[0].innerText = editNameInput.value
    editTr.children[1].innerText =  editEmailInput.value;
    editTr.children[2].innerText =  editTelInput.value;
    editTr.children[3].innerText = editCityInput.value;
    
    registro = registrosArray.find(registro => registro.name === oldValues.name &&
    registro.email === oldValues.email && registro.tel === oldValues.tel &&
    registro.city === oldValues.city)

    if (registro){
      registro.name = editNameInput.value
      registro.email =  editEmailInput.value;
      registro.tel =  editTelInput.value;
      registro.city = editCityInput.value;

      console.log("Rodou!\n registro = ",registro," registrosArray = ",registrosArray)

      // Transformando o novo array em JSON para dar update na LS
      let registrosJSON = JSON.stringify(registrosArray);
      // Dando update na LS
      localStorage.setItem("registros", registrosJSON);
    }
    
    


}


deleteClient = ()=>{

  registro = registrosArray.find(registro => registro.name === editTr.children[0].innerText &&
  registro.email === editTr.children[1].innerText && registro.tel === editTr.children[2].innerText &&
  registro.city === editTr.children[3].innerText)

  registroIndex = registrosArray.indexOf(registro)


  if (registro){
    registrosArray.splice(registroIndex,1)
  }



  editTr.parentNode.removeChild(editTr);


  // Transformando o novo array em JSON para dar update na LS
  let registrosJSON = JSON.stringify(registrosArray);
  // Dando update na LS
  localStorage.setItem("registros", registrosJSON);


}



// Eventos

addClientBtn.addEventListener("click", () => {
  toggleAddModal();
});

addClientSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  getClientData();
});

editClientSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  toggleEditModal();
});


// EDIT BTN E DELETE BTN


document.addEventListener("click",(e)=>{

  

  if (e.target.classList.contains('edit-btn')){
    editTr = e.target.closest("tr")
     
      
      editNameInput.value = editTr.children[0].innerText;
      editEmailInput.value = editTr.children[1].innerText;
      editTelInput.value = editTr.children[2].innerText;
      editCityInput.value = editTr.children[3].innerText;
      
      oldValues.name = editNameInput.value
      oldValues.email = editEmailInput.value
      oldValues.tel = editTelInput.value
      oldValues.city = editCityInput.value
      
      

     

    toggleEditModal();
  }

  if (e.target.classList.contains("delete-btn")){
    editTr = e.target.closest("tr")


    deleteClient()
  


  }



})


  // Submit Edit

editClientSubmit.addEventListener("click", (e)=>{
  e.preventDefault()

  updateClient();
  

})





















// Inicialização



console.log(registrosArray);

registrosArray.forEach((client) => {
  addClient(client);
});

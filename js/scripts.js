// Seleção
tableTbody = document.querySelector("table tbody");
addClientBtn = document.querySelector(".add-client-btn");
addModalContainer = document.querySelector(".add-modal-container");
editModalContainer = document.querySelector(".edit-modal-container");
addClientSubmit = document.querySelector("#add-client-submit");
editClientSubmit = document.querySelector("#edit-client-submit");

// Local Storage
let registrosArray = JSON.parse(localStorage.getItem("registros")) || [];

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

  console.log(registrosArray);
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

// Inicialização



console.log(registrosArray);

registrosArray.forEach((client) => {
  addClient(client);
});

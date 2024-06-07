// Seleção
tableTbody = document.querySelector("table tbody");

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

angela = {
  name: "Angela",
  email: "angela@gmail.com",
  tel: "(44) 99806-1427",
  city: "Paranavaí",
};

addClient(angela);

// Eventos

const textArea = document.getElementById("texto");
const btnCreate = document.querySelector(".button-crear");
const divNotes = document.querySelector(".notes");

let database = [];

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  let text = textArea.value;

  if (database === null || database === undefined) {
    database = [];
  }

  if(text === ""){
    alert("No se puede crear una nota vacia");
    return;
  }
  database.push(text);

  localStorage.setItem("note", JSON.stringify(database));
  document.location.reload();
});

database = JSON.parse(localStorage.getItem("note"));

if (database === 0 || database === null || database === undefined) {
  database = [];
}

database.forEach((element) => {
  
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("note-container");
  divNotes.appendChild(noteContainer);

  const note = document.createElement("p");
  note.classList.add("card");
  note.innerHTML = element;
  noteContainer.appendChild(note);

  const btnDeleteDiv = document.createElement("div");
  btnDeleteDiv.classList.add("button-delete-div");
  noteContainer.appendChild(btnDeleteDiv);

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("button-delete");
  btnDelete.setAttribute("type", "button");
  btnDelete.textContent = "Borrar";
  btnDeleteDiv.appendChild(btnDelete);

  btnDelete.addEventListener("click", () => {
    database = database.filter((item,index) => index !== database.indexOf(element));
    localStorage.setItem("note", JSON.stringify(database));
    document.location.reload();
  });
});

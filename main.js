let container = document.querySelector("#container");
let modalWindow = document.querySelector("#modal");
let closeBtn = document.querySelector("#close-btn");
let topSidebar = document.querySelector("#sidebar");

function openModal(event) {
  if (modalWindow) {
    modalWindow.classList.remove("hide");
    modalWindow.style.left = `${event.clientX}px`;
    modalWindow.style.top = `${event.clientY}px`;
  }
}

function closeModal(event) {
  event.stopPropagation();
  if (modalWindow) {
    modalWindow.classList.add("hide");
  }
}

function moveModal(event) {
  if (topSidebar) {
    container.addEventListener("mousemove", setPosition);
    container.addEventListener("mouseup", endMove);
  }
}

function endMove(event) {
  container.removeEventListener("mousemove", setPosition);
  container.removeEventListener("mouseup", endMove);
}

function setPosition(event) {
  modalWindow.style.left = `${event.clientX}px`;
  modalWindow.style.top = `${event.clientY}px`;
}

container.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
topSidebar.addEventListener("mousedown", moveModal);

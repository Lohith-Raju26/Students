function uploadNote() {
  const title = document.getElementById("title").value;
  const list = document.getElementById("notesList");

  if (title === "") {
    alert("Enter note title");
    return;
  }

  const li = document.createElement("li");
  li.textContent = "📄 " + title + " (Preview locked)";
  list.appendChild(li);

  document.getElementById("title").value = "";
}

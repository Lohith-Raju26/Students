const notes = [
  { title: "Physics - Motion", subject: "Physics", preview: "Laws of motion explained simply..." },
  { title: "Chemistry - Acids & Bases", subject: "Chemistry", preview: "pH scale, examples, reactions..." },
  { title: "Maths - Calculus Basics", subject: "Maths", preview: "Limits, derivatives overview..." },
  { title: "DBMS - Normalization", subject: "DBMS", preview: "1NF, 2NF, 3NF explained..." },
  { title: "Java - OOPS Concepts", subject: "Java", preview: "Encapsulation, Inheritance..." }
];

function searchNotes() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("notesContainer");

  container.innerHTML = "";

  const filtered = notes.filter(note =>
    note.title.toLowerCase().includes(input) ||
    note.subject.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No notes found.</p>";
    return;
  }

  filtered.forEach(note => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.preview}</p>
      <p class="locked">🔒 Full notes available for premium users</p>
    `;
    container.appendChild(div);
  });
}

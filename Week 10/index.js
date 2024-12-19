async function remotejobs() {
  try {
    const jobs = await fetch("https://remoteok.com/api");
    const json = await jobs.json();
    const jobsdiv = document.querySelector(".remotejobs");

    let elements = "";

    for (let i = 5; i < 10; i++) {
      elements = "";
      const job = json[i];
      console.log(job);

      let row = document.createElement("p");
      elements += `<h1>${job.company}</h1>`;
      elements += job.description;
      row.innerHTML = elements;
      jobsdiv.appendChild(row);
    }
  } catch (err) {
    console.error(err);
  }
}

const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", remotejobs);

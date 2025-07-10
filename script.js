let div = document.querySelector("#users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.map((item) => {
      div.innerHTML += `
          <div>
            <h3>${item.name}</h3>
            <p>${item.phone}</p>
            <b>${item.username}</b>
            <h1>${item.address.city}</h1>
          </div>
        `;
    });
  });

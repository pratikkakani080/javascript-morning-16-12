// GET
// POST
// PUT || PATCH
// DELETE
// CRUD operation

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "GET",
  // body: { id: 1 }
})
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    console.log("res**", response);
  })
  .catch((err) => {
    console.log("err**", err);
  });

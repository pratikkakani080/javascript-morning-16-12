// GET
// POST
// PUT || PATCH
// DELETE
// CRUD operation

fetch("https://jsonplaceholder.typicode.com/posts/2", {
  method: "DELETE",
  // body: JSON.stringify({ title: 'tsetsetsefsdfSAsf', body: 'ssadsdasadsadsadsd' })
})
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    console.log("res**", response);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      }
    })
  })
  .catch((err) => {
    console.log("err**", err);
  });

  const stringifyData = JSON.stringify({'test': 'test'})
  const parsedData = JSON.parse(stringifyData)
  localStorage.setItem('data', stringifyData)
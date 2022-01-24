export function getProducts(){
    return fetch('http://localhost:7090/api/Produs')
        .then(data => data.json())
  }
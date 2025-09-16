function saveProfile() {
    const data = { name: document.getElementById('name').value, age: document.getElementById('age').value };
    fetch('http://localhost:3000/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById('result').textContent = data.message;
      setTimeout(() => document.getElementById('result').textContent = '', 2000);
    })
    .catch(error => console.log(error));
  }
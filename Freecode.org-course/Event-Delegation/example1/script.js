 const list = document.getElementById('myList');
  let counter = 4;

  // Event delegation: listener on parent <ul>
  list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      alert('You clicked: ' + event.target.textContent);
      // Optional: change color when clicked
      event.target.style.backgroundColor = '#ffe0b2';
    }
  });

  // Dynamically add new items
  document.getElementById('addItem').addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Item ' + counter++;
    list.appendChild(li);
  });
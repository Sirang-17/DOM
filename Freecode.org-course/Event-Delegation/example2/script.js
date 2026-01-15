document.querySelector('#sports').addEventListener('click', function (e) {
  console.log(e.target.innerText + ' is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey';
  }
});

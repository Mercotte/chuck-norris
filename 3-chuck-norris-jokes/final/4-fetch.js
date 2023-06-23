// https://api.chucknorris.io/
const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

btn.addEventListener('click', () => {
  //* fetch utilise les promesses
  //* fait une requête GET par défaut
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
});

function displayData({ value: joke }) {
  // const { value: joke } = data;
  const random = Math.random() * 1000;

  img.classList.add('shake-img');
  content.textContent = joke;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
}

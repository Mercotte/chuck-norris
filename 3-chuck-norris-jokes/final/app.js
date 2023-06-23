// https://api.chucknorris.io/
const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

btn.addEventListener('click', async () => {
  //* fetch utilise les promesses
  //* fait une requête GET par défaut
  try {
    const data = await fetch(url);
    const response = await data.json();

    displayData(response);
  } catch (error) {
    console.log(error);
  }
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

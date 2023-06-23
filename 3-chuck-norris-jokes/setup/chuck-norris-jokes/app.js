const url = 'https://api.chucknorris.io/jokes/random';
const buttom = document.querySelector('.btn');
const content = document.querySelector('.content');

const fetchNorrisJoke = async () => {
  content.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP response error: ${response.status}`);
    }

    const tableauReponseJson = await response.json();
    console.log(tableauReponseJson.value);

    content.textContent = tableauReponseJson.value;
  } catch (error) {
    console.log(error);
    content.textContent = 'There was an error...';
  }
};
buttom.addEventListener('click', () => {
  fetchNorrisJoke();
});
fetchDadJoke();

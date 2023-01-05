const button = document.querySelector('.btn'),
      img = document.querySelector('.img'),
      url = 'http://aws.random.cat/meow';

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    img.src = data.file;
  } catch(error) {
    console.log(error);
  }
}

button.addEventListener('click', fetchHandler)

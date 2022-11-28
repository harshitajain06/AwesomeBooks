const titleAuthorArray = [];

const storedTitleAuthor = JSON.parse(localStorage.getItem('students'));
// console.log(storedTitleAuthor);
const book = document.getElementById('display_card');
for (let i = 0; i < storedTitleAuthor.length; i += 1) {
  const temp = i;
  book.innerHTML += `
    <p>${storedTitleAuthor[i].Title}</p>
    <p>${storedTitleAuthor[i].Author}</p>
    <button class="remove" data-id="${temp}">
    Remove
    </button>
    `;
}

// remove()

function submit() {                // eslint-disable-line
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const title_author = {      // eslint-disable-line
    Title: title,
    Author: author,
  };

  const storedTitleAuthor = JSON.parse(localStorage.getItem('students'));
  if (storedTitleAuthor === undefined) {
    titleAuthorArray.push(title_author);
    localStorage.setItem('students', JSON.stringify(titleAuthorArray));
  } else {
    storedTitleAuthor.push(title_author);
    localStorage.setItem('students', JSON.stringify(storedTitleAuthor));
  }

  location.reload();                    // eslint-disable-line
}

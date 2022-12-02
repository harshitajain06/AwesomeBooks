const menuList = document.querySelector('.menuList');
const menuAdd = document.querySelector('.menuAdd');
const menuContact = document.querySelector('.menuContact');
const sectionList = document.querySelector('.sectionList');
const newBook = document.querySelector('.newBook');
const contact = document.querySelector('.contact');
sectionList.style.display = 'flex';
newBook.style.display = 'none';
contact.style.display = 'none';

menuList.addEventListener('click', () => {
  sectionList.style.display = 'flex';
  newBook.style.display = 'none';
  contact.style.display = 'none';
  location.reload();         // eslint-disable-line
});
menuAdd.addEventListener('click', () => {
  sectionList.style.display = 'none';
  newBook.style.display = 'flex';
  contact.style.display = 'none';
});
menuContact.addEventListener('click', () => {
  sectionList.style.display = 'none';
  newBook.style.display = 'none';
  contact.style.display = 'flex';
});

const time1 = new Date();

const timeDate = time1.toDateString();
const timeHr = time1.toLocaleTimeString();
const timeDiv = document.querySelector('.time');
timeDiv.innerHTML = `${timeDate} ${timeHr}`;

const titleAuthorArray = [];
class TitleAuthor {
  remove(str) {                        // eslint-disable-line
    const stored = JSON.parse(localStorage.getItem('students'));
    stored.splice(str, 1);
    localStorage.setItem('students', JSON.stringify(stored));
  }

    submit() {            // eslint-disable-line

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
        const title_author = {               // eslint-disable-line

      Title: title,
      Author: author,
    };

    const storedTitleAuthor = JSON.parse(localStorage.getItem('students'));
    if (!storedTitleAuthor) {
      titleAuthorArray.push(title_author);
      localStorage.setItem('students', JSON.stringify(titleAuthorArray));
    } else {
      storedTitleAuthor.push(title_author);
      localStorage.setItem('students', JSON.stringify(storedTitleAuthor));
    }

        location.reload(); // eslint-disable-line
  }

  showBook() {                 // eslint-disable-line   
    const storedTitleAuthor = JSON.parse(localStorage.getItem('students'));
    // console.log(storedTitleAuthor);
    const book = document.getElementById('display_card');
    if (!storedTitleAuthor || storedTitleAuthor.length === 0) {
      book.innerHTML = `
  <div>No Books Stored</div>
  `;
    } else {
      for (let i = 0; i < storedTitleAuthor.length; i += 1) {
        const temp = i;
        book.innerHTML += `
                <div id="card1" class="card">
    <p>"${storedTitleAuthor[i].Title}" by ${storedTitleAuthor[i].Author}</p>
    <button class="remove" data-id="${temp}">
    Remove
    </button>
    </div>
    `;
      }
    }
  }
}

const show = new TitleAuthor();
show.showBook();

const submit1 = document.querySelector('#submit_button');

submit1.addEventListener('click', () => {
  show.submit();
  alert('Books Added');      // eslint-disable-line
  
});
const removeElements = document.querySelectorAll('.remove');
removeElements.forEach((el) => {
  el.addEventListener('click', (e) => {
    // rem.submit();
    const store = e.currentTarget.dataset;
    const str = store.id;
    // console.log(str);

    show.remove(str);
            location.reload(); // eslint-disable-line
  });
});

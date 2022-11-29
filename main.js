const titleAuthorArray = [];
class TitleAuthor {
    constructor() {

    }


    remove(str) {
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

    showBook() {


        const storedTitleAuthor = JSON.parse(localStorage.getItem('students'));
        // console.log(storedTitleAuthor);
        const book = document.getElementById('display_card');
        if (!storedTitleAuthor) {
            book.innerHTML = `
  <div></div>
  `;
        } else {
            for (let i = 0; i < storedTitleAuthor.length; i += 1) {
                const temp = i;
                book.innerHTML += `
                <div class="card">
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

submit1.addEventListener('click', (e) => {

   
    show.submit();

});
    const removeElements = document.querySelectorAll('.remove');
    removeElements.forEach((el) => {
        el.addEventListener('click', (e) => {
            
            // rem.submit();
            const store = e.currentTarget.dataset;
            const str = store.id;
             console.log(str);
            
            show.remove(str);
            location.reload(); // eslint-disable-line
        });
    });



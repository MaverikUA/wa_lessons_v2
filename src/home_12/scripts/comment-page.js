export function commentPage(userComments) {
  const URL = 'https://evening-dawn-11092.herokuapp.com/comments';
  let comments = [];
  let commentElements = [];
  let commentBlock;
  let form;
  let input;
  let btnSubmit;
  let author;

  function render() {
    form = document.createElement('form');
    author = document.createElement('input');
    input = document.createElement('textarea');
    btnSubmit = document.createElement('button');
    commentBlock = document.createElement('div');

    //styles
    form.style.width = "100%";
    author.style.width = "100%";
    author.style.borderRadius = "5px";
    author.style.border = "1px solid rgb(204, 204, 204)";
    input.style.width = "100%";
    input.style.marginTop = "10px";
    input.style.marginBottom = "9px";
    input.style.borderRadius = "4px";
    input.style.border = "1px solid rgb(204, 204, 204)";
    input.style.height = "100px";
    btnSubmit.style.width = "100%";
    btnSubmit.style.height = "35px";
    btnSubmit.style.backgroundColor = "blue";
    btnSubmit.style.color = "white";
    btnSubmit.style.border = "none";
    btnSubmit.style.marginBottom = "15px";
    btnSubmit.style.fontWeight = "600";

    commentBlock.classList.add('comment_block');

    btnSubmit.textContent = 'Add my Comment';
    form.onsubmit = function (event) {
      event.preventDefault();
      const data = {
        author: author.value,
        text: input.value,
      };

      const xhr = new XMLHttpRequest();
      xhr.open('POST', URL);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.response);
            const responseData = JSON.parse(xhr.response);
            const authorName = document.createElement('div');
            const commentItem = document.createElement('div');
            authorName.textContent = responseData.author;
            commentItem.textContent = responseData.text;
            commentBlock.appendChild(authorName);
            commentBlock.appendChild(commentItem);
          } else {
            console.error(xhr.response);
          }
        }
      }
    }


    form.appendChild(author);
    form.appendChild(input);
    form.appendChild(btnSubmit);
    userComments.appendChild(form);
    userComments.appendChild(commentBlock);
  }

  function renderList() {
    commentElements = comments.map(function (comment) {
      const authorName = document.createElement('div');
      const commentItem = document.createElement('div');
      const commentDate = document.createElement('div');

      authorName.classList.add('author-item');
      commentItem.classList.add('text-item');

      authorName.style.fontWeight = "600";
      authorName.style.color = "brown";
      commentDate.style.fontSize = "12px";
      commentDate.style.textAlign = "right";
      commentDate.style.color = "gray";


      authorName.textContent = comment.author;
      commentItem.textContent = comment.text;
      commentDate.textContent = comment.date;
      commentBlock.appendChild(authorName);
      commentBlock.appendChild(commentItem);
      commentBlock.appendChild(commentDate);

    });
  }

  function fetchList() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          comments = JSON.parse(xhr.response);
          renderList();
        } else {
          console.error(xhr.response);
        }
      }
    }
  }

  render();
  fetchList();
}
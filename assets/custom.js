
//Сохранить ответы юзера, по клику на кнопку “Ok” в последнем модальном окне (#p_modal3) вместо перехода на другую страницу, вывести ответы в консоль браузера.
const p_modal_button3El = document.getElementById("p_modal_button3");
const buttonsEl = document.querySelectorAll(".survey_button");
const answers = [];

buttonsEl.forEach(button => button.addEventListener('click', () => {
        const question = button.parentNode.querySelector('span font').innerText;
        const answer = button.textContent.trim();
        answers.push({question, answer});
    })
);

p_modal_button3El.addEventListener("click", function(event) {
    console.log(answers);

    event.preventDefault();
});


//В блоке с комментариями добавить возможность оставлять комментарий юзерам - добавить поле для текста, кнопку “опубликовать”

const formEl = document.querySelector('form');
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const comment = document.querySelector('#comment').value;

    // После нажатия на кнопку “опубликовать” должен появиться коммент от анонимного юзера
    const newComment = document.createElement('div');
    newComment.classList.add('comments');
    newComment.innerHTML = `
          <div class="profile">
            <img src="https://picsum.photos/400?random=${Math.random()}">
          </div>
          <div class="comment-content">
            <p class="name">
              <font style="vertical-align: inherit;">${username}</font>
            </p>
            <p>
              <font style="vertical-align: inherit;">${comment}</font>
            </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status">
            <span>
              <font style="vertical-align: inherit;">Curte·comente</font>
              <img src="./assets/img/like.png" width="15px" height="15px">
              <font style="vertical-align: inherit;">0</font>
            </span>
            <font style="vertical-align: inherit;">
              <small>
                <font style="vertical-align: inherit;">·</font>
              </small>
              <small>
                <u>
                  <font style="vertical-align: inherit;">Liks</font>
                </u>
              </small>
            </font>
          </div>
        `;


    const commentsSection = document.querySelector('.comments_face');
    commentsSection.prepend(newComment);

    formEl.reset();
});
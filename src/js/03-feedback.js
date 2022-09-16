import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(formChange, 500))

console.log(formRef);

const dataForm = {};

function formChange(e) {
    //отслеживаем событие в форме и вносим изменения значей по ключу в объекте dataForm
    dataForm[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

formRef.addEventListener('submit', submitForm);

function submitForm(e) {
    //отслеживаем события отправки формы и вывод объекта в консоль + очистка формы и localStorage
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

// функция сохранения данных формы в случае обновления страницы
function formStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const emailRef = formRef.querySelector('input');
    const messageRef = formRef.querySelector('textarea');
    
    // console.log(data);

    if (data) {
        if (data.email !== undefined) {
            emailRef.value = data.email;
        } else {
            emailRef.value = '';
        }
        if (data.message !== undefined) {
            messageRef.value = data.message;
        } else {
            messageRef.value = '';
        }
    }
};

formStorage();
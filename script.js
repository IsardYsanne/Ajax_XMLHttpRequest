const elForm = document.querySelector('[name="user"]');
const elFirstname = elForm.querySelector('[name="firstname"]');
const elLastname = elForm.querySelector('[name="lastname"]');
const elStatus = document.querySelector('#status');
const requestURL = elForm.action;

/* encodeURIComponent() -  заменяет все символы, кроме: символов латинского алфавита, десятичных цифр и - _ . ! ~ * ' ( ).*/

function sendForm() {
    const firstname = encodeURIComponent(elFirstname.value);
    const lastname = encodeURIComponent(elLastname.value);
    const formData = 'firstname=' + firstname + '&lastname=' + lastname;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', requestURL);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 || xhr.status !== 200) {
            return;
        }
        const response = JSON.parse(xhr.responseText);
        elStatus.innerHTML = '<ul><li>Имя: <b>' + response.firstname + '</b></li> <li>Фамилия: <b>' + response
            .lastname + '</b></li></ul>';
    }
    xhr.send(formData);
    elStatus.textContent = '...';
}

elForm.addEventListener('submit', function (e) {
    e.preventDefault();
    sendForm();
});

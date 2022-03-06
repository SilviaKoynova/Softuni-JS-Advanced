window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let postCodeElement = document.getElementById('code');
  let submittBtn = document.getElementById('submitBTN');
  submittBtn.addEventListener('click', (e) => {
    let name = fullNameElement.value;
    let email = emailElement.value;
    let phone = phoneNumberElement.value;
    let address = addressElement.value;
    let postCode = postCodeElement.value;
    e.preventDefault();
    if (!fullNameElement.value || !emailElement.value) {
      return;
    }
    submittBtn.disabled = true;
    let editBtn = document.getElementById('editBTN');
    editBtn.disabled = false;
    let continueBtn = document.getElementById('continueBTN');
    continueBtn.disabled = false;
    let ul = document.getElementById('infoPreview');
    let nameLi = document.createElement('li');
    nameLi.textContent = `Full Name: ${fullNameElement.value}`;
    let emailLi = document.createElement('li');
    emailLi.textContent = `Email: ${emailElement.value}`;
    let phoneLi = document.createElement('li');
    phoneLi.textContent = `Phone Number: ${phoneNumberElement.value}`;
    let addressLi = document.createElement('li');
    addressLi.textContent = `Address: ${addressElement.value}`;
    let postCodeLi = document.createElement('li');
    postCodeLi.textContent = `Post Code: ${postCodeElement.value}`;
    ul.appendChild(nameLi);
    ul.appendChild(emailLi);
    ul.appendChild(phoneLi);
    ul.appendChild(addressLi);
    ul.appendChild(postCodeLi);
    fullNameElement.value = '';
    emailElement.value = '';
    phoneNumberElement.value = '';
    addressElement.value = '';
    postCodeElement.value = '';
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      fullNameElement.value = name;
      emailElement.value = email;
      phoneNumberElement.value = phone;
      addressElement.value = address;
      postCodeElement.value = postCode;
      submittBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    });
    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let div = document.getElementById('block');
      while(div.firstChild) {
        div.removeChild(div.firstChild);
      }
      let header = document.createElement('h3');
      header.textContent = `Thank you for your reservation!`;
      div.appendChild(header);
    })
  });
}

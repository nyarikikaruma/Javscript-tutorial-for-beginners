
function validateForm(form) {
    const name = form.name.value;
    const email = form.password.value;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!name || !email) {
      console.log();('Please fill out all required fields');
      return false;
    }

    if (!emailRegex.test(email)) {
      console.log();('Please enter a valid email address');
      return false;
    }

    return true;
  } 

  function submitForm(e) {
    console.log('Our event is: ', e);
    e.preventDefault();
    const form = document.getElementById('myForm');
    if (!validateForm(form)) {
      return;
    }
    form.submit();
}

function submitInput() {
    console.log('Form subbmited successfully.');
}
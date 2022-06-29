const LoginDialog = document.getElementById('view-login-dialog');
const loginButton = document.getElementById('loginButton');

const signUpDialog = document.getElementById('view-signUp-dialog');
const signUpButton = document.getElementById('signUpButton');

function openLoginDiaglog() {
  /**
  * @param event
  */
  function closeLoginDialog() {
    LoginDialog.close();
  }

  // cancel button event
  document.querySelector('#view-login-dialog .dialog-close-button').addEventListener('click', () => {
    closeLoginDialog();
  }, { once: true });

  LoginDialog.showModal();
}

function opensignUpDiaglog() {
  /**
  * @param event
  */
  function closesignUpDialog() {
    signUpDialog.close();
  }

  // cancel button event
  document.querySelector('#view-signUp-dialog .dialog-close-button').addEventListener('click', () => {
    closesignUpDialog();
  }, { once: true });

  signUpDialog.showModal();
}

signUpButton.addEventListener('click', event => opensignUpDiaglog());
loginButton.addEventListener('click', event => openLoginDiaglog());

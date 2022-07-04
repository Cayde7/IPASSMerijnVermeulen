if(!window.location.href.includes("personalMatchUps")){
  const loginDialog = document.getElementById('view-login-dialog');
  const loginButton = document.getElementById('loginButton');
  
  const signUpDialog = document.getElementById('view-signUp-dialog');
  const signUpButton = document.getElementById('signUpButton');

  // This is to open de login dialog
  function openLoginDiaglog() {
    
    function closeLoginDialog() {
      loginDialog.close();
    }

    // cancel button event
    document.querySelector('#view-login-dialog .dialog-close-button').addEventListener('click', () => {
      closeLoginDialog();
    }, { once: true });

    loginDialog.showModal();
  }

  // This is to open de sign up dialog
  function opensignUpDiaglog() {

    function closesignUpDialog() {
      signUpDialog.close();
    }

    // cancel button event
    document.querySelector('#view-signUp-dialog .dialog-close-button').addEventListener('click', () => {
      closesignUpDialog();
    }, { once: true });

    signUpDialog.showModal();
  }
  if(signUpButton != null){
    signUpButton.addEventListener('click', event => opensignUpDiaglog());
  }else if(loginButton != null){
    loginButton.addEventListener('click', event => openLoginDiaglog());
  }
} else{
  const addDialog = document.getElementById('addMatchUp-dialog');
  const addButton = document.getElementById('addMatchUpButton');

  const updateDialog = document.getElementById('update-dialog');
  const updateButton = document.getElementById('updateButton');



  function openAddDiaglog() {
    
    function closeAddDialog() {
      addDialog.close();
    }

    // cancel button event
    document.querySelector('#addMatchUp-dialog .dialog-close-button').addEventListener('click', () => {
      closeAddDialog();
    }, { once: true });

    addDialog.showModal();
  }

  function openUpdateDiaglog() {
    
    function closeUpdateDialog() {
      updateDialog.close();
    }

    // cancel button event
    document.querySelector('#update-dialog .dialog-close-button').addEventListener('click', () => {
      closeUpdateDialog();
    }, { once: true });

    updateDialog.showModal();
  }
  if(addButton != null){
    addButton.addEventListener('click', event => openAddDiaglog());
  }else if(updateButton != null){
    updateButton.addEventListener('click', event => openUpdateDiaglog());
  }
}

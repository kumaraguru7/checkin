document.addEventListener('DOMContentLoaded', function () {
  var loginWindow = document.querySelector('.login-window');
  var loginWindowHeaderMessage = document.querySelector('.login-window__header-message');
  var loginWindowContentWrapper = document.querySelector('.wrapper');
  var loginButton = document.querySelector('.login-window__login-button > button');

  var inputAccount = document.querySelector('.login-window__form > input[type="text"]');
  var inputPassword = document.querySelector('.login-window__form > input[type="password"]');

  var wrapperDimension = Math.sqrt(Math.pow(loginWindow.clientWidth, 2) + Math.pow(loginWindow.clientHeight, 2)) + 'px';

  loginWindowContentWrapper.style.width = wrapperDimension;
  loginWindowContentWrapper.style.height = wrapperDimension;

  loginButton.onclick = function () {
    loginWindow.classList.add('loading');

    setTimeout(function () {
      // Login result callback
      loginWindow.classList.remove('loading');

      if (inputAccount.value == 'abc' && inputPassword.value == '123') {
        // Login success         
        loginWindow.classList.add('fadeout');
      } else
      {
        loginWindowHeaderMessage.style.display = 'block';
      }

    }, 4000);
  };
});
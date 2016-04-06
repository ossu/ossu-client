angular.module('firebase.config', [])
  .constant('FBURL', 'https://ossu-dev.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['github'])

  .constant('loginRedirectPath', '/login');

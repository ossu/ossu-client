angular.module('firebase.config', [])
  .constant('FBURL', 'https://ossu.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['github'])

  .constant('loginRedirectPath', '/login');

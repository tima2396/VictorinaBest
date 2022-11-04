document.querySelector('#registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    login, password, action, method, passwordRepeat,
  } = e.target;

  const response = await fetch(action, {
    method,
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
      passwordRepeat: passwordRepeat.value,
    }),
  });
  const data = await response.json();

});

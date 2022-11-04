document.querySelector('#registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    login, password, action, method,
  } = e.target;
  // console.log(login.value, password.value);
  const response = await fetch(action, {
    method,
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
  });
  const data = await response.json();
  console.log(data);
});

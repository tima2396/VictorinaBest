const errLog = document.querySelector('.err-log');

document.querySelector('#formLog').addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    login, password, action, method,
  } = event.target;
  const logpas = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),

  });
  const data = await logpas.json();
  if (data.status === 'error') {
    errLog.innerHTML = data.message;
  } else {
    window.location.assign('/');
  }
});

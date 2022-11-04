const questForm = document.querySelector('#questForm');

questForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { answer, action, method } = e.target;
  const question = document.querySelector('.que').dataset.id
  const topic = document.querySelector('.que').dataset.topic
  const response = await fetch(`/quest`, {
    method,
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      answer: answer.value,
      question,
      topic
    }),
  });
  const data = await response.json();
  if (data.message === 'ok') {
    document.querySelector('.result').innerHTML = 'Right answer!!!!';
  } else {
    document.querySelector('.result').innerHTML = 'Wrong answer!!!!!';
  }

});

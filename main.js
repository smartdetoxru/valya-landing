const form = document.querySelector('#request-form');
const status = document.querySelector('#form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  status.textContent = 'Форма пока не подключена. Заявка не отправлена. Перед публикацией сайта нужно указать способ получения заявок и добавить политику конфиденциальности.';
  status.classList.add('form-status--notice');
});

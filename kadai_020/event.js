const button =document.getElementById('btn');
const after  =document.getElementById('text')

button.addEventListener('click', () => {
  after.textContent = 'ボタンをクリックしました';
});
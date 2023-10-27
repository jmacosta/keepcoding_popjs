export const goHomeController = () => {
  const goHomeButton = document.querySelector('#go_home');
  goHomeButton.addEventListener('click', () => {
    window.location = './';
  });
};

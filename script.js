const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

function showTab(index) {
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
      tab.classList.add('w--current');
      contents[i].classList.add('active');
    } else {
      tab.classList.remove('active');
      tab.classList.remove('w--current');
      contents[i].classList.remove('active');
    }
  });
}

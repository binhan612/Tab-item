const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
const line = $('.tabs .line');

line.style.width = tabActive.offsetWidth + 'px';
line.style.left = tabActive.offsetLeft + 'px';


tabs.forEach((tabItem, index) => {
  var pane = panes[index];
  tabItem.onclick = function() {
    const tabActive = $('.tab-item.active');
    const paneActive = $('.tab-pane.active');
    tabActive.classList.remove('active');
    paneActive.classList.remove('active');

    this.classList.add('active');
    pane.classList.add('active');

    line.style.width = this.offsetWidth + 'px';
    line.style.left = this.offsetLeft + 'px';
  };
})
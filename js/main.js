const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');
const elsTablink = document.querySelectorAll('.js-tab-link');


function deactivateTabitems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabs__panel--active');
  });
}

elsTablink.forEach(function(elTablink) {
  elTablink.addEventListener('click', function(evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class form tabs__item elements
  deactivateTabitems();


    // Add active class to current tabs__item
    elTablink.parentElement.classList.add('tabs__item--active');

    // Remove active class from tabs__panel elements
    deactivateTabPanels();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTablink.href.split(`#`)[1]}`);
    const elTargetPanel = document.querySelector(`#${elTablink.href.split('#')[1]}`);
    elTargetPanel.classList.add('tabs__panel--active');
  });
});
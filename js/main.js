const modifiers = {
  tabItemActive: 'tabs__item--active',
  tabPanelActive: 'tabpanels__item--active'
  accordionItemOpen: 'accordion__item--open'
};


const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTablink = document.querySelectorAll('.js-tab-link');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

function deactivateTabItems() {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}

function deactivateTabPanels() {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabs__panel--active');
  });
}

function closeAccordionItems() {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
  });
}

elsTablink.forEach(function (elTablink) {
  elTablink.addEventListener('click', function (evt) {
    evt.preventDefault();

    // Remove active class form tabs__item elements
    deactivateTabItems();

    // Add active class to current tabs__item
    elTablink.parentElement.classList.add('tabs__item--active');

    // Remove active class from tabs__panel elements
    deactivateTabPanels();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTAblink.href.split(`#`)[1]}`);
    const elTargetPanel = document.querySelector(elTablink.dataset.tabTarget);
    elTargetPanel.classList.add(modifiers.tabPanelActive);
  });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    closeAccordionItems();

    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
  });
});

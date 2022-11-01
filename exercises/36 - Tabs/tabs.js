/* -------------------------------------------------------------------------- */
/*                                    Tabs                                    */
/* -------------------------------------------------------------------------- */

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

const arrayTabPanels = Array.from(tabPanels);

function handleTabClick(e) {
  // Hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // Mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });
  // Mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // Find the associated tabPanel and show it!

  // Method 1
  const { id } = e.currentTarget;
  //   const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  //   console.log(tabPanel);
  //   tabPanel.hidden = false;

  // Method 2 - find in the array of tabPanels
  const arrayTabPanel = arrayTabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  arrayTabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);

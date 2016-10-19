import getElementById from './getElementById'

export default function configureTabControls(tabContainer, tabPanelContainer) {
  const tabs = tabContainer.querySelectorAll('[role="tab"]')
  const tabPanels = tabPanelContainer.querySelectorAll('[role="tabpanel"]')

  // Right now, we just have two tabs: one for showing the table of contents,
  // and one for showing the documentation itself.
  for (let tab of tabs) {
    configureTab(tab, tabs, tabPanels)
  }
}

function configureTab(tab, tabs, tabPanels) {
  tab.addEventListener('click', () => {
    // First, let's mark every tab as unselected
    for (let i = 0; i < tabs.length; i++) {
      setSelectedAttribute(tabs[i], 'false')
    }

    // Next, let's hide every tab panel
    for (let i = 0; i < tabPanels.length; i++) {
      tabPanels[i].style.display = 'none'
    }

    // Now, we'll mark the tab the user just clicked as selected
    setSelectedAttribute(tab, 'true')

    // And finally, we'll show the associated table panel 
    getElementById(tab.getAttribute('aria-controls')).style.display = 'block'
  })
}

function setSelectedAttribute(tab, value) {
  tab.setAttribute('aria-selected', value)
}

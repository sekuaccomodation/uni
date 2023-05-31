document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      activateTab(tabId);
    });
  });

  function activateTab(tabId) {
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const activeLink = document.querySelector(`[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(tabId);

    activeLink.classList.add('active');
    activeContent.classList.add('active');
  }
});

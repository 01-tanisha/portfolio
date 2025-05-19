const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});



const downloadLink = document.getElementById('CV');

downloadLink.addEventListener('click', function (event) 
{
  event.preventDefault(); // Stop immediate download

  const userInput = prompt("Sure want to download CV? (yes/no)");

  if (userInput && userInput.toLowerCase() === "yes") 
    {
    alert("Thanks for downloading my CV!");
    window.location.href = this.href;
  } 
  else 
  {
    alert("Download cancelled!");
  }
});

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




let activeTab = null;
function opentab(tabName, clickedElement) 
{
  const targetContent = document.getElementById(tabName);
  const isAlreadyOpen = activeTab === tabName;

  // Hide all contents and reset all tabs
  document.querySelectorAll('.tab-contents').forEach(content => {
    content.style.display = 'none';
  });
  document.querySelectorAll('.tab-links').forEach(tab => {
    tab.style.transform = 'scale(1)';
    tab.style.backgroundColor = 'transparent';
    tab.style.color =  'rgb(207, 71, 137)';
    tab.style.textDecoration = 'underline';
    tab.style.fontWeight='bold'
    tab.style.boxShadow = 'none';
  });

  if (!isAlreadyOpen) {
    // Show new tab content and apply bulge
    targetContent.style.display = 'block';
    clickedElement.style.transform = 'scale(1.1)';
    clickedElement.style.backgroundColor = '#e5983a';
    clickedElement.style.color = 'white';
    clickedElement.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    clickedElement.style.fontWeight = 'bold';
    clickedElement.style.justifyContent = 'center';
    activeTab = tabName;
  } 
  else 
  {
    // If clicked again, remove active state
    activeTab = null;
  }
}


function darkMode() {
  const body = document.querySelector('body');  //js for dark mode toggle
  body.classList.toggle('dark-mode');
}
//---------------------JS for redirecting to other pages---------------------
document.getElementById("redirectTo-RPApage-a").addEventListener("click", function() {
  window.location.href = "rpa.html";
});
document.getElementById("redirectTo-RPApage-b").addEventListener("click", function() {
  window.location.href = "rpa.html";
});
document.getElementById("redirectTo-AppPage-a").addEventListener("click", function() {
  window.location.href = "builBetterApps.html";
});                                                                                    //I did not understand why it is not working
document.getElementById("redirectTo-AppPage-b").addEventListener("click", function() { //for all the element of class so I have to 
  window.location.href = "builBetterApps.html";                                        //repeate it for 8 times .  
});
document.getElementById("redirectTo-DevopsPage-a").addEventListener("click", function() {
  window.location.href = "DevOps.html";
});
document.getElementById("redirectTo-DevopsPage-b").addEventListener("click", function() {
  window.location.href = "DevOps.html";
});
document.getElementById("redirectTo-cloudPage-a").addEventListener("click", function() {
  window.location.href = "Cloud.html";
});
document.getElementById("redirectTo-cloudPage-b").addEventListener("click", function() {
  window.location.href = "Cloud.html";
});

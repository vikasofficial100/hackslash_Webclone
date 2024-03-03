
function darkMode() {
  const body = document.querySelector('body');  //js for dark mode toggle
  body.classList.toggle('dark-mode');           // explanation: it is a simple funtion which toggle between normal styleing and styling written with .dark-mode class
}                                               //even there is a simpler way to do it by using if else statement and little bit of dom but I feel this method is more efficient 
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
document.getElementById("redirectTo-AppPage-b").addEventListener("click", function() { //for all the element of same named class so I have to 
  window.location.href = "builBetterApps.html";                                        //repeate it for 8 times  
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

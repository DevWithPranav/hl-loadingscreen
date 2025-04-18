window.addEventListener("message", (event) => {
  // Check for loadProgress event
  if (event.data.eventName === "loadProgress") {
    // Get the loadFraction (0 to 1)
    const loadFraction = event.data.loadFraction;
    // Update progress bar
    const progressBar = document.getElementsByClassName("bar")[0]; // Access first element
    progressBar.style.width = `${Math.round(loadFraction * 100)}%`; // Set width as percentage
    // Update percentage text
    const progressText = document.getElementsByClassName("bartext")[0]; // Access first element
    progressText.textContent = `${Math.round(loadFraction * 100)}%`;
  }
});
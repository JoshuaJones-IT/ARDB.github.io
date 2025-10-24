document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const resultsList = document.getElementById("resultsList");
  // Ensure 'resultsList' exists before trying to get 'li' elements
  if (!resultsList) return;

  const listItems = resultsList.getElementsByTagName("li");

  if (searchInput) {
    // Check if 'searchInput' exists
    searchInput.addEventListener("keyup", () => {
      const searchTerm = searchInput.value.toLowerCase();

      for (let i = 0; i < listItems.length; i++) {
        // Corrected and completed logic for search functionality
        const listItem = listItems[i];
        const text = listItem.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
          listItem.style.display = ""; // Show the item
        } else {
          listItem.style.display = "none"; // Hide the item
        }
      } // Closing brace for the 'for' loop
    }); // Closing brace for the 'keyup' event listener
  }
}); // Closing brace for the 'DOMContentLoaded' event listener
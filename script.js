var acc = document.getElementsByClassName("accordion");
var acc1 = document.getElementsByClassName("accordion1");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < acc.length; i++) {
    acc1[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  

//search bar
function searchFunction(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("search").value;
  // You can perform further actions with the search term, like sending it to a server or processing it locally.
  console.log("Search term:", searchTerm);
}

//gpt code
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  //const contentContainer = document.getElementById('content-container');
  const contentContainer = document.getElementById("ahahha");

  searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.toLowerCase();
    const paragraphs = contentContainer.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
      const paragraphText = paragraphs[i].textContent.toLowerCase();
      if (paragraphText.includes(searchText)) {
        const highlightedText = paragraphs[i].innerHTML.replace(
          new RegExp(searchText, "gi"),
          '<span class="highlight">$&</span>'
        );
        paragraphs[i].innerHTML = highlightedText;
      } else {
        paragraphs[i].innerHTML = paragraphs[i].textContent;
      }
    }
  });
});

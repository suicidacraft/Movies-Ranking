/**
 * Data Catalog Project Starter Code - SEA Stage 2
/** */



//Data comes from movie.js It is one big array of objects.


let counter = 0;

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = counter; i < counter+5; i++) {
    let title = Movie[i].Series_Title;   
    
    //image comes small so edit the url for regular dimensions
    let imageURL = Movie[i].Poster_Link;
    imageURL = imageURL.slice(0,imageURL.indexOf("._V1")) + ".jpg";

    let Score = Movie[i].Meta_score;

    let Runtime = Movie[i].Runtime;

    let Overview = Movie[i].Overview;

    let IMDB = Movie[i].Gross;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, Score, Runtime, Overview, Money); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}


function editCardContent(card, newTitle, newImageURL, Score, Runtime, Overview, Money) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardBullet = card.querySelectorAll("li");
  cardBullet[0].textContent = "Money made: " + Money;
  cardBullet[1].textContent = "Runtime: " + Runtime;
  cardBullet[2].textContent = "Synopsis: " + Overview;
  cardBullet[3].textContent = "Movie_Score: " + Score;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function NextButton() {
  console.log("Button Clicked!");
  
  counter+= 5;
  showCards(); 
}

function LastButton() {
  if(counter != 0)
  counter-=5;
  showCards(); // Call showCards again to refresh
}

function Bullet()
{
  return "something";
}
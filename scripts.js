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


    let Money = Movie[i].Gross;

    let Year_date = Movie[i].Released_Year;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, Score, Runtime, Money, Year_date); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

let visible = true;

function editCardContent(card, newTitle, newImageURL, Score, Runtime, Money, Year) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  let clicked = false;
  
  const cardBullet = card.querySelectorAll("li");

  if(visible == true)
  {
    cardBullet[0].textContent = "-Money made: " + Money;
    cardBullet[1].textContent = "-Runtime: " + Runtime;
    cardBullet[2].textContent = "-Movie_Score: " + Score;
    cardBullet[3].textContent = "-Year: " + Year;
  }

  card.onclick = () => { 
  if(clicked == true)
  {
    clicked = false;
    cardBullet[0].textContent = "-Money made: " + Money;
    cardBullet[1].textContent = "-Runtime: " + Runtime;
    cardBullet[2].textContent = "-Movie_Score: " + Score;
    cardBullet[3].textContent = "-Year: " + Year;
  } else
  {
    clicked = true;
    cardBullet[0].textContent = "";
    cardBullet[1].textContent = "";
    cardBullet[2].textContent = "";
    cardBullet[3].textContent = "";
  }
  }
  
  /*
  const cardBullet = card.querySelectorAll("li");
  cardBullet[0].textContent = "Money made: " + Money;
  cardBullet[1].textContent = "Runtime: " + Runtime;
  cardBullet[2].textContent = "Synopsis: " + Overview;
  cardBullet[3].textContent = "Movie_Score: " + Score;
  */

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
}


function Sort(value)
{
  console.log(value);
  console.log(Movie[0][value]);
  let swap;
  for(let i = 0; i < Movie.length-1;i++)
  {
      if((Movie[i][value]) < (Movie[i+1][value]))
      {
        swap = Movie[i];
        Movie[i] = Movie[i+1];
        Movie[i+1] = swap;
        i = -1;
      }
  }
  counter = 0;
  showCards();
}


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

//Buttons and movement
function HoverRight()
{
  NextButton()
  hoverInterval = setInterval(NextButton, 800);
}

function HoverLeft()
{
  LastButton()
  hoverInterval = setInterval(LastButton, 800);
}

function HoverOut()
{
  clearInterval(hoverInterval);
}

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


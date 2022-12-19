const arrows = document.querySelectorAll(".arow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arow, i) => {
    
    const itemLength = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth/270);
        clickCounter++;
        if (itemLength - (5 + clickCounter) + (5 - ratio) >= 0) {
            movieLists[i].style.transform = `translate(${movieLists[i].computedStyleMap().get("transform")[0].x.value
                - 300}px)`;
        }
        else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
    console.log(Math.floor(window.innerWidth/270))
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll
(".container, .movie-list-title,.navbar-container, .sidebar, .left-menu-icon, .toggle"
);


ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
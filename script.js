var btn = document.getElementById("submit");
var card = document.getElementById("card");
var container = document.getElementById("container");
var choice = document.getElementById("final");
var thankYou = document.getElementById("thankYou");
thankYou.style.display = 'none';
var scores = document.getElementsByClassName("score"); //creates a HTMLCollection
    //convert HTMLCollection to Array
    var ratings = [].slice.call(scores);
    ratings.forEach(element => {
        element.addEventListener("click", function(){
            element.setAttribute("id", "select");
            let other = ratings.filter(function(value){
                return value != element;
            })
            other.forEach(item => {
                item.setAttribute("id", "");
            })
            choice.textContent = element.textContent;
            btn.addEventListener("click", function(){
                container.remove();
                thankYou.style.display = 'block';
                card.appendChild(thankYou);
            })
        })

    })  
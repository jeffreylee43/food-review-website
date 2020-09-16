function myFunction2() {
    event.preventDefault();
    var restaurant = document.getElementById('restaurant').value;
    var comment = document.getElementById('comment').value;
    var service_qual = document.getElementById('service_qual').value;
    var menu_variety = document.getElementById('menu_variety').value;
    var food_qual = document.getElementById('food_qual').value;
    var image = document.getElementById('image').value;
    addPost(restaurant, comment, service_qual, menu_variety, food_qual, image)
}

function addPost(restaurant, comment, service_qual, menu_variety, food_qual, image) {
   var review = document.createElement("div");
   review.className = "review";

   var main_container = document.createElement("div");
   main_container.className = "main-container";

   var pic_container = document.createElement("div");
   pic_container.className = "pic-container";

   var newImg = document.createElement("img");
   newImg.className = "review-pic";
   newImg.src = image;

   var review_container = document.createElement("div");
   review_container.className = "review-container";
   
   var review_body = document.createElement("div")
   review_body.className = "review-body";

   var restaurant_name = document.createElement("h3");
   restaurant_name.innerHTML = restaurant;

   var review_comment = document.createElement("p");
   review_comment.innerHTML = comment;

   var rating_container = document.createElement("div");
   rating_container.className = "rating-container";

   var review_rating = document.createElement("div");
   review_rating.className = "review-rating";

   var uList = document.createElement("ul");
   var service = document.createElement("li");
   service.innerHTML = "Service Quality: " + service_qual + "/5";
   var menu = document.createElement("li");
   menu.innerHTML = "Menu variety: " + menu_variety + "/5";
   var food = document.createElement("li");
   food.innerHTML = "Quality of food: " + food_qual + "/5";

   review.append(main_container);
   main_container.append(pic_container);
   pic_container.append(newImg);
   main_container.append(review_container);
   review_container.append(review_body);
   review_body.append(restaurant_name);
   review_body.append(review_comment);
   main_container.append(rating_container);
   rating_container.append(review_rating);
   review_rating.append(uList);
   uList.append(service);
   uList.append(menu);
   uList.append(food);
 
   reviews.append(review);
   document.getElementById("formPost").reset();
   document.getElementById("comment").value = '';
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   formPost.addEventListener('submit', myFunction2);
};
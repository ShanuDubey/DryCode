const userContainer = document.querySelector(".parent");
const globalstore = [];
const addnew = () => {
    const userData = {
        id: Date.now(),
        imageUrl: document.getElementById("imageurl").value,
        Name: document.getElementById("nme").value,
        College: document.getElementById("college").value,
        feedback: document.getElementById("feed-back").value
    };

    const newCard = `
        <div class="flip_card" id=${userData.id}>
          <div class="flip_card_inner">
            <div class="flip_card_front">
              <div class="front_image">
              <img src="${userData.imageUrl}" alt="">
              </div>
              <div class="name"><h3>
                <strong><center>${userData.Name}</center></strong></h3>
                <h4>
                <center>Intern</center></h4>
                <center>${userData.College}</center>
              </div>
            </div>
            <div class="flip_card_back">
            <p>${userData.feedback}</p>
          </div>
          </div>
        </div>
        `;

    userContainer.insertAdjacentHTML("beforeend", newCard);
};

import {friends} from "../data/friends.js";

// grab the HTML references
const myNav = document.querySelector('nav');
const myViewer = document.querySelector('#viewer');

// create month array
const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// navigation
friends.forEach(friend => {
    console.log(friend)

    const myBtn = document.createElement('button');
    myBtn.textContent = `${friend.first} ${friend.last}`;
    myBtn.addEventListener('click', () => showFriend(friend));

    myNav.appendChild(myBtn);
});

function showFriend(friend) {
    myViewer.textContent = '';
    let friendSection = document.createElement('section');

    let friendName = document.createElement('h2');
    friendName.textContent = `${friend.first} ${friend.last}`

    let friendPhoto = document.createElement('img');
    friendPhoto.src = `images/${friend.photo}`;
    friendPhoto.alt = friend.first;

    let friendBirth = document.createElement('p');
    friendBirth.textContent = `DOB: ${monthName[(friend.bornMonth)-1]} ${friend.bornDay}, ${friend.bornYear}`;

    let friendEmploy = document.createElement('p');
    friendEmploy.textContent = `Employment: ${friend.employed}`;

    let friendHobbies = document.createElement('ul');
    friend.hobbies.forEach(hobby => {
        let theHobby = document.createElement('li');
        theHobby.textContent = hobby;
        friendHobbies.appendChild(theHobby)
    });

    //Assemble the card
    friendSection.appendChild(friendName);
    friendSection.appendChild(friendPhoto);
    friendSection.appendChild(friendBirth);
    friendSection.appendChild(friendEmploy);
    friendSection.appendChild(friendHobbies);

    myViewer.appendChild(friendSection);
};
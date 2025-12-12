import {friends} from "../data/friends.js";

// grab the HTML references
const myNav = document.querySelector('nav');
const myViewer = document.querySelector('#viewer');

// navigation
friends.forEach(friend => {
    console.log(friend)

    const myBtn = document.createElement('button');
    myBtn.textContent = `${friend.first} ${friend.last}`;
    myBtn.addEventListener('click', () => showFriend(friend));

    myNav.appendChild(myBtn);
});

function showFriend(x) {
    console.log(x)
};
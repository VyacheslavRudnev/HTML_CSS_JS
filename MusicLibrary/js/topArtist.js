import {artists_data} from "../data/artistsData.js";

document.addEventListener("DOMContentLoaded", () => {
    let artists = artists_data;

    function generateArtists(){
        const topArtistsList = document.getElementById('top-artistsList');
        if (!topArtistsList) {
            console.error("Element #artistsList not found!");
            return;
        }

        artists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.classList.add('artist-card');

            artistCard.innerHTML = `
                <div class="artist-cover">
                    <img src="${artist.img}">
                </div>
                <div class="artist-body">
                    <h3 class="artist-card-name">${artist.name}</h3>
                </div>
            `;

            topArtistsList.appendChild(artistCard);
        });
    }

    generateArtists();
});


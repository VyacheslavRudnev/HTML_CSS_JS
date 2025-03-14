import {artists_data} from '/data/artistsData.js';

document.addEventListener("DOMContentLoaded", () => {
    let allArtists = artists_data;

    function generateAllArtists() {
        const allArtistsList = document.getElementById("all-artistsList");
        if (!allArtistsList) {
            console.error("No artists found");
            return;
        }

        allArtists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.classList.add('artist-card');

            artistCard.innerHTML = `
                <div class="artist-cover">
                    <img src="${artist.img}" alt="${artist.name}">
                </div>
                <div class="artist-body">
                    <h3 class="artist-card-name">${artist.name}</h3>
                    <p class="artist-card-genre">${artist.genre}</p>
                </div>
            `;
            allArtistsList.appendChild(artistCard);
        });
    }

    generateAllArtists();

});

import { albums_data } from '../data/albumsData.js';
import { artists_data } from '../data/artistsData.js';

document.addEventListener('DOMContentLoaded', function () {
    let albums = [...albums_data]

    function getArtistNameById(artist_id) {
        const artist = artists_data.find(artist => artist.id === artist_id);
        return artist ? artist.name : 'Невідомий виконавець';
    }

    function generateAlbums() {
        const albumsList = document.getElementById('albumsList');
        if (!albumsList) {
            console.error("Element #albumsList not found!");
            return;
        }
        albums.sort((a, b) => b.score - a.score);
        albumsList.innerHTML = '';

        albums.forEach(album => {
            const artistName = getArtistNameById(album.artist_id);
            const albumCard = document.createElement('div');
            albumCard.classList.add('album-card');

            albumCard.innerHTML = `
                <div class="album-cover">
                    <img src="${album.img}" alt="${album.name}">
                </div>
                
                <div class="album-body">
                    <h3 class="card-album-title">${album.name}</h3>
                    <p class="card-album-artist">${artistName}</p>
                    <p class="card-album-score">⭐ ${album.score}</p>
                </div>
            `;

            albumsList.appendChild(albumCard);
        });
    }

    generateAlbums();
});

import { artists_data } from "../data/artistsData.js";
import { albums_data } from "../data/albumsData.js";
import { tracks_data } from "../data/tracksData.js";

document.addEventListener("DOMContentLoaded", () => {
    const tracksList = document.getElementById("tracksList");

    if (!tracksList) {
        console.error("Element #tracksList not found!");
        return;
    }

    let topTracks = [];

    // Проходимось по кожному артисту
    artists_data.forEach(artist => {
        // Отримуємо альбоми артиста
        let artistAlbums = albums_data.filter(album => artist.albums.includes(album.id));

        if (artistAlbums.length > 0) {
            // Беремо перший альбом
            let firstAlbum = artistAlbums[0];

            // Отримуємо треки цього альбому
            let albumTracks = tracks_data.filter(track => track.album_id === firstAlbum.id);

            if (albumTracks.length > 0) {
                // Беремо або випадковий трек
                let firstTrack = albumTracks[Math.floor(Math.random() * albumTracks.length)];

                // Формуємо об'єкт топ-треку
                topTracks.push({
                    track: firstTrack,
                    album: firstAlbum,
                    artist: artist
                });
            }
        }
    });

    // Відображаємо список треків
    topTracks.forEach((item, index) => {
        const trackCard = document.createElement("div");
        trackCard.classList.add("track-card");

        trackCard.innerHTML = `
            <div class="left_bloc">
                <div class="play">
                    <a href="javascript:;" class="play track-list" 
                       data-track="assets/media/tracks/${item.artist.name.replace(/\s+/g, "-").toLowerCase()}/${item.track.name.replace(/\s+/g, "-").toLowerCase()}.mp3"
                       data-poster="${item.album.img}"
                       data-title="${item.track.name}"
                       data-singer="${item.artist.name}">
                        <i class="fas fa-play"></i>
                    </a>
                    <span>${index + 1}</span>
                </div>
                <img src="${item.album.img}" alt="${item.track.name}">
            </div>
            <div class="right_bloc">
                <h6>${item.track.name}</h6>
                <a href="#">${item.artist.name}</a>
            </div>
        `;

        tracksList.appendChild(trackCard);
    });
});

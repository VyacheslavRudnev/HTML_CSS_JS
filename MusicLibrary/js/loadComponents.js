function loadComponents(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            // Після завантаження хедера оновлюємо посилання
            if (elementId === "header") {
                updateHeaderLinks();
            }
        })
        .catch(error => console.error(`Помилка завантаження ${filePath}:`, error));
}

// Функція для оновлення посилань у хедері
function updateHeaderLinks() {
    const currentPath = window.location.pathname;
    const links = {
        home: document.getElementById('home'),
        allArtists: document.getElementById('allArtists'),
    };

    // Видаляємо клас "active" з усіх посилань (якщо вони існують)
    Object.values(links).forEach(link => {
        if (link) {
            link.classList.remove('active');
        }
    });

    // Додаємо клас "active" до поточного посилання (якщо воно існує)
    if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
        if (links.home) links.home.classList.add('active');
    } else if (currentPath.includes('artistsPage.html')) {
        if (links.allArtists) links.allArtists.classList.add('active');
    }
}

// Завантажуємо компоненти
const basePath = window.location.pathname.includes("pages") ? "../components/" : "components/";

loadComponents("header", basePath + "header.html");
loadComponents("modals", basePath + "modals.html");
loadComponents("footer", basePath + "footer.html");

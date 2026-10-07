// ================= НАСТРОЙКА РЕКЛАМНЫХ ССЫЛОК =================
// У тебя есть 7 ячеек для покупателей. Оставляй кавычки пустыми "", если рекламы нет.
const AD_SLOTS = [
    "", // Место 1
    "", // Место 2
    "", // Место 3
    "", // Место 4
    "", // Место 5
    "", // Место 6
    ""  // Место 7
];

// Твой личный ID Дискорда для кнопки связи
const DISCORD_PROFILE_URL = "https://discord.com/users/1464660534153449645";
// ==============================================================

const adSquare = document.getElementById('ad-square');
const discordLink = document.getElementById('discord-link');
const mainContent = document.getElementById('main-content');

// Клик по центральному квадрату рекламы
adSquare.addEventListener('click', () => {
    // Проверяем и оставляем только заполненные ссылки
    const activeAds = AD_SLOTS.filter(link => link.trim() !== "");

    if (activeAds.length > 0) {
        // Если реклама куплена — выбираем случайную из заполненных и открываем
        const randomIndex = Math.floor(Math.random() * activeAds.length);
        window.open(activeAds[randomIndex], '_blank');
    } else {
        // Если рекламы нет — полностью очищаем интерфейс и перекрашиваем фон в глубокий черный
        document.body.style.backgroundColor = "#000000";
        mainContent.innerHTML = `<div class="no-ad-screen">No One Buy Ad : (</div>`;
    }
});

// Клик по кнопке Дискорда (открывает твой личный профиль)
discordLink.addEventListener('click', () => {
    window.location.href = DISCORD_PROFILE_URL;
});

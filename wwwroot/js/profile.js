// EJ FERNANDEZ FILMS - Minimal Profile Renderer

document.addEventListener('DOMContentLoaded', () => {
    renderMinimalProfile();
});

function renderMinimalProfile() {
    if (typeof PROFILE_CONFIG === 'undefined') return;

    const nameEl = document.getElementById('profile-name');
    const titleEl = document.getElementById('profile-title');
    const imgEl = document.getElementById('profile-img');

    if (nameEl) nameEl.textContent = PROFILE_CONFIG.name;
    if (titleEl) titleEl.textContent = PROFILE_CONFIG.title;
    if (imgEl && PROFILE_CONFIG.profileImage) imgEl.src = PROFILE_CONFIG.profileImage;

    const socialListContainer = document.getElementById('social-list-container');
    if (socialListContainer && PROFILE_CONFIG.socials) {
        socialListContainer.innerHTML = '';
        PROFILE_CONFIG.socials.forEach(social => {
            const card = document.createElement('a');
            card.className = 'social-card';
            card.href = social.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            
            card.innerHTML = `
                <div class="social-left">
                    <div class="social-icon-wrapper">
                        <i class="${social.icon}"></i>
                    </div>
                    <div class="social-info">
                        <span class="social-title">${social.title}</span>
                        <span class="social-subtitle">${social.subtitle}</span>
                    </div>
                </div>
                <div class="social-arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
            `;
            socialListContainer.appendChild(card);
        });
    }
}

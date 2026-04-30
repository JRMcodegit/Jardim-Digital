// Flower data based on her qualities and things he wants to say
const flowersData = [
    {
        name: 'Flor do Carinho',
        message: 'Tu tem um jeito de fazer qualquer dia ficar mais leve só existindo.',
        color: '#ff6b8a'
    },
    {
        name: 'Flor do Calmante',
        message: 'Mesmo no caos, tu continua de pé. isso é tipo... inspirador pra caramba.',
        color: '#ff8fa3'
    },
    {
        name: 'Flor da Paz',
        message: 'Curtição, natureza, pôr do sol... tu sabe apreciar as coisas simples.',
        color: '#c77dff'
    },
    {
        name: 'Flor da Segurança',
        message: 'Sabe quando a gente tá jogando e só quer continuar ali? é isso.',
        color: '#7b8cde'
    },
    {
        name: 'Flor do Apoio',
        message: 'Tu não sabe o quanto isso significa pra mim.',
        color: '#ffb347'
    },
    {
        name: 'Flor da Força',
        message: 'Mente forte no meio do caos. tu é tipo isso.',
        color: '#ff7b7b'
    },
    {
        name: 'Flor daInteligência',
        message: 'Dedicada, aplicada... isso é mais raro do que parece.',
        color: '#9d7bde'
    },
    {
        name: 'Flor da Disposição',
        message: 'Sabe ser divertida quando precisa. afs, até demais.',
        color: '#ff9ecd'
    },
    {
        name: 'Flor da Autenticidade',
        message: 'Teimosa, direta, autêntica. eu curto isso muito.',
        color: '#ff6b9d'
    },
    {
        name: 'Flor da Dedicação',
        message: 'Tu me inspira a ser melhor, não só falar isso não.',
        color: '#b088ff'
    },
    {
        name: 'Flor Especial',
        message: '11 meses e cada um deles valeu demais.',
        color: '#ff758c'
    }
];

let clickedCount = 0;
let audioStarted = false;

// Initialize stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create flower SVG
function createFlowerSVG(color) {
    return `
        <div class=&quot;flower-stem&quot;></div>
        <div class=&quot;flower-leaf left&quot;></div>
        <div class=&quot;flower-leaf right&quot;></div>
        <div class=&quot;flower-head&quot;>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;petal&quot; style=&quot;background: linear-gradient(180deg, ${color}b3 0%, ${color}80 100%);&quot;></div>
            <div class=&quot;flower-center&quot;></div>
        </div>
    `;
}

// Create all flowers
function createFlowers() {
    const container = document.getElementById('flowersContainer');
    container.innerHTML = '';
    
    flowersData.forEach((flower, index) => {
        const flowerEl = document.createElement('div');
        flowerEl.className = 'flower';
        flowerEl.style.setProperty('--delay', `${index * 0.3}s`);
        flowerEl.innerHTML = createFlowerSVG(flower.color);
        
        const nameEl = document.createElement('div');
        nameEl.className = 'flower-name';
        nameEl.textContent = flower.name;
        flowerEl.appendChild(nameEl);
        
        flowerEl.addEventListener('click', () => revealMessage(index));
        
        container.appendChild(flowerEl);
        
        // Staggered fade in animation
        setTimeout(() => {
            flowerEl.classList.add('visible');
        }, 100 + index * 300);
    });
}

// Reveal message modal
function revealMessage(index) {
    const flower = flowersData[index];
    const flowerEl = document.querySelectorAll('.flower')[index];
    
    if (flowerEl.classList.contains('clicked')) {
        // Already clicked, just show modal again
        showModal(flower);
        return;
    }
    
    flowerEl.classList.add('clicked');
    clickedCount++;
    updateProgress();
    
    showModal(flower);
    
    if (clickedCount === flowersData.length) {
        setTimeout(() => {
            document.getElementById('finalMessage').style.display = 'block';
        }, 800);
    }
}

// Show modal with message
function showModal(flower) {
    // Remove existing modal
    const existingModal = document.querySelector('.message-modal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.className = 'message-modal show';
    modal.innerHTML = `
        <div class=&quot;message-content&quot;>
            <div class=&quot;message-flower-name&quot;>${flower.name}</div>
            <p class=&quot;message-text&quot;>&quot;${flower.message}&quot;</p>
            <button class=&quot;btn-close&quot; onclick=&quot;closeModal(this)&quot;>okey ✨</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal.querySelector('.btn-close'));
    });
}

// Close modal
function closeModal(btn) {
    const modal = btn.closest('.message-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.remove(), 300);
}

// Update progress counter
function updateProgress() {
    document.getElementById('clickedCount').textContent = clickedCount;
    
    // Add filled dots
    let progressDots = document.querySelector('.progress-dots');
    if (!progressDots) {
        progressDots = document.createElement('div');
        progressDots.className = 'progress-dots';
        document.querySelector('.garden-header').appendChild(progressDots);
        
        for (let i = 0; i < flowersData.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            progressDots.appendChild(dot);
        }
    }
    
    const dots = progressDots.querySelectorAll('.progress-dot');
    dots.forEach((dot, i) => {
        if (i < clickedCount) dot.classList.add('filled');
    });
}

// Start music
function startMusic() {
    const audio = document.getElementById('bgMusic');
    const musicHint = document.getElementById('musicHint');
    
    // Try autoplay
    audio.volume = 0.3;
    audio.play().then(() => {
        audioStarted = true;
        musicHint.style.display = 'block';
    }).catch(() => {
        // Autoplay blocked, user needs interaction
        console.log('Autoplay blocked, music will start on interaction');
    });
}

// Enter garden
function enterGarden() {
    const intro = document.getElementById('intro');
    const garden = document.getElementById('garden');
    
    intro.style.opacity = '0';
    intro.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        intro.style.display = 'none';
        garden.style.display = 'block';
        garden.style.animation = 'fadeIn 1s ease-out';
        
        createFlowers();
        startMusic();
    }, 500);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    
    document.getElementById('btnEnter').addEventListener('click', enterGarden);
    
    // Allow music on any interaction if autoplay failed
    document.addEventListener('click', () => {
        if (!audioStarted) {
            const audio = document.getElementById('bgMusic');
            audio.play().then(() => {
                audioStarted = true;
                document.getElementById('musicHint').style.display = 'block';
            }).catch(() => {});
        }
    }, { once: true });
});
const projects = [

];

const projectsContainer = document.getElementById("projects");

projects.forEach((proj) => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
        <div class="project-header">
          <div class="project-title">${proj.title}</div>
          <div class="project-year">${proj.year}</div>
        </div>
        <div class="project-desc">${proj.desc}</div>
      `;
    projectsContainer.appendChild(div);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project').forEach(project => {
    observer.observe(project);
});

const sinhalChars = ['ඉ', 'ක', 'ග', 'ඞ', 'ඟ', 'ච', 'ඡ', 'ජ', 'ඣ', 'ණ', 'ඩ', 'ඪ', 'ඬ', 'ත', 'ථ', 'ද', 'ප', 'ඵ', 'බ', 'ඹ', 'ම', 'ය', 'ර', 'ල', 'ව', 'ශ', 'ෂ', 'ස', 'ෆ'];

const matrixBg = document.getElementById('matrix-bg');
const windowWidth = window.innerWidth;
const charWidth = 20;
const charCount = Math.ceil(windowWidth / charWidth);

function createMatrixRain() {
    for (let i = 0; i < charCount; i++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';

        const randomChar = sinhalChars[Math.floor(Math.random() * sinhalChars.length)];
        const randomDelay = Math.random() * 2;
        const randomDuration = 8 + Math.random() * 6;
        const randomStart = Math.random() * windowWidth;

        char.textContent = randomChar;
        char.style.left = randomStart + 'px';
        char.style.top = '-50px';
        char.style.animationDuration = randomDuration + 's';
        char.style.animationDelay = randomDelay + 's';

        matrixBg.appendChild(char);

        setTimeout(() => {
            char.remove();
        }, (randomDelay + randomDuration) * 1000);
    }
}

createMatrixRain();
setInterval(createMatrixRain, 2000);

window.addEventListener('resize', () => {
    document.querySelectorAll('.matrix-char').forEach(char => char.remove());
    createMatrixRain();
});
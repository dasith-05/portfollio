const members = [
    {
        name: "Lead Dev",
        role: "Full Stack Engineer",
        bio: "Specialist in React and Tailwind CSS integration.",
        skills: ["React", "JS", "Node"]
    },
    {
        name: "Hardware Lead",
        role: "Embedded Systems",
        bio: "Expert in C, Python, and microcontroller automation.",
        skills: ["C", "Arduino", "Python"]
    }
];

function loadTeam() {
    const container = document.getElementById('team-container');
    
    members.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${m.name}</h3>
            <p style="color: #3b82f6; font-weight: 600;">${m.role}</p>
            <p style="color: #94a3b8; margin: 1rem 0;">${m.bio}</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${m.skills.map(s => `<small style="background:#334155; padding: 2px 8px; border-radius: 4px;">${s}</small>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadTeam);
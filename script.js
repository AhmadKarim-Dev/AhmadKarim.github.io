// Example dynamic project data
const projects = [
    {
        title: "Gravity Dash (UE5)",
        description: "Implemented advanced player dash and gravity mechanics using C++ and GAS.",
        image: "assets/images/gravity_dash.png",
        link: "https://github.com/yourusername/gravity-dash"
    },
    {
        title: "AI Combat System",
        description: "Designed an enemy AI system with different attack patterns and difficulty scaling.",
        image: "assets/images/ai_combat.png",
        link: "https://github.com/yourusername/ai-combat"
    },
    {
        title: "Projectile System",
        description: "Created a predictive projectile system with curve adjustment based on player input.",
        image: "assets/images/projectile.png",
        link: "https://github.com/yourusername/projectile-system"
    }
];

// Function to generate project cards dynamically
const container = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
    `;

    container.appendChild(card);
});

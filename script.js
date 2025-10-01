
const pages = {
    home: "index.html",
    about: "about.html",
    skills: "skills.html",
    blog: "blog.html",
    projects: "projects.html",
    contact: "contacts.html"
};

// Attach click listeners to all buttons
Object.keys(pages).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = pages[id];
        });
    }
});




const pages = {
    os: "./Courses/os.html",
    dbms: "./Courses/dbms.html",
    ca: "./Courses/ca.html",
    cn: "./Courses/cn.html",
    oops: "./Courses/oops.html",
    cd: "./Courses/compiler.html",
    dsa:"./Courses/dsa.html"
};

// Add click listeners to all buttons dynamically
document.querySelectorAll('.header button').forEach(button => {
    button.addEventListener('click', () => {
        const courseId = button.id;
        if (pages[courseId]) {
            window.location.href = pages[courseId]; // Navigate to course page
        } else {
            alert("Course page not found!");
        }
    });
});

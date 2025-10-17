// const os=document.getElementById("os");
// os.addEventListener("click",()=>{
//     window.location.href="OS.html";
// });
const pages = {
    os: "./Courses/os.html",
    dbms: "./Courses/dbms.html",
    ca: "./Courses/ca.html",
    cn: "./Courses/cn.html",
    oops: "./Courses/oops.html",
    cd: "./Courses/compiler.html",
    dsa:"./Courses/dsa.html"
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
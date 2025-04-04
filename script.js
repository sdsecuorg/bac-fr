    function downloadHeader() {
        let headerContent = document.querySelector('header').innerText;
        let blob = new Blob([headerContent], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "header_content.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

document.getElementById("openBtn").addEventListener("click", () => {
    document.getElementById("sidebar").style.left = "0";
});

document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("sidebar").style.left = "-250px";
});


function printHeader() {
    window.print();
}

window.onload = function() {
    let savedTheme = localStorage.getItem('theme'); 
    if (savedTheme) {
        document.body.className = savedTheme; 
    }
}

function toggleTheme() {
    let body = document.body;
    let currentTheme = body.className;

    if (currentTheme === "dark-theme") {
        body.className = "blue-theme";
        document.getElementById("theme-toggle").textContent = "🌙 Changer de thème";
        localStorage.setItem('theme', 'blue-theme'); 
    } else {
        body.className = "dark-theme";
        document.getElementById("theme-toggle").textContent = "🌙 Changer de thème";
        localStorage.setItem('theme', 'dark-theme'); 
    }
}


document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});

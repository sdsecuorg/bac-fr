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

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");
}



document.getElementById('menu-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');  // Ajouter ou enlever la classe 'open'
});

document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
      document.getElementById("navbar").classList.remove("open");
    }
  });
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
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
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
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
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
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


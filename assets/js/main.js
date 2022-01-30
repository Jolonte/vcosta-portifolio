// Dark mode
let toggle = document.querySelector('#toggle');

function blackTheme() {
    let classe = toggle.classList.contains('ri-sun-fill');

    let body = document.querySelector('body');
    let nav = document.querySelector('nav');
    let li = document.querySelectorAll('li')
    let h1 = document.querySelectorAll('h1');
    let white = document.querySelectorAll('.white');
    let h3 = document.querySelectorAll('h3');
    let p = document.querySelectorAll('p');
    let i = document.querySelectorAll('i');
    let modal = document.querySelector('.modal');
    let arrowTop = document.querySelector('#arrowTop');

    let prev = document.querySelector('#prev-button');
    let next = document.querySelector('#next-button');
    let test = document.querySelector('.test');
    let video = document.querySelector('.video');
    let repo = document.querySelector('.repo');
    let position = document.querySelectorAll('.ri-checkbox-blank-circle-fill');

    if(classe === true) {
        toggle.classList.remove('ri-sun-fill');
        toggle.classList.add('ri-moon-fill');
        toggle.style.color = 'white';
        body.style.transition = "all 0.5s";
        body.style.backgroundColor = '#191919';
        nav.style.backgroundColor = '#191919';
        for(index = 0; index < li.length; index++) {
            li[index].style.color = 'white';
        };
        for(index = 0; index < p.length; index++) {
            p[index].style.color = 'white';
        };
        for(index = 0; index < h1.length; index++) {
            h1[index].style.color = 'white';
        };
        for(index = 0; index < h3.length; index++) {
            h3[index].style.color = 'white';
        };
        for(index = 7; index < i.length; index++) {
            i[index].style.color = 'white';
        };
        modal.style.backgroundColor = '#191919';
        arrowTop.style.color = 'var(--cornflower-blue)';
        prev.style.color = 'var(--cornflower-blue)';
        next.style.color = 'var(--cornflower-blue)';
        test.style.color = 'var(--cornflower-blue)';
        video.style.color = 'var(--cornflower-blue)';
        repo.style.color = 'var(--cornflower-blue)';
        for(index = 0; index < position.length; index++) {
            position[index].style.color = 'var(--cornflower-blue)';
        };
    
        localStorage.setItem("theme", "dark");
    } 
    else {
        toggle.classList.remove('ri-moon-fill');
        toggle.classList.add('ri-sun-fill');
        toggle.style.color = 'black';
        body.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'white';
        for(index = 0; index < li.length; index++) {
            li[index].style.color = 'black';
        };
        for(index = 0; index < p.length; index++) {
            p[index].style.color = 'black';
        };

        p1.style.color = '#6c757d';
        p2.style.color = '#6c757d';
        p3.style.color = '#6c757d';
        p4.style.color = '#6c757d';
        p5.style.color = '#6c757d';
        p6.style.color = '#6c757d';
        p7.style.color = '#6c757d';
        p8.style.color = '#6c757d';

        let prev = document.querySelector('#prev-button');
        let next = document.querySelector('#next-button');
        let test = document.querySelector('.test');
        let video = document.querySelector('.video');
        let repo = document.querySelector('.repo');

        let iwhite = document.querySelectorAll('.iwhite');
        let ipurple = document.querySelectorAll('.ipurple');

        for(index = 0; index < h1.length; index++) {
            h1[index].style.color = 'black';
        };
        for(index = 0; index < white.length; index++) {
            white[index].style.color = 'white';
        };
        for(index = 0; index < h3.length; index++) {
            h3[index].style.color = 'black';
        };
        for(index = 7; index < i.length; index++) {
            i[index].style.color = 'black';
        };
        for(index = 0; index < iwhite.length; index++) {
            iwhite[index].style.color = 'white';
        };
        for(index = 0; index < ipurple.length; index++) {
            ipurple[index].style.color = 'var(--mauve)';
        };
        modal.style.backgroundColor = 'white';
        arrowTop.style.color = 'var(--cornflower-blue)';
        prev.style.color = 'var(--cornflower-blue)';
        next.style.color = 'var(--cornflower-blue)';
        test.style.color = 'var(--cornflower-blue)';
        video.style.color = 'var(--cornflower-blue)';
        repo.style.color = 'var(--cornflower-blue)';
        for(index = 0; index < position.length; index++) {
            position[index].style.color = 'var(--cornflower-blue)';
        };

        localStorage.setItem("theme", "white");
    };
};

toggle.addEventListener('click', function() {
    blackTheme();
});

function checkTheme() {
    const lsTheme = localStorage.getItem('theme');
    if(lsTheme !== null && lsTheme === 'dark') {
        blackTheme();
    };
};

window.onload = checkTheme();

// Mensagens aleatórias
let msg = document.querySelector('#msg');
setInterval(function() {
    const rndInt = Math.floor(Math.random() * 5) + 1
    if(rndInt === 1) {
        msg.innerText = 'Full stack developer 🖥️';
    } else if(rndInt === 2) {
        msg.innerText = 'All of me for you 😀';
    } else if(rndInt === 3) {
        msg.innerText = 'Front end 🎨';
    } else if(rndInt === 4) {
        msg.innerText = 'Back end 💪';
    } else if(rndInt === 5) {
        msg.innerText = 'Designer ❤️';
    };
}, 1500);

// Scroll events
function scrollAnimation() {
    let descer = window.scrollY;
    let nav = document.querySelector('nav');
    let btn = document.querySelector('#top');

    if(descer >= 100) {
        nav.style.transition = 'all 0.2s';
        nav.style.borderBottom = '0.1rem solid #e5e5e5';
    } 
    else if (descer < 100) {
        nav.style.borderBottom = '0.1rem solid transparent';
    }

    if(descer >= 587) {
        btn.style.display = 'flex';
        btn.style.transition = 'display 2s, opacity 0.5s linear';
    } else if(descer < 587) {
        btn.style.display = 'none';
    }
}

window.onscroll = function() {
    scrollAnimation();
};

// Modal
let item = document.querySelectorAll('.item');
let modal = document.querySelector('.modal-container');

let titleModal = document.querySelector('#title-modal');
let textModal = document.querySelector('#text-modal');

for(i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {
        id = parseInt(this.id);
        let title = item[id].querySelector('p').innerText;
        modal.style.display = 'flex';
        titleModal.innerText = title;

        if(titleModal.innerText === 'HTML5') {
            textModal.innerText = `HTML5 is a markup language for the World Wide Web and is a key Internet technology, originally proposed by Opera Software. It is the fifth version of the HTML language. My goal is to make a semantic HTML code making your site appear more and more in searches.`;
        } else if(titleModal.innerText === 'CSS3') {
            textModal.innerText = `CSS3 is the third newest version of the famous Cascading Style Sheets, through which you define styles for a web project. With transition effects, image, background image and others, you can create unique styles for your web projects, changing different design aspects in the page layout. I make responsive websites that adapt to the user's layout, whether desktop or mobile.`
        } else if(titleModal.innerText === 'JavaScript') {
            textModal.innerText = `JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language. Along with HTML and CSS, JavaScript is one of the three main technologies of the World Wide Web.`
        } else if(titleModal.innerText === 'PHP') {
            textModal.innerText = `PHP is a free interpreted language, originally used only for the development of applications present and acting on the server side, capable of generating dynamic content on the World Wide Web.`
        } else if(titleModal.innerText === 'MySQL') {
            textModal.innerText = `MySQL is a database management system, which uses the SQL language as an interface. It is currently one of Oracle Corporation's most popular database management systems, with over 10 million installations worldwide.`
        }
        else if(titleModal.innerText === 'MySQL') {
            textModal.innerText = `MySQL is a database management system, which uses the SQL language as an interface. It is currently one of Oracle Corporation's most popular database management systems, with over 10 million installations worldwide.`
        }
        else if(titleModal.innerText === 'Kodular') {
            textModal.innerText = `Kodular is a free platform that offers tools and support for the user to make the application creation process easier! Starting from logical blocks of programming, this tool allows the creation of apps without the need for in-depth knowledge of programming.`
        }
        else if(titleModal.innerText === 'UI/UX design') {
            textModal.innerText = `UX Design is the process by which a professional or a team identifies a user pain or need. UI Design, on the other hand, is responsible for developing the interface, which can be visual or not, for the site, application or system; and the way people interact with it.`
        }
        else if(titleModal.innerText === 'Web development') {
            textModal.innerText = `Web development is the area of technology focused on building websites, applications, software, databases and any other tools that, in a way, build the internet as we know it today.`
        }
        else if(titleModal.innerText === 'Desktop programs') {
            textModal.innerText = `Desktop development focuses on creating solutions that speed up, facilitate, as well as help the lives of those who use the program for certain purposes.`
        }
        else if(titleModal.innerText === 'Mobile applications') {
            textModal.innerText = `Development of applications and systems for mobile devices, sometimes used only as mobile development, is all activity and processes around the development of software for mobile devices.`
        }
    });
};

let btn = document.querySelector('#close');
btn.onclick = function() {
    modal.style.display = 'none';
};

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		modal.style.display = 'none';
	}
});

// Image carousel
let imgs = [
    {
        id: 0,
        img: "url(/assets/img/1.svg)",
        test: "https://vinicius-costa-links.vercel.app/",
        video: "",
        repo: "",
    },
    {
        id: 1,
        img: "url(/assets/img/2.svg)",
        test: "https://eighthly.vercel.app/",
        video: "https://youtu.be/0HItcz1juNA",
        repo: "https://github.com/Jolonte/EighthLy",
    },
    {
        id: 2,
        img: "url(/assets/img/3.svg)",
        test: "https://prova-cienciashumanas.herokuapp.com/",
        video: "https://youtu.be/LpVQEKqS0vc",
        repo: "https://github.com/Jolonte/form-ciencias-humanas",
    },
    {
        id: 3,
        img: "url(/assets/img/4.svg)",
        test: "https://github.com/Jolonte/MathGame/releases/tag/v1.0",
        video: "",
        repo: "https://github.com/Jolonte/MathGame",
    },
    {
        id: 4,
        img: "url(/assets/img/5.svg)",
        test: "https://goodreams.netlify.app/",
        video: "",
        repo: "https://github.com/Jolonte/landing-page-goodreams",
    },
    {
        id: 5,
        img: "url(/assets/img/6.svg)",
        test: "https://github.com/Jolonte/WikiCraft/releases/tag/v1.0",
        video: "",
        repo: "https://github.com/Jolonte/WikiCraft",
    },
    {
        id: 6,
        img: "url(/assets/img/7.svg)",
        test: "https://github.com/Jolonte/bmi-calculator/releases/tag/bmi",
        video: "",
        repo: "https://github.com/Jolonte/bmi-calculator",
    },
];

for(index = 0; index < imgs.length; index++) {
    let position = document.createElement('i');
    position.classList.add('ri-checkbox-blank-circle-fill', 'ri')
    let paiPosition = document.querySelector('.position');
    paiPosition.appendChild(position);
}

let photo = document.querySelector('.photo');
let btnNext = document.querySelector('#next-button');
let btnPrev = document.querySelector('#prev-button');
let bolinha = document.querySelectorAll('.ri-checkbox-blank-circle-fill');
let n = 0;

createLink = function(link, link2, link3) {
    let pai = document.querySelector('.links-prt');
    if(pai.children.length === 0) {
        for(i = 0; i < 3; i++) {
            let a = document.createElement('a');
            pai.appendChild(a);
            a.classList.add('link-item');
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noreferrer noopener');
        };
    
        for(index = 0; index < pai.querySelectorAll('a').length; index++) {
            let i = document.createElement('i');
            pai.querySelectorAll('a')[index].appendChild(i);
        };
    
        let test = pai.querySelectorAll('a')[0];
        test.setAttribute('href', link);
        let itest = test.querySelector('i');
        itest.classList.add('ri-test-tube-fill', 'ri-2x');
    
        let video = pai.querySelectorAll('a')[1];
        video.setAttribute('href', link2);
        let ivideo = video.querySelector('i');
        ivideo.classList.add('ri-video-fill', 'ri-2x');
    
        let repo = pai.querySelectorAll('a')[2];
        repo.setAttribute('href', link3);
        let irepo = repo.querySelector('i');
        irepo.classList.add('ri-github-fill', 'ri-2x');
    }
};

function removeLink() {
    let pai = document.querySelector('.links-prt');
    while (pai.firstChild) {
        pai.removeChild(pai.firstChild);
    }
}

btnNext.addEventListener('click', function() {
    n++
    console.log(n);
    photo.style.transition = "all 0.5s";
    if(n === 0) {
        photo.style.backgroundImage = imgs[0].img;
        removeLink();
        createLink(imgs[0].test, imgs[0].video, imgs[0].repo);
        bolinha[6].style.color = 'var(--cornflower-blue)';
        bolinha[0].style.color = 'var(--mauve)';
    }
    else if(n === 1) {
        photo.style.backgroundImage = imgs[1].img;
        removeLink();
        createLink(imgs[1].test, imgs[1].video, imgs[1].repo);
        bolinha[0].style.color = 'var(--cornflower-blue)'
        bolinha[1].style.color = 'var(--mauve)'
    }
    else if(n === 2) {
        photo.style.backgroundImage = imgs[2].img;
        removeLink();
        createLink(imgs[2].test, imgs[2].video, imgs[2].repo);
        bolinha[1].style.color = 'var(--cornflower-blue)';
        bolinha[2].style.color = 'var(--mauve)';
    }
    else if(n === 3) {
        photo.style.backgroundImage = imgs[3].img;
        removeLink();
        createLink(imgs[3].test, imgs[3].video, imgs[3].repo);
        bolinha[2].style.color = 'var(--cornflower-blue)';
        bolinha[3].style.color = 'var(--mauve)';
    }
    else if(n === 4) {
        photo.style.backgroundImage = imgs[4].img;
        removeLink();
        createLink(imgs[4].test, imgs[4].video, imgs[4].repo);
        bolinha[3].style.color = 'var(--cornflower-blue)';
        bolinha[4].style.color = 'var(--mauve)';
    }
    else if(n === 5) {
        photo.style.backgroundImage = imgs[5].img;
        removeLink();
        createLink(imgs[5].test, imgs[5].video, imgs[5].repo);
        bolinha[4].style.color = 'var(--cornflower-blue)';
        bolinha[5].style.color = 'var(--mauve)';
    }
    else if(n === 6) {
        photo.style.backgroundImage = imgs[6].img;
        removeLink();
        createLink(imgs[6].test, imgs[6].video, imgs[6].repo);
        bolinha[5].style.color = 'var(--cornflower-blue)';
        bolinha[6].style.color = 'var(--mauve)';
    }
    else {
        n = -1; 
    }
});

btnPrev.addEventListener('click', function() {
    n--
    console.log(n);
    if(n === 6) {
        photo.style.backgroundImage = imgs[6].img;
        removeLink();
        createLink(imgs[6].test, imgs[6].video, imgs[6].repo);
    }
    else if(n === 5) {
        photo.style.backgroundImage = imgs[5].img;
        removeLink();
        createLink(imgs[5].test, imgs[5].video, imgs[5].repo);
        if(bolinha[6].style.color === 'var(--mauve)') {
            bolinha[5].style.color = 'var(--mauve)';
            bolinha[6].style.color = 'var(--cornflower-blue)';
        }
    }
    else if(n === 4) {
        photo.style.backgroundImage = imgs[4].img;
        removeLink();
        createLink(imgs[4].test, imgs[4].video, imgs[4].repo);
        if(bolinha[5].style.color === 'var(--mauve)') {
            bolinha[4].style.color = 'var(--mauve)';
            bolinha[5].style.color = 'var(--cornflower-blue)';
        }
    }
    else if(n === 3) {
        photo.style.backgroundImage = imgs[3].img;
        removeLink();
        createLink(imgs[3].test, imgs[3].video, imgs[3].repo);
        if(bolinha[4].style.color === 'var(--mauve)') {
            bolinha[3].style.color = 'var(--mauve)';
            bolinha[4].style.color = 'var(--cornflower-blue)';
        }
    }
    else if(n === 2) {
        photo.style.backgroundImage = imgs[2].img;
        removeLink();
        createLink(imgs[2].test, imgs[2].video, imgs[2].repo);
        if(bolinha[3].style.color === 'var(--mauve)') {
            bolinha[2].style.color = 'var(--mauve)';
            bolinha[3].style.color = 'var(--cornflower-blue)';
        }
    }
    else if(n === 1) {
        photo.style.backgroundImage = imgs[1].img;
        removeLink();
        createLink(imgs[1].test, imgs[1].video, imgs[1].repo);
        if(bolinha[2].style.color === 'var(--mauve)') {
            bolinha[1].style.color = 'var(--mauve)';
            bolinha[2].style.color = 'var(--cornflower-blue)';
        }
    }
    else if(n === 0) {
        photo.style.backgroundImage = imgs[0].img;
        removeLink();
        createLink(imgs[0].test, imgs[0].video, imgs[0].repo);
        if(bolinha[1].style.color === 'var(--mauve)') {
            bolinha[0].style.color = 'var(--mauve)';
            bolinha[1].style.color = 'var(--cornflower-blue)';
        }
    } else {
        n = 7;
    }
});
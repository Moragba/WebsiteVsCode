const codeLines = [
  "// Mein Porfolio",
  "public class Portfolio {",
  "    public static void main (String[] args) {",
  "        Developer hero = new Developer(\"Andreas Fischer\", 37, \"Software-Entwickler\");",
  "        hero.showSkills();",
  "        hero.showHobbies();",
  "    }",
  "}",
  "",
  "class Developer {",
  "    String name;",
  "    int age;",
  "    String role;",
  "",
  "    Developer(String name, int age, String role) {",
  "        this.name = name;",
  "        this.age = age;",
  "        this.role = role;",
  "    }",
  "",
  "    void showSkills() {",
  "        System.out.println(\"Skills: Java, JavaScript, CSS, HTML\");",
  "    }",
  "",
  "    void showHobbies() {",
  "        System.out.println(\"Hobbies: Gaming, Musik, Coding\");",
  "    }",
  "}"
];



function type(c, id){
    let i = 0;
    let line = 0;

    function typeLine() {
    if(line < codeLines.length){
        const container = document.getElementById(id);
        let currentLine = c[line];
        
        function typeChar() {
        if(i < currentLine.length){
            let char = currentLine[i];

            // einfache Syntax-Hervorhebung
            if(char === "/" && currentLine[i+1] === "/"){
            container.innerHTML += '<span class="comment">' + currentLine.slice(i) + '</span>';
            i = currentLine.length;
            } else if(char === '"'){
            let end = currentLine.indexOf('"', i+1);
            container.innerHTML += '<span class="string">' + currentLine.slice(i, end+1) + '</span>';
            i = end + 1;
            } else if(/\b(public|static|void)\b/.test(currentLine.slice(i).split(/\s/)[0])){
            let word = currentLine.slice(i).split(/\s/)[0];
            container.innerHTML += '<span class="keyword">' + word + '</span>';
            i += word.length;
            }else if(/\b(String|int|class)\b/.test(currentLine.slice(i).split(/\s/)[0])){
            let word = currentLine.slice(i).split(/\s/)[0];
            container.innerHTML += '<span class="object">' + word + '</span>';
            i += word.length;
            }else if(/\b(new)\b/.test(currentLine.slice(i).split(/\s/)[0])){
            let word = currentLine.slice(i).split(/\s/)[0];
            container.innerHTML += '<span class="new">' + word + '</span>';
            i += word.length;
            } else {
            container.innerHTML += char;
            i++;
            }
            setTimeout(typeChar, 20);
        } else {
            container.innerHTML += "\n";
            line++;
            i = 0;
            setTimeout(typeLine, 50);
        }
        }
        typeChar();
    }
    }
    typeLine();
}

window.addEventListener('load', () => {
  const imgDiv = document.querySelector('.pixel-image');
  setTimeout(() => {
    imgDiv.classList.add('sharp'); // startet Animation
    divCodeText(codeLines, "header_code");
  }, 1500);
});

window.addEventListener('load', () => {
  const imgDiv = document.querySelector('.pixel-image');
  setTimeout(() => {
    imgDiv.classList.add('sharp'); // startet Animation
    divCodeText(codeLines, "about_code");
  }, 1500);
});

window.addEventListener('load', () => {
  const imgDiv = document.querySelector('.pixel-image');
  setTimeout(() => {
    imgDiv.classList.add('sharp'); // startet Animation
    divCodeText(codeLines, "skills_s_code");
  }, 1500);
});

window.addEventListener('load', () => {
  const imgDiv = document.querySelector('.pixel-image');
  setTimeout(() => {
    imgDiv.classList.add('sharp'); // startet Animation
    divCodeText(codeLines, "skills_h_code");
  }, 1500);
});

window.addEventListener('load', () => {
  const imgDiv = document.querySelector('.pixel-image');
  setTimeout(() => {
    imgDiv.classList.add('sharp'); // startet Animation
    divCodeText(codeLines, "modul_code");
  }, 1500);
});



function divCodeText(cl, id){
    const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      type(cl, id);       // Div sichtbar → Funktion aufrufen
      obs.unobserve(entry.target); // optional: nur einmal
    }
  });
});
observer.observe(document.getElementById(id));
}




const header_codeLines = [
  "",
  "// Mein Portfolio - Andreas Fischer",
  "public class Portfolio {",
  "\tpublic static void main(String[] args) {",
  "\t\tDeveloper hero = new Developer(\"Andreas Fischer\", \"Zertifizierter Softwareentwickler\");",
  "\t\thero.showDegree(\"Professional Software Engineering (WBH)\");",
  "\t\thero.aboutMe();",
  "\t\thero.showSkills();",
  "\t\thero.showCurrentProjects();",
  "\t\thero.add(new Contact());",
  "\t}",
  "}",
  "",
  "class Developer {",
  "\tString name;",
  "\tString role;",
  "",
  "\tDeveloper(String name, String role) {",
  "\t\tthis.name = name;",
  "\t\tthis.role = role;",
  "\t}",
  "}"
];

const about_codeLines = [
  "",
  "void portfolioIntro() {",
  "\tSystem.out.println(\"Hallo! Ich bin Andreas Fischer.\");",
  "",
  "\tSystem.out.println(\"Ich habe meinen Zertifikatsstudiengang Professional Software Engineering\");",
  "\tSystem.out.println(\"an der Wilhelm Büchner Hochschule auf Bachelorniveau mit 'sehr gut' abgeschlossen.\");",
  "",
  "\tSystem.out.println(\"Mein Studium (46 VP / ECTS) umfasste fundierte Ausbildung in Softwarearchitekturen,\");",
  "\tSystem.out.println(\"objektorientierter Programmierung, modernen Datenbanken und qualitätsgesicherter Entwicklung.\");",
  "",
  "\tSystem.out.println(\"Aktuell vertiefe ich meine Praxiskenntnisse in einem Fullstack-Eigenprojekt:\");",
  "\tSystem.out.println(\"  - Backend: REST-API mit Java, Spring Boot & Hibernate\");",
  "\tSystem.out.println(\"  - Frontend: Dynamische UI mit React\");",
  "\tSystem.out.println(\"  - Database & DevOps: MySQL & Containerisierung mit Docker\");",
  "",
  "\tSystem.out.println(\"Ich suche eine Position als Softwareentwickler, um mein theoretisches Know-how\");",
  "\tSystem.out.println(\"und meine praktische Umsetzungsstärke gewinnbringend in ein Entwicklerteam einzubringen.\");",
  "}"
];

const cert_codeLines = [
  "",
  "void showCertificates() {",
  "\tSystem.out.println(\"=== Verifizierte WBH-Zertifikate ===\");",
  "\tSystem.out.println(\"  - Vorderseite: Professional Software Engineering (sehr gut)\");",
  "\tSystem.out.println(\"  - Rückseite: Modulnoten & 46 VP / ECTS\");",
  "\tSystem.out.println(\"Fahre über die Vorschaubilder, um sie zu vergrößern, oder klicke darauf zum Öffnen der PDF.\");",
  "}"
];

const skills_h_codeLines = [
  "",
  "void hardskills() {",
  "\tSystem.out.println(\"=== Hardskills & Tech Stack ===\");\n",

  "\tSystem.out.println(\"Programmiersprachen:\");",
  "\t\tSystem.out.println(\"  - Java (Schwerpunkt / Fokus)\");",
  "\t\tSystem.out.println(\"  - C#, C / C++\");",
  "\t\tSystem.out.println(\"  - Python, PHP\");",
  "\t\tSystem.out.println(\"  - JavaScript, HTML5, CSS3\");\n",

  "\tSystem.out.println(\"Frameworks & Webentwicklung:\");",
  "\t\tSystem.out.println(\"  - Spring Boot, Hibernate\");",
  "\t\tSystem.out.println(\"  - React\");",
  "\t\tSystem.out.println(\"  - Serverseitige & Clientseitige Web-Applikationen\");\n",

  "\tSystem.out.println(\"Datenbanken & DevOps:\");",
  "\t\tSystem.out.println(\"  - Relationale Datenbanken / MySQL / SQL (Note: 1,1)\");",
  "\t\tSystem.out.println(\"  - Docker (Containerisierung)\");",
  "\t\tSystem.out.println(\"  - Git / Versionskontrolle\");",
  "\t\tSystem.out.println(\"  - IDEs: VS Code, Visual Studio\");\n",

  "\tSystem.out.println(\"Konzepte & Architekturen:\");",
  "\t\tSystem.out.println(\"  - Objektorientierte Programmierung (OOP)\");",
  "\t\tSystem.out.println(\"  - Softwarearchitektur & Clean Code (Note: 1,3)\");",
  "\t\tSystem.out.println(\"  - UML & modellbasierte Entwicklung (Note: 1,0)\");",
  "\t\tSystem.out.println(\"  - Datenstrukturen und Algorithmen\");",
  "\t\tSystem.out.println(\"  - Agiles Arbeiten (Scrum, Kanban)\");",
  "}"
];

const skills_s_codeLines = [
  "",
  "void softskills() {",
  "\tSystem.out.println(\"=== Softskills & Arbeitsweise ===\");\n",

  "\tSystem.out.println(\"Analytisches Denken:\");",
  "\t\tSystem.out.println(\"  - Komplexe Anforderungen durchdringen und in strukturierte, saubere Architekturen überführen.\");\n",

  "\tSystem.out.println(\"Hohe Lernbereitschaft & Eigeninitiative:\");",
  "\t\tSystem.out.println(\"  - Schnelles Einarbeiten in neue Technologien & Frameworks (z. B. Spring Boot, React, Docker).\");\n",

  "\tSystem.out.println(\"Eigenverantwortung & Zuverlässigkeit:\");",
  "\t\tSystem.out.println(\"  - Selbstständige Projektplanung und strukturierte Umsetzung.\");\n",

  "\tSystem.out.println(\"Teamfähigkeit & Kommunikationsstärke:\");",
  "\t\tSystem.out.println(\"  - Offenheit für Feedback, agile Zusammenarbeit und Unterstützung im IT-Support.\");",
  "}"
];

const skills_codeLines = [
  "public class Skill {",
  "\tprivate String title;",
  "\tprivate String description;",
  "\tprivate double note;\n",

  "\tpublic Skill(String title, String description, double note) {",
  "\t\tthis.title = title;",
  "\t\tthis.description = description;",
  "\t\tthis.note = note;",
  "\t}",
  "}\n",

  "public class ModuleSkillsData {", 
  "\tList<Skill> skills = new ArrayList<>();\n",

  "\tskills.add(new Skill(\"Projektarbeit\",",
  "\t\t\t     \"Praxisnahe Umsetzung, Dokumentation & Präsentation eines Softwareprojekts.\",",
  "\t\t\t     1.0));\n",

  "\tskills.add(new Skill(\"Multimediale Anwendungen\",",
  "\t\t\t     \"Webkommunikation, client-/serverseitige Websprachen & Frameworks.\",",
  "\t\t\t     1.0));\n",

  "\tskills.add(new Skill(\"Datenbanken\",",
  "\t\t\t     \"Theoretische & technische Grundlagen, SQL, Verteilte DBs & Webanwendungen.\",",
  "\t\t\t     1.1));\n",

  "\tskills.add(new Skill(\"Software Engineering\",",
  "\t\t\t     \"Softwarearchitekturen, Qualitätssicherung, UML & agiles Arbeiten.\",",
  "\t\t\t     1.3));\n",

  "\tskills.add(new Skill(\"Grundlagen der OOP\",",
  "\t\t\t     \"Java I & II, Python, Klassen, Vererbung, Polymorphie.\",",
  "\t\t\t     2.0));\n",

  "\tskills.add(new Skill(\"Grundlagen der Informatik\",",
  "\t\t\t     \"Datenstrukturen, Algorithmen & Komplexitätsanalyse.\",",
  "\t\t\t     2.0));\n",

  "\tskills.add(new Skill(\"Weiterführende Programmierung\",",
  "\t\t\t     \"C & C++, Pointer, Speicherverwaltung, Rekursion & fortgeschrittene OOP.\",",
  "\t\t\t     2.3));\n",

  "\t}",
  "}"
];

const contactLines = [
    "Adresse: \"Waldfrieden\", 16, \"37619 Hehlen\"",
    "Telefon: +49 157 511 68 233",
    "E-Mail: \"mail@andreasfischer-portfolio.de\"",    
];

const consentClosedEvent = new Event("consentClosed");

const observer = new MutationObserver(() => {
  const modal = document.querySelector(".cookie-modal"); 
  if (!modal) {
    console.log("Consent-Dialog ist verschwunden!");
    document.dispatchEvent(consentClosedEvent);
    observer.disconnect(); 
  }
});

observer.observe(document.body, { childList: true, subtree: true });

function type(c, id){
    let i = 0;
    let line = 0;

    function typeLine() {
    if(line < c.length){
        const container = document.getElementById(id);
        let currentLine = c[line];
        
        function typeChar() {
        if(i < currentLine.length){
            let char = currentLine[i];
            
            if(char === "/" && currentLine[i+1] === "/"){
            container.innerHTML += '<span class="comment">' + currentLine.slice(i) + '</span>';
            i = currentLine.length;
            } else if(char === '"'){
            let end = currentLine.indexOf('"', i+1);
            container.innerHTML += '<span class="string">' + currentLine.slice(i, end+1) + '</span>';
            i = end + 1;
            } else if(/\b(public|static|class|void)\b/.test(currentLine.slice(i).split(/\s/)[0])){
            let word = currentLine.slice(i).split(/\s/)[0];
            container.innerHTML += '<span class="keyword">' + word + '</span>';
            i += word.length;
            }else if(/\b(String|int)\b/.test(currentLine.slice(i).split(/\s/)[0])){
            let word = currentLine.slice(i).split(/\s/)[0];
            container.innerHTML += '<span class="object">' + word + '</span>';
            i += word.length;
            }
            else if(/^\d+(\.\d+)?/.test(currentLine.slice(i))){
            let match = currentLine.slice(i).match(/^\d+(\.\d+)?/)[0];
            container.innerHTML += '<span class="numbers">' + match + '</span>';
            i += match.length;
            } else{
            container.innerHTML += char;
            i++;
            }
            setTimeout(typeChar, 1);//std 30






        } else {
            container.innerHTML += "\n";
            line++;
            i = 0;
            setTimeout(typeLine, 25); //std 50
        }
        }
        typeChar();
    }
    }
    typeLine();
}

document.addEventListener('consentClosed', () => {
//window.addEventListener('load', () => {
  const imgDiv = document.querySelector('.pixel-image');
  setTimeout(() => {
    imgDiv.classList.add('sharp'); 
    divCodeText(header_codeLines, "header_code");
    divCodeText(about_codeLines, "about_code");
    divCodeText(cert_codeLines, "cert_code");
    divCodeText(skills_h_codeLines, "skills_h_code");
    divCodeText(skills_s_codeLines, "skills_s_code");
    divCodeText(contactLines, "contact_code");
    divCodeText(skills_codeLines, "modul_code");
  }, 500);
});

function divCodeText(cl, id){
  const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
        type(cl, id);       
        obs.unobserve(entry.target); 
      }
    });
    }, {
    threshold: 0.3
  });
observer.observe(document.getElementById(id));
}

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  lightboxImg.src = imageSrc;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
}




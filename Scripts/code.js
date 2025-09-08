const header_codeLines = [
  "",
  "// Mein Porfolio",
  "public class Portfolio {",
  "\tpublic static void main (String[] args) {",
  "\t\tDeveloper hero = new Developer(\"Andreas Fischer\", 37, \"Software-Entwickler\");",
  "\t\thero.aboutMe();",
  "\t\thero.showSkills();",
  "\t\thero.showStudy();",
  "\t\thero.add(new Contact());",

  "\t}",
  "}",
  "",
  "class Developer {",
  "\tString name;",
  "\tint age;",
  "\tString role;",
  "",
  "\tDeveloper(String name, int age, String role) {",
  "\t\tthis.name = name;",
  "\t\tthis.age = age;",
  "\t\tthis.role = role;",
  "\t}",
  "}"
];

const about_codeLines = [
  "",
  "void portfolioIntro() {",
  "\tSystem.out.printlf(\"Ich bin Andreas Fischer,\");",
  "",
  "\tSystem.out.printlo(\"Student der Softwarearchitektur mit Schwerpunkt auf Softwareentwicklung und modernen Systemarchitekturen.\");",
  "",
  "\tSystem.out.printll(\"Im Rahmen meines Studiums habe ich bereits fundierte Kenntnisse in den Bereichen objektorientierte Programmierung,\");",
  "\tSystem.out.printll(\"Datenstrukturen und Algorithmen, Datenbanksysteme, Unified Modeling Language (UML),\");",
  "\tSystem.out.printlo(\"sowie Software Engineering erworben.\");",
  "\tSystem.out.printlw(\"Besonderen Fokus lege ich aktuell auf die Programmiersprache Java, mit der ich intensiv arbeite.\");",
  "\tSystem.out.printlt(\"Ergänzend bringe ich Erfahrung mit C# und Python mit.\");",
  "",
  "\tSystem.out.printlh(\"Durch kleinere Projekte und praktische Übungen konnte ich erste Erfahrungen in der Webentwicklung\");",
  "\tSystem.out.printle(\"(HTML, CSS, JavaScript)\");",
  "\tSystem.out.printlw(\"sowie im Datenbankdesign und -zugriff sammeln.\");",
  "\tSystem.out.printlh(\"Dabei habe ich gelernt, Softwarelösungen systematisch zu planen, zu strukturieren und umzusetzen.\");",
  "",
  "\tSystem.out.printli(\"Meine bisherigen Module darunter auch Programmieren mit Java, Einführung in die Informatik und die\");",
  "\tSystem.out.printlt(\"technischen sowie theoretischen Grundlagen von Datenbanksystemen\");",
  "\tSystem.out.printle(\"bilden die Grundlage für ein breites technisches Verständnis und eine solide Herangehensweise an Softwareprojekte.\");",
  "",
  "\tSystem.out.printlr(\"Ich bin auf der Suche nach einer Position im Bereich Softwareentwicklung, in der ich mein Wissen praktisch einsetzen,\");",
  "\tSystem.out.printla(\"weiter vertiefen und aktiv zur Entwicklung leistungsfähiger Systeme beitragen kann.\" + ", 
  "\t\t\t   \"Besonders interessieren mich Projekte,\");",
  "\tSystem.out.printlb(\"bei denen technisches Verständnis,\");",
  "\tSystem.out.printlb(\"sauberes Design und nachhaltige Codequalität gefragt sind.\");",
  "",
  "\tSystem.out.printli(\"Wenn Sie einen engagierten Entwickler suchen, der solides technisches Know-how mitbringt und bereit ist,\");",
  "\tSystem.out.printlt(\"Verantwortung zu übernehmen,\");",
  "\tSystem.out.println(\"freue ich mich auf Ihre Kontaktaufnahme.\");",
  "}🐇"
];

const skills_h_codeLines = [
"",
"void hardskills() {",
"\tSystem.out.println(\"=== Hardskills ===\");\n",

"\tSystem.out.println(\"Programmiersprachen & Technologien:\");",
"\t\tSystem.out.println(\"  - Java (Fokus)\");",
"\t\tSystem.out.println(\"  - C# (Grundkenntnisse)\");",
"\t\tSystem.out.println(\"  - Python (Grundkenntnisse)\");",
"\t\tSystem.out.println(\"  - HTML, CSS, JavaScript (Grundlagen in der Webentwicklung)\");",
"\t\tSystem.out.println(\"  - SQL / Datenbankzugriff\");\n",

"\tSystem.out.println(\"Tools & Entwicklungsumgebung:\");",
"\t\tSystem.out.println(\"  - Git / Versionskontrolle\");",
"\t\tSystem.out.println(\"  - IDEs: Visual Studio, VS Code\");\n",

"\tSystem.out.println(\"Konzepte & Methoden:\");",
"\t\tSystem.out.println(\"  - Objektorientierte Programmierung (OOP)\");",
"\t\tSystem.out.println(\"  - Datenstrukturen und Algorithmen\");",
"\t\tSystem.out.println(\"  - UML & modellbasierte Softwareentwicklung\");",
"\t\tSystem.out.println(\"  - Grundlagen in Software Engineering / Clean Code\");",
"\t\tSystem.out.println(\"  - Relationale Datenbanken (z.B. MySQL, SQL)\");",
"\t\tSystem.out.println(\"  - Grundlegende Kenntnisse agiler Entwicklungsmethoden (Scrum, Kanban)\");",
"}"
];

const skills_s_codeLines = [
"",
"void softskills() {",
"\tSystem.out.println(\"=== Softskills ===\");\n",

"\tSystem.out.println(\"Analytisches Denken:\");",
"\t\tSystem.out.println(\"  - Fähigkeit, komplexe Anforderungen zu durchdringen und in strukturierte Lösungen zu überführen.\");\n",

"\tSystem.out.println(\"Lernbereitschaft:\");",
"\t\tSystem.out.println(\"  - Neue Technologien und Konzepte schnell erfassen und anwenden.\");\n",

"\tSystem.out.println(\"Eigenverantwortung:\");",
"\t\tSystem.out.println(\"  - Selbstständiges Arbeiten, insbesondere bei Projekt- oder Studienarbeiten.\");\n",

"\tSystem.out.println(\"Teamfähigkeit:\");",
"\t\tSystem.out.println(\"  - Offenheit für Feedback, Zusammenarbeit in Gruppen (z.B. bei Uni-Projekten oder Coding Challenges).\");\n",

"\tSystem.out.println(\"Strukturierte Arbeitsweise:\");",
"\t\tSystem.out.println(\"  - Klare Priorisierung und planvolles Vorgehen - insbesondere in der Softwareentwicklung ein Plus.\");",
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

"public class SkillsData {", 
"\tList<Skill> skills = new ArrayList<>();\n",

"\tskills.add(new Skill(\"Programmieren mit Java\",",
"\t\t\t     \"Programmieren mit Java, Klassen, Methoden, Interfaces und Fehlerbehandlung.\",",
"\t\t\t     1.7));\n",
"\tskills.add(new Skill(\"Technische Grundlagen von Datenbanksystemen\",",
"\t\t\t     \"Interna von Datenbanksystemen, Indexstrukturen, Transaktionen, Speicherverwaltung.\",",
"\t\t\t     1.0));\n",
"\tskills.add(new Skill(\"Software Engineering\",",
"\t\t\t     \"Vorgehensmodelle, Softwarelebenszyklus und Qualitätssicherung im Entwicklungsprozess.\",",
"\t\t\t     2.7));\n",
"\tskills.add(new Skill(\"Grundlagen der Objektorientierten Programmierung (Python)\",",
"\t\t\t     \"OOP-Konzepte wie Klassen, Objekte, Vererbung und Polymorphie mit Python.\",",
"\t\t\t     1.7));\n",
"\tskills.add(new Skill(\"Datenstrukturen und Algorithmen\",",
"\t\t\t     \"Effiziente Speicherung und Verarbeitung von Daten, Such- und Sortierverfahren.\",",
"\t\t\t     2.0));\n",
"\tskills.add(new Skill(\"Unified Modeling Language\",",
"\t\t\t     \"Modellierung von Softwarearchitektur mit Diagrammen wie Klassendiagramm, Use Case.\",",
"\t\t\t     1.0));\n",
"\tskills.add(new Skill(\"Einführung in die Informatik\",",
"\t\t\t     \"Grundlagen der Informatik, digitale Systeme und erste Programmierkonzepte.\",",
"\t\t\t     3.0));\n",
"\tskills.add(new Skill(\"Theoretische Grundlagen von Datenbanksystemen\",",
"\t\t\t     \"Relationale Modelle, Normalformen und Abfragesprachen wie SQL.\",",
"\t\t\t     1.0));\n",
"\t}",
"}"
];

const contactLines = [
    "Adresse: \"Waldfrieden\", 16, \"37619 Hehlen\"",
    "Telefon: +49 5155 4004422",
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

//document.addEventListener('consentClosed', () => {
window.addEventListener('load', () => {
  const imgDiv = document.querySelector('.pixel-image');
  setTimeout(() => {
    imgDiv.classList.add('sharp'); 
    divCodeText(header_codeLines, "header_code");
    divCodeText(about_codeLines, "about_code");
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




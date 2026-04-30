import { useState, useEffect } from "react";
import img from "../assets/iwww.png";
// ✅ Sous-composant séparé pour le texte animé
function AnimatedText() {
  const texts = [
    "Moustapha Amadou Kallo",
    "Développeur frontend",
    "Créateur d'expériences Web & Mobile 🌐📱",
    "Toujours prêt pour de nouveaux défis",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="animated-text">{texts[index]}</h2>;
}

// ✅ Composant principal propre
export  default function Home() {
  return (
   <>

    <section className="hero">
      <div className="hero-content">
        <h1>Bonjour !</h1>
        <h2>Bienvenue sur mon portfolio</h2>

        <p>
          Je m'appelle <span>Moustapha Amadou Kallo</span>. Passionné par le
          développement web et les technologies modernes, je conçois des
          interfaces interactives, dynamiques et efficaces.
        </p>

        <p>
          Parcourez mes projets, découvrez mes compétences et n'hésitez pas à me
          contacter pour une collaboration.
        </p>

        {/* ✅ Sous-composant utilisé ici à la place du code inline cassé */}
        <AnimatedText />

        <a href="/cv.pdf" download className="btn">
          Télécharger mon CV
        </a>
      </div>
 
       <div className="Kallo">
        {/* <img src="src/assets/iwww.png" alt="Moustapha Amadou Kallo" /> */}
        <img src={img} alt="Moustapha Amadou Kallo" />
      </div>
    </section>
  <section className="cv-section">
 
      {/* Overlay */}
      <div className="cv-overlay"></div>
 
      <div className="cv-inner">
 
        {/* CV Download */}
        <div className="cv-download-block">
          <span className="cv-tag">Portfolio</span>
 
          <h2 className="cv-title">Téléchargez mon CV</h2>
 
          <p className="cv-subtitle">
            Découvrez mon parcours professionnel, mes compétences techniques et mes réalisations.
          </p>
 
          <div className="cv-buttons">
            <a href="/cv.pdf" download className="btn-primary">
         
              Télécharger le CV
            </a>
 
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
              
              Ouvrir le CV
            </a>
          </div>
 
          <p className="cv-dispo">
            <span className="dispo-dot"></span>
            Disponible pour de nouvelles opportunités
          </p>
        </div>
 
        {/* Profil */}
        <div className="profile-block">
          <h3 className="profile-name">Moustapha Amadou Kallo</h3>
          <p className="profile-bio">
            Développeur passionné créant des solutions web modernes et innovantes avec les dernières technologies.
          </p>
        </div>
 
        {/* Footer Grid */}
        <div className="footer-grid">
 
          <div className="footer-col">
            <h4>Liens Rapides</h4>
            <ul className="footer-links">
              <li><a href="#">À Propos</a></li>
              <li><a href="#">Projets</a></li>
              <li><a href="#">Compétences</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
 
          <div className="footer-col">
            <h4>Contact</h4>
            <p className="footer-contact-text">Moustaphakallo547@gmail.com</p>
            <p className="footer-contact-text">Disponible pour freelance</p>
          </div>
 
          <div className="footer-col">
            <h4>© 2026 Moustapha Amadou Kallo</h4>
            <p className="footer-credit-text">Tous droits réservés.</p>
            <p className="footer-credit-text">Fait avec ❤️ React + Tailwind</p>
          </div>
 
        </div>
          
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <a href="#">Politique de confidentialité</a>
          <span>•</span>
          <a href="#">Conditions d'utilisation</a>
          <span>•</span>
          <a href="#">Plan du site</a>
        </div>
 
      </div>
    </section>


     
   </>
  );
}
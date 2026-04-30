import { Button } from "./Button.jsx";

const projects = [
    {
    title: "livertions",
    category: "livertions",
    description:
      "Plateforme e-commerce complète avec Flash Sales, Best Sellers, grilles de catégories et système de panier.",
    stack: ["React", "Vite", "CSS3"],
    link: "https://livertions-html.vercel.app/",
    image: "https://c8.alamy.com/comp/2JTDAW4/brisbane-queensland-australia-legislative-assembly-chamber-at-the-parliament-house-2JTDAW4.jpg",
    num: "01",
    code: "https://github.com/moustaphakallo/livertions.html.git",
  },
  {
    title: "projects",
    category: "projects",
    description:
      "Plateforme e-commerce complète avec Flash Sales, Best Sellers, grilles de catégories et système de panier.",
    stack: ["React", "Vite", "CSS3"],
    link: "https://index-html-yr2m-4rt9as005-moustaphakallos-projects.vercel.app/",
    image: "https://c8.alamy.com/comp/2HXG1JY/prague-czechia-jan-26-2022-interior-of-the-national-museum-in-prague-2HXG1JY.jpg",
    num: "02",
    code: "https://github.com/moustaphakallo/index-.html.git",

  },
  {
    title: "Room Project",
    category: "Room Project",
    description:
      "Clone Airbnb en React avec boutons like interactifs et refactoring complet.",
    stack: ["React", "Vite", "Lucide React"],
    link: "https://room-project-eta.vercel.app/",
    image: "https://c8.alamy.com/compfr/cb8a14/escalier-interieur-et-du-musee-national-de-prague-republique-tcheque-museum-a-ete-construit-par-l-architecte-josef-schultz-cb8a14.jpg",
    num: "03",
    code: "https://github.com/moustaphakallo/Room--project",

  },
  {
    title: "Asana Clone",
    category: "SaaS Landing",
    description:
      "Landing page avec carousel, navigation mobile et animations fluides.",
    stack: ["React", "CSS3", "useState"],
    link: "https://new-597q.vercel.app/",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/629689400.jpg?k=722cc79696f10aec374467516515b434b8db854823c1cc6e78b55c9e8f7c8ed1&o=",
    num: "04",
    
    code: "https://github.com/moustaphakallo/new",

  },
  {
    title: "resodre",
    category: "resodre",
    description: "Portfolio personnel avec design moderne et animations.",
    stack: ["React", "Tailwind", "Vite"],
    link: "https://resodre-ybli.vercel.app/",
    image: "https://media.vrbo.com/lodging/113000000/112220000/112218600/112218542/7e891923.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    num: "05",
    code: "https://github.com/moustaphakallo/resodre.git",

  },
  {
    title: "Figma Clone",
    category: "Design Tool",
    description: "Interface inspirée de Figma avec outils interactifs.",
    stack: ["React", "Canvas API", "CSS"],
    link: "https://figma-2ujl.vercel.app/",
    image: "https://c8.alamy.com/comp/2JTDAW4/brisbane-queensland-australia-legislative-assembly-chamber-at-the-parliament-house-2JTDAW4.jpg",
    num: "06",
    code: "https://github.com/moustaphakallo/figma-clone",

  },
  {
    title: "khan-academy",
    category: "khan-academy",
    description: "Galerie style Pinterest avec filtres et infinite scroll.",
    stack: ["React", "CSS Grid", "API"],
    link: "https://khan-academy-virid.vercel.app/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpik5XGza7jj7UoAa_y295BqgYYmzaYhdcA&s",
  num: "07",
    code: "https://github.com/moustaphakallo/Khan-academy",

  },
   {
    title: "comerce",
    category: "comerce",
    description: "Galerie style Pinterest avec filtres et infinite scroll.",
    stack: ["React", "CSS Grid", "API"],
    link: "https://comerce-html.vercel.app",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpik5XGza7jj7UoAa_y295BqgYYmzaYhdcA&s",
  num: "08",
    code: "https://github.com/moustaphakallo/comerce.html.git",

  },
   {
    title: "kallosite",
    category: "kallosite",
    description: "Galerie style Pinterest avec filtres et infinite scroll.",
    stack: ["React", "CSS Grid", "API"],
    link: "https://kallosite.vercel.app/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpik5XGza7jj7UoAa_y295BqgYYmzaYhdcA&s",
  num: "08",
    code: "https://github.com/moustaphakallo/Kallosite.git",

  },

];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container" >
        <h2 className="section-title">
          Mes <span>Projets</span>
        </h2>

        <div className="projects__grid" >
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <div className="me" style={{
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>me
                
              </div>

              <div className="project-card__num" >{p.num}</div>

              <div className="project-card__body">
                <span className="project-card__category" x>{p.category}</span>

                <h3 className="project-card__title">{p.title}</h3>

                <p className="project-card__desc">{p.description}</p>

                <div className="project-card__stack">
                  {p.stack.map((t) => (
                    <span key={t} className="project-card__tech">
                      {t}
                    </span>
                  ))}
                 <Button onClick={() => window.open(p.link, "_blank")}>

                      Demo
                </Button>

              <Button onClick={() => window.open(p.code, "_blank")}>
               Code
             </Button>

                </div>
              </div>

              <a
                href={p.link}
                className="project-card__link"
                aria-label={`Voir ${p.title}`}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 16L16 4M16 4H8M16 4V12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://c8.alamy.com/comp/MDYXNY/closed-envelope-company-logo-design-template-business-corporate-vector-icon-MDYXNY.jpg",
      title: "Email Service",
      text: "Envoyez et recevez des messages facilement.",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93L1Hro6VUfHun9mGcf2xKigUUg6OAQ0XSA&s",
      title: "Design Web",
      text: "Créez des sites modernes et rapides.",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      image: "https://w7.pngwing.com/pngs/223/22/png-transparent-telephone-call-computer-icons-ringing-contact-centre-icon-telephone-call-trademark-photography.png",
      title: "Contact",
      text: "Vendez vos produits en ligne facilement.",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      image: "https://thumbs.dreamstime.com/z/lampe-avec-le-logo-de-lumi%C3%A8re-de-lampe-et-d-%C3%A9lectricien-91721677.jpg",
      title: "Électricité",
      text: "Solutions électriques modernes et sûres.",
      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      image: "https://intelcorp.scene7.com/is/image/intelcorp/language-icon-lvl-2-abstract-bg:1920-1080?wid=864&hei=486&fmt=webp-alpha",
      title: "Technologie",
      text: "Innovation et performance informatique.",
      background: "#00e676"
    },
    {
      image: "https://www.shutterstock.com/shutterstock/videos/3685059835/thumb/7.jpg?ip=x480",
      title: "Design",
      text: "Créez des visuels professionnels facilement.",
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact de ${form.name}`;
    const body = form.message;

    window.location.href = `mailto:moustaphakallo547@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setSent(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <style>
        {`
        body{
          background: rgba(1, 7, 15, 0.93)
          ov
        }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* CONTACT FORM SECTION */
          .contact-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }

          .contact-left h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .contact-left p {
            color: #6366f1;
            font-weight: bold;
          }

          .contact-left a {
            text-decoration: none;
            color: #333;
            font-size: 1.1rem;
          }

          /* SLIDER STYLES */
          .slider {
            position: relative;
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 900px;
            margin: 0 auto;
          }

          .slides {
            display: flex;
            transition: transform 0.5s ease-in-out;
            height: 500px;
          }

          .slide {
            min-width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            gap: 20px;
            position: relative;
            color: #fff;
          }

          .slide img {
            width: 100px;
            height: 100px;
            object-fit: contain;
            animation: slideInImage 0.6s ease-in-out;
          }

          .slide-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .slide h3 {
            font-size: 2rem;
            font-weight: bold;
            margin: 0;
          }

          .slide p {
            font-size: 1.1rem;
            line-height: 1.6;
            max-width: 400px;
          }

          @keyframes slideInImage {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Boutons de navigation */
          .nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.3);
            color: #fff;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: all 0.3s ease;
            z-index: 10;
          }

          .nav-button:hover {
            background: rgba(255, 255, 255, 0.5);
            transform: translateY(-50%) scale(1.1);
          }

          .nav-button.prev {
            left: 20px;
          }

          .nav-button.next {
            right: 20px;
          }

          /* Indicateurs (dots) */
          .indicators {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 10;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(255, 255, 255, 0.6);
          }

          .dot.active {
            background: #fff;
            width: 30px;
            border-radius: 6px;
            transform: scale(1.2);
          }

          .dot:hover {
            background: rgba(255, 255, 255, 0.7);
          }

          /* SUCCESS MESSAGE */
          .success-message {
            padding: 20px;
            background: #d4edda;
            border-radius: 8px;
            color: #155724;
            text-align: center;
          }

          /* FORM STYLES */
          .form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form input,
          .form textarea {
            padding: 10px;
            borderRadius: 5px;
            border: 1px solid #ddd;
            fontSize: 1rem;
            fontFamily: inherit;
          }

          .form button {
            padding: 12px;
            background: #6366f1;
            color: white;
            border: none;
            borderRadius: 5px;
            cursor: pointer;
            fontSize: 1rem;
            fontWeight: bold;
            transition: background 0.3s;
          }

          .form button:hover {
            background: #4f46e5;
          }

          /* FOOTER */
          .footer {
            text-align: center;
            marginTop: 60px;
            color: #666;
          }

          /* RESPONSIVE */
          @media (max-width: 768px) {
            .contact-section {
              grid-template-columns: 1fr;
            }

            .slide {
              padding: 30px 15px;
            }

            .slide img {
              width: 80px;
              height: 80px;
            }

            .slide h3 {
              font-size: 1.5rem;
            }

            .slide p {
              font-size: 1rem;
            }
          }
        `}
      </style>

      {/* CONTACT SECTION */}
      <section className="contact-section" style={{ overflow: "hidden" }}>
        <div className="contact-left">
          <p>Contact</p>
          <h2>Travaillons <span style={{ color: '#605a99' }}>ensemble</span></h2>
          <a href="mailto:moustaphakallo547@gmail.com">
            📧 moustaphakallo547@gmail.com
          </a>
        </div>

        <div>
          {sent ? (
            <div className="success-message">
              ✅ Message envoyé avec succès !
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <input
                placeholder="Nom:MouataphaKallo"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                placeholder="Email:moustaphakallo547@gmail.com"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
               <input
                placeholder="Phone:07075792596"
                type="Number"
                value={form.Number}
                onChange={(e) => setForm({ ...form, Number: e.target.value })}
                required
              />

              <textarea
                placeholder="Message:bonjour"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <button type="submit">
                Envoyer
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SLIDER SECTION */}
      <section style={{ marginTop: '80px',overflow: "hidden" }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>
          Nos <span style={{ color: '#6366f1' }}>Services</span>
        </h2>

        <div className="slider">
          <div 
            className="slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="slide"
                style={{ background: slide.background }}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title}
                />
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Boutons de navigation */}
          <button className="nav-button prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="nav-button next" onClick={nextSlide}>
            ❯
          </button>

          {/* Indicateurs */}
          <div className="indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Moustapha Amadou Kallo
      </footer>
    </div>
  );
}
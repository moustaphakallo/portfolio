import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://c8.alamy.com/comp/MDYXNY/closed-envelope-company-logo-design-template-business-corporate-vector-icon-MDYXNY.jpg",
      title: "Email Service",
      text: "Envoyez et recevez des messages facilement."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93L1Hro6VUfHun9mGcf2xKigUUg6OAQ0XSA&s",
      title: "Design Web",
      text: "Créez des sites modernes et rapides."
    },
    {
      image: "https://w7.pngwing.com/pngs/223/22/png-transparent-telephone-call-computer-icons-ringing-contact-centre-icon-telephone-call-trademark-photography.png",
      title: "contact",
      text: "Vendez vos produits en ligne facilement."
    },
    {
      image: "https://thumbs.dreamstime.com/z/lampe-avec-le-logo-de-lumi%C3%A8re-de-lampe-et-d-%C3%A9lectricien-91721677.jpg",
      title: "Électricité",
      text: "Solutions électriques modernes et sûres."
    },
    {
      image: "https://intelcorp.scene7.com/is/image/intelcorp/language-icon-lvl-2-abstract-bg:1920-1080?wid=864&hei=486&fmt=webp-alpha",
      title: "Technologie",
      text: "Innovation et performance informatique."
    },
    {
      image: "https://www.shutterstock.com/shutterstock/videos/3685059835/thumb/7.jpg?ip=x480",
      title: "cle",
      text: "Créez des visuels professionnels facilement."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact de ${form.name}`;
    const body = form.message;

    window.location.href = `mailto:moustaphakallo547@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <div className='colo' style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>

      {/* CONTACT SECTION */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
        
        <div>
          <p style={{ color: '#6366f1', fontWeight: 'bold' }}>Contact</p>
          <h2 style={{ fontSize: '2.5rem' }}>
            Travaillons <span style={{ color: '#605a99' }}>ensemble</span>
          </h2>

          <a href="mailto:moustaphakallo547@gmail.com" style={{ textDecoration: 'none', color: '#333' }}>
           
          </a>
           📧 moustaphakallo547@gmail.com
        </div>

        <div>
          {sent ? (
            <div style={{ padding: '20px', background: '#d4edda', borderRadius: '8px', color: '#155724' }}>
              ✅ Message envoyé !
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <input
                placeholder="Nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                required
              />

              <input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                required
              />

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', minHeight: '100px' }}
                required
              />

              <button
                type="submit"
                style={{ padding: '12px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '5px' }}
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SLIDER SECTION */}
      <div className="style" style={{ textAlign: 'center' ,border:"1px solid color read"}}>

        <img
          src={slides[currentSlide].image}
          alt=""
          style={{ width: "100px", height:"100px" , maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
        />

        <h3 style={{ marginTop: '15px' }}>
          {slides[currentSlide].title}
        </h3>

        <p>
          {slides[currentSlide].text}
        </p>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', }}>
          <button onClick={prevSlide} style={{ padding: '8px 16px' }}>
            ❮
          </button>

          <button onClick={nextSlide} style={{ padding: '8px 16px' }}>
            ❯
          </button>
        </div>

        <div style={{ marginTop: '15px' }}>
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                height: '10px',
                width: '10px',
                margin: '0 5px',
                backgroundColor: currentSlide === index ? '#6366f1' : '#bbb',
                borderRadius: '50%',
                display: 'inline-block',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
            <div>
              <p>Vous avez d'autres questions ?</p>
              <span className='me1 '><img src="https://e7.pngegg.com/pngimages/889/832/png-clipart-google-contacts-mobile-app-contact-manager-app-store-android-application-package-email-miscellaneous-blue.png" alt="" />
              <p>me contact</p>
              </span>
            </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#666' }}>
        © 2026 Moustapha Amadou Kallo
      </footer>

    </div>
  );
}
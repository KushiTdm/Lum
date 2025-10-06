import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Heart, Flower2, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.1,
        ease: 'power3.out',
      });

      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        });
      });

      gsap.utils.toArray('.service-card').forEach((card: any, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });

      gsap.utils.toArray('.testimonial').forEach((testimonial: any, index) => {
        gsap.from(testimonial, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 1,
          scrollTrigger: {
            trigger: testimonial,
            start: 'top 80%',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6">
            Lūm
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide mb-12 opacity-90">
            Révélez votre lumière intérieure
          </p>
          <button
            onClick={() => navigate('/reserver')}
            className="hero-cta px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white hover:text-gray-800 transition-all duration-500 text-sm tracking-wider font-light"
          >
            Réserver votre soin
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="fade-in-section py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            Un havre de paix dédié à votre bien-être
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Chez Lūm, nous croyons que la beauté commence par le bien-être. Notre salon offre une expérience
            sensorielle unique où chaque soin est pensé pour révéler votre éclat naturel dans une atmosphère
            apaisante et lumineuse.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center mb-16 tracking-wide">
            Nos soins signature
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Soin du visage',
                description: 'Révélez la luminosité de votre peau avec nos soins personnalisés',
                image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: Flower2,
                title: 'Massage holistique',
                description: 'Détendez corps et esprit avec nos massages sur-mesure',
                image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                icon: Star,
                title: 'Beauté des mains',
                description: 'Sublimez vos mains avec nos soins manucure et nail art',
                image: 'https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="service-card group cursor-pointer"
                onClick={() => navigate('/soins')}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center mb-16 tracking-wide">
            Ils nous font confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sophie M.',
                text: 'Une expérience absolument divine. Le soin du visage était parfait, et l\'ambiance si relaxante. Je recommande vivement !',
                rating: 5,
              },
              {
                name: 'Claire D.',
                text: 'Le massage holistique a changé ma vie. Une équipe professionnelle et un lieu magnifique. Mon nouveau sanctuaire !',
                rating: 5,
              },
              {
                name: 'Marie L.',
                text: 'Des prestations de qualité dans un cadre exceptionnel. Lūm est devenu mon rendez-vous bien-être incontournable.',
                rating: 5,
              },
              {
                name: 'Émilie R.',
                text: 'Un accueil chaleureux et des soins sur-mesure. Je ressors toujours de Lūm ressourcée et rayonnante.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-light leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-900 font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-rose-100 via-amber-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-rose-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            Prête à rayonner ?
          </h2>
          <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed">
            Offrez-vous un moment de pure détente et de beauté. Réservez dès maintenant votre soin personnalisé.
          </p>
          <button
            onClick={() => navigate('/reserver')}
            className="px-10 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 text-sm tracking-wider font-light shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Réserver maintenant
          </button>
        </div>
      </section>
    </div>
  );
}

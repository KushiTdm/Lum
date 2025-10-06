import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Flower2, Star, Sparkles, Droplet, Hand, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Soins() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.page-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.soin-card').forEach((card: any, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const soins = [
    {
      icon: Heart,
      category: 'Visage',
      name: 'Soin Éclat Lumière',
      duration: '60 min',
      price: '85€',
      description: 'Nettoyage en profondeur, gommage doux et masque hydratant pour une peau lumineuse',
      image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Sparkles,
      category: 'Visage',
      name: 'Soin Anti-Âge Premium',
      duration: '90 min',
      price: '120€',
      description: 'Protocole complet avec massage kobido et sérums haute performance',
      image: 'https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Droplet,
      category: 'Visage',
      name: 'Hydratation Intense',
      duration: '45 min',
      price: '65€',
      description: 'Soin hydratant express pour peaux déshydratées',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Flower2,
      category: 'Massage',
      name: 'Massage Holistique',
      duration: '75 min',
      price: '95€',
      description: 'Massage relaxant du corps entier aux huiles essentielles',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Sparkles,
      category: 'Massage',
      name: 'Rituel Détente',
      duration: '90 min',
      price: '110€',
      description: 'Gommage corporel suivi d\'un massage relaxant complet',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Heart,
      category: 'Massage',
      name: 'Massage Dos & Nuque',
      duration: '30 min',
      price: '45€',
      description: 'Massage ciblé pour dénouer les tensions',
      image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Star,
      category: 'Mains',
      name: 'Manucure Classique',
      duration: '45 min',
      price: '40€',
      description: 'Soin des mains, pose de vernis et finition parfaite',
      image: 'https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Hand,
      category: 'Mains',
      name: 'Manucure Spa',
      duration: '60 min',
      price: '55€',
      description: 'Manucure complète avec gommage, masque et massage',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Sparkles,
      category: 'Mains',
      name: 'Nail Art Premium',
      duration: '90 min',
      price: '75€',
      description: 'Création sur-mesure avec designs personnalisés',
      image: 'https://images.pexels.com/photos/5128069/pexels-photo-5128069.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Eye,
      category: 'Regard',
      name: 'Rehaussement de Cils',
      duration: '60 min',
      price: '70€',
      description: 'Sublimez votre regard avec un effet longue durée',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Star,
      category: 'Regard',
      name: 'Teinture Cils & Sourcils',
      duration: '30 min',
      price: '35€',
      description: 'Intensifiez votre regard naturellement',
      image: 'https://images.pexels.com/photos/3985322/pexels-photo-3985322.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Sparkles,
      category: 'Forfaits',
      name: 'Journée Lumière',
      duration: '4h',
      price: '250€',
      description: 'Soin visage premium + massage holistique + manucure spa',
      image: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-white">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-6" />
            <h1 className="page-title text-5xl md:text-6xl font-light text-gray-800 mb-4 tracking-wide">
              Nos Soins
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Découvrez notre collection de soins personnalisés, conçus pour révéler votre beauté naturelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soins.map((soin, index) => (
              <div
                key={index}
                className="soin-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate('/reserver')}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={soin.image}
                    alt={soin.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-800">{soin.category}</span>
                  </div>
                  <soin.icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-800 mb-2 group-hover:text-rose-400 transition-colors duration-300">
                    {soin.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-4 leading-relaxed">
                    {soin.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-light">{soin.duration}</span>
                    <span className="text-xl font-light text-rose-400">{soin.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gray-800 mb-4">
                Besoin de conseils ?
              </h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour vous orienter vers le soin parfait adapté à vos besoins
              </p>
              <button
                onClick={() => navigate('/reserver')}
                className="px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 text-sm tracking-wider font-light shadow-lg hover:shadow-xl hover:scale-105"
              >
                Réserver une consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, FormEvent } from 'react';
import gsap from 'gsap';
import { Calendar, Clock, User, Mail, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Reserver() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.page-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.form-container', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setShowConfirmation(true);

    gsap.from('.confirmation-modal', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
    });

    setTimeout(() => {
      setShowConfirmation(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
      });
    }, 4000);
  };

  const services = [
    { value: 'eclat', label: 'Soin Éclat Lumière - 85€' },
    { value: 'anti-age', label: 'Soin Anti-Âge Premium - 120€' },
    { value: 'hydratation', label: 'Hydratation Intense - 65€' },
    { value: 'massage-holistique', label: 'Massage Holistique - 95€' },
    { value: 'rituel-detente', label: 'Rituel Détente - 110€' },
    { value: 'massage-dos', label: 'Massage Dos & Nuque - 45€' },
    { value: 'manucure-classique', label: 'Manucure Classique - 40€' },
    { value: 'manucure-spa', label: 'Manucure Spa - 55€' },
    { value: 'nail-art', label: 'Nail Art Premium - 75€' },
    { value: 'rehaussement-cils', label: 'Rehaussement de Cils - 70€' },
    { value: 'teinture', label: 'Teinture Cils & Sourcils - 35€' },
    { value: 'journee-lumiere', label: 'Journée Lumière - 250€' },
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl" />
      </div>

      <div className="relative pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-6" />
            <h1 className="page-title text-5xl md:text-6xl font-light text-gray-800 mb-4 tracking-wide">
              Réserver
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Offrez-vous un moment de pure détente
            </p>
          </div>

          <div className="form-container bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <User className="w-4 h-4 text-rose-400" />
                  <span>Nom complet</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-300 outline-none font-light"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-300 outline-none font-light"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4 text-rose-400" />
                  <span>Téléphone</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-300 outline-none font-light"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  <span>Type de soin</span>
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-300 outline-none font-light bg-white"
                >
                  <option value="">Choisissez un soin</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Calendar className="w-4 h-4 text-rose-400" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-300 outline-none font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Clock className="w-4 h-4 text-rose-400" />
                    <span>Heure</span>
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-300 outline-none font-light bg-white"
                  >
                    <option value="">Choisissez une heure</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-xl hover:from-rose-500 hover:to-rose-600 transition-all duration-300 text-sm tracking-wider font-light shadow-lg hover:shadow-xl hover:scale-105"
              >
                Confirmer ma réservation
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-gray-500 font-light">
              Vous recevrez une confirmation par email sous 24h
            </p>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6">
          <div className="confirmation-modal bg-white rounded-3xl p-8 md:p-12 max-w-md text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Réservation confirmée !
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Merci {formData.name} ! Nous avons bien reçu votre demande de réservation.
              Un email de confirmation vous sera envoyé sous peu.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Sparkles className="w-8 h-8 text-rose-400 mx-auto" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

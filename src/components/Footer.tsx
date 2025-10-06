import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light text-gray-800 mb-4">Lūm</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Votre oasis de bien-être et de beauté. Nous créons des moments de pure détente et sublimation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>123 Avenue de la Beauté, Paris</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-rose-400" />
                <span>contact@lum-salon.fr</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-800 mb-4 tracking-wide">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 hover:bg-rose-400 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 hover:bg-rose-400 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 font-light">
            © 2025 Lūm - Tous droits réservés | Mentions légales
          </p>
        </div>
      </div>
    </footer>
  );
}

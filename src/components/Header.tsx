import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingDialog from '@/components/BookingDialog';

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}

interface HeaderProps {
  scrollToSection: (id: string) => void;
  doctors: Doctor[];
  services: Service[];
}

const Header = ({ scrollToSection, doctors, services }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={28} className="text-primary" />
            <span className="text-xl font-bold text-foreground">Здоровая улыбка</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О клинике</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('doctors')} className="text-sm font-medium hover:text-primary transition-colors">Врачи</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </div>
          <BookingDialog 
            trigger={<Button>Записаться</Button>}
            doctors={doctors}
            services={services}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;

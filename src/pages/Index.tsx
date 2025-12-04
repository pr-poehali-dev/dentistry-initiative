import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import BookingDialog from '@/components/BookingDialog';
import { services, doctors, reviews, gallery } from '@/data/clinicData';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} doctors={doctors} services={services} />

      <section id="hero" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Здоровая улыбка — это просто
              </h1>
              <p className="text-xl text-muted-foreground">
                Современная стоматология с профессиональными врачами и новейшим оборудованием
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingDialog 
                  trigger={
                    <Button size="lg" className="text-lg">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться на приём
                    </Button>
                  }
                  doctors={doctors}
                  services={services}
                />
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">довольных</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/2a500f72-85df-4cc2-85e3-df1dd6d6c62d/files/f6e27be6-76cb-492d-a014-571c57df01cd.jpg"
                alt="Стоматологическая клиника"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">О нашей клинике</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы — современная стоматологическая клиника с 15-летним опытом работы. Наша миссия — сделать качественную стоматологию доступной для каждого. Мы используем только проверенные материалы и новейшее оборудование из Германии и США.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              У нас работают врачи высшей категории с опытом от 10 лет. Каждый специалист регулярно проходит обучение и повышает квалификацию на международных конференциях.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon name="Award" size={40} className="text-primary mb-2" />
                  <CardTitle>Сертификаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Все врачи имеют действующие сертификаты и лицензии</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon name="ShieldCheck" size={40} className="text-primary mb-2" />
                  <CardTitle>Гарантия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">До 3 лет гарантии на все виды работ</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon name="Clock" size={40} className="text-primary mb-2" />
                  <CardTitle>Работаем 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Круглосуточная неотложная помощь</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр стоматологических услуг для всей семьи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <BookingDialog 
                      trigger={<Button variant="outline">Записаться</Button>}
                      doctors={doctors}
                      services={services}
                      title={`Запись на ${service.title.toLowerCase()}`}
                      description="Заполните форму и мы свяжемся с вами"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-secondary/20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Наши врачи</h2>
            <p className="text-lg text-muted-foreground">Команда профессионалов с большим опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                  <p className="text-sm text-primary font-medium">{doctor.experience}</p>
                </CardHeader>
                <CardContent>
                  <BookingDialog 
                    trigger={<Button className="w-full">Записаться к врачу</Button>}
                    doctors={doctors}
                    services={services}
                    title={`Запись к ${doctor.name}`}
                    description={doctor.specialty}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Галерея работ</h2>
            <p className="text-lg text-muted-foreground">Результаты лечения наших пациентов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary/20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b last:border-0">
                      <div className="flex items-center gap-4">
                        <Icon name={service.icon as any} size={32} className="text-primary" />
                        <div>
                          <h3 className="font-semibold text-lg">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-accent rounded-lg">
                  <p className="text-sm text-center text-muted-foreground">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    Точная стоимость определяется после консультации и диагностики
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Отзывы пациентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <a href="tel:+74951234567" className="text-primary hover:underline">+7 (495) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:info@smile-clinic.ru" className="text-primary hover:underline">info@smile-clinic.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Ваше имя</Label>
                    <Input id="contact-name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea id="contact-message" placeholder="Ваш вопрос..." rows={4} />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Icon name="Heart" size={24} className="text-primary" />
                <span className="text-xl font-bold">Здоровая улыбка</span>
              </div>
              <p className="text-sm text-background/70">
                Современная стоматология для всей семьи
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm text-background/70">
                <button onClick={() => scrollToSection('services')} className="block hover:text-primary transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('doctors')} className="block hover:text-primary transition-colors">Врачи</button>
                <button onClick={() => scrollToSection('prices')} className="block hover:text-primary transition-colors">Цены</button>
                <button onClick={() => scrollToSection('contacts')} className="block hover:text-primary transition-colors">Контакты</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-background/70">
                <p>+7 (495) 123-45-67</p>
                <p>info@smile-clinic.ru</p>
                <p>г. Москва, ул. Примерная, 10</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/70">
            <p>© 2024 Здоровая улыбка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

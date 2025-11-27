import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/6db84097-ab3e-4579-8015-f50bf7d6956b.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Дикая Саванна</h1>
          <p className="text-xl md:text-2xl mb-8">Познайте мир леопардов и гиен</p>
          <Link
            to="/facts"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Узнать больше
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Обитатели саванны
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/5b065a6d-97ae-4963-8e53-2ccdcae624b8.jpg)',
              }}
            ></div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>🐆</span> Леопарды
              </h3>
              <p className="text-muted-foreground mb-4">
                Величественные хищники с уникальной пятнистой окраской. Мастера маскировки
                и охоты, способные затаскивать добычу на деревья.
              </p>
              <Link
                to="/leopards"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                Подробнее <Icon name="ArrowRight" size={20} />
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/fa660808-2653-4bee-8624-bb580fd5d925.jpg)',
              }}
            ></div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>🐺</span> Гиены
              </h3>
              <p className="text-muted-foreground mb-4">
                Умные социальные хищники с мощными челюстями. Живут кланами и обладают
                сложной системой коммуникации.
              </p>
              <Link
                to="/hyenas"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                Подробнее <Icon name="ArrowRight" size={20} />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Интересные факты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Скорость</h3>
              <p className="text-muted-foreground">
                Леопарды могут разгоняться до 58 км/ч
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2">Сила</h3>
              <p className="text-muted-foreground">
                Гиены имеют самый сильный укус среди хищников Африки
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-2">Охота</h3>
              <p className="text-muted-foreground">
                Оба вида активны преимущественно в ночное время
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

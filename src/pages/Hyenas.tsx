import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Hyenas = () => {
  const characteristics = [
    { icon: 'Ruler', title: 'Размер', desc: 'Длина тела: 95-165 см, вес: 40-86 кг' },
    { icon: 'MapPin', title: 'Ареал', desc: 'Африка к югу от Сахары' },
    { icon: 'Clock', title: 'Продолжительность жизни', desc: '12-25 лет в дикой природе' },
    { icon: 'Utensils', title: 'Питание', desc: 'Всеядны: охота и падаль' },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/fa660808-2653-4bee-8624-bb580fd5d925.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🐺 Гиены</h1>
          <p className="text-xl">Умные социальные хищники саванны</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">О виде</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Пятнистая гиена — один из самых успешных хищников Африки, часто
            недооцениваемый и окруженный мифами. Вопреки распространённому мнению, гиены
            являются активными охотниками, а не только падальщиками.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Гиены обладают невероятно мощными челюстями — их укус способен раздробить
            кости крупных животных. Они живут в матриархальных кланах, где самки крупнее
            самцов и занимают доминирующее положение.
          </p>

          <h3 className="text-3xl font-bold mb-6">Характеристики</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {characteristics.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-6">Особенности поведения</h3>
          <div className="space-y-4">
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="Users" size={24} className="text-secondary" />
                Социальная структура
              </h4>
              <p className="text-muted-foreground">
                Гиены живут в кланах до 80 особей с четкой иерархией. Клан возглавляет
                доминантная самка, чьи детёныши автоматически получают высокий статус.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-secondary" />
                Коммуникация
              </h4>
              <p className="text-muted-foreground">
                Гиены используют более 11 различных звуков для общения, включая знаменитый
                "смех", который сигнализирует о стрессе или возбуждении.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="Target" size={24} className="text-secondary" />
                Охотничьи навыки
              </h4>
              <p className="text-muted-foreground">
                До 95% пищи гиены добывают охотой. Они способны преследовать добычу на
                расстояние до 5 км со скоростью до 60 км/ч.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="Brain" size={24} className="text-secondary" />
                Интеллект
              </h4>
              <p className="text-muted-foreground">
                Исследования показывают, что гиены обладают высоким интеллектом,
                сопоставимым с приматами. Они могут решать сложные задачи и обучаться на
                опыте.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hyenas;

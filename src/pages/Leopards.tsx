import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Leopards = () => {
  const characteristics = [
    { icon: 'Ruler', title: 'Размер', desc: 'Длина тела: 90-190 см, вес: 30-90 кг' },
    { icon: 'MapPin', title: 'Ареал', desc: 'Африка и Азия, различные типы местности' },
    { icon: 'Clock', title: 'Продолжительность жизни', desc: '12-17 лет в дикой природе' },
    { icon: 'Utensils', title: 'Питание', desc: 'Хищник: антилопы, обезьяны, птицы' },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/5b065a6d-97ae-4963-8e53-2ccdcae624b8.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🐆 Леопарды</h1>
          <p className="text-xl">Мастера маскировки африканской саванны</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">О виде</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Леопард — один из самых грациозных и адаптивных хищников планеты. Благодаря
            своей пятнистой окраске, леопарды превосходно маскируются в окружающей среде,
            что делает их эффективными охотниками.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Эти одиночные животные известны своей силой — леопард способен затащить
            добычу, превышающую его собственный вес, на высоту более 5 метров на дерево,
            чтобы уберечь её от других хищников.
          </p>

          <h3 className="text-3xl font-bold mb-6">Характеристики</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {characteristics.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={24} className="text-primary" />
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
                <Icon name="Moon" size={24} className="text-accent" />
                Ночные охотники
              </h4>
              <p className="text-muted-foreground">
                Леопарды предпочитают охотиться в сумерках и ночью, используя отличное
                ночное зрение для выслеживания добычи.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="Users" size={24} className="text-accent" />
                Одиночный образ жизни
              </h4>
              <p className="text-muted-foreground">
                Взрослые леопарды — территориальные одиночки. Каждая особь контролирует
                свою территорию, которая может достигать 30-40 км².
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="TreePine" size={24} className="text-accent" />
                Древесный образ жизни
              </h4>
              <p className="text-muted-foreground">
                Превосходные альпинисты, леопарды часто отдыхают на деревьях и
                используют их для хранения добычи вдали от конкурентов.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leopards;

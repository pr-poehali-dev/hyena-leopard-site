import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Facts = () => {
  const leopardFacts = [
    {
      title: 'Невероятная сила',
      desc: 'Леопард может поднять на дерево добычу весом до 50 кг — это больше их собственного веса!',
      icon: 'Dumbbell',
    },
    {
      title: 'Скрытные охотники',
      desc: 'Леопарды могут подкрадываться к добыче на расстояние менее 5 метров, оставаясь незамеченными.',
      icon: 'Eye',
    },
    {
      title: 'Уникальный узор',
      desc: 'Рисунок пятен у каждого леопарда уникален, как отпечатки пальцев у человека.',
      icon: 'Sparkles',
    },
    {
      title: 'Прыгучесть',
      desc: 'Леопарды могут прыгать на высоту до 3 метров и в длину до 6 метров.',
      icon: 'Activity',
    },
    {
      title: 'Чёрные пантеры',
      desc: 'Чёрные пантеры — это леопарды с избытком меланина. При ярком свете видны их пятна.',
      icon: 'Moon',
    },
  ];

  const hyenaFacts = [
    {
      title: 'Самый мощный укус',
      desc: 'Сила укуса гиены достигает 1100 PSI — сильнее, чем у львов и медведей!',
      icon: 'Zap',
    },
    {
      title: 'Матриархат',
      desc: 'Клан гиен всегда возглавляет самка. Даже детёныши самок имеют более высокий ранг, чем взрослые самцы.',
      icon: 'Crown',
    },
    {
      title: 'Удивительное пищеварение',
      desc: 'Гиены способны переваривать кости, копыта и рога благодаря мощной желудочной кислоте.',
      icon: 'Check',
    },
    {
      title: 'Успешные охотники',
      desc: 'Гиены успешны в 74% охот — это выше, чем у львов (30%).',
      icon: 'Target',
    },
    {
      title: 'Сложный язык',
      desc: 'Гиены используют более 11 различных звуков для общения, включая знаменитый хохот.',
      icon: 'MessageSquare',
    },
    {
      title: 'Дальнее зрение',
      desc: 'Гиены могут видеть на расстоянии до 4 км благодаря отличному зрению.',
      icon: 'Binoculars',
    },
  ];

  const comparisons = [
    {
      aspect: 'Социальность',
      leopard: 'Одиночки',
      hyena: 'Кланы до 80 особей',
    },
    {
      aspect: 'Максимальная скорость',
      leopard: '58 км/ч',
      hyena: '60 км/ч',
    },
    {
      aspect: 'Охотничий успех',
      leopard: '38%',
      hyena: '74%',
    },
    {
      aspect: 'Территория',
      leopard: 'До 40 км²',
      hyena: '15-20 км²',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Интересные факты</h1>
          <p className="text-xl text-muted-foreground">
            Удивительные открытия о леопардах и гиенах
          </p>
        </div>

        <Tabs defaultValue="leopards" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="leopards" className="text-lg">
              🐆 Леопарды
            </TabsTrigger>
            <TabsTrigger value="hyenas" className="text-lg">
              🐺 Гиены
            </TabsTrigger>
            <TabsTrigger value="comparison" className="text-lg">
              ⚖️ Сравнение
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leopards">
            <div className="grid md:grid-cols-2 gap-6">
              {leopardFacts.map((fact, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={fact.icon} size={20} className="text-primary" />
                      </div>
                      {fact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{fact.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hyenas">
            <div className="grid md:grid-cols-2 gap-6">
              {hyenaFacts.map((fact, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Icon name={fact.icon} size={20} className="text-secondary" />
                      </div>
                      {fact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{fact.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Леопарды vs Гиены</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {comparisons.map((comp, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <h3 className="font-bold text-lg mb-3">{comp.aspect}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                          <span className="text-2xl">🐆</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Леопард</p>
                            <p className="font-semibold">{comp.leopard}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg">
                          <span className="text-2xl">🐺</span>
                          <div>
                            <p className="text-sm text-muted-foreground">Гиена</p>
                            <p className="font-semibold">{comp.hyena}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Facts;

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/5b065a6d-97ae-4963-8e53-2ccdcae624b8.jpg',
      title: 'Леопард на дереве',
      category: 'Леопарды',
    },
    {
      url: 'https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/fa660808-2653-4bee-8624-bb580fd5d925.jpg',
      title: 'Клан гиен',
      category: 'Гиены',
    },
    {
      url: 'https://cdn.poehali.dev/projects/609c5c7c-c7d2-48d2-8740-4c6e668e898a/files/6db84097-ab3e-4579-8015-f50bf7d6956b.jpg',
      title: 'Закат в саванне',
      category: 'Пейзажи',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Галерея</h1>
          <p className="text-xl text-muted-foreground">
            Фотографии дикой природы африканской саванны
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${image.url})` }}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <p className="font-bold text-lg">{image.title}</p>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-0">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Фото галереи"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;

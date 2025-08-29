import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, BarChart2, Zap, Leaf, Recycle, Wind } from 'lucide-react';

const featuredBrands = [
  { name: 'M-KOPA Solar', description: 'Renewable energy access', tag: 'Affordable solar for off-grid communities', icon: <Zap className="text-green-600 text-xl" />, color: 'green' },
  { name: 'EcoPost', description: 'Recycled plastic infrastructure', tag: 'Turns waste into fencing and building materials', icon: <Recycle className="text-blue-600 text-xl" />, color: 'blue' },
  { name: 'GreenThing', description: 'Sustainable fashion', tag: 'Upcycled textiles and ethical labor practices', icon: <Leaf className="text-purple-600 text-xl" />, color: 'purple' },
  { name: 'Orchid Valley', description: 'Organic farming & packaging', tag: 'Zero-waste packaging and regenerative farming', icon: <Wind className="text-yellow-600 text-xl" />, color: 'yellow' },
];

const products = {
  renewable: [
    {
      id: 'solar-home-system',
      name: 'Solar Home System',
      brand: 'M-KOPA Solar',
      price: 'KSh 24,999',
      image: 'https://i.pinimg.com/1200x/5e/76/3a/5e763a155b59b2ddae3383739d619536.jpg',
      score: '9.2',
      scoreColor: 'high',
      tags: ['Clean Energy', 'Carbon Neutral', 'Off-grid Ready'],
    },
    {
        id: 'solar-led-lamp',
        name: 'Solar LED Lamp',
        brand: 'EcoBright',
        price: 'KSh 1,499',
        image: 'https://i.pinimg.com/1200x/10/29/2a/10292a46f68024747b957c006f56a34e.jpg',
        score: '8.7',
        scoreColor: 'high',
        tags: ['Clean Energy', 'Off-grid Ready'],
    },
    {
        id: 'efficient-cookstove',
        name: 'Efficient Cookstove',
        brand: 'EcoCook',
        price: 'KSh 3,299',
        image: 'https://i.pinimg.com/1200x/fb/fe/06/fbfe0620f88cc9d1e6f9908e2071cd4a.jpg',
        score: '7.5',
        scoreColor: 'medium',
        tags: ['Low CO₂', 'Energy Efficient'],
    },
    {
        id: 'solar-water-heater',
        name: 'Solar Water Heater',
        brand: 'SunHeat Kenya',
        price: 'KSh 32,500',
        image: 'https://i.pinimg.com/736x/2b/f6/b4/2bf6b419e86537b7d5d05c1d2b6e461f.jpg',
        score: '8.9',
        scoreColor: 'high',
        tags: ['Clean Energy', 'Low Emissions'],
    }
  ],
  recyclables: [
    {
        id: 'stainless-steel-bottle',
        name: 'Stainless Steel Bottle',
        brand: 'EcoBottle',
        price: 'KSh 1,200',
        image: 'https://i.pinimg.com/736x/f2/49/fc/f249fcddb4c65b35abfd6ac138e03f65.jpg',
        score: '9.1',
        scoreColor: 'high',
        tags: ['Reusable', 'Zero Waste', 'BPA Free'],
    },
    {
        id: 'recycled-notebook',
        name: 'Recycled Notebook',
        brand: 'Chandaria Industries',
        price: 'KSh 350',
        image: 'https://i.pinimg.com/736x/ec/bb/4a/ecbb4a32bd94ca34e619a94f6a6251d1.jpg',
        score: '8.8',
        scoreColor: 'high',
        tags: ['Recycled', 'Circular Economy'],
    },
    {
        id: 'compostable-bags',
        name: 'Compostable Bags',
        brand: 'EcoPack',
        price: 'KSh 899',
        image: 'https://i.pinimg.com/1200x/60/12/a2/6012a2e664aa2604fbd84f7fcdbd522e.jpg',
        score: '7.2',
        scoreColor: 'medium',
        tags: ['Compostable', 'Plastic-Free'],
    },
    {
        id: 'recycled-plastic-chairs',
        name: 'Recycled Plastic Lumber',
        brand: 'EcoPost',
        price: 'KSh 22,500',
        image: 'https://i.pinimg.com/1200x/9e/b3/58/9eb3585b96717971b5853f5aa0cb85ec.jpg',
        score: '9.4',
        scoreColor: 'high',
        tags: ['Recycled', 'Circular Economy', 'Durable'],
    }
  ],
  essentials: [
    {
        id: 'organic-lavender-soap',
        name: 'Organic Lavender Soap',
        brand: 'PureNature',
        price: 'KSh 450',
        image: 'https://i.pinimg.com/1200x/db/a9/d3/dba9d35f9d8119b2af988b5c6753a006.jpg',
        score: '8.9',
        scoreColor: 'high',
        tags: ['Organic', 'Biodegradable', 'Non-toxic'],
    },
    {
        id: 'organic-arabica-coffee',
        name: 'Organic Arabica Coffee',
        brand: 'Orchid Valley',
        price: 'KSh 1,250',
        image: 'https://i.pinimg.com/736x/d5/04/c1/d504c1317b30f5ec03e8f0791f2908d1.jpg',
        score: '7.6',
        scoreColor: 'medium',
        tags: ['Organic', 'Fairtrade', 'Locally Grown'],
    },
    {
        id: 'bamboo-toothbrush',
        name: 'Bamboo Toothbrush',
        brand: 'EcoSmile',
        price: 'KSh 299',
        image: 'https://i.pinimg.com/736x/04/68/e6/0468e6e0b3b59543b8dac3626de3625f.jpg',
        score: '9.0',
        scoreColor: 'high',
        tags: ['Biodegradable', 'Plastic-Free'],
    },
    {
        id: 'organic-cotton-t-shirt',
        name: 'Organic Cotton T-shirt',
        brand: 'GreenThing',
        price: 'KSh 1,899',
        image: 'https://i.pinimg.com/736x/f8/ba/aa/f8baaace7a8eb6530800bf1c4265da88.jpg',
        score: '7.8',
        scoreColor: 'medium',
        tags: ['Organic', 'Fairtrade', 'Ethically Made'],
    }
  ]
};

const ProductCard = ({ product }: { product: any }) => (
    <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 relative">
        <Link href={`/products/${product.id}`} className="block">
            <div className="relative">
                <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-48 object-cover" />
                <div className="quick-view-overlay absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Button variant="secondary">Quick View</Button>
                </div>
            </div>
        </Link>
        <div className="p-4">
            <div className="flex justify-between items-start mb-2">
                <Badge className={`impact-score-${product.scoreColor}`}>{product.score}</Badge>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
            <div className="flex flex-wrap gap-1 mb-3">
                {product.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="tag-chip">{tag}</Badge>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">{product.price}</span>
                <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                        <BarChart2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

const BrandCard = ({ brand }: { brand: typeof featuredBrands[0] }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        <div className="p-4">
            <div className="flex items-center space-x-3 mb-3">
                <div className={`w-12 h-12 rounded-full bg-${brand.color}-100 flex items-center justify-center`}>
                    {brand.icon}
                </div>
                <h3 className="font-bold">{brand.name}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">{brand.description}</p>
            <Badge variant="secondary" className={`bg-${brand.color}-50 text-${brand.color}-800`}>{brand.tag}</Badge>
        </div>
    </div>
);

export function ProductGrid() {
  return (
    <div className="flex-grow">
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Ethical Brands</h2>
        <p className="text-gray-600 mb-6">Discover brands making exceptional contributions to environmental sustainability and social impact.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBrands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </section>

      <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
              <div>
                  <h2 className="text-2xl font-bold text-gray-800">Renewable Energy Products</h2>
                  <p className="text-gray-600">Clean energy solutions for sustainable living</p>
              </div>
              <Link href="#" className="text-green-600 font-medium text-sm">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.renewable.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
      </section>

      <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
              <div>
                  <h2 className="text-2xl font-bold text-gray-800">Recyclables & Reusables</h2>
                  <p className="text-gray-600">Products that support a circular economy</p>
              </div>
              <Link href="#" className="text-green-600 font-medium text-sm">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.recyclables.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
      </section>

      <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
              <div>
                  <h2 className="text-2xl font-bold text-gray-800">Eco-Friendly Essentials</h2>
                  <p className="text-gray-600">Daily products that are gentle on the planet</p>
              </div>
              <Link href="#" className="text-green-600 font-medium text-sm">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.essentials.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
      </section>
    </div>
  );
}

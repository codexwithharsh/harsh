import React, { useState } from 'react';
import { SOCIAL_GALLERY } from '../data/portfolioData';
import { SocialGalleryItem } from '../types';
import { X, ZoomIn, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const BAG_POSTERS = [
  {
    url: 'https://i.pinimg.com/originals/45/96/cd/4596cd516c87e2d860a6af16a8eac283.png',
    pinUrl: 'https://in.pinterest.com/pin/3025924747227680/',
    title: 'Luxury Bags Collection — Quadrant Campaign',
    tag: 'Handbag Quadrant Grid',
  },
  {
    url: 'https://i.pinimg.com/originals/98/e0/48/98e048425eb96d6decd762680096b338.png',
    pinUrl: 'https://in.pinterest.com/pin/7388786885163483/',
    title: 'Product Promotion Ads — Backpack Poster',
    tag: 'Backpack Promotion Ad',
  },
  {
    url: 'https://i.pinimg.com/originals/68/21/43/6821438811257221db1f2abeeb6ab8a7.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1146236542694528609/',
    title: 'Creative Sale Poster — Bags & Apparel',
    tag: 'Fashion & Bags Sale Poster',
  },
  {
    url: 'https://i.pinimg.com/originals/c8/07/6f/c8076f4c98c98c0d80e28dddc871a037.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1054968281474611770/',
    title: 'Effortless Elegance — Tulia Leather Bag',
    tag: 'Editorial Leather Bag Ad',
  },
];

const BEAUTY_POSTERS = [
  {
    url: 'https://i.pinimg.com/originals/7d/df/02/7ddf02c007d6d1cf525f9d4800ea0b2d.jpg',
    pinUrl: 'https://in.pinterest.com/pin/20829217023119501/',
    title: 'Nykaa Pink Love Sale — What’s In Your Pink Box?',
    tag: 'Pink Love Box Campaign',
  },
  {
    url: 'https://i.pinimg.com/originals/04/e1/8e/04e18eacc70ff91c622cb72b868d5c65.jpg',
    pinUrl: 'https://in.pinterest.com/pin/248331366949159191/',
    title: 'Luxury Skincare & Cosmetics Editorial Poster',
    tag: 'Editorial Skincare Ad',
  },
  {
    url: 'https://i.pinimg.com/originals/b7/2c/f0/b72cf0e31385daa87062cf2dbc15ece1.png',
    pinUrl: 'https://in.pinterest.com/pin/410320216073162730/',
    title: 'KIKO Milano Glow Kits & Glosses — Buy 2 Get 1 Free',
    tag: 'Glow Kits & Glosses BOGO',
  },
  {
    url: 'https://i.pinimg.com/originals/6d/63/0b/6d630b12ccbc2a59b2420b03bbedcd02.jpg',
    pinUrl: 'https://in.pinterest.com/pin/520939881920649211/',
    title: 'Nykaa Grand Beauty Sale — Skincare Savings',
    tag: 'Grand Beauty Discount Ad',
  },
  {
    url: 'https://i.pinimg.com/originals/35/2a/36/352a36f9e26f00deb44b20f036128685.jpg',
    pinUrl: 'https://in.pinterest.com/pin/605874956162434235/',
    title: 'Skincare Campaign Photography & Minimalist Layout',
    tag: 'Hydration Skincare Poster',
  },
  {
    url: 'https://i.pinimg.com/originals/93/77/45/937745d7872a20a0b3404560d1b2ab92.png',
    pinUrl: 'https://in.pinterest.com/pin/975873813029889485/',
    title: 'Luxury Beauty Social Media Design & Makeup Campaign',
    tag: 'Luxury Makeup Campaign',
  },
  {
    url: 'https://i.pinimg.com/originals/9d/c4/5a/9dc45a14268874139d00695a6697df81.png',
    pinUrl: 'https://in.pinterest.com/pin/1116963145113652771/',
    title: 'Natura Una Gloss Shade Swatch & Color Range Poster',
    tag: 'Gloss Shade Swatch Ad',
  },
  {
    url: 'https://i.pinimg.com/originals/4b/41/a0/4b41a07a7bf53f041d6a6731e55f45bc.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1082412091706350442/',
    title: 'Cathy Doll Wake Up Look — Eye & Beauty Campaign',
    tag: 'Beauty Product Poster',
  },
  {
    url: 'https://i.pinimg.com/originals/f0/13/b2/f013b22604d063d8c04599396ced7891.jpg',
    pinUrl: 'https://in.pinterest.com/pin/690317449137121202/',
    title: 'Lipstick Advertisement on Crimson Red Background',
    tag: 'Lipstick Commercial Ad',
  },
  {
    url: 'https://i.pinimg.com/originals/ad/ed/10/aded1031b86a738196d4868fd69fbae5.png',
    pinUrl: 'https://in.pinterest.com/pin/1123859282040236935/',
    title: 'Comfy Matte Liquid Lipstick — Long Lasting & Waterproof',
    tag: 'Matte Lipstick Layout',
  },
  {
    url: 'https://i.pinimg.com/originals/51/22/83/51228354d62e545bf179f32c717afed5.jpg',
    pinUrl: 'https://in.pinterest.com/pin/896005288379521602/',
    title: 'Botanical Cosmetics & Skincare Branding Campaign',
    tag: 'Organic Skincare Poster',
  },
  {
    url: 'https://i.pinimg.com/originals/a9/c3/08/a9c3084b9f257fded1489ca63677fa30.jpg',
    pinUrl: 'https://in.pinterest.com/pin/12033124000760971/',
    title: 'NOIREE — High Fashion Pink Beauty Ad Campaign',
    tag: 'NOIREE Pink Beauty Campaign',
  },
  {
    url: 'https://i.pinimg.com/originals/b8/5a/22/b85a2284a16fe9da6dfd77721bbde95d.png',
    pinUrl: 'https://in.pinterest.com/pin/64668944647093409/',
    title: 'Cherry Lips — Tinted Lip Balm Commercial Poster',
    tag: 'Lip Care Product Poster',
  },
  {
    url: 'https://i.pinimg.com/originals/d2/e6/53/d2e653229a4bc0744a9781764091eae0.jpg',
    pinUrl: 'https://in.pinterest.com/pin/124482377196803447/',
    title: 'Nykaa Cosmetics Matte Revolution Lipstick Campaign',
    tag: 'Matte Revolution Campaign',
  },
  {
    url: 'https://i.pinimg.com/originals/3f/c7/df/3fc7df2aa2e8f219f4feb5765e945ffe.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1082552830391361352/',
    title: 'Dot & Key Barrier Repair Tinted Lip Balm SPF 50',
    tag: 'SPF Lip Balm Campaign',
  },
  {
    url: 'https://i.pinimg.com/originals/44/dc/20/44dc20044fb64598bf7f7b720ffb2b52.png',
    pinUrl: 'https://in.pinterest.com/pin/35184440834941774/',
    title: 'Luce Radiance Boost Vitamin C Serum Product Poster',
    tag: 'Vitamin C Radiance Poster',
  },
];

export const SocialGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SocialGalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeBagIndex, setActiveBagIndex] = useState<number>(0);
  const [activeBeautyIndex, setActiveBeautyIndex] = useState<number>(0);

  const categories = ['All', 'Beauty', 'Fashion', 'Campaign', 'Marketing', 'Accessories', 'Food', 'Product', 'Editorial'];

  const filteredItems = activeFilter === 'All'
    ? SOCIAL_GALLERY
    : SOCIAL_GALLERY.filter((item) => item.category === activeFilter);

  const renderSocialVisual = (item: SocialGalleryItem) => {
    switch (item.renderType) {
      case 'coffee-cup':
        return (
          <div className="w-full h-full bg-[#360812] flex flex-col justify-between text-white relative overflow-hidden group">
            <img
              src="https://cdn.dribbble.com/userupload/48233403/file/c79c270e7c7ede16db54719398e9f3cb.png?resize=1504x1541&vertical=center"
              alt="Coffee Local Campaign"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono p-4">
              <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[#FCD8DD]">EST. 2022</span>
              <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-white/80">COFFEE LOCAL</span>
            </div>
            <div className="relative z-10 p-4 pt-0">
              <h4 className="text-xs font-bold uppercase tracking-tight text-[#FCD8DD] drop-shadow">
                Weekly Brew Highlight
              </h4>
              <p className="text-[10px] text-white/80 font-mono mt-0.5">
                Social Campaign Series
              </p>
            </div>
          </div>
        );

      case 'burger-promo':
        return (
          <div className="w-full h-full bg-[#180507] relative overflow-hidden flex items-center justify-center">
            {/* Ambient blurred backdrop to match image tones smoothly */}
            <img
              src="https://i.pinimg.com/originals/6e/d1/3d/6ed13d1233c0ab3d676bd28e82064e1d.jpg"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-40 pointer-events-none"
            />
            {/* 100% Uncropped Full Artwork Presentation */}
            <img
              src="https://i.pinimg.com/originals/6e/d1/3d/6ed13d1233c0ab3d676bd28e82064e1d.jpg"
              alt="Super Delicious Burger Promotional Campaign by Harsh Gaurav"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        );

      case 'burger-special':
        return (
          <div className="w-full h-full bg-[#140D09] relative overflow-hidden flex items-center justify-center">
            {/* Ambient blurred backdrop to match image tones smoothly */}
            <img
              src="https://i.pinimg.com/originals/db/a8/3d/dba83d55a52a9c88ae4d897d3e11e97e.png"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-35 pointer-events-none"
            />
            {/* 100% Uncropped Full Artwork Presentation */}
            <img
              src="https://i.pinimg.com/originals/db/a8/3d/dba83d55a52a9c88ae4d897d3e11e97e.png"
              alt="Artisan Craft Burger Special Offer Poster by Harsh Gaurav"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        );

      case 'bags-collection':
        return (
          <div className="w-full h-full bg-[#180F16] relative overflow-hidden flex items-center justify-center group">
            {/* Ambient blurred backdrop */}
            <img
              src="https://i.pinimg.com/originals/45/96/cd/4596cd516c87e2d860a6af16a8eac283.png"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30 pointer-events-none"
            />
            {/* 100% Uncropped Full Artwork Presentation */}
            <img
              src="https://i.pinimg.com/originals/45/96/cd/4596cd516c87e2d860a6af16a8eac283.png"
              alt="Bags Collection Luxury Instagram Campaign by Harsh Gaurav"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded border border-white/20 text-[10px] font-mono text-[#F472B6]">
              <span>BAGS COLLECTION — PROMOTIONAL POSTERS</span>
            </div>
          </div>
        );

      case 'beauty-campaign':
        return (
          <div className="w-full h-full bg-[#180814] relative overflow-hidden flex items-center justify-center group">
            {/* Ambient blurred backdrop */}
            <img
              src="https://i.pinimg.com/originals/7d/df/02/7ddf02c007d6d1cf525f9d4800ea0b2d.jpg"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-35 pointer-events-none"
            />
            {/* 100% Uncropped Full Artwork Presentation */}
            <img
              src="https://i.pinimg.com/originals/7d/df/02/7ddf02c007d6d1cf525f9d4800ea0b2d.jpg"
              alt="Beauty & Skincare Promotional Posters by Harsh Gaurav"
              referrerPolicy="no-referrer"
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded border border-white/20 text-[10px] font-mono text-[#F43F5E]">
              <span>BEAUTY &amp; COSMETICS</span>
            </div>
          </div>
        );

      case 'fashion-elara':
        return (
          <div className="w-full h-full bg-[#1A0B14] flex flex-col justify-between text-white relative overflow-hidden group">
            <img
              src="https://i.pinimg.com/originals/c8/09/0b/c8090b81f03759e3ba9438f2a805e6de.jpg"
              alt="Elara Fashion Autumn Grace Campaign by Harsh Gaurav"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />
            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono p-4">
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[#E9C99E] border border-white/10">AUTUMN / WINTER</span>
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white/90 border border-white/10">EVOLUR</span>
            </div>
            <div className="relative z-10 p-4 pt-0">
              <h4 className="text-base font-serif tracking-tight text-white drop-shadow">
                evolur — Grace in Every Thread
              </h4>
              <p className="text-[10px] text-[#E9C99E] font-mono mt-0.5">
                Luxury Minimalist Apparel
              </p>
            </div>
          </div>
        );

      case 'wellness-care':
        return (
          <div className="w-full h-full bg-[#0A0014] flex flex-col justify-between text-white relative overflow-hidden group">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />
            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono p-4">
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-purple-300 border border-white/10">
                LIVE CONCERT
              </span>
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[#E9C99E] border border-white/10">
                EVENT EDITS
              </span>
            </div>
            <div className="relative z-10 p-4 pt-0">
              <h4 className="text-base font-display font-bold tracking-tight text-white drop-shadow">
                {item.title}
              </h4>
              <p className="text-[10px] text-purple-200 font-mono mt-0.5">
                Concert &amp; Festival Social Graphics
              </p>
            </div>
          </div>
        );

      case 'tech-crypto':
        return (
          <div className="w-full h-full bg-[#070913] flex flex-col justify-between text-white relative overflow-hidden group">
            <img
              src="https://cdn.dribbble.com/userupload/48233486/file/e97da211accdd0269be07bc89aa7b935.png?resize=752x&vertical=center"
              alt="UI & UX DESIGNS"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />
            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono p-4">
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[#38BDF8] border border-white/10">UI / UX</span>
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white/90 border border-white/10">UI &amp; UX DESIGNS</span>
            </div>
            <div className="relative z-10 p-4 pt-0">
              <h4 className="text-xs font-bold uppercase tracking-tight text-white drop-shadow">
                AI Analytics Dashboard
              </h4>
              <p className="text-[10px] text-white/80 font-mono mt-0.5">
                Dark HUD Telemetry System
              </p>
            </div>
          </div>
        );

      case 'juice-clean':
        return (
          <div className="w-full h-full bg-[#14121a] flex flex-col justify-between text-white relative overflow-hidden group">
            <img
              src="https://cdn.dribbble.com/userupload/48233404/file/86ca62465eab2e113929cf520133f568.png?resize=1504x1280&vertical=center"
              alt="Pure Juice & Sunéa Packaging"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono p-4">
              <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[#E9C99E]">ORGANIC</span>
              <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-white/80">PURE JUICE</span>
            </div>
            <div className="relative z-10 p-4 pt-0">
              <h4 className="text-xs font-bold uppercase tracking-tight text-white drop-shadow">
                Botanical Refreshment
              </h4>
              <p className="text-[10px] text-white/80 font-mono mt-0.5">
                Packaging &amp; Identity System
              </p>
            </div>
          </div>
        );

      case 'fashion-sale':
        return (
          <div className="w-full h-full bg-[#0E0E10] flex flex-col justify-between text-white relative overflow-hidden group">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />
            <div className="relative z-10 flex justify-between items-center text-[10px] font-mono p-4">
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[#E9C99E] border border-white/10">{item.tag}</span>
              <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white/90 border border-white/10">EDITORIAL</span>
            </div>
            <div className="relative z-10 p-4 pt-0">
              <h4 className="text-base font-serif tracking-tight text-white drop-shadow">
                {item.title}
              </h4>
              <p className="text-[10px] text-[#E9C99E] font-mono mt-0.5">
                {item.category} Editorial Series
              </p>
            </div>
          </div>
        );

      default:
        if (item.imageUrl) {
          return (
            <div className="w-full h-full bg-[#0E0E10] flex flex-col justify-between text-white relative overflow-hidden group">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />
              <div className="relative z-10 flex justify-between items-center text-[10px] font-mono p-4">
                <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[#E9C99E] border border-white/10">{item.tag}</span>
                <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white/90 border border-white/10">{item.category}</span>
              </div>
              <div className="relative z-10 p-4 pt-0">
                <h4 className="text-sm font-bold text-white drop-shadow truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          );
        }
        return (
          <div className="w-full h-full bg-[#121214] p-5 flex flex-col justify-between text-white">
            <div className="text-[9px] font-mono text-[#E9C99E]">{item.category}</div>
            <div className="my-auto text-center">
              <h4 className="text-base font-bold text-white">{item.title}</h4>
              <p className="text-[10px] text-white/60 mt-1">{item.tag}</p>
            </div>
            <div className="text-[9px] font-mono text-white/40 text-center">{item.tools[0]}</div>
          </div>
        );
    }
  };

  return (
    <section id="social-gallery" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E9C99E] font-mono block mb-2">
              03 — Social Media Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
              SOCIAL MEDIA DESIGN
            </h2>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#0E0E10] border border-white/[0.08] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-md ${
                  activeFilter === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#B8B8B8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setActiveImageIndex(0);
              }}
              className="group cursor-pointer bg-[#0A0A0C] border border-white/[0.08] hover:border-[#E9C99E]/40 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              {/* Visual Preview */}
              <div className="relative w-full aspect-square overflow-hidden bg-black">
                {renderSocialVisual(item)}
                {item.galleryImages && item.galleryImages.length > 1 && (
                  <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded border border-white/20 text-[10px] font-mono text-[#E9C99E]">
                    <span>{item.galleryImages.length} Slides</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#E9C99E]">
                  <span>{item.category}</span>
                  <span className="text-white/40">{item.tag}</span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-[#E9C99E] transition-colors truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Section: E-Commerce & Luxury Bags Collection */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="bg-gradient-to-br from-[#180F16] via-[#120B13] to-[#0A070B] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#DB2777]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Visual Showcase Carousel */}
              <div className="lg:col-span-6 flex flex-col items-center space-y-3 w-full">
                <div
                  className="relative group cursor-pointer w-full max-w-md aspect-square rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl transition-all duration-300 hover:border-[#F472B6]/40"
                  onClick={() => {
                    const item = SOCIAL_GALLERY.find((i) => i.id === 'soc-13');
                    if (item) {
                      setSelectedItem(item);
                      setActiveImageIndex(activeBagIndex);
                    }
                  }}
                >
                  {/* Ambient backdrop blur */}
                  <img
                    src={BAG_POSTERS[activeBagIndex].url}
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                  />

                  {/* Main Active Bag Poster */}
                  <img
                    key={BAG_POSTERS[activeBagIndex].url}
                    src={BAG_POSTERS[activeBagIndex].url}
                    alt={BAG_POSTERS[activeBagIndex].title}
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBagIndex((prev) => (prev === 0 ? BAG_POSTERS.length - 1 : prev - 1));
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-lg"
                    aria-label="Previous bag poster"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBagIndex((prev) => (prev === BAG_POSTERS.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-lg"
                    aria-label="Next bag poster"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded border border-white/15 text-[11px] font-mono text-[#F472B6]">
                    <span>BAGS COLLECTION</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/80">{activeBagIndex + 1}/{BAG_POSTERS.length}</span>
                  </div>

                  {/* Hover Inspect CTA */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 bg-white text-black text-xs font-bold font-mono tracking-widest rounded-lg uppercase shadow-2xl flex items-center gap-2">
                      <ZoomIn className="w-4 h-4" />
                      <span>INSPECT ARTWORK</span>
                    </span>
                  </div>
                </div>

                {/* 4 Thumbnail Selectors */}
                <div className="grid grid-cols-4 gap-2 w-full max-w-md pt-1">
                  {BAG_POSTERS.map((poster, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveBagIndex(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden border transition-all ${
                        activeBagIndex === idx
                          ? 'border-[#F472B6] ring-2 ring-[#F472B6]/40 scale-105'
                          : 'border-white/10 hover:border-white/40 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`Select ${poster.title}`}
                    >
                      <img
                        src={poster.url}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Section Details & Breakdown */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#F472B6] font-mono">
                      03.B — E-Commerce &amp; Retail Social Architecture
                    </span>
                    <span className="text-white/40 font-mono text-xs">·</span>
                    <span className="text-xs font-mono text-white/60">
                      {BAG_POSTERS[activeBagIndex].tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">
                    BAGS COLLECTION — PROMOTIONAL POSTERS
                  </h3>
                  <p className="text-sm text-[#B8B8B8] mt-3 leading-relaxed">
                    A high-converting promotional campaign designed for luxury leather goods, backpacks, and accessories. Features soft pastel aesthetics, multi-product quadrant layouts, promotional sale callouts, and refined editorial brand typography.
                  </p>
                </div>

                {/* Specs / Tags */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">NICHE &amp; SECTOR</span>
                    <span className="text-white font-medium">Luxury Handbags &amp; Backpacks</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">PLATFORM</span>
                    <span className="text-white font-medium">Instagram Feed &amp; Carousel</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">DESIGN TOOLS</span>
                    <span className="text-white font-medium">Photoshop · Illustrator · Canva</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">CURATED POSTERS</span>
                    <span className="text-white font-medium">4 Commercial Campaign Pieces</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={BAG_POSTERS[activeBagIndex].pinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E60023] hover:bg-[#b8001b] text-white text-xs font-mono font-medium rounded-lg transition-colors shadow-lg"
                  >
                    <span>View on Pinterest ↗</span>
                  </a>
                  <button
                    onClick={() => {
                      const item = SOCIAL_GALLERY.find((i) => i.id === 'soc-13');
                      if (item) {
                        setSelectedItem(item);
                        setActiveImageIndex(activeBagIndex);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded-lg transition-colors border border-white/15"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Open Lightbox</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Section: Beauty & Cosmetics Promotional Architecture */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="bg-gradient-to-br from-[#1C0D18] via-[#140812] to-[#0A0409] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC4899]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Visual Showcase Carousel */}
              <div className="lg:col-span-6 flex flex-col items-center space-y-3 w-full">
                <div
                  className="relative group cursor-pointer w-full max-w-md aspect-square rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl transition-all duration-300 hover:border-[#EC4899]/40"
                  onClick={() => {
                    const item = SOCIAL_GALLERY.find((i) => i.id === 'soc-14');
                    if (item) {
                      setSelectedItem(item);
                      setActiveImageIndex(activeBeautyIndex);
                    }
                  }}
                >
                  {/* Ambient backdrop blur */}
                  <img
                    src={BEAUTY_POSTERS[activeBeautyIndex].url}
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                  />

                  {/* Main Active Beauty Poster */}
                  <img
                    key={BEAUTY_POSTERS[activeBeautyIndex].url}
                    src={BEAUTY_POSTERS[activeBeautyIndex].url}
                    alt={BEAUTY_POSTERS[activeBeautyIndex].title}
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBeautyIndex((prev) => (prev === 0 ? BEAUTY_POSTERS.length - 1 : prev - 1));
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-lg"
                    aria-label="Previous beauty poster"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBeautyIndex((prev) => (prev === BEAUTY_POSTERS.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-lg"
                    aria-label="Next beauty poster"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded border border-white/15 text-[11px] font-mono text-[#F43F5E]">
                    <span>BEAUTY &amp; SKINCARE</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/80">{activeBeautyIndex + 1}/{BEAUTY_POSTERS.length}</span>
                  </div>

                  {/* Hover Inspect CTA */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 bg-white text-black text-xs font-bold font-mono tracking-widest rounded-lg uppercase shadow-2xl flex items-center gap-2">
                      <ZoomIn className="w-4 h-4" />
                      <span>INSPECT ARTWORK</span>
                    </span>
                  </div>
                </div>

                {/* 16 Thumbnail Scroll Strip */}
                <div className="w-full max-w-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-1.5 px-0.5">
                    <span>SELECT POSTER</span>
                    <span>{activeBeautyIndex + 1} of {BEAUTY_POSTERS.length}</span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {BEAUTY_POSTERS.map((poster, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveBeautyIndex(idx)}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border transition-all ${
                          activeBeautyIndex === idx
                            ? 'border-[#EC4899] ring-2 ring-[#EC4899]/50 scale-105 opacity-100 shadow-md'
                            : 'border-white/10 hover:border-white/40 opacity-55 hover:opacity-90'
                        }`}
                        aria-label={`Select ${poster.title}`}
                      >
                        <img
                          src={poster.url}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-0 right-0 px-1 py-0.5 bg-black/80 text-[8px] font-mono text-white/90">
                          {idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Section Details & Breakdown */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#EC4899] font-mono">
                      03.C — Beauty &amp; Cosmetics Social Architecture
                    </span>
                    <span className="text-white/40 font-mono text-xs">·</span>
                    <span className="text-xs font-mono text-white/60">
                      {BEAUTY_POSTERS[activeBeautyIndex].tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">
                    BEAUTY &amp; SKINCARE — PROMOTIONAL POSTERS
                  </h3>
                  <p className="text-sm text-[#B8B8B8] mt-3 leading-relaxed">
                    High-impact promotional campaign architecture designed for cosmetics, luxury skincare, and beauty e-commerce sales. Features high-energy pink campaign branding, product hierarchy compositions, promotional coupon badges, and refined editorial beauty styling.
                  </p>
                </div>

                {/* Specs / Tags */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">NICHE &amp; SECTOR</span>
                    <span className="text-white font-medium">Cosmetics, Skincare &amp; Beauty</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">PLATFORM</span>
                    <span className="text-white font-medium">Instagram Feed &amp; Carousel</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">DESIGN TOOLS</span>
                    <span className="text-white font-medium">Photoshop · Illustrator · Canva</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/40 block mb-1">CURATED POSTERS</span>
                    <span className="text-white font-medium">16 Commercial Campaign Pieces</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={BEAUTY_POSTERS[activeBeautyIndex].pinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E60023] hover:bg-[#b8001b] text-white text-xs font-mono font-medium rounded-lg transition-colors shadow-lg"
                  >
                    <span>View on Pinterest ↗</span>
                  </a>
                  <button
                    onClick={() => {
                      const item = SOCIAL_GALLERY.find((i) => i.id === 'soc-14');
                      if (item) {
                        setSelectedItem(item);
                        setActiveImageIndex(activeBeautyIndex);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded-lg transition-colors border border-white/15"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Open Lightbox</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl bg-[#0E0E10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10">
              <span className="text-xs font-mono text-[#E9C99E] uppercase tracking-wider">
                {selectedItem.tag === 'PROMOTIONAL BANNER' || selectedItem.id === 'soc-2' || selectedItem.id === 'soc-burger-special'
                  ? 'PROMOTIONAL BANNER'
                  : selectedItem.tag === 'EVENT EDITS' || selectedItem.id === 'soc-4'
                  ? 'EVENT EDITS'
                  : selectedItem.tag === 'BAGS COLLECTION — PROMOTIONAL POSTERS' || selectedItem.id === 'soc-13'
                  ? 'BAGS COLLECTION — PROMOTIONAL POSTERS'
                  : selectedItem.tag === 'BEAUTY & COSMETICS' || selectedItem.id === 'soc-14'
                  ? 'BEAUTY & COSMETICS'
                  : `${selectedItem.category} Design Showcase`}
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 text-white/60 hover:text-white rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Canvas */}
            <div className="w-full aspect-square max-h-[460px] md:max-h-[500px] bg-black relative overflow-hidden group">
              {selectedItem.galleryImages && selectedItem.galleryImages.length > 0 ? (
                <div className="w-full h-full relative flex items-center justify-center bg-[#070509]">
                  {/* Subtle blurred backdrop for aesthetic mood */}
                  <img
                    src={selectedItem.galleryImages[activeImageIndex]?.url}
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 pointer-events-none"
                  />
                  {/* Active high-res artwork */}
                  <img
                    key={selectedItem.galleryImages[activeImageIndex]?.url}
                    src={selectedItem.galleryImages[activeImageIndex]?.url}
                    alt={selectedItem.galleryImages[activeImageIndex]?.label || selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-[1.01]"
                  />

                  {/* Top Badge: Active Slide Label & Counter */}
                  <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#E9C99E] border border-white/10 shadow-lg">
                      {selectedItem.galleryImages[activeImageIndex]?.label || `Editorial Slide ${activeImageIndex + 1}`}
                    </span>
                    <span className="bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white/90 border border-white/10 shadow-lg">
                      {activeImageIndex + 1} / {selectedItem.galleryImages.length}
                    </span>
                  </div>

                  {/* Previous Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) =>
                        prev === 0 ? selectedItem.galleryImages!.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-xl"
                    aria-label="Previous artwork"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) =>
                        prev === selectedItem.galleryImages!.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-xl"
                    aria-label="Next artwork"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Bottom Thumbnail Strip */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1.5 px-3 bg-black/80 backdrop-blur-md rounded-full border border-white/15 max-w-[90%] overflow-x-auto scrollbar-none">
                    {selectedItem.galleryImages.map((gImg, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all shrink-0 ${
                          idx === activeImageIndex
                            ? 'bg-[#E9C99E] w-5'
                            : 'bg-white/40 hover:bg-white/80 w-2'
                        }`}
                        aria-label={`View slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                renderSocialVisual(selectedItem)
              )}
            </div>

            {/* Details */}
            <div className="p-6 space-y-4 text-left">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#E9C99E] uppercase tracking-wider mb-2">
                  <span className="px-2 py-0.5 bg-[#E9C99E]/10 border border-[#E9C99E]/30 rounded font-semibold">
                    {selectedItem.tag === 'PROMOTIONAL BANNER' || selectedItem.id === 'soc-2' || selectedItem.id === 'soc-burger-special'
                      ? 'PROMOTIONAL BANNER'
                      : selectedItem.tag}
                  </span>
                  <span className="text-white/40 font-normal">· {selectedItem.category}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#B8B8B8] mt-1 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="text-white/40 block mb-1">Tools Used:</span>
                  <span className="text-white">{selectedItem.tools.join(' · ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  {(selectedItem.galleryImages
                    ? selectedItem.galleryImages[activeImageIndex]?.pinUrl || selectedItem.pinUrl
                    : selectedItem.pinUrl) && (
                    <a
                      href={
                        selectedItem.galleryImages
                          ? selectedItem.galleryImages[activeImageIndex]?.pinUrl || selectedItem.pinUrl
                          : selectedItem.pinUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-[#E60023] hover:bg-[#b8001b] text-white text-xs font-semibold rounded transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View on Pinterest ↗</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-[#E9C99E] transition-colors"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

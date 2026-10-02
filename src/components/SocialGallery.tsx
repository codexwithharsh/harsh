import React, { useState } from 'react';
import { SOCIAL_GALLERY } from '../data/portfolioData';
import { SocialGalleryItem } from '../types';
import { X, ZoomIn, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const SocialGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SocialGalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = ['All', 'Fashion', 'Food', 'Lifestyle', 'Marketing', 'Product', 'Campaign', 'Editorial'];

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
            className="relative w-full max-w-2xl bg-[#0E0E10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10">
              <span className="text-xs font-mono text-[#E9C99E] uppercase tracking-wider">
                {selectedItem.tag === 'PROMOTIONAL BANNER' || selectedItem.id === 'soc-2' || selectedItem.id === 'soc-burger-special'
                  ? 'PROMOTIONAL BANNER'
                  : selectedItem.tag === 'EVENT EDITS' || selectedItem.id === 'soc-4'
                  ? 'EVENT EDITS'
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
            <div className="w-full aspect-square max-h-[380px] bg-black relative overflow-hidden group">
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
                    className="relative z-10 w-full h-full object-contain"
                  />

                  {/* Top Badge: Active Slide Label & Counter */}
                  <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#E9C99E] border border-white/10 shadow-lg">
                      {selectedItem.galleryImages[activeImageIndex]?.label || `Editorial Slide ${activeImageIndex + 1}`}
                    </span>
                    <span className="bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-white/90 border border-white/10 shadow-lg">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-xl"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-md shadow-xl"
                    aria-label="Next artwork"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Bottom Thumbnail Strip */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1 bg-black/75 backdrop-blur-md rounded-full border border-white/15">
                    {selectedItem.galleryImages.map((gImg, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          idx === activeImageIndex
                            ? 'bg-[#E9C99E] w-6'
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

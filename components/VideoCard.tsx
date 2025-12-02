import React, { useState } from 'react';
import { Play, PlayCircle } from 'lucide-react';

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-4">
      <div 
        className="aspect-[9/16] max-w-sm mx-auto w-full bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-brand-700 relative group cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
              alt={`Vídeo: ${title}`}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              width="320"
              height="570"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-brand-600/90 text-white rounded-full p-4 transform group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          </>
        ) : (
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
            title={title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="text-center md:text-left max-w-sm mx-auto">
         <h3 className="font-bold text-white text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
           <PlayCircle className="text-brand-300" /> {title}
         </h3>
         <p className="text-brand-100 text-sm leading-relaxed">
            {description}
         </p>
      </div>
    </div>
  );
};
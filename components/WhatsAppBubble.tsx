import React from 'react';

interface WhatsAppBubbleProps {
  name: string;
  message: string;
  time: string;
}

export const WhatsAppBubble: React.FC<WhatsAppBubbleProps> = ({ name, message, time }) => {
  return (
    <div className="bg-[#E5DDD5] p-4 rounded-xl shadow-lg max-w-sm mx-auto w-full border border-gray-200">
      <div className="flex flex-col bg-white rounded-lg p-3 relative shadow-sm">
        <p className="text-xs font-bold text-orange-600 mb-1">{name}</p>
        <p className="text-gray-800 text-sm leading-relaxed">{message}</p>
        <div className="text-[10px] text-gray-400 text-right mt-1 flex justify-end items-center gap-1">
          {time}
          <span className="text-blue-500">
             <svg viewBox="0 0 16 15" width="16" height="15" className="fill-current"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.283a2.203 2.203 0 0 0 3.03-.294l6.118-7.378a.365.365 0 0 0-.063-.51zM6.16 11.219a1.567 1.567 0 0 1-2.155.209L.548 8.313a.296.296 0 0 1 .026-.384l.445-.458a.352.352 0 0 1 .496.012l3.053 3.039a.41.41 0 0 0 .584-.017l.078-.073a.352.352 0 0 1 .496.012l.46.471a.296.296 0 0 1-.026.385v-.081z"></path></svg>
          </span>
        </div>
        {/* Triangle tail */}
        <div className="absolute top-0 -right-2 w-0 h-0 border-t-[10px] border-t-white border-r-[10px] border-r-transparent"></div>
      </div>
    </div>
  );
};
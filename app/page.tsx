'use client';
import emojis from '@/Data/emoji';
import React, { useState } from 'react';

function Home() {
  const [selectedEmoji, setSelectedEmoji] = useState({});
  const handleEmojiClick = (emojiId, category) => {
    setSelectedEmoji((prevSelectedEmojis) => ({
      ...prevSelectedEmojis,
      [category]: emojiId,
    }));
  };
  return (
    <div className="p-4 bg-[#F9FBFF] flex flex-col gap-y-5">
      {emojis.map((emoji) => (
        <div key={emoji.id} className="flex flex-col justify-start gap-y-2">
          <div className="text-xs font-medium">{emoji.title}</div>
          <div className="flex flex-row items-center gap-x-3">
            {emoji.emojis.map((item) => (
              <div
                key={item.id}
                className={`text-[#0199F4] text-[32px]   hover:bg-[#3374F1] hover:text-white cursor-pointer p-2 rounded-lg ${
                  selectedEmoji[emoji.title] === item.id
                    ? 'bg-[#3374F1] text-white'
                    : 'bg-[#3374F11A]'
                }`}
                onClick={() => handleEmojiClick(item.id, emoji.title)}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

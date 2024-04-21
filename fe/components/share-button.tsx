'use client'

import React from 'react';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon
} from 'react-share';

export default function SharesButton() {
  const shareUrl = 'https://example.com'; // URL yang ingin Anda bagikan
  const title = 'Judul artikel yang ingin Anda bagikan'; // Judul artikel yang ingin Anda bagikan

  return (
    <div className='mt-5 flex gap-3 px-1'>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}


import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Главная',
      href: getPermalink('/'),
    },
    {
      text: 'Услуги',
      href: getPermalink('/services'),
    },
    {
      text: 'Цены',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Контакты',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Telegramm', icon: 'tabler:brand-telegram', href: '#' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'Yandex', icon: 'tabler:brand-yandex', href: '#' },
    { ariaLabel: 'Mail', icon: 'tabler:brand-vk', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://LuxorWraps.moscow/"> LuxorWraps</a> · All rights reserved.
  `,
};

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
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://LuxorWraps.moscow/"> LuxorWraps</a> · All rights reserved.
  `,
};

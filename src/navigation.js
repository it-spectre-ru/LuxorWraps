import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Главная',
      href: getPermalink('/'),
    },
    {
      text: 'Цены',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Блог',
      href: getPermalink('/blog'),
    },

    // {
    //   text: 'Услуги',
    //   href: getPermalink('/services'),
    // },
    // {
    //   text: 'Контакты',
    //   href: getPermalink('/contact'),
    // },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Блог',
      links: [
        { text: 'Цены', href: '/pricing' },
        { text: 'Статьи', href: '/blog' },
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
    <a class="text-blue-600 underline dark:text-muted" href="https://LuxorWraps.moscow/"> LuxorWraps</a> 	&reg; Все права защищены.
  `,
};

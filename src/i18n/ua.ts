import type { Content } from './types';
import posTerminalImg from '../assets/projects/pos.png';
import kitchenScreenImg from '../assets/projects/kitchenscreen.png';
import aiChatImg from '../assets/projects/kova.png';

export const ua: Content = {
  navAbout: 'Про мене',
  navExperience: 'Досвід',
  navSkills: 'Навички',
  navProjects: 'Проєкти',
  navContact: 'Контакти',
  navCta: "Зв'язатися",
  initials: 'Б.Г.',

  badge: 'ДОСТУПНИЙ ДЛЯ НОВИХ ПРОЄКТІВ',
  name1: "Богдан",
  name2: 'Гніденко',
  role: 'Frontend розробник, що прокачує Fullstack',
  heroText:
    'Створюю сучасні, продуктивні інтерфейси на Vue та TypeScript. Останнім часом активно розширюю стек у бік бекенду — вивчаю Node.js та роботу з базами даних, щоб впевнено закривати задачі від інтерфейсу до API.',
  ctaContact: "Зв'язатися →",
  ctaProjects: 'Переглянути проєкти',
  ctaResume: 'Завантажити резюме',
  yearsLabel: 'років досвіду',
  photoLabel: 'ФОТО / АВАТАР',

  aboutHeading: 'Про мене',
  aboutText:
    'Понад 3 роки працюю frontend-розробником — впевнено володію Vue та TypeScript, будую інтерфейси, які приємно використовувати. Останнім часом активно розвиваюсь у fullstack-напрямку: вивчаю Node.js, роботу з базами даних та проєктування API. Ціную прозору комунікацію та код, який легко підтримувати.',
  stat1Label: 'проєкти в продукті',
  stat2Label: 'технологій',
  stat3Label: 'роки в команді',

  expHeading: 'Досвід роботи',
  experience: [
    {
      period: 'бер. 2025 — трав. 2026',
      role: 'Middle Frontend розробник',
      company: 'SkyService POS',
      description:
        'Інтеграція сторонніх POS API, розробка екрану кухні та інтерфейсів керування замовленнями на Vue.js та Vuex, впровадження Google/Apple OAuth, доставка нових фіч у продакшн у кросфункціональній команді.',
    },
    {
      period: 'черв. 2023 — бер. 2025',
      role: 'Junior Frontend розробник',
      company: 'SkyService POS',
      description:
        'Оптимізація рендерингу продуктів у Vue.js-застосунку, рефакторинг застарілої логіки завантаження даних на callback-підхід, міграція кодової бази на async/await.',
    },
  ],

  skillsHeading: 'Навички та стек',
  skillGroups: [
    { label: 'Frontend', items: ['Vue', 'TypeScript', 'Vuex/Pinia', 'WebSockets', 'CSS/SCSS'] },
    { label: 'Backend (вивчаю)', items: ['Node.js', 'PostgreSQL', 'REST API'] },
    { label: 'Інструменти', items: ['Docker', 'Git', 'CI/CD', 'Figma'] },
  ],

  projectsHeading: 'Проєкти',
  projectImgLabel: 'СКРІНШОТ ПРОЄКТУ',
  projects: [
    {
      title: 'POS-термінал',
      description:
        'Інтерфейс каси для SaaS-платформи громадського харчування: оформлення замовлень, оплати, робота в реальному часі через WebSockets.',
      tags: ['Vue', 'TypeScript', 'Vuex', 'WebSockets'],
      url: '#',
      image: posTerminalImg,
      sourceBadge: 'Скріншот з SkyservicePOS',
    },
    {
      title: 'Kitchen Screen',
      description:
        'Екран кухні для відображення та керування замовленнями в реальному часі, синхронізація з POS-терміналом.',
      tags: ['Vue', 'TypeScript', 'WebSockets'],
      url: '#',
      image: kitchenScreenImg,
      sourceBadge: 'Скріншот з SkyservicePOS',
    },
    {
      title: 'AI Chat',
      description:
        'Власний проєкт: чат із використанням AI та авторизацією. Vue 3 + TypeScript на фронтенді, Node.js + PostgreSQL на бекенді.',
      tags: ['Vue', 'TypeScript', 'Node.js', 'PostgreSQL'],
      url: '#',
      image: aiChatImg,
    },
  ],

  contactHeading: 'Контакти',
  contactText:
    "Відкритий до нових проєктів та пропозицій. Найшвидше зі мною зв'язатися поштою — відповідаю впродовж дня.",
  contactResumeCta: 'Завантажити резюме (PDF)',
  formName: "ІМ'Я",
  formEmail: 'EMAIL',
  formMessage: 'ПОВІДОМЛЕННЯ',
  formNamePh: 'Як до вас звертатися',
  formMessagePh: 'Розкажіть про проєкт або пропозицію',
  formSubmit: 'Надіслати →',
  formThanksTitle: 'Дякую за повідомлення!',
  formThanksText: 'Відповім найближчим часом на вказану пошту.',

  footerMade: 'Зроблено з увагою до деталей',
};

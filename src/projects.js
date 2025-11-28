// Place project screenshots in `public/projects/<slug>/` and set `path` to `/projects/<slug>/<file>`.
// Optional: add `heroImage` (ex: `/projects/<slug>/hero.png`) to use an image in the project hero.
export const projects = [
  {
    slug: 'empeiria-wallet',
    name: 'Empeiria Wallet',
    role: 'Lead mobile',
    summary: 'Decentralized wallet for storing and sharing credentials with biometric unlock and QR flows.',
    description:
      'Led the mobile team building a decentralized React Native wallet for credentials like tickets and certificates. Implemented biometric unlock, QR scanning, issuer logins, and receive/share flows. Delivered NPM packages for signing utilities and a React Native wallet SDK that manages local credential storage.',
    stack: ['React Native', 'Biometrics', 'QR Scanning', 'Crypto Signatures', 'NPM SDKs', 'React Native Storage'],
    contributions: [
      'Led the mobile team delivering the React Native wallet experience',
      'Implemented biometric unlock, QR scanning, and issuer login flows',
      'Built receive and share flows for credentials such as tickets and certificates',
      'Released NPM packages for signing utilities and the wallet storage SDK',
    ],
    outcomes: [
      'Core credential lifecycle shipped on mobile: receive, store, share',
      'Reusable NPM packages standardized signing and wallet storage',
      'Enabled issuer demo integrations for credential pickup',
    ],
    links: [

      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=io.empe.wallet&hl=pl',
        detail: 'Android app listing',
        icon: 'play',
      },
    {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/empe-wallet/id6468363115',
        detail: 'IOS app listing',
        icon: 'play',
    },
      {
        label: 'Wallet SDK (NPM)',
        href: 'https://www.npmjs.com/package/@empe/wallet-react-native',
        detail: 'React Native storage + credential core',
        icon: 'npm',
      },
      {
        label: 'Signature Kit (NPM)',
        href: 'https://www.npmjs.com/package/@empe/identity',
        detail: 'Signing and verification utilities',
        icon: 'npm',
      },
      {
        label: 'Issuer Demo',
        href: 'https://demo.empe.io/',
        detail: 'Credential pickup demo',
        icon: 'globe',
      },
    ],
    heroColor: 'from-cyan-400 via-sky-400 to-blue-600',
    heroImage: '/projects/empeiria-wallet/hero.png',
    images: [
      { title: 'Wallet home', path: '/projects/empeiria-wallet/pin.png', placeholder: true },
      { title: 'Onboarding', path: '/projects/empeiria-wallet/home.png', placeholder: true },
      { title: 'Security', path: '/projects/empeiria-wallet/vc.png', placeholder: true },
    ],
  },

    {
        slug: 'climbalot',
        name: 'Climbalot',
        role: 'Mobile engineer',
        summary: 'Polish climbing crag database with maps, routing, grades, and favorites.',
        description:
            'Built an Expo mobile app for a Polish climbing crag database with Mapbox maps, routing to crags and parking, difficulty grading, and favorites. Set up GitHub Actions CI, unit tests, Maestro E2E, and EAS workflows for automated store updates.',
        stack: ['Expo', 'React Native', 'Mapbox', 'EAS', 'GitHub Actions', 'Maestro'],
        contributions: [
            'Built the Expo-based mobile app with Mapbox maps and crag discovery',
            'Implemented routing to crags and parking with difficulty grades',
            'Added favorites and saved crag lists',
            'Wrote unit tests plus Maestro E2E coverage',
            'Configured GitHub Actions CI and EAS workflows for store updates',
        ],
        outcomes: [
            'Automated App Store and Google Play updates via EAS workflows',
            'Reliable map + routing experience for Polish crags',
            'Regression coverage with unit and E2E suites',
        ],
        links: [
            {

                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.fundacjawspinka.climbalot&hl=pl',
                detail: 'Android app listing',
                icon: 'play',
            },
            // {
            //     label: 'App Store',
            //     href: '',
            //     detail: 'iOS app listing',
            //     icon: 'link',
            // },
            // {
            //     label: 'Project site',
            //     href: '',
            //     detail: 'Climbing crag database',
            //     icon: 'globe',
            // },
        ],
        heroColor: 'from-cyan-400 via-sky-400 to-blue-600',
        heroImage: '/projects/climbalot/hero.png',
        images: [
            { title: 'Crag map', path: '/projects/climbalot/map.webp', placeholder: true },
            { title: 'Crag detail',  path: '/projects/climbalot/organizer.webp', placeholder: true },
            { title: 'Routing',  path: '/projects/climbalot/route.webp', placeholder: true },
        ],
    },
  {
    slug: 'cupio-ai',
    name: 'Cupio AI',
    role: 'Mobile engineer',
    summary: 'React Native wellbeing app with daily anti-burnout activities and psychologist chat.',
    description:
      'Built the mobile front end for a React Native app focused on preventing workplace burnout. Implemented daily activities, an in-app psychologist chat, voice message recording, and audio/video playback.',
    stack: ['React Native', 'In-app Chat', 'Voice Recording', 'Audio Playback', 'Video Playback'],
    contributions: [
      'Built daily activity flows that guide users through wellbeing routines',
      'Implemented real-time chat UI with psychologist support',
      'Added voice message recording and playback UX',
      'Integrated video and audio playback components',
    ],
    outcomes: [
      'Shipped core wellbeing, chat, and media experiences on mobile',
      'Consistent media playback experience across key flows',
    ],
    heroColor: 'from-rose-400 via-pink-500 to-purple-600',
      heroImage: '/projects/cupio-ai/hero.png',
    images: [
      { title: 'Discovery', path: '/projects/cupio-ai/auth.webp', placeholder: true },
      { title: 'Chat', path: '/projects/cupio-ai/home.webp', placeholder: true },
      { title: 'Profile', path: '/projects/cupio-ai/chat.webp', placeholder: true },
    ],
      links: [
          {

              label: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.cupioai',
              detail: 'Android app listing',
              icon: 'play',
          },
          {

              label: 'Website',
    href: 'https://serwer1658208.home.pl/cupio/',
    detail: 'Android app listing',
    icon: 'globe',
}

]
  },
  {
    slug: 'empeiria-oneclick',
    name: 'Empeiria Platform',
    role: 'Fullstack',
    summary: 'One-click platform for deploying issuer, verifier, and wallet-server services.',
    description:
      'Built the Next.js console for provisioning issuer, verifier, and wallet-server services. On the backend, designed the issuance and verification logic across Express and NestJS services, backed by Postgres and documented with Swagger. Delivered a NestJS wallet service for an AI agent to store credentials, mirroring the mobile wallet model.',
    stack: ['Next.js', 'Express.js', 'NestJS', 'PostgreSQL', 'Swagger', 'Credential Issuance'],
    contributions: [
      'Built the Oneclick Next.js UI for deploying issuer/verifier/wallet-server stacks',
      'Designed issuance and verification flows across backend services',
      'Implemented the NestJS wallet service for AI agent credential storage',
      'Documented APIs with Swagger and wired Postgres persistence',
    ],
    outcomes: [
      'Unified deployment surface for issuer, verifier, and wallet services',
      'Shared credential logic between AI agent wallet and mobile wallet',
    ],
      links: [
          {
              label: 'One Click',
              href: 'https://oneclick.empe.io',
              detail: 'Next.js admin console',
              icon: 'globe',
          },
          {
              label: 'Issuer Docs',
              href: 'https://empe-demo-prod-mainnet-issuer.evdi.app/api-docs/',
              detail: 'Issuer API',
              icon: 'globe',
          },
          {
              label: 'Verifier Docs',
              href: 'https://empe-demo-prod-mainnet-verifier.evdi.app/api-docs/',
              detail: 'Verifier API',
              icon: 'globe',
          },
          {
              label: 'Wallet Docs',
              href: 'https://agents-wallet.evdi.app/api-docs',
              detail: 'Wallet API',
              icon: 'globe',
          }
      ],
    heroColor: 'from-amber-400 via-orange-500 to-red-500',
      heroImage: '/projects/empeiria-oneclick/hero.png',
    images: [
      { title: 'Admin dashboard',  path: '/projects/empeiria-oneclick/auth.png', placeholder: false },
      { title: 'Logs/metrics',  path: '/projects/empeiria-oneclick/home.png', placeholder: false },
      { title: 'Feature flags', path: '/projects/empeiria-oneclick/new-issuer.png', placeholder: false },
    ],
  },
  {
    slug: 'home-profit',
    name: 'Home Profit',
    role: 'Mobile frontend',
    summary: 'React Native discounts app with coupons, store galleries, and promo catalogs.',
    description:
      'Built a React Native app aggregating discounts and coupons for retail brands such as JYSK, Brico, and Castorama. Delivered store galleries, articles, and weekly promo catalogs for browsing deals.',
    stack: ['React Native', 'Mobile UI', 'Content Feeds', 'Media Galleries'],
    contributions: [
      'Built the mobile app UI in React Native end-to-end',
      'Implemented coupon browsing, store galleries, and article feeds',
      'Added promo catalog views for weekly leaflets',
      'Optimized media-heavy screens for smooth scrolling',
    ],
    outcomes: [
      'Delivered a complete mobile discounts experience across core sections',
      'Smooth browsing across coupons, articles, and galleries',
    ],
      links: [

          {
              label: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=me.adwise.homeprofit&hl=pl',
              detail: 'Android app listing',
              icon: 'play',
          },
          {
              label: 'App Store',
              href: 'https://apps.apple.com/pl/app/homeprofit/id1388067675',
              detail: 'IOS app listing',
              icon: 'play',
          },
      ],
      heroImage:'/projects/home-profit/hero.png',
    heroColor: 'from-emerald-400 via-green-500 to-lime-400',
    images: [
      { title: 'Dashboard', path: '/projects/home-profit/home.webp', placeholder: true },
      { title: 'Map view',  path: '/projects/home-profit/article.webp', placeholder: true },
      { title: 'Lead form',  path: '/projects/home-profit/discount.webp', placeholder: true },
    ],
  },
  {
    slug: 'modnie-w-oknie',
    name: 'Modnie w Oknie',
    role: 'Fullstack',
    summary: 'E-commerce platform for purchasing roller blinds online.',
    description:
      'Delivered fullstack improvements in a Ruby on Rails + React storefront. Upgraded Ruby and Rails, built the blog section, and shipped new features across the Rails backend and React UI.',
    stack: ['Ruby on Rails', 'Ruby', 'React', 'E-commerce', 'Blog'],
    contributions: [
      'Upgraded Ruby and Rails to newer versions',
      'Implemented the blog section within the storefront',
      'Built new features across Rails backend and React UI',
      'Handled end-to-end fullstack delivery',
    ],
    outcomes: [
      'Modernized the platform runtime and dependencies',
      'Expanded content marketing with a dedicated blog',
    ],
      links: [
          {
              label: 'Website',
              href: 'https://www.modniewoknie.pl/',
              detail: 'Modnie w Oknie website',
              icon: 'globe',
          }
      ],
    heroColor: 'from-purple-400 via-indigo-500 to-blue-500',
      heroImage: '/projects/modnie-w-oknie/hero.png',
    images: [
        { title: 'Checkout', path: '/projects/modnie-w-oknie/home.png', placeholder: false },
      { title: 'Catalog', path: '/projects/modnie-w-oknie/blog.png', placeholder: false },
      { title: 'Product detail', path: '/projects/modnie-w-oknie/blog-detail.png', placeholder: false },

    ],
  },
  {
    slug: 'sensus-ai',
    name: 'Sensus AI',
    role: 'Frontend',
    summary: 'Next.js app using face-api.js to build viewer psychology profiles from video sessions.',
    description:
      'Built the Next.js front end and integrated face-api.js to capture facial data while users watched videos. The captured signals powered psychological profiling and insight views.',
    stack: ['Next.js', 'face-api.js', 'Video Playback', 'Analytics UI', 'User Profiling'],
    contributions: [
      'Built the Next.js UI for video sessions and analysis views',
      'Integrated face-api.js for facial signal capture during playback',
      'Delivered profile visualization flows based on captured signals',
      'Refined UX for continuous capture and review states',
    ],
    outcomes: [
      'Enabled facial signal capture to inform psychological profiles',
      'Shipped the core analysis experience in a production UI',
    ],
    links: [
      {
        label: 'Website',
        href: 'https://sensusmind.com/',
        detail: 'Live experience walkthrough',
        icon: 'globe',
      },
    ],
    heroColor: 'from-blue-400 via-cyan-400 to-emerald-400',
      heroImage: '/projects/sensus-ai/hero.png',
    images: [
      { title: 'Insights feed',  path: '/projects/sensus-ai/home.png', placeholder: true },
      { title: 'Review queue', path: '/projects/sensus-ai/test.png', placeholder: true },
      { title: 'Reports', path: '/projects/sensus-ai/test-onboarding.png', placeholder: true },
    ],
  },
  {
    slug: 'issuer-demo',
    name: 'Issuer Demo',
    role: 'Fullstack',
    summary: 'Demo app showcasing issuance flows with clear UX and validations.',
    description:
      'Built a demo experience for issuance flows with guided steps, validation, and telemetry. Kept performance tight and flows easy to follow.',
    stack: ['React', 'Vite', 'Tailwind', 'Playwright'],
    contributions: [
      'Designed multi-step wizard with validation and success states',
      'Implemented form components and reusable inputs',
      'Added e2e tests for happy and edge cases',
      'Instrumented analytics for drop-off analysis',
    ],
    outcomes: [
      'Clearer demo story for sales calls',
      'Stable flows with regression tests',
    ],
      links: [
          {
              label: 'Issuer Demo',
              href: 'https://demo.empe.io/',
              detail: 'Credential pickup demo',
              icon: 'globe',
          },
          {
              label: 'Wallet SDK (NPM)',
              href: 'https://www.npmjs.com/package/@empe/wallet-react-native',
              detail: 'React Native storage + credential core',
              icon: 'npm',
          },
      ],
    heroColor: 'from-slate-500 via-slate-600 to-slate-700',
      heroImage: '/projects/issuer-demo/hero.png',
    images: [
      { title: 'Wizard',  path: '/projects/issuer-demo/home.png', placeholder: true },
      { title: 'Validation',  path: '/projects/issuer-demo/pop.png', placeholder: true },
      { title: 'Success',  path: '/projects/issuer-demo/bc.png', placeholder: true },
    ],
  },
  {
    slug: 'idpp-demo',
    name: 'IDPP Demo',
    role: 'Fullstack',
    summary: 'Digital Product Passport demo with wallet-based login and DID document views.',
    description:
      'Built a Next.js front end with an Express.js backend to demonstrate Digital Product Passports. Users log in with a wallet credential, create a sample product, and inspect its DID document.',
    stack: ['Next.js', 'Express.js', 'Digital Product Passport', 'DID Documents', 'Credential Login'],
    contributions: [
      'Built the Next.js UI for credential login and product flows',
      'Implemented Express.js APIs for product creation and passport data',
      'Integrated wallet-based login for the demo experience',
      'Rendered DID document views for created products',
    ],
    outcomes: [
      'End-to-end demo of DPP login, product creation, and DID inspection',
      'Clear walkthrough of Digital Product Passport capabilities',
    ],
      links: [
          {
              label: 'Digital Product Passport Demo',
              href: 'https://wef-demo.empe.io',
              detail: 'IDPP demo',
              icon: 'globe',
          },
          {
              label: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=io.empe.wallet&hl=pl',
              detail: 'Android app listing',
              icon: 'play',
          },
      ],
    heroColor: 'from-teal-400 via-cyan-500 to-blue-600',
      heroImage: '/projects/idpp-demo/hero.png',
    images: [
      { title: 'Identity flow', path: '/projects/idpp-demo/home.png', placeholder: true },
      { title: 'Device check', path: '/projects/idpp-demo/product-detail.png', placeholder: true },
      { title: 'Profile', path: '/projects/idpp-demo/verifier-portal.png', placeholder: true },
    ],
  },
];

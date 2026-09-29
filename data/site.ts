export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Marina Mattos',
  monogram: 'MM',
  headline: 'O extraordinário que existe em você.',
  cro: 'CRO/RJ 44152',
  bio: 'Cirurgiã-dentista formada pela UFF, a Dra. Marina Mattos atua em harmonização orofacial em Cabo Frio. Seu trabalho parte de uma avaliação individual e de um olhar atento à expressão de cada pessoa.',
  education: ['Cirurgiã-dentista • UFF'] as string[],
  specialties: ['Harmonização orofacial', 'Estética facial', 'Planejamento individual'],
  phone: '',
  whatsapp: '',
  whatsappUrl: 'https://wa.me/message/LGBXJZ3GFVOVA1',
  address: 'Leste Shopping • Cabo Frio, RJ',
  professionalPhilosophy: 'Esculpindo faces e revelando extraordinários ocultos.',
  instagram: 'https://www.instagram.com/dra.marinamattos/',
  instagramHandle: '@dra.marinamattos',
  philosophy: ['SEUS TRAÇOS.', 'SUA EXPRESSÃO.', 'SUA BELEZA.'],
  colors: { paper: '#f5f0e8', ink: '#29221d', taupe: '#92785f', champagne: '#d7ba84', dark: '#201a17', wine: '#2a211c', muted: '#6c6157' },
  images: { hero: '/images/marina-hero.webp', essence: '/images/marina-essencia.webp', about: '/images/marina-sobre.webp', beauty: '/images/marina-experiencia.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Expressão e equilíbrio', alt: 'Comparativo facial frontal de antes e depois de tratamento realizado pela Dra. Marina Mattos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1226 / 1600 },
    { image: '/images/resultado-02.webp', label: 'Definição do perfil', alt: 'Comparativo em três quartos de antes e depois de tratamento facial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1244 / 1600 },
    { image: '/images/resultado-03.webp', label: 'Leveza no olhar', alt: 'Comparativo facial frontal de antes e depois de harmonização orofacial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1246 / 1600 },
    { image: '/images/resultado-04.webp', label: 'Naturalidade em cada detalhe', alt: 'Comparativo frontal de antes e depois de tratamento facial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1258 / 1600 },
    { image: '/images/resultado-05.webp', label: 'Contornos com sutileza', alt: 'Comparativo de perfil em três quartos, antes e depois.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1591 },
    { image: '/images/resultado-06.webp', label: 'Harmonia da expressão', alt: 'Comparativo facial frontal de antes e depois de tratamento.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1283 / 1576 },
    { image: '/images/resultado-07.webp', label: 'Beleza em perspectiva', alt: 'Comparativo lateral de antes e depois de harmonização facial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1282 / 1502 },
  ] },
  seo: { title: 'Dra. Marina Mattos | Harmonização Orofacial em Cabo Frio', description: 'Conheça o olhar da Dra. Marina Mattos para a harmonização orofacial e agende sua avaliação em Cabo Frio, RJ.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;

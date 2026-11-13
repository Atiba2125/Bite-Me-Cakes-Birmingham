const a = (f) => `/assets/${f}`;

export const BRAND = {
  name: 'Bite Me Cakes! Birmingham',
  short: 'Bite Me Cakes!',
  tagline: 'Luxury bespoke cakes',
  phone: '07950 364874',
  tel: 'tel:+447950364874',
  email: 'biteme_cakes@yahoo.com',
  area: ['Netherhall Park', 'Birmingham B43 7DN'],
  map: 'https://www.google.com/maps/search/?api=1&query=Netherhall+Park+Birmingham+B43+7DN',
  mapEmbed: 'https://www.google.com/maps?q=Netherhall+Park+Birmingham+B43+7DN&output=embed',
  instagram: 'https://www.instagram.com/bitemecakesbirmingham/',
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/cakes', label: 'Our Cakes' },
  { to: '/order', label: 'How to Order' },
  { to: '/about', label: 'About Sheena' },
];

export const MARQUEE = ['Birthday Cakes', 'Drip Cakes', 'Wedding Cakes', 'Novelty Cakes', 'Cupcakes', 'Treat Boxes', 'Brownies', 'Vegan & Gluten-Free'];

export const STATS = [
  { end: 4.9, dec: 1, label: 'Google rating' },
  { end: 158, label: 'Google reviews' },
  { end: 2.3, dec: 1, suffix: 'K+', label: 'Instagram followers' },
  { end: 5, suffix: '★', label: 'Reviews & hygiene' },
];

export const REVIEWS = [
  { text: 'Fantastic! The cake looked absolutely amazing and it tasted beautiful! It really made the birthday celebration extra special!', who: 'Google review' },
  { text: 'Sheena was amazing. The cake she made for my partner’s 60th was incredible and so delicious.', who: 'Google review' },
  { text: 'I ordered a Peaky Blinders themed birthday cake for my son’s 18th and the result was superb. A delicious layered chocolate cake with gorgeous design.', who: 'Google review' },
  { text: 'Catered to our specific needs and created a beautiful and delicious birthday cake.', who: 'Google review' },
];

export const RAINBOW = ['#e0453a', '#f08a24', '#f4c430', '#4aa860', '#2f78c4', '#7a4bb0'];

/* ---------------- Gallery (photos from Bite Me Cakes' Instagram) ---------------- */
export const CATEGORIES = [
  { id: 'cakes', label: 'Celebration Cakes' },
  { id: 'drip', label: 'Drip Cakes' },
  { id: 'boxes', label: 'Cupcakes & Treat Boxes' },
  { id: 'brownies', label: 'Brownies' },
];

export const CAKES = [
  { id: 'rainbow', title: 'Rainbow Cake', cat: 'cakes', img: a('rainbow.jpg'), caption: 'Smooth buttercream outside, a burst of rainbow colour in every slice.' },
  { id: 'choc-drip', title: 'Chocolate Drip Cake', cat: 'drip', img: a('choc-drip.jpg'), caption: 'Chocolate drip topped with chocolate bars and truffles.' },
  { id: 'cupcakes', title: 'Personalised Cupcakes', cat: 'boxes', img: a('cupcakes.jpg'), caption: 'Swirled buttercream roses with named birthday toppers.' },
  { id: 'vintage', title: 'Vintage Buttercream Cake', cat: 'cakes', img: a('vintage.jpg'), caption: 'Piped buttercream with a personal message in the centre.' },
  { id: 'navy-drip', title: 'Navy & Gold Drip Cake', cat: 'drip', img: a('navy-drip.jpg'), caption: 'Navy and cream with a gold drip, gold leaf and macarons.' },
  { id: 'treat-box', title: 'Birthday Treat Box', cat: 'boxes', img: a('treat-box.jpg'), caption: 'Macarons, cupcakes, meringue kisses and personalised biscuits.' },
  { id: 'roses', title: 'Two-Tier Floral Cake', cat: 'cakes', img: a('roses.jpg'), caption: 'Textured buttercream tiers finished with fresh roses.' },
  { id: 'sixty', title: '60th Birthday Drip Cake', cat: 'drip', img: a('sixty.jpg'), caption: 'Navy drip with a sparkling gold topper.' },
  { id: 'valentine-box', title: 'Valentine’s Treat Box', cat: 'boxes', img: a('valentine-box.jpg'), caption: 'Cookie hearts, brownies, strawberries and sweet treats.' },
  { id: 'black-gold', title: 'Black & Gold Drip Cake', cat: 'drip', img: a('black-gold.jpg'), caption: 'Black with gold leaf and a gold drip.' },
  { id: 'brownie', title: 'Giant Ferrero Brownie', cat: 'brownies', img: a('brownie.jpg'), caption: 'A giant brownie with Ferrero Rocher and a personalised message.' },
];

export const cakeById = (id) => CAKES.find((c) => c.id === id);
export const SIGNATURE = ['navy-drip', 'rainbow', 'choc-drip', 'roses', 'treat-box', 'brownie'].map(cakeById);
export const HERO_PHOTOS = [
  { src: a('navy-drip.jpg'), alt: 'Navy and gold drip cake' },
  { src: a('rainbow.jpg'), alt: 'Rainbow cake' },
  { src: a('cupcakes.jpg'), alt: 'Personalised cupcakes' },
  { src: a('black-gold.jpg'), alt: 'Black and gold drip cake' },
  { src: a('roses.jpg'), alt: 'Two-tier floral cake' },
];

export const OCCASIONS = [
  { title: 'Birthday Cakes', text: 'From first birthdays to milestone 60ths — made to match your party.', icon: '🎂' },
  { title: 'Wedding Cakes', text: 'Elegant tiers, finished with flowers or your own details.', icon: '💍' },
  { title: 'Novelty Cakes', text: 'Themed and character cakes — even Peaky Blinders for an 18th!', icon: '🎭' },
  { title: 'Cupcakes', text: 'Handmade cupcakes for birthdays, Easter and every celebration.', icon: '🧁' },
  { title: 'Treat Boxes', text: 'Macarons, cookies, brownies and more in one gorgeous box.', icon: '🎁' },
  { title: 'Brownies', text: 'Rich chocolate brownies — postal brownies available nationwide.', icon: '🍫' },
];

export const DIETARY = ['Egg free', 'Gluten free', 'Dairy free', 'Vegan'];

export const STEPS = [
  { n: '1', title: 'Get in touch', text: 'DM on Instagram or call 07950 364874 to tell Sheena about your celebration.' },
  { n: '2', title: 'Share your vision', text: 'Tell us the date, number of guests, flavours, colours, theme and any dietary needs.' },
  { n: '3', title: 'We design it', text: 'Your cake is planned just for you — bespoke from the sponge to the final decoration.' },
  { n: '4', title: 'Enjoy it', text: 'Collect, arrange delivery, or have your treats posted anywhere in the UK.' },
];

export const FAQS = [
  { q: 'Do you make egg-free, gluten-free, dairy-free or vegan cakes?', a: 'Yes — we also create egg free, GF, DF and vegan cakes. Tell us your needs when you enquire and we’ll plan the perfect cake.' },
  { q: 'Can you post cakes or treats?', a: 'Postal is available nationwide, including our popular postal brownies. Message us to check what can be posted.' },
  { q: 'How do I place an order?', a: 'DM us on Instagram, call 07950 364874, or use the enquiry form on this page — it opens an email to Sheena with your details.' },
  { q: 'How much does a cake cost?', a: 'Every cake is bespoke, so the price depends on the size, flavours and design. Send us your idea for a personal quote.' },
  { q: 'Do you deliver?', a: 'Delivery can be arranged — customers mention on-time delivery. Ask when you enquire about delivery to your area.' },
  { q: 'How far ahead should I book?', a: 'As early as you can, especially for weddings and busy times of year. Get in touch to check availability for your date.' },
];

export const VALUES = [
  { title: 'Truly bespoke', text: 'No two cakes are the same. Each one is designed around your event, your taste and your theme.' },
  { title: 'Moist & delicious', text: 'Beautiful decoration on the outside, soft, flavour-packed sponge on the inside.' },
  { title: 'Everyone included', text: 'Egg free, gluten free, dairy free and vegan cakes, so nobody misses out.' },
  { title: 'Five-star care', text: 'Five-star reviews and hygiene, with friendly communication throughout.' },
];

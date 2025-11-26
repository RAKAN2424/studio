
export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  handle: string;
  title: string;
  availableForSale: boolean;
};

export const products: Product[] = [
  {
    id: 'lavie-brazilian-natural-spices-conditioner-daily-hydrating-hair-conditioner-300ml-1',
    name: 'LAVIE Brazilian Natural Spices Conditioner | Daily Hydrating Hair Conditioner | 300ml',
    description: '<p>Make every day a good hair day with Brazilian Natural Spices Conditioner—your daily dose of hydration, protection, and shine!</p><p>This luxurious conditioner features the same exclusive formula as our hair mask, with plant-based Brazilian keratin, Buriti oil, and olive oil for daily nourishment. It restores damaged hair, protects color vibrancy, and delivers the silky, smooth texture you crave.</p>',
    price: '450.00',
    image: 'https://cdn.shopify.com/s/files/1/0692/8406/9466/files/20251124_0349___remix_01kasrrn6dfc7vxmwm3b9msqxh.png?v=1763995708',
    handle: 'lavie-brazilian-natural-spices-conditioner-daily-hydrating-hair-conditioner-300ml-1',
    title: 'LAVIE Brazilian Natural Spices Conditioner | Daily Hydrating Hair Conditioner | 300ml',
    availableForSale: true
  },
  {
    id: 'lavie-sos-peptide-plex-intensive-repair-spray-for-damaged-hair-500ml',
    name: 'LAVIE SOS Peptide Plex | Intensive Repair Spray for Damaged Hair | 500ml',
    description: '<p><span>S.O.S Peptide Plex – Intensive Treatment Spray with</span></p><p><span>wheat protein peptides, amino acids, and a blend</span></p><p><span>of natural oils that give your hair:</span></p><p><span> • Vitality and smoothness</span></p><p><span> •Exceptional shine from the very first use</span></p><p><span> •Strengthening of hair fibro cells</span></p>',
    price: '800.00',
    image: 'https://cdn.shopify.com/s/files/1/0692/8406/9466/files/20251124_0340___remix_01kasr84z1fj4v2bsb3k4ct1yq_1.png?v=1763994605',
    handle: 'lavie-sos-peptide-plex-intensive-repair-spray-for-damaged-hair-500ml',
    title: 'LAVIE SOS Peptide Plex | Intensive Repair Spray for Damaged Hair | 500ml',
    availableForSale: true
  },
  {
    id: 'untitled-nov5_04-35',
    name: 'LAVIE Deep Repair | 3-in-1 Multi-Use Hair Treatment | Heat Protection Spray',
    description: '<p class="p1"><span class="s1">Meet your **hair rescue in a bottle!** Deep Repair is the ultimate multi-use treatment spray that does it all—pre-wash treatment, intensive mask, heat protectant, and leave-in conditioner.</span></p><p class="p2"> </p><p class="p1"><span class="s1">This unique formula combines powerful active ingredients to **revive damaged hair**, provide **thermal protection up to 230°C**, deliver **deep moisture**, and protect against environmental damage with **antioxidant benefits**. It improves hair elasticity and manageability, making styling effortless.</span></p>',
    price: '450.00',
    image: 'https://cdn.shopify.com/s/files/1/0692/8406/9466/files/20251124_0821___remix_01kat89q38fratz3f8me12df8k_1.png?v=1763995012',
    handle: 'untitled-nov5_04-35',
    title: 'LAVIE Deep Repair | 3-in-1 Multi-Use Hair Treatment | Heat Protection Spray',
    availableForSale: true
  },
  {
    id: 'hydrating-mask',
    name: 'LAVIE Brazilian Natural Spices Hair Mask | Keratin Deep Conditioning Treatment',
    description: '<p class="my-2 [&amp;+p]:mt-4 [&amp;_strong:has(+br)]:inline-block [&amp;_strong:has(+br)]:pb-2"><strong>Treat your hair to spa-level luxury</strong><span> </span>with our Brazilian Natural Spices Hair Mask—an exclusive formula featuring<span> </span><strong>plant-based Brazilian keratin</strong>, nourishing<span> </span><strong>Buriti oil</strong>, and protective<span> </span><strong>olive oil</strong>.</p><p class="my-2 [&amp;+p]:mt-4 [&amp;_strong:has(+br)]:inline-block [&amp;_strong:has(+br)]:pb-2">This rich, creamy mask delivers<span> </span><strong>intensive repair</strong><span> </span>for damaged hair, locks in color vibrancy for color-treated hair, and transforms dull, brittle strands into soft, shiny, healthy-looking hair.</p>',
    price: '600.00',
    image: 'https://cdn.shopify.com/s/files/1/0692/8406/9466/files/20251124_0400_Brazilian_Spice_Bottle_remix_01kassbgkvfvw95nc9557mz0ha.png?v=1763995507',
    handle: 'hydrating-mask',
    title: 'LAVIE Brazilian Natural Spices Hair Mask | Keratin Deep Conditioning Treatment',
    availableForSale: true
  },
  {
    id: 'lavie-tropical-purple-straightening-treatment-for-blonde-gray-hair',
    name: 'LAVIE Tropical | Straightening Treatment for Blonde & Gray Hair',
    description: '<p>Blonde hair deserves special care! Tropical is the only straightening treatment formulated specifically for light, blonde, bleached, and gray/white hair.<br>This advanced formula features purple pigments that neutralize brassy yellow tones and prevent color fading, while delivering long-lasting smoothness and frizz control. Your blonde stays vibrant, cool-toned, and brilliantly shiny!</p>',
    price: '3900.00',
    image: 'https://cdn.shopify.com/s/files/1/0692/8406/9466/files/20251124_0422_Hair_Protein_Bottle_remix_01kastkw06ep985w0jdkjbr5by.png?v=1763995534',
    handle: 'lavie-tropical-purple-straightening-treatment-for-blonde-gray-hair',
    title: 'LAVIE Tropical | Straightening Treatment for Blonde & Gray Hair',
    availableForSale: true
  },
  {
    id: 'lavie-absolute-protein-brazilian-keratin-straightening-treatment-all-hair-types',
    name: 'LAVIE Absolute Protein Brazilian | Keratin Straightening Treatment | All Hair Types',
    description: '<p>Experience the authentic Brazilian blowout at home! Absolute Protein Brazilian features an innovative, protein-rich formula that transforms even the most stubborn, frizzy, curly hair into smooth, sleek, manageable strands.<br>This professional-grade treatment penetrates deep into each strand, reducing frizz by up to 95%, while adding intense shine and creating a silky, fluid texture that lasts for months.</p>',
    price: '4000.00',
    image: 'https://cdn.shopify.com/s/files/1/0692/8406/9466/files/20251124_0346___remix_01kasrjeczfk8rahn41f5ehdmk.png?v=1763995581',
    handle: 'lavie-absolute-protein-brazilian-keratin-straightening-treatment-all-hair-types',
    title: 'LAVIE Absolute Protein Brazilian | Keratin Straightening Treatment | All Hair Types',
    availableForSale: true
  },
  {
    id: 'lavie-brazilian-natural-spices-shampoo-daily-hydrating-hair-shampoo-300ml',
    name: 'LAVIE Brazilian Natural Spices Shampoo | Daily Hydrating Hair Shampoo | 300ml',
    description: '<p>Start every day with clean, healthy hair with Brazilian Natural Spices Shampoo—your daily dose of gentle cleansing, protection, and vitality!<br>This luxurious shampoo features the same exclusive formula as our hair mask, with plant-based Brazilian keratin, Buriti oil, and olive oil for daily nourishment. It gently cleanses without stripping natural oils, protects color vibrancy, and leaves your hair soft, manageable, and ready for conditioning.</p>',
    price: '420.00',
    image: 'https://cdn.shopify.com/s/files/1/0692/8406/9466/files/20251124_0456___remix_01kaswjej8fm7r112k8djj6b9y_56671cc0-f737-4529-b469-8d9280cac9c8.png?v=1763995872',
    handle: 'lavie-brazilian-natural-spices-shampoo-daily-hydrating-hair-shampoo-300ml',
    title: 'LAVIE Brazilian Natural Spices Shampoo | Daily Hydrating Hair Shampoo | 300ml',
    availableForSale: true
  }
];


// This is what we'll pass to the AI
export const productCatalogString = products.map(p => `- ${p.name}: ${p.description}`).join('\n');

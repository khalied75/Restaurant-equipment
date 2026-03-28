// ============================================================
// 🗂️ قاعدة بيانات المنتجات — أضف منتجاتك هنا بسهولة
// ============================================================
const PRODUCTS = [
  // ===== أفران بيتزا =====
  {
    id: 'tep-202a',
    name: 'فرن بيتزا حجري دورين كهرباء',
    model: 'TEP-202A',
    category: 'أفران بيتزا',
    image: 'Electric-oven-with-stone-Double-deck.webp',
    badge: 'الأكثر طلباً',
    badgeType: '',
    shortDesc: '2 طابق • 1 صينية 40×60 • حجر بيتزا كهربائي',
    specs: [
      { label: 'الطوابق', value: '2 دور' },
      { label: 'حجم الصينية', value: '40×60 سم' },
      { label: 'نوع الرف', value: 'حجر بيتزا' },
      { label: 'الصناعة', value: 'الصين' },
    ],
    pros: ['موزع حرارة ممتاز', 'بناء متين من الستيل', 'سهل التنظيف', 'مناسب للمطاعم الصغيرة والمتوسطة'],
    cons: ['يحتاج وقتاً للتسخين الأولي', 'حجم محدود بصينية واحدة لكل طابق'],
    whatsappMsg: 'استفسار عن: فرن بيتزا TEP-202A',
  },
  {
    id: 'pl-36',
    name: 'فرن بيتزا 2 دور 2 صينية',
    model: 'PL-36',
    category: 'أفران بيتزا',
    image: 'HTD-40ercengsipandian.webp',
    badge: '',
    badgeType: '',
    shortDesc: '122×82×124 سم • 380V • 13.2KW • رف صاج أو حجري',
    specs: [
      { label: 'الأبعاد', value: '122×82×124 سم' },
      { label: 'الجهد', value: '380V' },
      { label: 'الطاقة', value: '13.2 KW • 32A' },
      { label: 'درجة الحرارة', value: '20 – 400 °م' },
      { label: 'الوزن', value: '145 كيلو' },
      { label: 'الصواني', value: '3 طبقتان – 6 صواني' },
    ],
    pros: ['طاقة عالية مناسبة للمطاعم الكبيرة', 'رف صاج أو حجري حسب الطلب', 'درجة حرارة عالية حتى 400°م', 'موزع حرارة احترافي'],
    cons: ['يتطلب 3 فاز كهرباء', 'ثقيل الوزن (145 كيلو)', 'يحتاج مساحة أكبر'],
    whatsappMsg: 'استفسار عن: فرن بيتزا PL-36',
  },
  {
    id: 'pl-12',
    name: 'فرن بيتزا حجري دور واحد',
    model: 'PL-12',
    category: 'أفران بيتزا',
    image: 'images.jpg',
    badge: 'اقتصادي',
    badgeType: 'new',
    shortDesc: '122×82×55 سم • 380V • 7KW • 2 صينية 40×60',
    specs: [
      { label: 'الأبعاد', value: '122×82×55 سم' },
      { label: 'الجهد', value: '380V' },
      { label: 'الطاقة', value: '7 KW • 32A' },
      { label: 'درجة الحرارة', value: '20 – 400 °م' },
      { label: 'الصواني', value: 'دور 1 – 2 صواني' },
    ],
    pros: ['سعر اقتصادي', 'خيار الحجر أو الصاج', 'مناسب للمطاعم الصغيرة', 'سهل التشغيل'],
    cons: ['طابق واحد فقط', 'سعة أقل من الموديلات الكبيرة'],
    whatsappMsg: 'استفسار عن: فرن بيتزا PL-12',
  },

  // ===== سخانات بطاطا =====
  {
    id: 'tcw-370',
    name: 'سخان بطاطا طاولة',
    model: 'TCW-370',
    category: 'سخانات بطاطا',
    image: '1774269935392_image.png',
    badge: '',
    badgeType: '',
    shortDesc: '560×610×340 مم • 220V • 1KW',
    specs: [
      { label: 'الأبعاد', value: '560×610×340 مم' },
      { label: 'الجهد', value: '220V' },
      { label: 'الطاقة', value: '1 KW' },
      { label: 'التركيب', value: 'طاولة' },
    ],
    pros: ['صغير الحجم وعملي', 'سهل التركيب', 'يحافظ على حرارة البطاطا', 'مناسب للمحلات الصغيرة'],
    cons: ['سعة محدودة', 'مخصص للبطاطا فقط'],
    whatsappMsg: 'استفسار عن: سخان بطاطا TCW-370',
  },
  {
    id: 'sy-1000',
    name: 'سخان بطاطا مع خزانة 3 لمبة',
    model: 'SY-1000',
    category: 'سخانات بطاطا',
    image: 'images__1_.jpg',
    badge: 'جديد',
    badgeType: 'new',
    shortDesc: '1570×700×1000 مم • 220V • 1KW • مع خزانة',
    specs: [
      { label: 'الأبعاد', value: '1570×700×1000 مم' },
      { label: 'الجهد', value: '220V' },
      { label: 'الطاقة', value: '1 KW' },
      { label: 'الإضاءة', value: '3 لمبات حرارية' },
      { label: 'الإضافات', value: 'خزانة أسفل' },
    ],
    pros: ['مع خزانة تخزين أسفل', '3 لمبات لتوزيع الحرارة بشكل أفضل', 'مظهر احترافي', 'مناسب للمطاعم الكبيرة'],
    cons: ['حجم كبير يحتاج مساحة', 'سعر أعلى من النموذج الصغير'],
    whatsappMsg: 'استفسار عن: سخان بطاطا SY-1000',
  },
];
// ============================================================
// نهاية قاعدة البيانات
// ============================================================

let currentCat = 'all';

function getCatCounts() {
  const counts = { all: PRODUCTS.length };
  PRODUCTS.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

function updateCounts() {
  const c = getCatCounts();
  const map = { all:'countAll', 'أفران بيتزا':'countOven', 'سخانات بطاطا':'countWarmer', 'قلايات':'countFryer', 'عجانات':'countDough', 'جريل':'countGrill' };
  Object.entries(map).forEach(([k,id]) => {
    const el = document.getElementById(id);
    if(el) el.textContent = c[k] || 0;
  });
}

function setCategory(cat, btn) {
  currentCat = cat;
  // update sidebar buttons
  document.querySelectorAll('.cat-list button').forEach(b => b.classList.remove('active'));
  // update mobile buttons
  document.querySelectorAll('.mob-cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProducts();
}

function filterProducts() {
  const q = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
  const filtered = PRODUCTS.filter(p => {
    const matchCat = currentCat === 'all' || p.category === currentCat;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.model.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const grid = document.getElementById('prodGrid');
  const empty = document.getElementById('emptyState');
  document.getElementById('countShowing').textContent = filtered.length;

  if(filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = filtered.map(p => `
    <a href="product-detail.html?id=${p.id}" class="prod-card">
      <div class="prod-img-wrap">
        <img src="${p.image}" alt="${p.name}" onerror="this.style.opacity='0.3'"/>
        ${p.badge ? `<div class="prod-badge ${p.badgeType}">${p.badge}</div>` : ''}
      </div>
      <div class="prod-info">
        <div class="prod-model">${p.model} • ${p.category}</div>
        <h3 class="prod-name">${p.name}</h3>
        <p class="prod-desc">${p.shortDesc}</p>
        <div class="prod-footer">
          <span class="prod-cat-tag">${p.category}</span>
          <span class="prod-link">عرض التفاصيل ←</span>
        </div>
      </div>
    </a>
  `).join('');
}

// Show mobile search
document.addEventListener('DOMContentLoaded', () => {
  if(window.innerWidth <= 900) {
    document.getElementById('mobileSearch').style.display = 'block';
  }
  updateCounts();
  filterProducts();
});

function openMenu() { document.getElementById('mobileMenu').classList.add('open'); document.getElementById('mobileOverlay').classList.add('open'); }
function closeMenu() { document.getElementById('mobileMenu').classList.remove('open'); document.getElementById('mobileOverlay').classList.remove('open'); }
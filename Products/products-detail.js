 // ============================================================
// نفس قاعدة البيانات — اضف منتجاتك هنا
// ============================================================
const PRODUCTS = [
  {
    id: 'tep-202a',
    name: 'فرن بيتزا حجري دورين كهرباء',
    model: 'TEP-202A',
    category: 'أفران بيتزا',
    image: 'Electric-oven-with-stone-Double-deck.webp',
    badge: 'الأكثر طلباً',
    badgeType: '',
    shortDesc: '2 طابق • 1 صينية 40×60 • حجر بيتزا كهربائي احترافي مناسب للمطاعم',
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
  {
    id: 'tcw-370',
    name: 'سخان بطاطا طاولة',
    model: 'TCW-370',
    category: 'سخانات بطاطا',
    image: '1774269935392_image.png',
    badge: '',
    badgeType: '',
    shortDesc: '560×610×340 مم • 220V • 1KW • يحافظ على حرارة البطاطا',
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
    shortDesc: '1570×700×1000 مم • 220V • 1KW • 3 لمبات حرارية مع خزانة',
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

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function render() {
  const id = getParam('id');
  const prod = PRODUCTS.find(p => p.id === id);
  const content = document.getElementById('productContent');

  if(!prod) {
    content.innerHTML = `<div class="not-found"><h2>المنتج غير موجود</h2><p>تحقق من الرابط أو <a href="products.html" style="color:var(--red);">عد لقائمة المنتجات</a></p></div>`;
    return;
  }

  document.title = `${prod.name} - مشعل سفر عبدالرحمن`;
  document.getElementById('breadName').textContent = prod.name;

  const specsRows = prod.specs.map(s => `
    <tr><td>${s.label}</td><td>${s.value}</td></tr>
  `).join('');

  const prosItems = prod.pros.map(p => `<li>${p}</li>`).join('');
  const consItems = prod.cons.map(c => `<li>${c}</li>`).join('');

  content.innerHTML = `
    <div class="detail-wrap">
      <!-- IMAGE -->
      <div class="img-panel">
        <div class="img-main">
          <img src="${prod.image}" alt="${prod.name}" onerror="this.style.opacity='0.2'"/>
          ${prod.badge ? `<div class="img-badge ${prod.badgeType}">${prod.badge}</div>` : ''}
        </div>
        <div style="padding:16px 20px;border-top:1px solid #f0f0f0;display:flex;gap:12px;">
          <a href="https://wa.me/966598325976?text=${encodeURIComponent(prod.whatsappMsg)}" target="_blank" class="btn-wa" style="flex:1;">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            اسأل عن السعر
          </a>
        </div>
      </div>

      <!-- INFO -->
      <div class="info-panel">
        <div class="prod-cat-chip">📂 ${prod.category}</div>
        <h1 class="prod-title">${prod.name}</h1>
        <div class="prod-model-line">الموديل: ${prod.model} &nbsp;•&nbsp; الصناعة: الصين</div>
        <div class="prod-short">${prod.shortDesc}</div>

        <div class="specs-title">المواصفات التقنية</div>
        <table class="specs-table">
          ${specsRows}
        </table>

        <div class="specs-title">الإيجابيات والسلبيات</div>
        <div class="pros-cons">
          <div class="pros-box">
            <div class="box-title">✅ الإيجابيات</div>
            <ul class="box-list">${prosItems}</ul>
          </div>
          <div class="cons-box">
            <div class="box-title">⚠️ ملاحظات</div>
            <ul class="box-list">${consItems}</ul>
          </div>
        </div>

        <div class="cta-btns">
          <a href="https://wa.me/966598325976?text=${encodeURIComponent(prod.whatsappMsg)}" target="_blank" class="btn-wa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            اسأل عن السعر عبر الواتساب
          </a>
          <a href="products.html" class="btn-back">← العودة للمنتجات</a>
        </div>
      </div>
    </div>
  `;

  // Related products
  const related = PRODUCTS.filter(p => p.id !== prod.id && p.category === prod.category).slice(0,4);
  if(related.length) {
    document.getElementById('relatedSection').style.display = 'block';
    document.getElementById('relatedGrid').innerHTML = related.map(p => `
      <a href="product-detail.html?id=${p.id}" class="rel-card">
        <div class="rel-img"><img src="${p.image}" alt="${p.name}" onerror="this.style.opacity='0.2'"/></div>
        <div class="rel-info"><h4>${p.name}</h4><span>${p.model}</span></div>
      </a>
    `).join('');
  }
}

render();
function openMenu(){ document.getElementById('mobileMenu').classList.add('open'); document.getElementById('mobileOverlay').classList.add('open'); }
function closeMenu(){ document.getElementById('mobileMenu').classList.remove('open'); document.getElementById('mobileOverlay').classList.remove('open'); }
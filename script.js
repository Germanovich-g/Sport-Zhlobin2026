/* ============================================================
   Р”РђРќРќР«Р• (РЎСЃС‹Р»РєРё РЅР° С„РѕС‚Рѕ Рё Р±РёРѕРіСЂР°С„РёРё РїСЂРѕРїРёСЃР°РЅС‹)
   ============================================================ */

const DATA = [
  // ---------- РћР‘РЄР•РљРўР« ----------
  { id:'led', layer:'objects', title:'Р›РµРґРѕРІС‹Р№ РґРІРѕСЂРµС†', address:'СѓР». РљР°СЂР»Р° РњР°СЂРєСЃР°, 3/1', text:'Р”РѕРјР°С€РЅСЏСЏ Р°СЂРµРЅР° РҐРљ В«РњРµС‚Р°Р»Р»СѓСЂРі-Р–Р»РѕР±РёРЅВ».', lat:52.8930, lng:30.0250, photo:'led.jpg' },
  { id:'dvor', layer:'objects', title:'Р”РІРѕСЂРµС† РёРіСЂРѕРІС‹С… РІРёРґРѕРІ СЃРїРѕСЂС‚Р°', address:'СѓР». РљР°СЂР»Р° РњР°СЂРєСЃР°, 3/1', text:'РљРѕРјРїР»РµРєСЃ РЅР° 1500 РјРµСЃС‚.', lat:52.8925, lng:30.0265, photo:'dvor.jpg' },
  { id:'pool', layer:'objects', title:'РџР»Р°РІР°С‚РµР»СЊРЅС‹Р№ Р±Р°СЃСЃРµР№РЅ', address:'СѓР». РљР°СЂР»Р° РњР°СЂРєСЃР°, 3/1', text:'РђСЂРµРЅР° СЃ 50-РјРµС‚СЂРѕРІС‹РјРё РґРѕСЂРѕР¶РєР°РјРё.', lat:52.8942, lng:30.0238, photo:'pool.jpg' },
  { id:'row', layer:'objects', title:'Р“СЂРµР±РЅР°СЏ Р±Р°Р·Р°', address:'СѓР». РљР°СЂР»Р° РњР°СЂРєСЃР°, 3/1', text:'Р‘Р°Р·Р° РґР»СЏ С‚СЂРµРЅРёСЂРѕРІРѕРє РїРѕ РіСЂРµР±Р»Рµ.', lat:52.8955, lng:30.0270, photo:'row.jpg' },
  { id:'ski', layer:'objects', title:'Р›С‹Р¶РµСЂРѕР»Р»РµСЂРЅР°СЏ С‚СЂР°СЃСЃР°', address:'РІ СЂР°Р№РѕРЅРµ Р¦РћР ', text:'РўСЂР°СЃСЃР° РґР»РёРЅРѕР№ 2500 РјРµС‚СЂРѕРІ.', lat:52.8900, lng:30.0330, photo:'ski.jpg' },
  { id:'stadium', layer:'objects', title:'Р“РѕСЂРѕРґСЃРєРѕР№ СЃС‚Р°РґРёРѕРЅ', address:'СѓР». РџР°СЂРёР¶СЃРєРѕР№ РљРѕРјРјСѓРЅС‹, 13', text:'Р“Р»Р°РІРЅР°СЏ РїР»РѕС‰Р°РґРєР° РґР»СЏ С„СѓС‚Р±РѕР»Р°.', lat:52.8895, lng:30.0195, photo:'stadium.jpg' },
  { id:'sdyushor', layer:'objects', title:'Р–Р»РѕР±РёРЅСЃРєР°СЏ СЂР°Р№РѕРЅРЅР°СЏ РЎР”Р®РЁРћР ', address:'СѓР». РџРµСЂРІРѕРјР°Р№СЃРєР°СЏ, 1Рђ', text:'РљСѓР·РЅРёС†Р° Р±СѓРґСѓС‰РёС… С‡РµРјРїРёРѕРЅРѕРІ.', lat:52.8915, lng:30.0240, photo:'sdyushor.jpg' },

  // ---------- Р›Р•Р“Р•РќР”Р« ----------
  { id:'rudenkov', layer:'legends', title:'Р’Р°СЃРёР»РёР№ Р СѓРґРµРЅРєРѕРІ', address:'РћР»РёРјРїРёР№СЃРєРёР№ С‡РµРјРїРёРѕРЅ 1960', text:'РћР»РёРјРїРёР№СЃРєРёР№ С‡РµРјРїРёРѕРЅ РїРѕ РјРµС‚Р°РЅРёСЋ РјРѕР»РѕС‚Р°.', lat:52.8910, lng:30.0220, photo:'rudenkov.jpeg', link: 'rudenkov.html' },
  { id:'lovetsky', layer:'legends', title:'Р’Р»Р°РґРёРјРёСЂ Р›РѕРІРµС†РєРёР№', address:'РЎРµСЂРµР±СЂРѕ РћР»РёРјРїРёР°РґС‹-1972', text:'РЎРµСЂРµР±СЂСЏРЅС‹Р№ РїСЂРёР·С‘СЂ РІ СЌСЃС‚Р°С„РµС‚Рµ 4Г—100 Рј.', lat:52.8935, lng:30.0280, photo:'lovetsky.jpeg', link: 'lovetsky.html' },
  { id:'kirov', layer:'legends', title:'РќРёРєРѕР»Р°Р№ РљРёСЂРѕРІ', address:'Р‘СЂРѕРЅР·Р° РћР»РёРјРїРёР°РґС‹-1980', text:'Р‘СЂРѕРЅР·РѕРІС‹Р№ РїСЂРёР·С‘СЂ РІ Р±РµРіРµ РЅР° 800 Рј.', lat:52.8950, lng:30.0245, photo:'kirov.jpeg', link: 'kirov.html' },

  // ---------- РњРћР›РћР”Р•Р–Р¬ ----------
  { id:'levshunov', layer:'youth', title:'РђСЂС‚С‘Рј Р›РµРІС€СѓРЅРѕРІ', address:'Р”СЂР°С„С‚ РќРҐР› вЂ” 2-Р№ РЅРѕРјРµСЂ', text:'РРіСЂР°РµС‚ Р·Р° В«Р§РёРєР°РіРѕВ».', lat:52.8920, lng:30.0290, photo:'levshunov.jpeg', link: 'levshunov.html' },
  { id:'pinchuk', layer:'youth', title:'Р’РёС‚Р°Р»РёР№ РџРёРЅС‡СѓРє', address:'РЎР±РѕСЂРЅР°СЏ Р‘РµР»Р°СЂСѓСЃРё В· РќРҐР›', text:'РќР°РїР°РґР°СЋС‰РёР№ В«РќСЌС€РІРёР»Р»В».', lat:52.8918, lng:30.0250, photo:'pinchuk.jpeg', link: 'pinchuk.html' },
  { id:'borikov', layer:'youth', title:'Р•РіРѕСЂ Р‘РѕСЂРёРєРѕРІ', address:'РљРѕРЅС‚СЂР°РєС‚ СЃ В«Р®С‚РѕР№В» (РќРҐР›)', text:'РњРѕР»РѕРґРѕР№ С‚Р°Р»Р°РЅС‚.', lat:52.8945, lng:30.0295, photo:'borikov.jpeg', link: 'borikov.html' },
  { id:'metallurg', layer:'youth', title:'РҐРљ В«РњРµС‚Р°Р»Р»СѓСЂРі-Р–Р»РѕР±РёРЅВ»', address:'4-РєСЂР°С‚РЅС‹Р№ С‡РµРјРїРёРѕРЅ', text:'Р§РµРјРїРёРѕРЅ Р‘РµР»Р°СЂСѓСЃРё.', lat:52.8933, lng:30.0248, photo:'metallurg.jpg' },
  { id:'iskra', layer:'youth', title:'Р’Рљ В«РСЃРєСЂР°В»', address:'Р§РµРјРїРёРѕРЅ 2023/2024', text:'Р§РµРјРїРёРѕРЅ Р Р‘ РїРѕ РІРѕР»РµР№Р±РѕР»Сѓ.', lat:52.8927, lng:30.0262, photo:'iskra.jpg' },
  
  { id:'hodorenko', layer:'youth', title:'РђСЂРёРЅР° РҐРѕРґРѕСЂРµРЅРєРѕ', address:'Р‘РёР°С‚Р»РѕРЅ', text:'Р—РѕР»РѕС‚Рѕ РЅР° РљСѓР±РєРµ Р‘Р¤Р‘.', lat:52.8902, lng:30.0310, photo:'hodorenko.jpeg', link: 'hodorenko.html' },
  { id:'malyshev', layer:'youth', title:'Р”Р°РЅРёРёР» РњР°Р»С‹С€РµРІ', address:'Р‘РёР°С‚Р»РѕРЅ', text:'Р—РѕР»РѕС‚Рѕ РІ РјР°СЃСЃ-СЃС‚Р°СЂС‚Рµ.', lat:52.8905, lng:30.0315, photo:'malyshev.jpeg', link: 'malyshev.html' },
  { id:'kondratieva', layer:'youth', title:'РљСЃРµРЅРёСЏ РљРѕРЅРґСЂР°С‚СЊРµРІР°', address:'Р‘РёР°С‚Р»РѕРЅ', text:'РџРѕР±РµРґРёС‚РµР»СЊРЅРёС†Р° СЌСЃС‚Р°С„РµС‚С‹.', lat:52.8908, lng:30.0320, photo:'kondratieva.jpeg', link: 'kondratieva.html' },
  { id:'melnik', layer:'youth', title:'Р’РёРєС‚РѕСЂРёСЏ РњРµР»СЊРЅРёРє', address:'Р‘РёР°С‚Р»РѕРЅ', text:'РЈС‡Р°СЃС‚РЅРёС†Р° РїРµСЂРІРµРЅСЃС‚РІ.', lat:52.8912, lng:30.0312, photo:'melnik.jpeg', link: 'melnik.html' },

  { id:'yurkovets', layer:'youth', title:'РРІР°РЅ Р®СЂРєРѕРІРµС†', address:'Р›С‘РіРєР°СЏ Р°С‚Р»РµС‚РёРєР°', text:'Р—РѕР»РѕС‚Рѕ РЅР° 60 Рј.', lat:52.8921, lng:30.0275, photo:'yurkovets.jpeg', link: 'yurkovets.html' },
  { id:'danchenko', layer:'youth', title:'Р’Р°Р»РµСЂРёСЏ Р”Р°РЅС‡РµРЅРєРѕ', address:'Р›С‘РіРєР°СЏ Р°С‚Р»РµС‚РёРєР°', text:'РЈСЃРїРµС€РЅРѕ РІС‹СЃС‚СѓРїРёР»Р° РЅР° РїРµСЂРІРµРЅСЃС‚РІРµ.', lat:52.8923, lng:30.0278, photo:'danchenko.jpeg', link: 'danchenko.html' },
  { id:'kikinev', layer:'youth', title:'РќРёРєРёС‚Р° РљРёРєРёРЅРµРІ', address:'Р›С‘РіРєР°СЏ Р°С‚Р»РµС‚РёРєР°', text:'Р§РµРјРїРёРѕРЅ СЂРµСЃРїСѓР±Р»РёРєРё.', lat:52.8926, lng:30.0282, photo:'kikinev.jpeg', link: 'kikinev.html' },
  { id:'popov', layer:'youth', title:'РРІР°РЅ РџРѕРїРѕРІ', address:'Р›С‘РіРєР°СЏ Р°С‚Р»РµС‚РёРєР°', text:'Р§РµРјРїРёРѕРЅ СЂРµСЃРїСѓР±Р»РёРєРё.', lat:52.8928, lng:30.0285, photo:'popov.jpeg', link: 'popov.html' },
  { id:'kuprienko', layer:'youth', title:'РЈР»СЊСЏРЅ РљСѓРїСЂРёРµРЅРєРѕ', address:'Р›С‘РіРєР°СЏ Р°С‚Р»РµС‚РёРєР°', text:'Р‘СЂРѕРЅР·РѕРІС‹Р№ РїСЂРёР·С‘СЂ.', lat:52.8931, lng:30.0288, photo:'kuprienko.jpeg', link: 'kuprienko.html' },
  { id:'nikitina', layer:'youth', title:'Р’Р°Р»РµСЂРёСЏ РќРёРєРёС‚РёРЅР°', address:'Р›С‘РіРєР°СЏ Р°С‚Р»РµС‚РёРєР°', text:'Р‘СЂРѕРЅР·РѕРІС‹Р№ РїСЂРёР·С‘СЂ.', lat:52.8934, lng:30.0291, photo:'nikitina.jpeg', link: 'nikitina.html' },

  { id:'volleyball', layer:'youth', title:'Р’РѕР»РµР№Р±РѕР»РёСЃС‚С‹ Р¦РћР ', address:'Р’РѕР»РµР№Р±РѕР»', text:'РњРЅРѕРіРѕРєСЂР°С‚РЅС‹Рµ РїРѕР±РµРґРёС‚РµР»Рё.', lat:52.8937, lng:30.0294, photo:'volleyball.jpg' },
  { id:'football', layer:'youth', title:'Р¤СѓС‚Р±РѕР»СЊРЅС‹Рµ РєРѕРјР°РЅРґС‹ Р”Р®РЎРЁ', address:'Р¤СѓС‚Р±РѕР»', text:'РџРѕР±РµРґРёС‚РµР»Рё С‚СѓСЂРЅРёСЂРѕРІ.', lat:52.8940, lng:30.0297, photo:'football.jpg' },
  { id:'bondarenko', layer:'youth', title:'РњР°СЂРіР°СЂРёС‚Р° Р‘РѕРЅРґР°СЂРµРЅРєРѕ', address:'Р“СЂРµР±Р»СЏ', text:'РЎРµСЂРµР±СЂСЏРЅС‹Р№ РїСЂРёР·С‘СЂ.', lat:52.8943, lng:30.0300, photo:'bondarenko.jpeg', link: 'bondarenko.html' },
  { id:'pogranovskaya', layer:'youth', title:'РђР»СЊР±РёРЅР° РџРѕРіСЂР°РЅРѕРІСЃРєР°СЏ', address:'Р“СЂРµР±Р»СЏ', text:'РЎРµСЂРµР±СЂСЏРЅС‹Р№ РїСЂРёР·С‘СЂ.', lat:52.8946, lng:30.0303, photo:'pogranovskaya.jpeg', link: 'pogranovskaya.html' },
  { id:'tishkova', layer:'youth', title:'РќР°РґРµР¶РґР° РўРёС€РєРѕРІР°', address:'Р’РѕР»РµР№Р±РѕР»', text:'Р›РёРґРµСЂ В«РСЃРєСЂС‹В».', lat:52.8949, lng:30.0306, photo:'tishkova.jpeg', link: 'tishkova.html' },

  { id:'isakovich_a', layer:'youth', title:'РђСЂС‚С‘Рј РСЃР°РєРѕРІРёС‡', address:'Р‘РѕСЂСЊР±Р°', text:'РџРѕР±РµРґРёС‚РµР»СЊ С‚СѓСЂРЅРёСЂР°.', lat:52.8952, lng:30.0309, photo:'isakovich_a.jpeg', link: 'isakovich_a.html' },
  { id:'shevtsov', layer:'youth', title:'РўРёРјРѕС„РµР№ РЁРµРІС†РѕРІ', address:'Р‘РѕСЂСЊР±Р°', text:'РџРѕР±РµРґРёС‚РµР»СЊ С‚СѓСЂРЅРёСЂР°.', lat:52.8955, lng:30.0312, photo:'shevtsov.jpeg', link: 'shevtsov.html' },
  { id:'baklanov', layer:'youth', title:'РњР°РєСЃРёРј Р‘Р°РєР»Р°РЅРѕРІ', address:'Р‘РѕСЂСЊР±Р°', text:'РџРѕР±РµРґРёС‚РµР»СЊ С‚СѓСЂРЅРёСЂР°.', lat:52.8958, lng:30.0315, photo:'baklanov.jpeg', link: 'baklanov.html' },
  { id:'isakovich_i', layer:'youth', title:'РР»СЊСЏ РСЃР°РєРѕРІРёС‡', address:'Р‘РѕСЂСЊР±Р°', text:'РЎРµСЂРµР±СЂСЏРЅС‹Р№ РїСЂРёР·С‘СЂ.', lat:52.8961, lng:30.0318, photo:'isakovich_i.jpeg', link: 'isakovich_i.html' },
  { id:'kirgizov', layer:'youth', title:'РђР»РµРєСЃРµР№ РљРёСЂРіРёР·РѕРІ', address:'Р•РґРёРЅРѕР±РѕСЂСЃС‚РІР°', text:'РљР»СѓР± В«Р’РёРєС‚РѕСЂРёСЏВ».', lat:52.8964, lng:30.0321, photo:'kirgizov.jpeg', link: 'kirgizov.html' },
  { id:'gavrilova', layer:'youth', title:'Р’РёРєС‚РѕСЂРёСЏ Р“Р°РІСЂРёР»РѕРІР°', address:'Р•РґРёРЅРѕР±РѕСЂСЃС‚РІР°', text:'РљР»СѓР± В«Р’РёРєС‚РѕСЂРёСЏВ».', lat:52.8967, lng:30.0324, photo:'gavrilova.jpeg', link: 'gavrilova.html' },
  { id:'mentov', layer:'youth', title:'РќРёРєРёС‚Р° РњРµРЅС‚РѕРІ', address:'Р•РґРёРЅРѕР±РѕСЂСЃС‚РІР°', text:'РљР»СѓР± В«Р’РёРєС‚РѕСЂРёСЏВ».', lat:52.8970, lng:30.0327, photo:'mentov.jpeg', link: 'mentov.html' },
  { id:'shchegolev', layer:'youth', title:'РњРёС…Р°РёР» Р©РµРіРѕР»РµРІ', address:'Р•РґРёРЅРѕР±РѕСЂСЃС‚РІР°', text:'РЎРїРѕСЂС‚С€РєРѕР»Р° В«Р®РЅРёРѕСЂВ».', lat:52.8973, lng:30.0330, photo:'shchegolev.jpeg', link: 'shchegolev.html' },
  { id:'hrapov', layer:'youth', title:'РРіРѕСЂСЊ РҐСЂР°РїРѕРІ', address:'Р•РґРёРЅРѕР±РѕСЂСЃС‚РІР°', text:'РЎРїРѕСЂС‚С€РєРѕР»Р° В«Р®РЅРёРѕСЂВ».', lat:52.8976, lng:30.0333, photo:'hrapov.jpeg', link: 'hrapov.html' },
  { id:'shevchenko', layer:'youth', title:'Р’Р»Р°РґРёСЃР»Р°РІ РЁРµРІС‡РµРЅРєРѕ', address:'Р•РґРёРЅРѕР±РѕСЂСЃС‚РІР°', text:'РЎРїРѕСЂС‚С€РєРѕР»Р° В«Р®РЅРёРѕСЂВ».', lat:52.8979, lng:30.0336, photo:'shevchenko.jpeg', link: 'shevchenko.html' },

  // ---------- РЎРћР‘Р«РўРРЇ ----------
  { id:'cis-games', layer:'events', title:'II РРіСЂС‹ СЃС‚СЂР°РЅ РЎРќР“', address:'2023 / 2026', text:'РЎРѕСЂРµРІРЅРѕРІР°РЅРёСЏ РїРѕ СЃР°РјР±Рѕ.', lat:52.8898, lng:30.0305, photo:'cis-games.jpg' },
  { id:'narmania', layer:'events', title:'РўСѓСЂРЅРёСЂ РїР°РјСЏС‚Рё РЁРѕС‚С‹ РќР°СЂРјР°РЅРёСЏ', address:'Р•Р¶РµРіРѕРґРЅРѕ', text:'Р“СЂРµРєРѕ-СЂРёРјСЃРєР°СЏ Р±РѕСЂСЊР±Р°.', lat:52.8960, lng:30.0260, photo:'narmania.jpg' },
  { id:'spartakiada', layer:'events', title:'РЎРїР°СЂС‚Р°РєРёР°РґР° РЎРѕСЋР·РЅРѕРіРѕ РіРѕСЃСѓРґР°СЂСЃС‚РІР°', address:'РЎС‚СѓРґРµРЅС‡РµСЃРєРёРµ СЃРѕСЂРµРІРЅРѕРІР°РЅРёСЏ', text:'РЎС‚Р°СЂС‚ СЃРѕСЂРµРІРЅРѕРІР°РЅРёР№.', lat:52.8905, lng:30.0320, photo:'spartakiada.jpg' }
];

const LAYER_EMOJI = { objects: 'рџЏџпёЏ', legends: 'рџЏ†', youth: 'в­ђ', events: 'рџЋ‰' };

/* ============================================================
   Р›РћР“РРљРђ РљРђР РўР« Р РРќРўР•Р Р¤Р•Р™РЎРђ
   ============================================================ */
const map = L.map('mapContainer', { center: [52.8928, 30.0272], zoom: 14 });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'В© OpenStreetMap' }).addTo(map);

const markerMap = new Map();

DATA.forEach(item => {
  // РЎРѕР·РґР°РµРј РёРєРѕРЅРєСѓ
  const icon = L.divIcon({
    className: '',
    html: `<div class="pin-marker pin-marker--${item.layer}"><span>${LAYER_EMOJI[item.layer]}</span></div>`,
    iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -30]
  });

  // РЎРѕР·РґР°РµРј РїРѕРїР°Рї
  const photoHTML = item.photo ? `<img src="${item.photo}" style="width:100%; border-radius:8px; margin-bottom:8px;" onerror="this.style.display='none'">` : '';
  const linkHTML = item.link ? `<a href="${item.link}" style="display:block; margin-top:10px; background:#f97316; color:#fff; text-align:center; padding:8px; border-radius:5px; text-decoration:none; font-weight:bold;">Р§РёС‚Р°С‚СЊ Р±РёРѕРіСЂР°С„РёСЋ</a>` : '';
  const popupHTML = `<div style="min-width:200px;">${photoHTML}<strong>${item.title}</strong><br><small>${item.address}</small><p style="margin-top:5px; font-size:0.9rem;">${item.text}</p>${linkHTML}</div>`;

  const marker = L.marker([item.lat, item.lng], { icon }).addTo(map).bindPopup(popupHTML);
  markerMap.set(item.id, { marker, data: item });
});

// Р¤РёР»СЊС‚СЂС‹ Рё РїРѕРёСЃРє
let currentLayer = 'all';
let currentSearch = '';

function applyFilters() {
  let visible = 0;
  const q = currentSearch.trim().toLowerCase();

  markerMap.forEach(({ marker, data }) => {
    const layerOk = currentLayer === 'all' || data.layer === currentLayer;
    const searchOk = !q || data.title.toLowerCase().includes(q) || data.text.toLowerCase().includes(q);
    
    if (layerOk && searchOk) {
      if (!map.hasLayer(marker)) marker.addTo(map);
      visible++;
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
  document.getElementById('resultHint').innerHTML = `РџРѕРєР°Р·Р°РЅРѕ С‚РѕС‡РµРє: <strong>${visible}</strong> РёР· ${DATA.length}`;
  renderAllCards();
}

document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentLayer = btn.dataset.layer;
    applyFilters();
  });
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  currentSearch = e.target.value;
  applyFilters();
});

// Р“РµРЅРµСЂР°С†РёСЏ РєР°СЂС‚РѕС‡РµРє
function cardHTML(item) {
  const img = item.photo ? `<img src="${item.photo}" alt="${item.title}" onerror="this.style.display='none'">` : LAYER_EMOJI[item.layer];
  const imgClass = (item.layer === 'legends' || item.layer === 'youth') ? 'card__img card__img--people' : 'card__img';
  const tag = item.link ? 'a' : 'div';
  const href = item.link ? `href="${item.link}"` : '';
  const readMore = item.link ? `<p style="color: var(--primary); font-weight: bold; margin-top: 10px;">Р§РёС‚Р°С‚СЊ Р±РёРѕРіСЂР°С„РёСЋ в†’</p>` : '';

  return `
    <${tag} ${href} class="card" style="text-decoration: none; color: inherit;">
      <div class="${imgClass}">${img}</div>
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <p class="card__meta">рџ“Ќ ${item.address}</p>
        ${readMore}
      </div>
    </${tag}>`;
}

function renderCards(layer, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  
  const q = currentSearch.trim().toLowerCase();
  const items = DATA.filter(i => i.layer === layer && (currentLayer === 'all' || i.layer === currentLayer) && (!q || i.title.toLowerCase().includes(q)));

  items.forEach(item => {
    const card = document.createElement('div');
    card.innerHTML = cardHTML(item);
    const realCard = card.firstElementChild;
    
    if (!item.link) {
      realCard.addEventListener('click', () => {
        map.setView([item.lat, item.lng], 17);
        markerMap.get(item.id).marker.openPopup();
      });
    }
    container.appendChild(realCard);
  });
}

function renderAllCards() {
  renderCards('objects', 'objectsList');
  renderCards('legends', 'legendsList');
  renderCards('youth', 'youthList');
  renderCards('events', 'eventsList');
}

// РњРѕРґР°Р»РєР° (РЅР° РІСЃСЏРєРёР№ СЃР»СѓС‡Р°Р№)
const modal = document.getElementById('modal');
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => modal.classList.remove('open')));
function openModal(item) {
  document.getElementById('modalPhoto').innerHTML = item.photo ? `<img src="${item.photo}">` : LAYER_EMOJI[item.layer];
  document.getElementById('modalBadge').textContent = item.layer;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalText').textContent = item.text;
  document.getElementById('modalMeta').textContent = item.address;
  modal.classList.add('open');
}

// РўРµРјР°
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') document.documentElement.dataset.theme = 'dark';
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? 'рџЊ™' : 'вЂпёЏ';
});

// РЎС‚Р°СЂС‚
renderAllCards();

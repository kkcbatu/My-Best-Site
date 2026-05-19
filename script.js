const packageButtons = document.querySelectorAll("[data-package]");
const extraInputs = document.querySelectorAll(".extra-item input");
const totalPrice = document.querySelector("#totalPrice");
const orderForm = document.querySelector("#orderForm");
const orderStatus = document.querySelector("#orderStatus");
const startOrderButton = document.querySelector("#startOrder");
const estimateSelected = document.querySelector("#estimateSelected");
const summaryPackage = document.querySelector("#summaryPackage");
const summaryExtras = document.querySelector("#summaryExtras");
const summaryTotal = document.querySelector("#summaryTotal");
const copyButtons = document.querySelectorAll(".copy-button");
const languageButtons = document.querySelectorAll("[data-lang]");
const introScreen = document.querySelector("#introScreen");
const enterSiteButton = document.querySelector("#enterSite");
const introLogo = document.querySelector(".intro-logo");
const introMessage = document.querySelector(".intro-message");
const ambientField = document.querySelector("#ambientField");
const cursorGlow = document.querySelector("#cursorGlow");
const cursorSpotlight = document.querySelector("#cursorSpotlight");
const cursorCanvas = document.querySelector("#cursorTrail");
const toast = document.querySelector("#toast");
const USD_TRY_RATE = 45.5;
const ORDER_WEBHOOK_URL = "https://discord.com/api/webhooks/1506157785484886086/oucDbsVEvP_9OT30LplsfqajSKND8D0M4ZNi4LknEzIrQEYL6YIfJNubk5qeOFaOt2QH";
// Discord ping requires a numeric user ID, for example: <@123456789012345678>
const ORDER_OWNER_MENTION = "<@DISCORD_USER_ID>";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  tr: {
    metaTitle: "Phawes.py | Discord Bot Hizmetleri",
    metaDescription: "Phawes.py tarafından Discord bot kodları, AI botlar, ticket sistemleri, otomatik sunucu kurulumları ve özel Discord sistemleri.",
    copied: " kopyalandı",
    copyUnsupported: "Kopyalama desteklenmiyor",
    customQuoteSuffix: " + Discord'da teklif",
    introKicker: "bağlantı kuruluyor",
    introMessage: "özel discord sistemleri için güvenli bağlantı hazırlanıyor",
    introStatus1: "çekirdek doğrulanıyor",
    introStatus2: "arayüz hazırlanıyor",
    introStatus3: "erişim aktif",
    introEnter: "Giriş",
    navPackages: "Paketler",
    navCustom: "Özel Botlar",
    navExtras: "Ekstralar",
    navOrder: "Sipariş",
    navContact: "İletişim",
    discordJoin: "Discord'a Gel",
    heroEyebrow: "Discord bot kodları ve özel sistemler",
    heroTitle: "Sunucuna yakışan soft cyberpunk bot deneyimi.",
    heroLead: "Moderasyon, ticket, log, AI karakter, otomatik sunucu kurulumları ve sunucuna özel bot sistemlerini temiz kod, net teslimat ve güçlü tasarımla hazırlıyorum.",
    getQuote: "Teklif al",
    copyDiscord: "Discord kopyala",
    statPackages: "Bot Paketi",
    statExtras: "Ekstra Sistem",
    statHosting: "Hosting Opsiyonu",
    botPanelText: "AI + Moderasyon + Sunucu Kurulum",
    introText: "Hedef basit: botun sadece çalışmasın, sunucunun karakterine de uysun. Komut isimlerinden embed diline, yetki mantığından otomasyon akışına kadar sistemi marka gibi tasarlarım.",
    priceList: "Fiyat listesi",
    packagesTitle: "Discord bot paketleri",
    basicTitle: "Temel Paket",
    basic1: "Basit moderasyon sistemi",
    basic2: "Komut sistemi",
    basic3: "Otomatik rol",
    basic4: "Hoş geldin mesajı",
    basic5: "Basit log sistemi",
    basicCta: "Bu paketle başla",
    bestBadge: "En dengeli",
    advancedTitle: "Gelişmiş Paket",
    adv1: "Ticket sistemi",
    adv2: "Gelişmiş log sistemi",
    adv3: "Özel komutlar",
    adv4: "Embed tasarımları",
    adv5: "Yetki sistemi",
    adv6: "Sunucuya özel ayarlar",
    advancedCta: "Gelişmiş teklif al",
    aiTitle: "AI Bot Paketi",
    ai1: "Gemini/OpenAI entegrasyonu",
    ai2: "Karakter kişiliği",
    ai3: "Özel cevap sistemi",
    ai4: "RP sistemi",
    ai5: "Hafıza sistemi",
    ai6: "Kullanıcıya özel davranışlar",
    aiCta: "AI bot konuşalım",
    customEyebrow: "İsteğe göre botlar",
    customTitle: "Hazır paket dışı özel sistemler",
    newBadge: "Yeni",
    securityBadge: "Güvenlik",
    suggestionBadge: "Öneri",
    socialBadge: "Sosyal",
    notifyBadge: "Bildirim",
    customBadge: "Özel",
    serverSetupTitle: "Otomatik Sunucu Kurma Botu",
    serverSetupText: "Kanal, kategori, rol, izin, embed ve temel sunucu düzenini tek akışta kuran sistem.",
    backupTitle: "Sunucu Yedekleme ve Koruma Botu",
    backupText: "Sunucu düzenini yedekleme, geri yükleme, anti-raid, log ve güvenlik akışlarını tek yerde toplar.",
    programsTitle: "Farklı Programlar ve Botlar",
    programsText: "Discord botları, web panelleri, masaüstü araçlar, API bağlantıları ve özel otomasyon fikirleri konuşulur.",
    socialTitle: "Sosyal Medya Bildirim Botları",
    socialText: "Instagram, YouTube, Twitter/X ve TikTok için paylaşım bildirimi, içerik takibi ve raporlama sistemleri.",
    smsTitle: "SMS ve Çağrı Bildirim Sistemi",
    smsText: "Onaylı kullanıcılar için hatırlatma, doğrulama, randevu ve durum bildirimi gibi yasal bildirim akışları.",
    automationTitle: "Özel Otomasyonlar",
    automationText: "Sunucu yönetimi, kayıt, ekonomi, çekiliş, dashboard ve sana özel iş akışları proje detayına göre hazırlanır.",
    discordPrice: "Fiyat bilgisi için Discord'a gel",
    customPrice: "İsteğe göre fiyat verilir",
    extrasEyebrow: "Ekstra özellikler",
    extrasTitle: "Sunucuya göre genişlet",
    extraHostingSetup: "Hosting Kurulumu",
    extraHosting: "7/24 Hosting",
    priceMonthlyHosting: "Aylık +150-500 TL",
    extraDashboard: "Web Dashboard",
    extraEmbeds: "Özel Tasarım Embedler",
    extraMemory: "Yapay Zeka Hafıza Sistemi",
    extraLanguage: "Çoklu Dil Sistemi",
    extraGame: "Oyun Sunucusu Entegrasyonu",
    extraCommands: "Özel Komut Sistemi",
    extraMusic: "Müzik Sistemi",
    extraLevel: "Level Sistemi",
    extraSecurity: "Özel Güvenlik Sistemi",
    extraAntiRaid: "Anti Raid Sistemi",
    extraAiCharacter: "Özel AI Karakteri",
    extraRegister: "Kayıt Sistemi",
    extraGiveaway: "Çekiliş Sistemi",
    extraEconomy: "Ekonomi Sistemi",
    priceOnDiscord: "Discord'da fiyat al",
    quickCalc: "Hızlı hesap",
    selectPackage: "Başlangıç paketini seç",
    pkgBasic: "Temel",
    pkgAdvanced: "Gelişmiş",
    pkgCustom: "Özel",
    estimatedTotal: "Tahmini toplam",
    estimateNote: "Aralıklı fiyatlar minimum tutarla hesaplanır. Özel botlar, farklı programlar ve özel yazılımlar için fiyat bilgisi Discord sunucusunda proje detayına göre verilir.",
    talkOnServer: "Sunucuda görüşelim",
    processEyebrow: "Teslim süreci",
    processTitle: "Net, takip edilebilir, temiz",
    process1Title: "İhtiyaç analizi",
    process1Text: "Sunucu yapısı, roller, kanallar, komutlar ve istenen bot karakteri netleşir.",
    process2Title: "Gelişim ve test",
    process2Text: "Sistem önce test ortamında denenir; hata, yetki ve edge-case kontrolleri yapılır.",
    process3Title: "Kurulum ve teslim",
    process3Text: "Bot sunucuna bağlanır, hosting ayarlanır ve kullanman gereken detaylar teslim edilir.",
    orderEyebrow: "Sipariş oluştur",
    orderTitle: "Bot fikrini gönder, Discord'da konuşalım.",
    orderName: "Adın",
    orderDiscord: "Discord kullanıcı adın",
    orderRequest: "İsteklerin",
    orderConsent: "Sipariş bilgilerimin Discord kanalına gönderilmesini onaylıyorum.",
    orderSubmit: "Siparişi gönder",
    orderSending: "Sipariş gönderiliyor...",
    orderSuccess: "Sipariş gönderildi. Discord üzerinden dönüş yapacağım.",
    orderError: "Sipariş gönderilemedi. Lütfen Discord sunucusundan yaz.",
    orderInfoEyebrow: "Nasıl çalışır?",
    orderInfo1: "Formu doldurup gönderdiğinde sipariş Discord kanalıma düşer.",
    orderInfo2: "Özel sistemlerde fiyat, proje detayına göre Discord üzerinden netleşir.",
    orderInfo3: "Daha hızlı dönüş için Discord kullanıcı adını doğru yaz.",
    startOrder: "Sipariş oluştur",
    orderSummaryEyebrow: "Sipariş özeti",
    summaryPackage: "Paket",
    summaryExtras: "Ekstralar",
    summaryTotal: "Toplam",
    selectedEmpty: "Henüz ekstra seçilmedi.",
    selectedCount: "seçili ekstra",
    contactEyebrow: "İletişim",
    contactTitle: "Bot fikrini birlikte netleştirelim.",
    contactText: "Discord üzerinden yazarsan en hızlı şekilde dönerim. Sunucu daveti, bot daveti, Instagram ve kullanıcı adım burada.",
    discordServer: "Discord Sunucusu",
    botInvite: "Bot Davet Linki",
    addBot: "Botu sunucuna ekle",
    footerBrand: "Phawes.py Discord bot hizmetleri",
    footerNote: "Fiyatlar istenen sistemin karmaşıklığına göre değişebilir."
  },
  en: {
    metaTitle: "Phawes.py | Discord Bot Services",
    metaDescription: "Discord bot development, AI bots, ticket systems, automatic server setup and custom Discord systems by Phawes.py.",
    copied: " copied",
    copyUnsupported: "Copy is not supported",
    customQuoteSuffix: " + quote on Discord",
    introKicker: "connection initializing",
    introMessage: "secure access is being prepared for custom Discord systems",
    introStatus1: "verifying core",
    introStatus2: "preparing interface",
    introStatus3: "access enabled",
    introEnter: "Enter",
    navPackages: "Packages",
    navCustom: "Custom Bots",
    navExtras: "Extras",
    navOrder: "Order",
    navContact: "Contact",
    discordJoin: "Join Discord",
    heroEyebrow: "Discord bot code and custom systems",
    heroTitle: "A soft cyberpunk bot experience for your server.",
    heroLead: "I build moderation, tickets, logs, AI characters, automatic server setup and custom bot systems with clean code, clear delivery and polished design.",
    getQuote: "Get a quote",
    copyDiscord: "Copy Discord",
    statPackages: "Bot Packages",
    statExtras: "Extra Systems",
    statHosting: "Hosting Option",
    botPanelText: "AI + Moderation + Server Setup",
    introText: "The goal is simple: your bot should not only work, it should fit the personality of your server. From command names to embeds, permissions and automation flows, I design the system like a brand.",
    priceList: "Price list",
    packagesTitle: "Discord bot packages",
    basicTitle: "Basic Package",
    basic1: "Simple moderation system",
    basic2: "Command system",
    basic3: "Auto role",
    basic4: "Welcome message",
    basic5: "Simple log system",
    basicCta: "Start with this package",
    bestBadge: "Best balance",
    advancedTitle: "Advanced Package",
    adv1: "Ticket system",
    adv2: "Advanced log system",
    adv3: "Custom commands",
    adv4: "Embed designs",
    adv5: "Permission system",
    adv6: "Server-specific settings",
    advancedCta: "Get advanced quote",
    aiTitle: "AI Bot Package",
    ai1: "Gemini/OpenAI integration",
    ai2: "Character personality",
    ai3: "Custom reply system",
    ai4: "RP system",
    ai5: "Memory system",
    ai6: "User-specific behavior",
    aiCta: "Let's discuss AI",
    customEyebrow: "On-demand bots",
    customTitle: "Custom systems beyond packages",
    newBadge: "New",
    securityBadge: "Security",
    suggestionBadge: "Idea",
    socialBadge: "Social",
    notifyBadge: "Notify",
    customBadge: "Custom",
    serverSetupTitle: "Automatic Server Setup Bot",
    serverSetupText: "A system that creates channels, categories, roles, permissions, embeds and the basic server layout in one flow.",
    backupTitle: "Server Backup and Protection Bot",
    backupText: "Backup, restore, anti-raid, logs and security workflows for your server in one place.",
    programsTitle: "Different Programs and Bots",
    programsText: "Discord bots, web dashboards, desktop tools, API integrations and custom automation ideas can be discussed.",
    socialTitle: "Social Media Notification Bots",
    socialText: "Post notifications, content tracking and reporting systems for Instagram, YouTube, Twitter/X and TikTok.",
    smsTitle: "SMS and Call Notification System",
    smsText: "Legal notification flows such as reminders, verification, appointment and status alerts for opted-in users.",
    automationTitle: "Custom Automations",
    automationText: "Server management, registration, economy, giveaways, dashboards and custom workflows prepared according to the project details.",
    discordPrice: "Join Discord for pricing",
    customPrice: "Priced by request",
    extrasEyebrow: "Extra features",
    extrasTitle: "Expand for your server",
    extraHostingSetup: "Hosting Setup",
    extraHosting: "24/7 Hosting",
    priceMonthlyHosting: "Monthly +$4-$11",
    extraDashboard: "Web Dashboard",
    extraEmbeds: "Custom Embed Designs",
    extraMemory: "AI Memory System",
    extraLanguage: "Multi-language System",
    extraGame: "Game Server Integration",
    extraCommands: "Custom Command System",
    extraMusic: "Music System",
    extraLevel: "Level System",
    extraSecurity: "Custom Security System",
    extraAntiRaid: "Anti Raid System",
    extraAiCharacter: "Custom AI Character",
    extraRegister: "Registration System",
    extraGiveaway: "Giveaway System",
    extraEconomy: "Economy System",
    priceOnDiscord: "Price on Discord",
    quickCalc: "Quick estimate",
    selectPackage: "Select a starting package",
    pkgBasic: "Basic",
    pkgAdvanced: "Advanced",
    pkgCustom: "Custom",
    estimatedTotal: "Estimated total",
    estimateNote: "Range prices are calculated from the minimum amount. Custom bots, programs and software are priced on Discord based on project details.",
    talkOnServer: "Talk on Discord",
    processEyebrow: "Delivery process",
    processTitle: "Clear, trackable, clean",
    process1Title: "Needs analysis",
    process1Text: "Server structure, roles, channels, commands and the desired bot personality are clarified.",
    process2Title: "Development and test",
    process2Text: "The system is tested in a test environment first; bugs, permissions and edge cases are checked.",
    process3Title: "Setup and delivery",
    process3Text: "The bot is connected to your server, hosting is configured and the usage details are delivered.",
    orderEyebrow: "Create an order",
    orderTitle: "Send your bot idea and let's talk on Discord.",
    orderName: "Your name",
    orderDiscord: "Your Discord username",
    orderRequest: "Your request",
    orderConsent: "I agree that my order details will be sent to the Discord channel.",
    orderSubmit: "Send order",
    orderSending: "Sending order...",
    orderSuccess: "Order sent. I will reply on Discord.",
    orderError: "Order could not be sent. Please message me from the Discord server.",
    orderInfoEyebrow: "How it works",
    orderInfo1: "When you submit the form, the order lands in my Discord channel.",
    orderInfo2: "For custom systems, pricing is finalized on Discord based on project details.",
    orderInfo3: "Write your Discord username correctly for a faster reply.",
    startOrder: "Create order",
    orderSummaryEyebrow: "Order summary",
    summaryPackage: "Package",
    summaryExtras: "Extras",
    summaryTotal: "Total",
    selectedEmpty: "No extras selected yet.",
    selectedCount: "selected extras",
    contactEyebrow: "Contact",
    contactTitle: "Let's shape your bot idea together.",
    contactText: "Message me on Discord for the fastest reply. Server invite, bot invite, Instagram and my username are here.",
    discordServer: "Discord Server",
    botInvite: "Bot Invite Link",
    addBot: "Add the bot to your server",
    footerBrand: "Phawes.py Discord bot services",
    footerNote: "Prices may change depending on the complexity of the requested system."
  }
};

let currentLanguage = localStorage.getItem("siteLanguage") || "tr";
let basePrice = 750;
let selectedPackageKey = "pkgBasic";
let toastTimer;
let introTimers = [];
let cursorCtx;
let cursorParticles = [];
let cursorAnimationFrame;
let smoothScrollFrame;

function t(key) {
  return translations[currentLanguage][key] || translations.tr[key] || key;
}

function formatPrice(value) {
  if (currentLanguage === "en") {
    return "$" + new Intl.NumberFormat("en-US").format(Math.ceil(value / USD_TRY_RATE));
  }

  return new Intl.NumberFormat("tr-TR").format(value) + " TL";
}

function formatStaticPrice(element) {
  const minTry = Number(element.dataset.priceTry);
  const maxTry = Number(element.dataset.priceTryMax);
  const prefix = element.dataset.pricePrefix || "";
  const plus = element.dataset.pricePlus === "true" ? "+" : "";
  const period = element.dataset.pricePeriod === "monthly" ? (currentLanguage === "en" ? "Monthly " : "Aylık ") : "";

  if (!minTry) return;

  if (currentLanguage === "en") {
    const minUsd = formatPrice(minTry);
    const maxUsd = maxTry ? formatPrice(maxTry) : "";
    element.textContent = period + prefix + (maxUsd ? `${minUsd}-${maxUsd}` : minUsd) + plus;
    return;
  }

  const minTl = new Intl.NumberFormat("tr-TR").format(minTry);
  const maxTl = maxTry ? new Intl.NumberFormat("tr-TR").format(maxTry) : "";
  element.textContent = period + prefix + (maxTl ? `${minTl}-${maxTl}` : minTl) + " TL" + plus;
}

function updateStaticPrices() {
  document.querySelectorAll("[data-price-try]").forEach(formatStaticPrice);
}

function getSelectedExtras() {
  return Array.from(extraInputs)
    .filter((input) => input.checked)
    .map((input) => {
      const item = input.closest(".extra-item");
      const name = item?.querySelector("span")?.textContent.trim() || "";
      const priceText = item?.querySelector("strong")?.textContent.trim() || "";
      const isCustom = item?.classList.contains("custom-price") || false;
      return {
        name,
        price: Number(input.dataset.price),
        priceText,
        isCustom
      };
    });
}

function getOrderState() {
  const selectedExtras = getSelectedExtras();
  const extrasTotal = selectedExtras.reduce((sum, item) => sum + item.price, 0);
  const hasCustomPrice = selectedExtras.some((item) => item.isCustom);
  const total = basePrice + extrasTotal;

  return {
    packageName: t(selectedPackageKey),
    selectedExtras,
    extrasTotal,
    hasCustomPrice,
    total,
    totalText: formatPrice(total) + (hasCustomPrice ? t("customQuoteSuffix") : "")
  };
}

function updateOrderSummary() {
  const state = getOrderState();
  const extrasText = state.selectedExtras.length
    ? state.selectedExtras.map((item) => `${item.name} (${item.priceText})`).join(", ")
    : t("selectedEmpty");

  if (summaryPackage) summaryPackage.textContent = state.packageName;
  if (summaryExtras) summaryExtras.textContent = extrasText;
  if (summaryTotal) summaryTotal.textContent = state.totalText;
  if (estimateSelected) {
    estimateSelected.innerHTML = state.selectedExtras.length
      ? `<span>${state.selectedExtras.length} ${t("selectedCount")}</span><strong>${extrasText}</strong>`
      : `<span>${t("selectedEmpty")}</span>`;
  }
}

function updateTotal() {
  const state = getOrderState();

  totalPrice.textContent = state.totalText;
  updateOrderSummary();
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("siteLanguage", language);
  document.documentElement.lang = language;
  document.title = t("metaTitle");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("metaDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  if (introLogo) {
    introLogo.dataset.text = "CIPHER HUB";
  }

  updateStaticPrices();

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateTotal();
}

function clearIntroTimers() {
  introTimers.forEach((timer) => window.clearTimeout(timer));
  introTimers = [];
}

function scrambleText(element, finalText, duration = 1300) {
  if (!element) return;

  const glyphs = "01#@$%&<>/\\[]{}+=*";
  const frameMs = 38;
  const totalFrames = Math.ceil(duration / frameMs);
  let frame = 0;

  function tick() {
    const progress = frame / totalFrames;
    const resolved = Math.floor(finalText.length * progress);
    const output = finalText
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < resolved) return char;
        return glyphs[Math.floor(Math.random() * glyphs.length)];
      })
      .join("");

    element.textContent = output;
    if (element.classList.contains("intro-logo")) {
      element.dataset.text = output;
    }

    frame += 1;

    if (frame <= totalFrames) {
      introTimers.push(window.setTimeout(tick, frameMs));
      return;
    }

    element.textContent = finalText;
    if (element.classList.contains("intro-logo")) {
      element.dataset.text = finalText;
    }
  }

  tick();
}

function runIntroSequence() {
  if (!introScreen || !document.body.classList.contains("intro-active")) return;

  clearIntroTimers();
  introScreen.classList.remove("intro-ready");
  enterSiteButton?.setAttribute("disabled", "true");

  scrambleText(introLogo, "CIPHER HUB", 1250);
  introTimers.push(window.setTimeout(() => scrambleText(introMessage, t("introMessage"), 1150), 700));
  introTimers.push(window.setTimeout(() => introScreen.classList.add("intro-ready"), 2850));
  introTimers.push(window.setTimeout(() => enterSiteButton?.removeAttribute("disabled"), 2900));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function easeInOutCubic(value) {
  return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function smoothScrollToTarget(target) {
  if (!target) return;

  if (reduceMotion) {
    target.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  window.cancelAnimationFrame(smoothScrollFrame);
  const startY = window.scrollY;
  const headerOffset = 18;
  const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
  const distance = targetY - startY;
  const duration = Math.min(1100, Math.max(520, Math.abs(distance) * 0.55));
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      smoothScrollFrame = window.requestAnimationFrame(step);
    }
  }

  smoothScrollFrame = window.requestAnimationFrame(step);
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      smoothScrollToTarget(target);
    });
  });
}

function setOrderStatus(message, type = "") {
  if (!orderStatus) return;
  orderStatus.textContent = message;
  orderStatus.dataset.state = type;
}

function buildOrderPayload(formData) {
  const name = String(formData.get("name") || "").trim();
  const discord = String(formData.get("discord") || "").trim();
  const request = String(formData.get("request") || "").trim() || "Belirtilmedi";
  const languageLabel = currentLanguage === "en" ? "English" : "Türkçe";
  const createdAt = new Date().toLocaleString("tr-TR", { dateStyle: "short", timeStyle: "short" });
  const state = getOrderState();
  const extras = state.selectedExtras.length
    ? state.selectedExtras.map((item) => `• ${item.name} — ${item.priceText}`).join("\n")
    : t("selectedEmpty");
  const hasOwnerMention = !ORDER_OWNER_MENTION.includes("DISCORD_USER_ID");
  const ownerLabel = hasOwnerMention ? ORDER_OWNER_MENTION : "phawes.py";

  return {
    username: "Cipher Hub Sipariş",
    avatar_url: "https://cdn.discordapp.com/embed/avatars/0.png",
    content: `${ownerLabel} Yeni sipariş oluşturuldu.`,
    allowed_mentions: hasOwnerMention ? { users: [ORDER_OWNER_MENTION.replace(/[<@!>]/g, "")] } : { parse: [] },
    embeds: [
      {
        title: "Yeni Sipariş",
        color: 7657471,
        fields: [
          { name: "Ad", value: name, inline: true },
          { name: "Discord", value: discord, inline: true },
          { name: "Dil", value: languageLabel, inline: true },
          { name: "Paket", value: state.packageName, inline: true },
          { name: "Toplam", value: state.totalText, inline: true },
          { name: "Seçilen Ekstralar", value: extras.slice(0, 1000), inline: false },
          { name: "İstekler", value: request.slice(0, 1000), inline: false },
          { name: "Tarih", value: createdAt, inline: true },
          { name: "Kaynak", value: window.location.href.slice(0, 1000), inline: false }
        ],
        footer: { text: "Phawes.py website order form" }
      }
    ]
  };
}

async function sendOrder(event) {
  event.preventDefault();
  if (!orderForm) return;

  const submitButton = orderForm.querySelector("button[type='submit']");
  const formData = new FormData(orderForm);
  const payload = buildOrderPayload(formData);
  const webhookForm = new FormData();
  webhookForm.append("payload_json", JSON.stringify(payload));

  submitButton?.setAttribute("disabled", "true");
  setOrderStatus(t("orderSending"), "sending");

  try {
    await fetch(ORDER_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      body: webhookForm
    });

    orderForm.reset();
    setOrderStatus(t("orderSuccess"), "success");
    showToast(t("orderSuccess"));
  } catch {
    setOrderStatus(t("orderError"), "error");
    showToast(t("orderError"));
  } finally {
    submitButton?.removeAttribute("disabled");
  }
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(
    ".section-heading, .price-card, .special-card, .extra-item, .estimate-panel, .process-grid article, .contact-card, .order-form, .order-info, .intro-band p, .hero-copy > *, .hero-visual"
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupPointerGlow() {
  document.querySelectorAll(".button, .card-link, .nav-cta, .price-card, .special-card, .contact-card, .extra-item, .order-form, .order-info, .package-switch button, .language-switch button").forEach((element) => {
    element.classList.add("glow-target");
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      element.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

function setupCursorTrail() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    document.documentElement.style.setProperty("--cursor-xp", `${(event.clientX / window.innerWidth) * 100}%`);
    document.documentElement.style.setProperty("--cursor-yp", `${(event.clientY / window.innerHeight) * 100}%`);

    if (cursorSpotlight) {
      cursorSpotlight.style.opacity = "1";
    }

    if (ambientField) {
      ambientField.style.opacity = "1";
      ambientField.style.transform = `translate3d(${(event.clientX / window.innerWidth - 0.5) * 24}px, ${(event.clientY / window.innerHeight - 0.5) * 24}px, 0)`;
    }
  }, { passive: true });

  if (!cursorCanvas) return;

  cursorCtx = cursorCanvas.getContext("2d", { alpha: true });
  if (!cursorCtx) return;

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    cursorCanvas.width = Math.floor(window.innerWidth * ratio);
    cursorCanvas.height = Math.floor(window.innerHeight * ratio);
    cursorCanvas.style.width = `${window.innerWidth}px`;
    cursorCanvas.style.height = `${window.innerHeight}px`;
    cursorCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function drawTrail() {
    cursorCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    cursorParticles = cursorParticles.filter((particle) => particle.life > 0);

    if (!cursorParticles.length) {
      cursorAnimationFrame = null;
      return;
    }

    cursorParticles.forEach((particle) => {
      particle.life -= 0.022;
      particle.x += particle.vx;
      particle.y += particle.vy;

      const alpha = Math.max(particle.life, 0);
      const gradient = cursorCtx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);
      gradient.addColorStop(0, `rgba(116, 247, 255, ${0.36 * alpha})`);
      gradient.addColorStop(0.45, `rgba(255, 107, 213, ${0.18 * alpha})`);
      gradient.addColorStop(1, "rgba(116, 247, 255, 0)");
      cursorCtx.fillStyle = gradient;
      cursorCtx.beginPath();
      cursorCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      cursorCtx.fill();
    });

    cursorAnimationFrame = window.requestAnimationFrame(drawTrail);
  }

  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.addEventListener("pointermove", (event) => {
    if (cursorGlow) {
      cursorGlow.style.opacity = "1";
      cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    }

    cursorParticles.push({
      x: event.clientX,
      y: event.clientY,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      size: 18 + Math.random() * 18,
      life: 1
    });

    if (cursorParticles.length > 34) {
      cursorParticles.splice(0, cursorParticles.length - 34);
    }

    if (!cursorAnimationFrame) {
      cursorAnimationFrame = window.requestAnimationFrame(drawTrail);
    }
  }, { passive: true });

  resizeCanvas();
}

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    packageButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    basePrice = Number(button.dataset.package);
    selectedPackageKey = button.dataset.i18n || "aiTitle";
    updateTotal();
  });
});

extraInputs.forEach((input) => {
  input.addEventListener("change", updateTotal);
});

orderForm?.addEventListener("submit", sendOrder);

startOrderButton?.addEventListener("click", () => {
  smoothScrollToTarget(document.querySelector("#siparis"));
  window.setTimeout(() => orderForm?.querySelector("input[name='name']")?.focus(), reduceMotion ? 0 : 520);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    runIntroSequence();
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      showToast(value + t("copied"));
    } catch {
      showToast(t("copyUnsupported"));
    }
  });
});

enterSiteButton?.addEventListener("click", () => {
  document.body.classList.add("intro-closing");

  window.setTimeout(() => {
    document.body.classList.remove("intro-active", "intro-closing");
    introScreen?.setAttribute("aria-hidden", "true");
  }, 850);
});

applyLanguage(currentLanguage);
runIntroSequence();
setupRevealAnimations();
setupPointerGlow();
setupSmoothAnchors();
setupCursorTrail();

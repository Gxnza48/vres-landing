/** Textos de la landing en los tres idiomas de VRes. */

export type Lang = "es" | "en" | "pt";

export const LANGS: { id: Lang; label: string }[] = [
  { id: "es", label: "ES" },
  { id: "en", label: "EN" },
  { id: "pt", label: "PT" },
];

const es = {
  meta: {
    title: "VRes — Ajustes de pantalla para gaming, gratis y de código abierto",
  },
  nav: {
    potato: "Potato",
    features: "Funciones",
    crosshairs: "Miras",
    trust: "Confianza",
    faq: "Preguntas",
    download: "Descargar",
    menu: "Menú",
    language: "Idioma",
  },
  hero: {
    badge: "Gratis · Código abierto · Sin cuenta",
    title1: "Tu monitor,",
    title2: "desbloqueado.",
    subtitle:
      "Colores que pegan, crosshair propio, resolución estirada y gráficos Potato para ROB RUN. Una app liviana para Windows, sin suscripciones y sin telemetría.",
    potatoPill: "Nuevo: gráficos Potato en ROB RUN",
    download: "Descargar para Windows",
    discord: "Unirme al Discord",
    meta: "Windows 10 y 11 · 64 bits · GPL-3.0",
    virustotal: "Revísalo en VirusTotal",
    version: "Versión {v}",
    before: "Sin VRes",
    after: "Con VRes",
    drag: "Arrastra para comparar",
    scene: "Elige tu juego",
    ticker: ["Saturación 300 %", "Vibrance NVIDIA · AMD", "Potato NVIDIA", "Resolución estirada", "Crosshair", "Perfiles por juego", "Gratis", "Sin cuenta", "Código abierto"],
  },
  potato: {
    eyebrow: "Nuevo · Solo NVIDIA",
    title: { before: "Gráficos", accent: "Potato", after: "" },
    subtitle:
      "Texturas planas, tipo arcilla, para sacarle más FPS a ROB RUN. Lo activas con un clic en la app y reinicias el juego.",
    normal: "Normal",
    potato: "Potato",
    drag: "Arrastra para comparar Normal y Potato",
    caption: "Capturas reales de ROB RUN · normal vs. Potato",
    specs: [
      { k: "Placa", v: "Solo NVIDIA" },
      { k: "Juego", v: "ROB RUN" },
      { k: "Efecto", v: "Texturas planas, más FPS" },
      { k: "Activar", v: "Un clic, en la pestaña Potato" },
      { k: "Aplicar", v: "Reinicia el juego" },
    ],
    appLabel: "En la app",
    appAlt: "La pestaña Potato de VRes con tres niveles para ROB RUN: Normal, Texturas bajas y Potato.",
    how: "VRes lo guarda en el perfil de ROB RUN del driver de NVIDIA, como su panel de control: no toca el juego. Windows pide permiso de administrador al cambiarlo, y queda guardado hasta que elijas «Normal».",
    fpsTitle: "¿No tienes NVIDIA?",
    fps: "La pestaña FPS de la app pone los gráficos de ROB RUN en los valores que más FPS dan, con cualquier placa. Lo cambia con el juego cerrado y te deja restaurar tus ajustes.",
    riskTitle: "Úsalo bajo tu propio riesgo",
    risk: "En ROB RUN hubo un ban con el Potato activo y ningún anti-cheat publica qué permite. Revisa las reglas antes de activarlo.",
  },
  features: {
    eyebrow: "Funciones",
    title: "Lo que hace, sin vueltas",
    counterLabel: "de saturación",
    activeProfile: "Perfil activo",
    items: {
      color: {
        title: "Color que pega",
        text: "Saturación hasta 300 % y la vibrance digital de NVIDIA y AMD, monitor por monitor. Más brillo, contraste, gamma y temperatura.",
      },
      crosshair: {
        title: "Crosshair propio",
        text: "Diséñalo o pega tu código de VALORANT o CS2. Centrado al píxel y, si quieres, oculto en capturas y streams.",
        link: "Ver la galería de miras",
      },
      stretch: {
        title: "Resolución estirada",
        text: "4:3, 5:4, 16:10 y más. Cada cambio pide confirmación y, si no respondes, vuelve solo.",
      },
      profiles: {
        title: "Perfiles por juego",
        text: "Cada juego con su look, su crosshair y su resolución. Se aplican solos al abrirlo y vuelven al cerrarlo.",
      },
      darkBoost: {
        title: "Dark Boost",
        text: "Aclara las sombras mientras mantienes una tecla o un botón del mouse. Viene apagado.",
        note: "Puede ser sancionable en algunos juegos o torneos.",
      },
    },
  },
  trust: {
    eyebrow: "Confianza",
    title: "Sin letra chica",
    subtitle: "VRes cambia cómo Windows muestra la imagen. Nunca toca el juego.",
    points: [
      { title: "Gratis", text: "Sin pagos, sin suscripciones y sin publicidad." },
      { title: "Sin cuenta", text: "Lo instalas y lo usas. Tus ajustes se quedan en tu PC." },
      { title: "Sin telemetría", text: "Solo busca actualizaciones en GitHub, y se puede apagar." },
      { title: "Código abierto", text: "GPL-3.0. Cada instalador se compila en GitHub, a la vista de todos." },
      { title: "No toca el juego", text: "Sin inyectar código, sin leer su memoria y sin drivers propios." },
      {
        title: "Todo vuelve al cerrar",
        text: "La pantalla queda como estaba. Ctrl + Alt + Shift + R la restablece cuando quieras. El Potato queda en el driver hasta que elijas «Normal».",
      },
    ],
    vtTitle: "Revísalo en VirusTotal",
    vtText:
      "Unos 70 antivirus analizan el instalador a la vez. En la v0.1.0 (24/11/2026), 1 de 69 lo marcó: pasa seguido con programas nuevos sin firma digital.",
    vtSnapshot: "Ver el análisis de la v0.1.0",
    vtCurrent: "Buscar la v{version}",
    vtAlt: "Captura de VirusTotal del instalador de la v0.1.0: 1 de 69 motores lo marcó.",
    anticheatTitle: "Sobre los anti-cheats",
    anticheatText:
      "VRes funciona con las mismas APIs que los paneles de control de tu placa de video. Aun así, ninguna herramienta puede prometer lo que decide un anti-cheat, y hubo sanciones en juegos con anti-cheat mientras VRes estaba abierto. Úsalo bajo tu propio riesgo.",
    anticheatLink: "Leer el detalle",
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "Windows dice «Windows protegió tu PC». ¿Es un virus?",
        a: "No. Aparece porque el instalador es nuevo y todavía no está firmado. Toca «Más información» y después «Ejecutar de todas formas». Cada versión publica su SHA-256 para verificarla, y puedes revisarla en VirusTotal.",
      },
      {
        q: "¿Me pueden banear?",
        a: "Puede pasar. VRes no toca el juego, pero los editores juzgan por el efecto y no por el método, y ningún anti-cheat publica qué permite. Hubo sanciones mientras VRes estaba abierto, una de ellas en ROB RUN con el Potato activo. Revisa las reglas de lo que juegas y úsalo bajo tu propio riesgo.",
      },
      {
        q: "¿Por qué el Potato es solo para NVIDIA y ROB RUN?",
        a: "Porque cambia el «LOD bias» de las texturas en el perfil de ROB RUN del driver de NVIDIA, algo que funciona en juegos DirectX 11 como ROB RUN. En portátiles con dos placas, el juego tiene que correr en la NVIDIA. Después de activarlo, reinicia el juego.",
      },
      {
        q: "¿Funciona en pantalla completa exclusiva?",
        a: "Sí: ahí la saturación pasa sola a la vibrance del driver. El crosshair se ve en ventana sin bordes y en la pantalla completa de Windows 10/11.",
      },
      {
        q: "¿Cómo vuelvo todo a la normalidad?",
        a: "Cierra VRes o aprieta Ctrl + Alt + Shift + R. El Potato va aparte: en la pestaña Potato, elige «Normal».",
      },
    ],
  },
  cta: {
    title: "Pruébalo en tu PC",
    text: "Gratis, sin cuenta y sin telemetría. Si algo falla o tienes una idea, el Discord está abierto.",
    download: "Descargar para Windows",
    discord: "Unirme al Discord",
  },
  partner: {
    badge: "Partner oficial",
    name: "ROB RUN LATAM",
    text: "Supervivencia en Latinoamérica: la comunidad de ROB RUN para partidas, clanes, clips, ayuda y los looks de VRes para el juego.",
    cta: "Unirme al Discord",
  },
  footer: {
    tagline: "Ajustes de pantalla para gaming. Gratis, local y de código abierto.",
    releases: "Versiones",
    changelog: "Novedades",
    github: "GitHub",
    discord: "Discord",
    license: "Software libre bajo GPL-3.0.",
    disclaimer:
      "Proyecto independiente, sin afiliación con fabricantes de placas de video, editores de juegos ni anti-cheats. Las marcas, logos y capturas de juegos son de sus dueños y se usan solo para identificarlos.",
  },
};

export type Copy = typeof es;

const en: Copy = {
  meta: {
    title: "VRes — Display tweaks for gaming, free and open source",
  },
  nav: {
    potato: "Potato",
    features: "Features",
    crosshairs: "Crosshairs",
    trust: "Trust",
    faq: "FAQ",
    download: "Download",
    menu: "Menu",
    language: "Language",
  },
  hero: {
    badge: "Free · Open source · No account",
    title1: "Your monitor,",
    title2: "unlocked.",
    subtitle:
      "Colors that pop, your own crosshair, stretched resolution and Potato graphics for ROB RUN. One lightweight Windows app, with no subscriptions and no telemetry.",
    potatoPill: "New: Potato graphics in ROB RUN",
    download: "Download for Windows",
    discord: "Join the Discord",
    meta: "Windows 10 and 11 · 64-bit · GPL-3.0",
    virustotal: "Check it on VirusTotal",
    version: "Version {v}",
    before: "Without VRes",
    after: "With VRes",
    drag: "Drag to compare",
    scene: "Pick your game",
    ticker: ["Saturation 300%", "Vibrance NVIDIA · AMD", "NVIDIA Potato", "Stretched resolution", "Crosshair", "Per-game profiles", "Free", "No account", "Open source"],
  },
  potato: {
    eyebrow: "New · NVIDIA only",
    title: { before: "", accent: "Potato", after: "graphics" },
    subtitle:
      "Flat, clay-like textures to squeeze more FPS out of ROB RUN. Turn it on with one click in the app and restart the game.",
    normal: "Normal",
    potato: "Potato",
    drag: "Drag to compare Normal and Potato",
    caption: "Real ROB RUN captures · normal vs. Potato",
    specs: [
      { k: "GPU", v: "NVIDIA only" },
      { k: "Game", v: "ROB RUN" },
      { k: "Effect", v: "Flat textures, more FPS" },
      { k: "Turn on", v: "One click, in the Potato tab" },
      { k: "Apply", v: "Restart the game" },
    ],
    appLabel: "In the app",
    appAlt: "The VRes Potato tab with three levels for ROB RUN: Normal, Low textures and Potato.",
    how: "VRes saves it in ROB RUN's NVIDIA driver profile, just like NVIDIA's control panel: it doesn't touch the game. Windows asks for admin permission when you change it, and it stays saved until you pick “Normal”.",
    fpsTitle: "No NVIDIA?",
    fps: "The app's FPS tab sets ROB RUN's graphics to the highest-FPS values, on any GPU. It changes them with the game closed and lets you restore your settings.",
    riskTitle: "Use it at your own risk",
    risk: "In ROB RUN there was a ban with Potato on, and no anti-cheat publishes what it allows. Check the rules before turning it on.",
  },
  features: {
    eyebrow: "Features",
    title: "What it does, no fluff",
    counterLabel: "saturation",
    activeProfile: "Active profile",
    items: {
      color: {
        title: "Colors that pop",
        text: "Saturation up to 300% and NVIDIA and AMD digital vibrance, monitor by monitor. Plus brightness, contrast, gamma and temperature.",
      },
      crosshair: {
        title: "Your own crosshair",
        text: "Design it or paste your VALORANT or CS2 code. Pixel-centered and, if you want, hidden from captures and streams.",
        link: "Browse the crosshair gallery",
      },
      stretch: {
        title: "Stretched resolution",
        text: "4:3, 5:4, 16:10 and more. Every change asks for confirmation and, if you don't answer, it reverts on its own.",
      },
      profiles: {
        title: "Per-game profiles",
        text: "Each game with its own look, crosshair and resolution. They apply when you open it and revert when you close it.",
      },
      darkBoost: {
        title: "Dark Boost",
        text: "Brightens shadows while you hold a key or mouse button. Off by default.",
        note: "May be sanctionable in some games or tournaments.",
      },
    },
  },
  trust: {
    eyebrow: "Trust",
    title: "No fine print",
    subtitle: "VRes changes how Windows displays the image. It never touches the game.",
    points: [
      { title: "Free", text: "No payments, no subscriptions and no ads." },
      { title: "No account", text: "Install it and use it. Your settings stay on your PC." },
      { title: "No telemetry", text: "It only checks GitHub for updates, and you can turn that off." },
      { title: "Open source", text: "GPL-3.0. Every installer is built on GitHub, in plain sight." },
      { title: "Never touches the game", text: "No code injection, no memory reading and no drivers of its own." },
      {
        title: "Everything reverts on close",
        text: "Your display goes back to how it was. Ctrl + Alt + Shift + R resets it any time. Potato stays in the driver until you pick “Normal”.",
      },
    ],
    vtTitle: "Check it on VirusTotal",
    vtText:
      "About 70 antivirus engines scan the installer at once. For v0.1.0 (Nov 24, 2026), 1 of 69 flagged it: common for new programs without a digital signature.",
    vtSnapshot: "See the v0.1.0 scan",
    vtCurrent: "Look up v{version}",
    vtAlt: "VirusTotal screenshot of the v0.1.0 installer: 1 of 69 engines flagged it.",
    anticheatTitle: "About anti-cheats",
    anticheatText:
      "VRes works through the same APIs as your graphics card's control panel. Still, no tool can promise what an anti-cheat decides, and there have been sanctions in anti-cheat games while VRes was open. Use it at your own risk.",
    anticheatLink: "Read the details",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Windows says “Windows protected your PC”. Is it a virus?",
        a: "No. It shows up because the installer is new and not signed yet. Click “More info” and then “Run anyway”. Every release publishes its SHA-256 so you can verify it, and you can check it on VirusTotal.",
      },
      {
        q: "Can I get banned?",
        a: "It can happen. VRes doesn't touch the game, but publishers judge by effect, not method, and no anti-cheat publishes what it allows. There have been sanctions while VRes was open, one of them in ROB RUN with Potato on. Check the rules of what you play and use it at your own risk.",
      },
      {
        q: "Why is Potato only for NVIDIA and ROB RUN?",
        a: "Because it changes the texture “LOD bias” in ROB RUN's NVIDIA driver profile, which works in DirectX 11 games like ROB RUN. On laptops with two GPUs, the game has to run on the NVIDIA one. After turning it on, restart the game.",
      },
      {
        q: "Does it work in exclusive fullscreen?",
        a: "Yes: there, saturation moves to the driver's vibrance on its own. The crosshair shows in borderless windowed and in Windows 10/11 full screen.",
      },
      {
        q: "How do I get everything back to normal?",
        a: "Close VRes or press Ctrl + Alt + Shift + R. Potato is separate: in the Potato tab, pick “Normal”.",
      },
    ],
  },
  cta: {
    title: "Try it on your PC",
    text: "Free, no account and no telemetry. If something breaks or you have an idea, the Discord is open.",
    download: "Download for Windows",
    discord: "Join the Discord",
  },
  partner: {
    badge: "Official partner",
    name: "ROB RUN LATAM",
    text: "Survival in Latin America: the ROB RUN community for matches, clans, clips, help and VRes looks for the game.",
    cta: "Join the Discord",
  },
  footer: {
    tagline: "Display tweaks for gaming. Free, local and open source.",
    releases: "Releases",
    changelog: "Changelog",
    github: "GitHub",
    discord: "Discord",
    license: "Free software under GPL-3.0.",
    disclaimer:
      "Independent project, not affiliated with graphics card makers, game publishers or anti-cheats. Trademarks, logos and game screenshots belong to their owners and are used only to identify them.",
  },
};

const pt: Copy = {
  meta: {
    title: "VRes — Ajustes de tela para games, grátis e de código aberto",
  },
  nav: {
    potato: "Potato",
    features: "Recursos",
    crosshairs: "Miras",
    trust: "Confiança",
    faq: "Perguntas",
    download: "Baixar",
    menu: "Menu",
    language: "Idioma",
  },
  hero: {
    badge: "Grátis · Código aberto · Sem conta",
    title1: "Seu monitor,",
    title2: "desbloqueado.",
    subtitle:
      "Cores que chamam atenção, crosshair próprio, resolução esticada e gráficos Potato para ROB RUN. Um app leve para Windows, sem assinaturas e sem telemetria.",
    potatoPill: "Novo: gráficos Potato no ROB RUN",
    download: "Baixar para Windows",
    discord: "Entrar no Discord",
    meta: "Windows 10 e 11 · 64 bits · GPL-3.0",
    virustotal: "Confira no VirusTotal",
    version: "Versão {v}",
    before: "Sem VRes",
    after: "Com VRes",
    drag: "Arraste para comparar",
    scene: "Escolha seu jogo",
    ticker: ["Saturação 300%", "Vibrance NVIDIA · AMD", "Potato NVIDIA", "Resolução esticada", "Crosshair", "Perfis por jogo", "Grátis", "Sem conta", "Código aberto"],
  },
  potato: {
    eyebrow: "Novo · Só NVIDIA",
    title: { before: "Gráficos", accent: "Potato", after: "" },
    subtitle:
      "Texturas planas, tipo argila, para tirar mais FPS do ROB RUN. Você ativa com um clique no app e reinicia o jogo.",
    normal: "Normal",
    potato: "Potato",
    drag: "Arraste para comparar Normal e Potato",
    caption: "Capturas reais do ROB RUN · normal vs. Potato",
    specs: [
      { k: "Placa", v: "Só NVIDIA" },
      { k: "Jogo", v: "ROB RUN" },
      { k: "Efeito", v: "Texturas planas, mais FPS" },
      { k: "Ativar", v: "Um clique, na aba Potato" },
      { k: "Aplicar", v: "Reinicie o jogo" },
    ],
    appLabel: "No app",
    appAlt: "A aba Potato do VRes com três níveis para ROB RUN: Normal, Texturas baixas e Potato.",
    how: "O VRes salva isso no perfil do ROB RUN no driver da NVIDIA, como o painel de controle dela: não mexe no jogo. O Windows pede permissão de administrador ao mudar, e fica salvo até você escolher “Normal”.",
    fpsTitle: "Não tem NVIDIA?",
    fps: "A aba FPS do app coloca os gráficos do ROB RUN nos valores que dão mais FPS, com qualquer placa. Muda com o jogo fechado e deixa você restaurar seus ajustes.",
    riskTitle: "Use por sua conta e risco",
    risk: "No ROB RUN houve um ban com o Potato ativado, e nenhum anti-cheat publica o que permite. Confira as regras antes de ativar.",
  },
  features: {
    eyebrow: "Recursos",
    title: "O que ele faz, sem enrolação",
    counterLabel: "de saturação",
    activeProfile: "Perfil ativo",
    items: {
      color: {
        title: "Cores que chamam atenção",
        text: "Saturação até 300% e o vibrance digital da NVIDIA e da AMD, monitor por monitor. Mais brilho, contraste, gama e temperatura.",
      },
      crosshair: {
        title: "Crosshair próprio",
        text: "Crie o seu ou cole seu código do VALORANT ou do CS2. Centralizado no pixel e, se quiser, oculto em capturas e lives.",
        link: "Ver a galeria de miras",
      },
      stretch: {
        title: "Resolução esticada",
        text: "4:3, 5:4, 16:10 e mais. Cada mudança pede confirmação e, se você não responder, volta sozinha.",
      },
      profiles: {
        title: "Perfis por jogo",
        text: "Cada jogo com seu look, seu crosshair e sua resolução. Aplicam sozinhos ao abrir e voltam ao fechar.",
      },
      darkBoost: {
        title: "Dark Boost",
        text: "Clareia as sombras enquanto você segura uma tecla ou um botão do mouse. Vem desligado.",
        note: "Pode ser passível de punição em alguns jogos ou torneios.",
      },
    },
  },
  trust: {
    eyebrow: "Confiança",
    title: "Sem letras miúdas",
    subtitle: "O VRes muda como o Windows mostra a imagem. Nunca mexe no jogo.",
    points: [
      { title: "Grátis", text: "Sem pagamentos, sem assinaturas e sem anúncios." },
      { title: "Sem conta", text: "Instale e use. Seus ajustes ficam no seu PC." },
      { title: "Sem telemetria", text: "Só procura atualizações no GitHub, e dá para desligar." },
      { title: "Código aberto", text: "GPL-3.0. Cada instalador é compilado no GitHub, à vista de todos." },
      { title: "Não mexe no jogo", text: "Sem injetar código, sem ler a memória e sem drivers próprios." },
      {
        title: "Tudo volta ao fechar",
        text: "A tela fica como estava. Ctrl + Alt + Shift + R restaura quando quiser. O Potato fica no driver até você escolher “Normal”.",
      },
    ],
    vtTitle: "Confira no VirusTotal",
    vtText:
      "Uns 70 antivírus analisam o instalador ao mesmo tempo. Na v0.1.0 (24/11/2026), 1 de 69 marcou: é comum com programas novos sem assinatura digital.",
    vtSnapshot: "Ver a análise da v0.1.0",
    vtCurrent: "Procurar a v{version}",
    vtAlt: "Captura do VirusTotal do instalador da v0.1.0: 1 de 69 motores marcou.",
    anticheatTitle: "Sobre os anti-cheats",
    anticheatText:
      "O VRes funciona com as mesmas APIs que os painéis de controle da sua placa de vídeo. Mesmo assim, nenhuma ferramenta pode prometer o que um anti-cheat decide, e houve punições em jogos com anti-cheat enquanto o VRes estava aberto. Use por sua conta e risco.",
    anticheatLink: "Ler os detalhes",
  },
  faq: {
    eyebrow: "Perguntas",
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Windows diz “O Windows protegeu o computador”. É vírus?",
        a: "Não. Aparece porque o instalador é novo e ainda não é assinado. Clique em “Mais informações” e depois em “Executar assim mesmo”. Cada versão publica o SHA-256 para conferir, e você pode verificá-la no VirusTotal.",
      },
      {
        q: "Posso ser banido?",
        a: "Pode acontecer. O VRes não mexe no jogo, mas as publicadoras julgam pelo efeito, não pelo método, e nenhum anti-cheat publica o que permite. Houve punições com o VRes aberto, uma delas no ROB RUN com o Potato ativado. Confira as regras do que você joga e use por sua conta e risco.",
      },
      {
        q: "Por que o Potato é só para NVIDIA e ROB RUN?",
        a: "Porque ele muda o “LOD bias” das texturas no perfil do ROB RUN no driver da NVIDIA, o que funciona em jogos DirectX 11 como o ROB RUN. Em notebooks com duas placas, o jogo precisa rodar na NVIDIA. Depois de ativar, reinicie o jogo.",
      },
      {
        q: "Funciona em tela cheia exclusiva?",
        a: "Sim: nela, a saturação passa sozinha para o vibrance do driver. O crosshair aparece em janela sem bordas e na tela cheia do Windows 10/11.",
      },
      {
        q: "Como volto tudo ao normal?",
        a: "Feche o VRes ou aperte Ctrl + Alt + Shift + R. O Potato é à parte: na aba Potato, escolha “Normal”.",
      },
    ],
  },
  cta: {
    title: "Teste no seu PC",
    text: "Grátis, sem conta e sem telemetria. Se algo der errado ou você tiver uma ideia, o Discord está aberto.",
    download: "Baixar para Windows",
    discord: "Entrar no Discord",
  },
  partner: {
    badge: "Parceiro oficial",
    name: "ROB RUN LATAM",
    text: "Sobrevivência na América Latina: a comunidade de ROB RUN para partidas, clãs, clipes, ajuda e looks do VRes para o jogo.",
    cta: "Entrar no Discord",
  },
  footer: {
    tagline: "Ajustes de tela para games. Grátis, local e de código aberto.",
    releases: "Versões",
    changelog: "Novidades",
    github: "GitHub",
    discord: "Discord",
    license: "Software livre sob GPL-3.0.",
    disclaimer:
      "Projeto independente, sem afiliação com fabricantes de placas de vídeo, publicadoras de jogos nem anti-cheats. As marcas, logos e capturas de jogos pertencem aos seus donos e são usados só para identificá-los.",
  },
};

export const COPY: Record<Lang, Copy> = { es, en, pt };

/** El idioma del navegador, si es uno de los tres. */
export function detectLang(): Lang {
  const saved = localStorage.getItem("vres-lang");
  if (saved === "es" || saved === "en" || saved === "pt") return saved;
  const browser = navigator.language.toLowerCase();
  if (browser.startsWith("pt")) return "pt";
  if (browser.startsWith("en")) return "en";
  return "es";
}

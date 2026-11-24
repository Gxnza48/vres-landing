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
    demo: "Pruébalo",
    features: "Funciones",
    how: "Cómo funciona",
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
      "Saturación hasta 300 %, vibrance digital, resolución estirada, crosshair y perfiles por juego. Todo en una app liviana para Windows, sin suscripciones y sin telemetría.",
    download: "Descargar para Windows",
    discord: "Unirme al Discord",
    meta: "Windows 10 y 11 · 64 bits · Sin permisos de administrador",
    version: "Versión {v}",
    scroll: "Descubre más",
    before: "Sin VRes",
    after: "Con VRes",
    drag: "Arrastra para comparar",
    ticker: ["Saturación 300 %", "Vibrance NVIDIA · AMD", "Resolución estirada", "Crosshair", "Perfiles por juego", "Dark Boost", "Zoom", "Gratis", "Sin cuenta", "Código abierto"],
  },
  stats: [
    { value: "300 %", label: "de saturación máxima" },
    { value: "NVIDIA + AMD", label: "vibrance por driver" },
    { value: "0", label: "cuentas y datos enviados" },
    { value: "GPL-3.0", label: "código abierto" },
  ],
  demo: {
    eyebrow: "Demostración en vivo",
    title: "Pruébalo aquí mismo",
    subtitle:
      "Así cambia la imagen. En tu PC, VRes lo aplica a todo el escritorio y a tus juegos, con un atajo para volver todo atrás.",
    saturation: "Saturación",
    darkBoost: "Dark Boost",
    crosshair: "Crosshair",
    compare: "Mantén para comparar",
    reset: "Restablecer",
    hint: "¿Ves a alguien en la sombra? Sube el Dark Boost.",
    disclaimer: "Simulación en el navegador. El resultado real depende de tu monitor.",
    scene: "Escena de ejemplo: una ciudad de neón al atardecer, con una figura escondida en la sombra.",
    on: "Activado",
    off: "Apagado",
  },
  features: {
    eyebrow: "Funciones",
    title: "Todo lo que tu pantalla necesita",
    subtitle: "Las herramientas de las apps pagas, gratis y en un solo lugar.",
    activeProfile: "Perfil activo",
    codeHint: "Pruébalo: pégalo en VRes, en Pantalla → Looks.",
    copy: "Copiar",
    copied: "¡Copiado!",
    items: {
      color: {
        title: "Color que pega",
        text: "Saturación hasta 300 % y ajuste fino: brillo, contraste, gamma, temperatura, sombras y altas luces.",
      },
      vibrance: {
        title: "Vibrance digital",
        text: "El vibrance del driver de NVIDIA y AMD, monitor por monitor. Funciona hasta en pantalla completa exclusiva.",
      },
      stretch: {
        title: "Resolución estirada",
        text: "4:3, 5:4, 16:10 y las de Fortnite. Cada cambio pide confirmación y, si no respondes, vuelve solo.",
      },
      crosshair: {
        title: "Crosshair propio",
        text: "Diséñalo a tu gusto, centrado al píxel y, si quieres, oculto en tus capturas y streams.",
      },
      profiles: {
        title: "Perfiles por juego",
        text: "Cada juego con su look, su crosshair y su resolución. Se aplican solos al entrar y vuelven al salir.",
      },
      enhancers: {
        title: "Dark Boost y Zoom",
        text: "Aclara las sombras o haz zoom manteniendo una tecla o un botón del mouse. Vienen apagados.",
      },
      looks: {
        title: "Looks y códigos",
        text: "Presets por juego y códigos cortos para compartir tu configuración por WhatsApp o Discord.",
      },
      customize: {
        title: "A tu estilo",
        text: "Temas, colores de acento, tamaño de la interfaz y tu propia imagen o GIF de fondo.",
      },
    },
  },
  games: {
    eyebrow: "Juegos",
    title: "Listo para tus juegos",
    subtitle: "Funciona con cualquier juego, y reconoce el que está al frente por su nombre, sin abrir su proceso.",
    others: "y cualquier otro",
  },
  how: {
    eyebrow: "Sin misterio",
    title: "Cómo funciona",
    subtitle: "VRes cambia cómo Windows muestra la imagen. Nunca toca el juego.",
    game: "Tu juego",
    untouched: "Intacto",
    screen: "Tu monitor",
    layers: [
      {
        name: "Matriz de color de Windows",
        scope: "Todo el escritorio",
        text: "Saturación, tono y filtros de visión, con la misma API que usa la Lupa de Windows.",
      },
      {
        name: "Rampas de gamma",
        scope: "Por monitor",
        text: "Brillo, contraste, gamma y temperatura, sobre la calibración de cada pantalla.",
      },
      {
        name: "Driver de video",
        scope: "Por monitor",
        text: "El vibrance digital de NVIDIA y AMD, el mismo de sus paneles de control.",
      },
    ],
    never: ["Sin inyectar código", "Sin leer la memoria del juego", "Sin drivers ni servicios", "Sin hooks de teclado"],
  },
  trust: {
    safetyTitle: "Tu pantalla siempre vuelve",
    safety: [
      "Al cerrar VRes, todo vuelve a como estaba.",
      "Ctrl + Alt + Shift + R restablece la pantalla en cualquier momento.",
      "Si se corta la luz, al volver a abrir restaura los valores originales.",
      "Los cambios de resolución vuelven solos si no los confirmas.",
    ],
    privacyTitle: "Tuyo de verdad",
    privacy: ["Sin cuenta", "Sin telemetría", "Sin publicidad", "Código abierto"],
    privacyText:
      "La única conexión de VRes es la búsqueda de actualizaciones en GitHub, y se puede apagar. Tus ajustes se quedan en tu PC.",
  },
  anticheat: {
    eyebrow: "Anti-cheats",
    title: "Pensado para convivir con los anti-cheats",
    subtitle:
      "VRes nunca toca el juego: no inyecta código, no lee su memoria y no instala drivers. Solo cambia cómo Windows muestra la imagen.",
    badge: "Sin inyección ni lectura de memoria",
    items: [
      { name: "BattlEye", text: "El anti-cheat de Rainbow Six Siege y muchos otros." },
      { name: "Riot Vanguard", text: "El anti-cheat de VALORANT." },
      { name: "FACEIT AC", text: "El anti-cheat de las partidas de CS2 en FACEIT." },
    ],
    note: "Ningún anti-cheat certifica programas de terceros, y los editores juzgan por el efecto: el crosshair, el zoom y el Dark Boost pueden considerarse ventaja en algunos juegos o torneos. Por eso vienen apagados y con aviso.",
    link: "Leer el detalle",
    brands: "Los logos son de sus dueños y se usan solo para identificar cada anti-cheat: no implican aprobación ni afiliación.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Es gratis de verdad?",
        a: "Sí. VRes es software libre (GPL-3.0): sin pagos, sin suscripciones y sin cuenta. El código está en GitHub para quien quiera revisarlo.",
      },
      {
        q: "Windows dice «Windows protegió tu PC». ¿Es un virus?",
        a: "No. Aparece porque el instalador todavía no está firmado y es nuevo. Toca «Más información» y después «Ejecutar de todas formas». Microsoft Defender no detecta nada en él, y cada versión publica su SHA-256 para verificarla.",
      },
      {
        q: "¿Me pueden banear?",
        a: "VRes no interactúa con los juegos, pero los editores juzgan por el efecto y no por el método. Revisa las reglas de lo que juegas, sobre todo para el crosshair, el zoom y el Dark Boost.",
      },
      {
        q: "¿Funciona en pantalla completa exclusiva?",
        a: "El vibrance por driver y las rampas de gamma sí. La saturación de la matriz de Windows, el crosshair y el zoom no se ven ahí: usa el modo ventana sin bordes.",
      },
      {
        q: "¿Consume rendimiento?",
        a: "VRes no corre dentro del juego: cambia cómo Windows muestra la imagen. Cuando no estás cambiando nada, prácticamente no usa recursos.",
      },
      {
        q: "¿Cómo vuelvo todo a la normalidad?",
        a: "Cierra VRes o aprieta Ctrl + Alt + Shift + R. También hay un acceso «VRes — Restablecer pantalla» en el menú Inicio.",
      },
    ],
  },
  community: {
    eyebrow: "Comunidad",
    title: "Súmate al Discord",
    text: "Novedades de cada versión, ayuda, looks y crosshairs para compartir, y tus ideas para lo que viene.",
    cta: "Entrar al Discord",
    github: "Ver el código en GitHub",
  },
  footer: {
    tagline: "Ajustes de pantalla para gaming. Gratis, local y de código abierto.",
    releases: "Versiones",
    changelog: "Novedades",
    github: "GitHub",
    discord: "Discord",
    license: "Software libre bajo GPL-3.0.",
    disclaimer:
      "Proyecto independiente, sin afiliación con fabricantes de placas de video, editores de juegos ni anti-cheats. Las marcas y logos son de sus dueños y se usan solo para identificarlos.",
  },
};

export type Copy = typeof es;

const en: Copy = {
  meta: {
    title: "VRes — Display tweaks for gaming, free and open source",
  },
  nav: {
    demo: "Try it",
    features: "Features",
    how: "How it works",
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
      "Saturation up to 300%, digital vibrance, stretched resolution, crosshair and per-game profiles. All in one lightweight Windows app, with no subscriptions and no telemetry.",
    download: "Download for Windows",
    discord: "Join the Discord",
    meta: "Windows 10 and 11 · 64-bit · No admin rights needed",
    version: "Version {v}",
    scroll: "Discover more",
    before: "Without VRes",
    after: "With VRes",
    drag: "Drag to compare",
    ticker: ["Saturation 300%", "Vibrance NVIDIA · AMD", "Stretched resolution", "Crosshair", "Per-game profiles", "Dark Boost", "Zoom", "Free", "No account", "Open source"],
  },
  stats: [
    { value: "300%", label: "max saturation" },
    { value: "NVIDIA + AMD", label: "driver vibrance" },
    { value: "0", label: "accounts and data sent" },
    { value: "GPL-3.0", label: "open source" },
  ],
  demo: {
    eyebrow: "Live demo",
    title: "Try it right here",
    subtitle:
      "This is how the image changes. On your PC, VRes applies it to the whole desktop and your games, with a shortcut to undo everything.",
    saturation: "Saturation",
    darkBoost: "Dark Boost",
    crosshair: "Crosshair",
    compare: "Hold to compare",
    reset: "Reset",
    hint: "See someone in the shadows? Turn up Dark Boost.",
    disclaimer: "Browser simulation. Real results depend on your monitor.",
    scene: "Sample scene: a neon city at sunset, with a figure hidden in the shadows.",
    on: "On",
    off: "Off",
  },
  features: {
    eyebrow: "Features",
    title: "Everything your screen needs",
    subtitle: "The tools of paid apps, free and in one place.",
    activeProfile: "Active profile",
    codeHint: "Try it: paste it in VRes, under Display → Looks.",
    copy: "Copy",
    copied: "Copied!",
    items: {
      color: {
        title: "Colors that pop",
        text: "Saturation up to 300% plus fine-tuning: brightness, contrast, gamma, temperature, shadows and highlights.",
      },
      vibrance: {
        title: "Digital vibrance",
        text: "NVIDIA and AMD driver vibrance, monitor by monitor. It even works in exclusive fullscreen.",
      },
      stretch: {
        title: "Stretched resolution",
        text: "4:3, 5:4, 16:10 and the Fortnite favorites. Every change asks for confirmation and reverts if you don't answer.",
      },
      crosshair: {
        title: "Your own crosshair",
        text: "Design it your way, pixel-perfect centered and, if you want, hidden from your captures and streams.",
      },
      profiles: {
        title: "Per-game profiles",
        text: "Each game with its own look, crosshair and resolution. Applied when you start playing, reverted when you leave.",
      },
      enhancers: {
        title: "Dark Boost & Zoom",
        text: "Brighten shadows or zoom in while holding a key or mouse button. Off by default.",
      },
      looks: {
        title: "Looks and codes",
        text: "Per-game presets and short codes to share your setup on WhatsApp or Discord.",
      },
      customize: {
        title: "Your style",
        text: "Themes, accent colors, interface size and your own background image or GIF.",
      },
    },
  },
  games: {
    eyebrow: "Games",
    title: "Ready for your games",
    subtitle: "It works with any game, and recognizes the one in front by its name, without opening its process.",
    others: "and any other",
  },
  how: {
    eyebrow: "No magic",
    title: "How it works",
    subtitle: "VRes changes how Windows displays the image. It never touches the game.",
    game: "Your game",
    untouched: "Untouched",
    screen: "Your monitor",
    layers: [
      {
        name: "Windows color matrix",
        scope: "Whole desktop",
        text: "Saturation, hue and vision filters, with the same API Windows Magnifier uses.",
      },
      {
        name: "Gamma ramps",
        scope: "Per monitor",
        text: "Brightness, contrast, gamma and temperature, on top of each display's calibration.",
      },
      {
        name: "Graphics driver",
        scope: "Per monitor",
        text: "NVIDIA and AMD digital vibrance, the same as their control panels.",
      },
    ],
    never: ["No code injection", "No game memory reading", "No drivers or services", "No keyboard hooks"],
  },
  trust: {
    safetyTitle: "Your screen always comes back",
    safety: [
      "Close VRes and everything goes back to how it was.",
      "Ctrl + Alt + Shift + R resets the display at any time.",
      "After a power cut, reopening VRes restores the original values.",
      "Resolution changes revert on their own if you don't confirm them.",
    ],
    privacyTitle: "Truly yours",
    privacy: ["No account", "No telemetry", "No ads", "Open source"],
    privacyText:
      "VRes's only connection is the update check on GitHub, and you can turn it off. Your settings stay on your PC.",
  },
  anticheat: {
    eyebrow: "Anti-cheats",
    title: "Built to live alongside anti-cheats",
    subtitle:
      "VRes never touches the game: no code injection, no memory reading and no drivers. It only changes how Windows displays the image.",
    badge: "No injection or memory reading",
    items: [
      { name: "BattlEye", text: "The anti-cheat of Rainbow Six Siege and many more." },
      { name: "Riot Vanguard", text: "VALORANT's anti-cheat." },
      { name: "FACEIT AC", text: "The anti-cheat of CS2 matches on FACEIT." },
    ],
    note: "No anti-cheat certifies third-party software, and publishers judge by effect: the crosshair, zoom and Dark Boost may count as an advantage in some games or tournaments. That's why they ship turned off with a warning.",
    link: "Read the details",
    brands: "Logos belong to their owners and are used only to identify each anti-cheat: they don't imply approval or affiliation.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Is it really free?",
        a: "Yes. VRes is free software (GPL-3.0): no payments, no subscriptions and no account. The code is on GitHub for anyone to review.",
      },
      {
        q: "Windows says “Windows protected your PC”. Is it a virus?",
        a: "No. It shows up because the installer isn't signed yet and is new. Click “More info” and then “Run anyway”. Microsoft Defender finds nothing in it, and every release publishes its SHA-256 so you can verify it.",
      },
      {
        q: "Can I get banned?",
        a: "VRes doesn't interact with games, but publishers judge by effect, not method. Check the rules of what you play, especially for the crosshair, zoom and Dark Boost.",
      },
      {
        q: "Does it work in exclusive fullscreen?",
        a: "Driver vibrance and gamma ramps do. The Windows matrix saturation, the crosshair and zoom don't show there: use borderless windowed mode.",
      },
      {
        q: "Does it cost performance?",
        a: "VRes doesn't run inside the game: it changes how Windows displays the image. When you're not changing anything, it barely uses any resources.",
      },
      {
        q: "How do I get everything back to normal?",
        a: "Close VRes or press Ctrl + Alt + Shift + R. There's also a “VRes — Reset display” shortcut in the Start menu.",
      },
    ],
  },
  community: {
    eyebrow: "Community",
    title: "Join the Discord",
    text: "Release news, help, looks and crosshairs to share, and your ideas for what comes next.",
    cta: "Join the Discord",
    github: "See the code on GitHub",
  },
  footer: {
    tagline: "Display tweaks for gaming. Free, local and open source.",
    releases: "Releases",
    changelog: "Changelog",
    github: "GitHub",
    discord: "Discord",
    license: "Free software under GPL-3.0.",
    disclaimer:
      "Independent project, not affiliated with graphics card makers, game publishers or anti-cheats. Trademarks and logos belong to their owners and are used only to identify them.",
  },
};

const pt: Copy = {
  meta: {
    title: "VRes — Ajustes de tela para games, grátis e de código aberto",
  },
  nav: {
    demo: "Experimente",
    features: "Recursos",
    how: "Como funciona",
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
      "Saturação até 300%, vibrance digital, resolução esticada, crosshair e perfis por jogo. Tudo em um app leve para Windows, sem assinaturas e sem telemetria.",
    download: "Baixar para Windows",
    discord: "Entrar no Discord",
    meta: "Windows 10 e 11 · 64 bits · Sem permissão de administrador",
    version: "Versão {v}",
    scroll: "Descubra mais",
    before: "Sem VRes",
    after: "Com VRes",
    drag: "Arraste para comparar",
    ticker: ["Saturação 300%", "Vibrance NVIDIA · AMD", "Resolução esticada", "Crosshair", "Perfis por jogo", "Dark Boost", "Zoom", "Grátis", "Sem conta", "Código aberto"],
  },
  stats: [
    { value: "300%", label: "de saturação máxima" },
    { value: "NVIDIA + AMD", label: "vibrance pelo driver" },
    { value: "0", label: "contas e dados enviados" },
    { value: "GPL-3.0", label: "código aberto" },
  ],
  demo: {
    eyebrow: "Demonstração ao vivo",
    title: "Experimente aqui mesmo",
    subtitle:
      "É assim que a imagem muda. No seu PC, o VRes aplica isso à área de trabalho inteira e aos seus jogos, com um atalho para desfazer tudo.",
    saturation: "Saturação",
    darkBoost: "Dark Boost",
    crosshair: "Crosshair",
    compare: "Segure para comparar",
    reset: "Restaurar",
    hint: "Vê alguém na sombra? Aumente o Dark Boost.",
    disclaimer: "Simulação no navegador. O resultado real depende do seu monitor.",
    scene: "Cena de exemplo: uma cidade neon ao pôr do sol, com uma figura escondida na sombra.",
    on: "Ligado",
    off: "Desligado",
  },
  features: {
    eyebrow: "Recursos",
    title: "Tudo o que sua tela precisa",
    subtitle: "As ferramentas dos apps pagos, grátis e em um só lugar.",
    activeProfile: "Perfil ativo",
    codeHint: "Experimente: cole no VRes, em Tela → Looks.",
    copy: "Copiar",
    copied: "Copiado!",
    items: {
      color: {
        title: "Cores que saltam",
        text: "Saturação até 300% e ajuste fino: brilho, contraste, gama, temperatura, sombras e realces.",
      },
      vibrance: {
        title: "Vibrance digital",
        text: "O vibrance do driver da NVIDIA e da AMD, monitor por monitor. Funciona até em tela cheia exclusiva.",
      },
      stretch: {
        title: "Resolução esticada",
        text: "4:3, 5:4, 16:10 e as do Fortnite. Cada mudança pede confirmação e, se você não responder, volta sozinha.",
      },
      crosshair: {
        title: "Crosshair próprio",
        text: "Desenhe do seu jeito, centralizado no pixel e, se quiser, oculto nas suas capturas e lives.",
      },
      profiles: {
        title: "Perfis por jogo",
        text: "Cada jogo com seu look, seu crosshair e sua resolução. Aplicados ao entrar e desfeitos ao sair.",
      },
      enhancers: {
        title: "Dark Boost e Zoom",
        text: "Clareie as sombras ou dê zoom segurando uma tecla ou um botão do mouse. Vêm desligados.",
      },
      looks: {
        title: "Looks e códigos",
        text: "Presets por jogo e códigos curtos para compartilhar sua configuração no WhatsApp ou no Discord.",
      },
      customize: {
        title: "Do seu jeito",
        text: "Temas, cores de destaque, tamanho da interface e sua própria imagem ou GIF de fundo.",
      },
    },
  },
  games: {
    eyebrow: "Jogos",
    title: "Pronto para seus jogos",
    subtitle: "Funciona com qualquer jogo, e reconhece o que está em primeiro plano pelo nome, sem abrir o processo dele.",
    others: "e qualquer outro",
  },
  how: {
    eyebrow: "Sem mistério",
    title: "Como funciona",
    subtitle: "O VRes muda como o Windows mostra a imagem. Nunca mexe no jogo.",
    game: "Seu jogo",
    untouched: "Intacto",
    screen: "Seu monitor",
    layers: [
      {
        name: "Matriz de cor do Windows",
        scope: "Área de trabalho inteira",
        text: "Saturação, tom e filtros de visão, com a mesma API que a Lupa do Windows usa.",
      },
      {
        name: "Rampas de gama",
        scope: "Por monitor",
        text: "Brilho, contraste, gama e temperatura, sobre a calibração de cada tela.",
      },
      {
        name: "Driver de vídeo",
        scope: "Por monitor",
        text: "O vibrance digital da NVIDIA e da AMD, o mesmo dos painéis de controle delas.",
      },
    ],
    never: ["Sem injetar código", "Sem ler a memória do jogo", "Sem drivers nem serviços", "Sem hooks de teclado"],
  },
  trust: {
    safetyTitle: "Sua tela sempre volta",
    safety: [
      "Ao fechar o VRes, tudo volta a como estava.",
      "Ctrl + Alt + Shift + R restaura a tela a qualquer momento.",
      "Se faltar luz, ao abrir de novo ele restaura os valores originais.",
      "As mudanças de resolução voltam sozinhas se você não confirmar.",
    ],
    privacyTitle: "Seu de verdade",
    privacy: ["Sem conta", "Sem telemetria", "Sem anúncios", "Código aberto"],
    privacyText:
      "A única conexão do VRes é a busca por atualizações no GitHub, e dá para desligar. Suas configurações ficam no seu PC.",
  },
  anticheat: {
    eyebrow: "Anti-cheats",
    title: "Feito para conviver com os anti-cheats",
    subtitle:
      "O VRes nunca mexe no jogo: não injeta código, não lê a memória dele e não instala drivers. Só muda como o Windows mostra a imagem.",
    badge: "Sem injeção nem leitura de memória",
    items: [
      { name: "BattlEye", text: "O anti-cheat de Rainbow Six Siege e muitos outros." },
      { name: "Riot Vanguard", text: "O anti-cheat de VALORANT." },
      { name: "FACEIT AC", text: "O anti-cheat das partidas de CS2 na FACEIT." },
    ],
    note: "Nenhum anti-cheat certifica programas de terceiros, e as publicadoras julgam pelo efeito: o crosshair, o zoom e o Dark Boost podem ser considerados vantagem em alguns jogos ou torneios. Por isso vêm desligados e com aviso.",
    link: "Ler os detalhes",
    brands: "Os logos pertencem aos seus donos e são usados só para identificar cada anti-cheat: não implicam aprovação nem afiliação.",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "É grátis de verdade?",
        a: "Sim. O VRes é software livre (GPL-3.0): sem pagamentos, sem assinaturas e sem conta. O código está no GitHub para quem quiser revisar.",
      },
      {
        q: "O Windows diz “O Windows protegeu o computador”. É vírus?",
        a: "Não. Aparece porque o instalador ainda não é assinado e é novo. Clique em “Mais informações” e depois em “Executar assim mesmo”. O Microsoft Defender não detecta nada nele, e cada versão publica o SHA-256 para conferir.",
      },
      {
        q: "Posso ser banido?",
        a: "O VRes não interage com os jogos, mas as publicadoras julgam pelo efeito, não pelo método. Confira as regras do que você joga, principalmente para o crosshair, o zoom e o Dark Boost.",
      },
      {
        q: "Funciona em tela cheia exclusiva?",
        a: "O vibrance pelo driver e as rampas de gama, sim. A saturação da matriz do Windows, o crosshair e o zoom não aparecem ali: use o modo janela sem bordas.",
      },
      {
        q: "Consome desempenho?",
        a: "O VRes não roda dentro do jogo: muda como o Windows mostra a imagem. Quando você não está mudando nada, quase não usa recursos.",
      },
      {
        q: "Como volto tudo ao normal?",
        a: "Feche o VRes ou aperte Ctrl + Alt + Shift + R. Também há um atalho “VRes — Restaurar tela” no menu Iniciar.",
      },
    ],
  },
  community: {
    eyebrow: "Comunidade",
    title: "Entre no Discord",
    text: "Novidades de cada versão, ajuda, looks e crosshairs para compartilhar, e suas ideias para o que vem por aí.",
    cta: "Entrar no Discord",
    github: "Ver o código no GitHub",
  },
  footer: {
    tagline: "Ajustes de tela para games. Grátis, local e de código aberto.",
    releases: "Versões",
    changelog: "Novidades",
    github: "GitHub",
    discord: "Discord",
    license: "Software livre sob GPL-3.0.",
    disclaimer:
      "Projeto independente, sem afiliação com fabricantes de placas de vídeo, publicadoras de jogos nem anti-cheats. As marcas e logos pertencem aos seus donos e são usados só para identificá-los.",
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

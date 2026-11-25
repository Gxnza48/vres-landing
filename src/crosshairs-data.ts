/**
 * Crosshairs de VRes con su código para pegar en la app (Crosshair › Compartir).
 * Generado con `vres-cli --json share presets`: no editar a mano.
 */
import type { Lang } from "./copy";

export interface CrosshairShape {
  color: string;
  opacity: number;
  outline: { enabled: boolean; color: string; thickness: number; opacity: number };
  arms: {
    enabled: boolean;
    length: number;
    thickness: number;
    gap: number;
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  };
  dot: { enabled: boolean; size: number; round: boolean };
  ring: { enabled: boolean; radius: number; thickness: number };
  rotation: number;
  scale: number;
}

export interface CrosshairItem {
  id: string;
  code: string;
  name: Record<Lang, string>;
  shape: CrosshairShape;
}

export const CROSSHAIRS: CrosshairItem[] = [
  {
    "id": "classic",
    "code": "VRC1-01T3X-X54",
    "name": {
      "es": "Clásico",
      "en": "Classic",
      "pt": "Clássico"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "dot",
    "code": "VRC1-00D08-3G130-11R0G-A5B73-W",
    "name": {
      "es": "Punto",
      "en": "Dot",
      "pt": "Ponto"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": false,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": true,
        "size": 4.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "thin",
    "code": "VRC1-00808-4G12G-10C0F-VW3MB-G",
    "name": {
      "es": "Fino",
      "en": "Thin",
      "pt": "Fino"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": false,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 4.0,
        "left": true,
        "length": 8.0,
        "right": true,
        "thickness": 1.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "tshape",
    "code": "VRC1-00B02-4WJEJ-G0",
    "name": {
      "es": "T",
      "en": "T",
      "pt": "T"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": false
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "circle",
    "code": "VRC1-00G08-3G130-11W0H-X0ZTH-G",
    "name": {
      "es": "Círculo",
      "en": "Circle",
      "pt": "Círculo"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": false,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": true,
        "radius": 12.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "plus",
    "code": "VRC1-0080C-505Y9-NXEG0",
    "name": {
      "es": "Cruz sólida",
      "en": "Solid cross",
      "pt": "Cruz sólida"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 0.0,
        "left": true,
        "length": 9.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "cross",
    "code": "VRC1-00J5M-7JEQP-RG",
    "name": {
      "es": "Equis",
      "en": "X",
      "pt": "Xis"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 45.0,
      "scale": 100.0
    }
  },
  {
    "id": "large",
    "code": "VRC1-0081G-4G22G-31M0G-R08ND-56ZC",
    "name": {
      "es": "Grande",
      "en": "Large",
      "pt": "Grande"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 6.0,
        "left": true,
        "length": 18.0,
        "right": true,
        "thickness": 3.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 3.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "micro",
    "code": "VRC1-0080A-4G12G-0X80T-RG4",
    "name": {
      "es": "Micro",
      "en": "Micro",
      "pt": "Micro"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 2.0,
        "left": true,
        "length": 3.0,
        "right": true,
        "thickness": 1.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "cyan",
    "code": "VRC1-001AB-M7G14-FMNFJ-2",
    "name": {
      "es": "Cian",
      "en": "Cyan",
      "pt": "Ciano"
    },
    "shape": {
      "color": "#00E5FF",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "magenta",
    "code": "VRC1-001CD-3W20R-80250-13017-77NEV-G",
    "name": {
      "es": "Magenta",
      "en": "Magenta",
      "pt": "Magenta"
    },
    "shape": {
      "color": "#FF3DF5",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 2.0,
        "left": true,
        "length": 5.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "yellow",
    "code": "VRC1-001DS-BW70R-80450-22R0J-HETZC-G",
    "name": {
      "es": "T amarilla",
      "en": "Yellow T",
      "pt": "T amarela"
    },
    "shape": {
      "color": "#FFE600",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 4.0,
        "left": true,
        "length": 7.0,
        "right": true,
        "thickness": 2.0,
        "top": false
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "red",
    "code": "VRC1-001BH-M410R-A0A2J-4V4HG",
    "name": {
      "es": "Cruz roja",
      "en": "Red cross",
      "pt": "Cruz vermelha"
    },
    "shape": {
      "color": "#FF2E2E",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 0.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "white",
    "code": "VRC1-001DN-5W80R-80G4G-12G22-1N291-8",
    "name": {
      "es": "Blanca fina",
      "en": "Thin white",
      "pt": "Branca fina"
    },
    "shape": {
      "color": "#FFFFFF",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 5.0,
        "left": true,
        "length": 10.0,
        "right": true,
        "thickness": 1.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "purple",
    "code": "VRC1-001DN-CWV04-C045W-W9PR0",
    "name": {
      "es": "Violeta",
      "en": "Purple",
      "pt": "Roxa"
    },
    "shape": {
      "color": "#B266FF",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "bigdot",
    "code": "VRC1-001CD-3W20R-D0G3G-13011-R0NG3-R8FR",
    "name": {
      "es": "Punto grande",
      "en": "Big dot",
      "pt": "Ponto grande"
    },
    "shape": {
      "color": "#FF3DF5",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": false,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": true,
        "size": 6.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "squaredot",
    "code": "VRC1-001AB-M7G14-D043G-1301E-X9SQH-8",
    "name": {
      "es": "Punto cuadrado",
      "en": "Square dot",
      "pt": "Ponto quadrado"
    },
    "shape": {
      "color": "#00E5FF",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": false,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 3.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "target",
    "code": "VRC1-00802-50C40-3HG0G-W08F0-5CZE3-M4G",
    "name": {
      "es": "Diana",
      "en": "Target",
      "pt": "Alvo"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 9.0,
        "left": true,
        "length": 5.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": true,
        "size": 2.0
      },
      "ring": {
        "enabled": true,
        "radius": 6.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "halo",
    "code": "VRC1-001DN-5W80R-G188G-21R0H-G0GW0-8F05W-42574-G",
    "name": {
      "es": "Halo",
      "en": "Halo",
      "pt": "Halo"
    },
    "shape": {
      "color": "#FFFFFF",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": false,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": true,
        "size": 2.0
      },
      "ring": {
        "enabled": true,
        "radius": 20.0,
        "thickness": 2.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "scope",
    "code": "VRC1-001BH-M410R-8304G-12G51-M0860-4C04Y-ESV9T-G",
    "name": {
      "es": "Mira larga",
      "en": "Long scope",
      "pt": "Mira longa"
    },
    "shape": {
      "color": "#FF2E2E",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": false,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 8.0,
        "left": true,
        "length": 30.0,
        "right": true,
        "thickness": 1.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 1.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "rail",
    "code": "VRC1-001AB-M7G14-81050-63011-C2AG2-4ZDT",
    "name": {
      "es": "Riel",
      "en": "Rail",
      "pt": "Trilho"
    },
    "shape": {
      "color": "#00E5FF",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": false,
        "enabled": true,
        "gap": 6.0,
        "left": true,
        "length": 14.0,
        "right": true,
        "thickness": 2.0,
        "top": false
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "xdot",
    "code": "VRC1-001DS-BW70R-80292-T3016-AEQHP-R",
    "name": {
      "es": "Equis con punto",
      "en": "X with dot",
      "pt": "X com ponto"
    },
    "shape": {
      "color": "#FFE600",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 3.0,
        "left": true,
        "length": 5.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 45.0,
      "scale": 100.0
    }
  },
  {
    "id": "bold",
    "code": "VRC1-0080R-4G42G-2NESZ-EHM",
    "name": {
      "es": "Gruesa",
      "en": "Bold",
      "pt": "Grossa"
    },
    "shape": {
      "color": "#9EFA12",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": true,
        "gap": 0.0,
        "left": true,
        "length": 12.0,
        "right": true,
        "thickness": 4.0,
        "top": true
      },
      "dot": {
        "enabled": false,
        "round": false,
        "size": 2.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  },
  {
    "id": "tiny",
    "code": "VRC1-001DN-5W80R-D023G-13012-K5YVZ-4",
    "name": {
      "es": "Mínima",
      "en": "Tiny",
      "pt": "Mínima"
    },
    "shape": {
      "color": "#FFFFFF",
      "opacity": 100.0,
      "outline": {
        "color": "#000000",
        "enabled": true,
        "opacity": 100.0,
        "thickness": 1.0
      },
      "arms": {
        "bottom": true,
        "enabled": false,
        "gap": 3.0,
        "left": true,
        "length": 6.0,
        "right": true,
        "thickness": 2.0,
        "top": true
      },
      "dot": {
        "enabled": true,
        "round": false,
        "size": 1.0
      },
      "ring": {
        "enabled": false,
        "radius": 10.0,
        "thickness": 1.0
      },
      "rotation": 0.0,
      "scale": 100.0
    }
  }
];

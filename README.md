<div align="center">

<img src="public/logo.png" width="320" alt="VRes" />

**Landing de [VRes](https://github.com/Gxnza48/VRes): ajustes de pantalla para gaming, gratis y de código abierto.**

[vresolution.vercel.app](https://vresolution.vercel.app) · [Descargar VRes](https://github.com/Gxnza48/VRes/releases/latest) · [Discord](https://discord.gg/aG2ByWDHfG)

</div>

## Qué es

La página de presentación de VRes. Es estática: **sin base de datos ni servidor**. Lo único que pide el navegador es la última versión publicada, a la API pública de GitHub, para mostrar el número de versión y el enlace directo al instalador.

- Español, inglés y portugués de Brasil (se elige solo según el navegador, y se puede cambiar arriba).
- Demostración interactiva de saturación, Dark Boost y crosshair sobre una escena propia, hecha con filtros SVG.
- Respeta "reducir movimiento" del sistema.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # verifica tipos y arma dist/
npm run preview   # sirve dist/
```

Stack: Vite, React 19, TypeScript y Tailwind CSS 4. Los textos están todos en `src/copy.ts`.

## Publicación

Vercel la publica sola en cada push a `main` (proyecto `vresolution`). Los encabezados de seguridad (CSP, etc.) están en `vercel.json`.

## Reglas del contenido

- Solo se promete lo que VRes hace de verdad (ver el [README de la app](https://github.com/Gxnza48/VRes#readme)).
- Ningún anti-cheat certifica programas de terceros: la sección de anti-cheats explica cómo está hecho VRes, sin afirmar que un anti-cheat lo haya aprobado.
- Sin logos de juegos ni de otras marcas, salvo los de GitHub y Discord para enlazar a ellos.

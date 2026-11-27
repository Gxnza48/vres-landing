import { useEffect, useState } from "react";

export const REPO_URL = "https://github.com/Gxnza48/VRes";
export const RELEASES_URL = `${REPO_URL}/releases/latest`;
export const CHANGELOG_URL = `${REPO_URL}/blob/main/CHANGELOG.md`;
export const ANTICHEAT_URL = `${REPO_URL}/blob/main/docs/ANTI-CHEAT.md`;
export const DISCORD_URL = "https://discord.gg/aG2ByWDHfG";

export interface Release {
  version: string;
  /** Descarga directa del instalador (o la página de la versión). */
  url: string;
  sizeMb: number | null;
  /** Nombre del archivo del instalador. */
  fileName: string | null;
  /** SHA-256 del instalador según GitHub, en hexadecimal y minúsculas. */
  sha256: string | null;
}

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  assets: { name: string; browser_download_url: string; size: number; digest?: string | null }[];
}

/** `sha256:<hex>` → `<hex>`; cualquier otra cosa → null. */
function sha256Of(digest: string | null | undefined): string | null {
  const match = /^sha256:([0-9a-f]{64})$/i.exec(digest ?? "");
  return match ? match[1]!.toLowerCase() : null;
}

let cached: Promise<Release | null> | null = null;

function load(): Promise<Release | null> {
  cached ??= fetch("https://api.github.com/repos/Gxnza48/VRes/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((response) => (response.ok ? (response.json() as Promise<GitHubRelease>) : null))
    .then((release) => {
      if (!release) return null;
      const installer = release.assets.find((asset) => asset.name.endsWith("_x64-setup.exe"));
      return {
        version: release.tag_name.replace(/^v/, ""),
        url: installer?.browser_download_url ?? release.html_url,
        sizeMb: installer ? Math.round((installer.size / 1024 / 1024) * 10) / 10 : null,
        fileName: installer?.name ?? null,
        sha256: sha256Of(installer?.digest),
      };
    })
    .catch(() => null);
  return cached;
}

/** La última versión publicada en GitHub (sin base de datos: la pide el navegador). */
export function useRelease(): Release | null {
  const [release, setRelease] = useState<Release | null>(null);
  useEffect(() => {
    let active = true;
    void load().then((value) => {
      if (active) setRelease(value);
    });
    return () => {
      active = false;
    };
  }, []);
  return release;
}
/** Servidor partner oficial: ROB RUN LATAM. */
export const PARTNER_ROBRUN_DISCORD_URL = "https://discord.gg/fnJNph5fp8";

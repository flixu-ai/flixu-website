import type { UI } from './ui';

export const defaultLang = 'en';

export const locales = [
    "en", "de", "fr", "es", "it", "nl", "pt", "pl", "tr", "ru", // Europe/Global
    "da", "sv", "no", "fi", // Nordics
    "ja", "ko", "zh", "id", "vi", "th", // Asia
    "ar", "he", // Middle East (RTL)
    "hi", "cs", "hu", "ro", "el", "ca", "ms", "tl", "sk", "hr", "bg", "et" // RoW
];

// Load all locales dynamically
const localesGlob = import.meta.glob('./locales/*.json', { import: 'default' });

export async function useTranslations(lang: string | undefined): Promise<UI> {
    const currentLang = lang || defaultLang;

    // Helper to load a locale
    const loadLocale = async (l: string): Promise<UI | undefined> => {
        const key = `./locales/${l}.json`;
        if (localesGlob[key]) {
            try {
                return await localesGlob[key]() as unknown as UI;
            } catch (e) {
                console.error(`Failed to load locale: ${l}`, e);
                return undefined;
            }
        }
        return undefined;
    };

    // 1. Load default locale (EN) as base
    const defaultT = await loadLocale(defaultLang);
    if (!defaultT) {
        throw new Error("Critical: Could not load default translations.");
    }

    // 2. If current lang is default, return it
    if (currentLang === defaultLang) {
        return defaultT;
    }

    // 3. Load requested lang
    const targetT = await loadLocale(currentLang);

    // 4. Merge: Target overrides Default
    // We use a shallow merge for top-level keys (hero, navigation, etc.)
    // If a top-level key is missing in target, it falls back to default.
    if (targetT) {
        return {
            ...defaultT,
            ...targetT,
            navigation: targetT.navigation ? { ...defaultT.navigation, ...targetT.navigation } : defaultT.navigation,
            rail: targetT.rail ? { ...defaultT.rail, ...targetT.rail } : defaultT.rail,
            home: targetT.home ? { ...defaultT.home, ...targetT.home } : defaultT.home,
            widget: targetT.widget ? { ...defaultT.widget, ...targetT.widget } : defaultT.widget
        };
    }

    return defaultT;
}

export function getLocalizedPath(path: string, lang: string | undefined | null) {
    const currentLang = lang || defaultLang;
    const isDefault = currentLang === defaultLang;
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    if (isDefault) {
        return `/${cleanPath}`;
    }
    return `/${lang}/${cleanPath}`;
}

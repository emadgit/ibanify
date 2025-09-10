/**
 * Returns the current version of the application.
 * Examples:
 *   version() -> "version 1.0.0"
 */
declare function version(): string;
/** Strict validation */
declare function isValidIban(iban: string): boolean;
/** Normalize user input to canonical A–Z0–9 (uppercase, no spaces, tolerant of Unicode digits). */
declare function normalizeIban(input: string): string;
/** Validate *after* normalization (tolerant UX-friendly validator). */
declare function isValidIbanTolerant(iban: string): boolean;
/** Pretty print canonical IBAN in groups (default 4). Validates by default. */
declare function formatIban(iban: string, options?: {
    groupSize?: number;
    validate?: boolean;
}): string;
/** Return the 2-letter country code if shape/length match after normalization; otherwise null. */
declare function getIbanCountry(iban: string): string | null;
/**
 * Centralized metadata for an IBAN.
 * - Normalizes input
 * - Validates basic shape and official length for the country
 * - Returns country, expected length, and SEPA membership flag
 */
declare function getIbanMetadata(iban: string): {
    country: string;
    length: number;
    sepa: boolean;
} | null;
/**
 * Compute the IBAN check digits for a given country + BBAN.
 *
 * @param country ISO 3166 alpha-2 country code (uppercase A–Z).
 * @param bban Basic Bank Account Number (country-specific, uppercase letters + digits).
 * @returns Two-digit check digits as a string, e.g. "89".
 *
 * Example:
 *   computeCheckDigits("DE", "370400440532013000") -> "89"
 */
declare function computeCheckDigits(country: string, bban: string): string;

export { computeCheckDigits, formatIban, getIbanCountry, getIbanMetadata, isValidIban, isValidIbanTolerant, normalizeIban, version };

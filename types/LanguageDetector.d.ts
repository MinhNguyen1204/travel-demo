interface LanguageDetector {
  cache(lng: string, caches?: string[]): void;
  detect(detectionOrders?: string | string[]): string | undefined;
}

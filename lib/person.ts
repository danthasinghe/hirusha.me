/**
 * Canonical person data for structured identity linking across platforms.
 * Used for JSON-LD Person schema and metadata.
 */

export const person = {
  name: "Hirusha Danthasinghe",
  url: "https://itshirusha.me",
  sameAs: [
    "https://github.com/danthasinghe",
    "https://linkedin.com/in/hirusha-danthasinghe",
    "https://dev.to/danthasinghe",
  ],
} as const;

export type StorageType = "local" | "session";

export type StorageKey = "theme";

export class WebStorageService {
  private static instance: WebStorageService;
  private storage: Storage;
  private static readonly isServer = typeof window === "undefined";

  private constructor(type: StorageType = "local") {
    if (WebStorageService.isServer) {
      this.storage = {} as Storage;

      return;
    }

    this.storage = type === "local" ? localStorage : sessionStorage;
  }

  static getInstance(type: StorageType = "local") {
    if (!this.instance) {
      this.instance = new WebStorageService(type);
    }

    return this.instance;
  }

  get<T>(key: StorageKey): T | null {
    if (WebStorageService.isServer) return null;

    try {
      const value = this.storage.getItem(key);

      return value ? JSON.parse(value) : null;
    } catch (err) {
      console.error(`Failed to get key ${key}`, err);
      return null;
    }
  }

  set<T>(key: StorageKey, value: T): void {
    if (WebStorageService.isServer) return;

    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to set key "${key}"`, error);
    }
  }

  remove(key: StorageKey) {
    if (WebStorageService.isServer) return;

    this.storage.removeItem(key);
  }
}

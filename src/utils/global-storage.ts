class GlobalStorage {
  private static instance: GlobalStorage;
  private storageKey: string;

  private constructor(storageKey = '__globalStorage') {
    this.storageKey = storageKey;
    if (!(this.storageKey in window)) {
      (window as any)[this.storageKey] = {};
    }
  }

  public static getInstance(storageKey = '__globalStorage'): GlobalStorage {
    if (!GlobalStorage.instance) {
      GlobalStorage.instance = new GlobalStorage(storageKey);
    }
    return GlobalStorage.instance;
  }

  public setItem(key: string, value: any): void {
    const globalStorage = (window as any)[this.storageKey] as Record<
      string,
      any
    >;
    globalStorage[key] = value;
  }

  public getItem<T = any>(key: string): T | undefined {
    const globalStorage = (window as any)[this.storageKey] as Record<
      string,
      any
    >;
    return globalStorage[key];
  }

  public removeItem(key: string): void {
    const globalStorage = (window as any)[this.storageKey] as Record<
      string,
      any
    >;
    if (globalStorage[key]) {
      delete globalStorage[key];
    }
  }

  public clear(): void {
    (window as any)[this.storageKey] = {};
  }
}

const globalStorage = GlobalStorage.getInstance();

export default globalStorage;

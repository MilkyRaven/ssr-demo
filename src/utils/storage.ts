export function loadFromStorage<T>(key: string, defaultValue: T): T {
  const stored = localStorage.getItem(key);
  return stored ? (JSON.parse(stored) as T) : defaultValue;
}

export function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

interface InternalStorageItem {
  key: string;
  value: string;
}

const internalStorage: InternalStorageItem[] = [];

export const saveItemInStorage = (key: string, value: string): void => {
  if (localStorage) {
    localStorage.setItem(key, value);
  } else {
    internalStorage.push({ key: key, value: value });
  }
};

export const getItemFromStorage = (key: string): string | null => {
  if (localStorage) {
    return localStorage.getItem(key);
  } else {
    const item = internalStorage.find((item) => item.key === key);
    return item?.value ?? null;
  }
};

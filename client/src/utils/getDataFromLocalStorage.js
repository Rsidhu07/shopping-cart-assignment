export const getDataFromLocalStorage = key => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data): null;
} 
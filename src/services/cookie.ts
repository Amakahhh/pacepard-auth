interface CookieData {
  key: string;
  payload: string;
  expireAt: Date;
  path: string;
}

interface CookieRemoveData {
  key: string;
}

class CookieService {
  static setData(data: CookieData): void {
    const expires = data.expireAt.toUTCString();
    document.cookie = `${data.key}=${data.payload}; expires=${expires}; path=${data.path}`;
  }

  static removeData(data: CookieRemoveData): void {
    document.cookie = `${data.key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  static getData(key: string): string | null {
    const nameEQ = key + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}

export default CookieService;




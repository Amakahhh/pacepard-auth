class ENV {

    constructor(){}

    /**
     * @name getApiBaseUrl
     * @description get the API base URL from environment variables
     * @returns {string} API base URL
     */
    public getApiBaseUrl(): string {
        return import.meta.env.VITE_API_URL_STAGING || 'http://localhost:3000/api';
    }

    /**
     * @name isStaging
     * @description determine if app is in staging mode
     * @returns {boolean} boolean
     */
    public isStaging(): boolean {
        const result: boolean = import.meta.env.VITE_ENV === 'staging' ? true :false;
        return result
    }

    /**
     * @name isProduction
     * @description determine if app is in production mode
     * @returns {boolean} boolean
     */
    public isProduction(): boolean {
        const result: boolean = import.meta.env.VITE_ENV === 'production' ? true :false;
        return result
    }

    /**
     * @name isDev
     * @description determine if app is in development mode
     * @returns {boolean} boolean
     */
    public isDev(): boolean {
        const result: boolean = import.meta.env.VITE_ENV === 'development' ? true :false;
        return result
    }

}

export default new ENV();
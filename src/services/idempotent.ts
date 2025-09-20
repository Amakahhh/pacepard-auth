class IdempotentService {
  static getRequestKey(): string {
    // Generate a unique request key for idempotency
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

export default IdempotentService;



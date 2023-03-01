 export default {
    Query: {
      ping() {
        return {
          message: "pong",
          timestamp: new Date().toISOString(),
        }
      }
    }
  }
import "@tanstack/react-start";

declare module "@tanstack/react-start" {
  interface ManagedContext {
    cloudflare: {
      env: {
        SENTRY_DSN: string;
        HYPERDRIVE: { connectionString: string };
        ASSETS: Fetcher;
        CF_VERSION_METADATA: any;
      };
      context: ExecutionContext;
    };
  }
}

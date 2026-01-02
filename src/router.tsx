import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import * as Sentry from "@sentry/tanstackstart-react";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  // Client-side Sentry init
  if (typeof window !== "undefined") {
    Sentry.init({
      dsn: "https://08bb3d2af87aae85b8ff54f2124809e2@o4509684640251904.ingest.de.sentry.io/4510637505904720",
      sendDefaultPii: true,
    });
  }

  return router;
}

// CRITICAL for TypeScript: This connects your route types to the router
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

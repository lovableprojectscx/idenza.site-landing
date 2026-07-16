import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Logo } from "../components/Logo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IDENZA · Demanda real antes que diseño" },
      { name: "description", content: "Consultoría de crecimiento digital en Perú. Sistemas de venta basados en demanda real y comprobada: investigación, marca, web de conversión y datos con IA." },
      { name: "author", content: "IDENZA · Jack Luján" },
      { name: "keywords", content: "consultoría digital Perú, sistemas de venta, web que vende, investigación de demanda, tracker con IA, Jack Luján, IDENZA" },
      { property: "og:title", content: "IDENZA · Demanda real antes que diseño" },
      { property: "og:description", content: "Consultoría de crecimiento digital en Perú. Sistemas de venta basados en demanda real y comprobada: investigación, marca, web de conversión y datos con IA." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:site_name", content: "IDENZA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IDENZA · Demanda real antes que diseño" },
      { name: "twitter:description", content: "Consultoría de crecimiento digital en Perú. Sistemas de venta basados en demanda real y comprobada: investigación, marca, web de conversión y datos con IA." },
      { name: "theme-color", content: "#0E1420" },
      { property: "og:image", content: "https://idenza.site/og-home.jpg" },
      { name: "twitter:image", content: "https://idenza.site/og-home.jpg" },
      { name: "geo.region", content: "PE-AYC" },
      { name: "geo.placename", content: "Ayacucho" },
      { name: "geo.position", content: "-13.15878;-74.22393" },
      { name: "ICBM", content: "-13.15878, -74.22393" },
    ],
    links: [
      { rel: "preload", as: "style", href: appCss },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/brand/favicon.png", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
        media: "print",
        onLoad: "this.media='all'",
      } as any,
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-PE">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadePreloader, setFadePreloader] = useState(false);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    // Check if running on client (sessionStorage is defined)
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("idenza_preloaded");
      if (hasLoaded) {
        setShowPreloader(false);
      } else {
        const progressTimer = setTimeout(() => {
          setProgress(true);
        }, 50);

        const fadeTimer = setTimeout(() => {
          setFadePreloader(true);
        }, 1200);

        const unmountTimer = setTimeout(() => {
          setShowPreloader(false);
          sessionStorage.setItem("idenza_preloaded", "true");
        }, 1700);

        return () => {
          clearTimeout(progressTimer);
          clearTimeout(fadeTimer);
          clearTimeout(unmountTimer);
        };
      }
    } else {
      setShowPreloader(false);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {showPreloader && (
        <div 
          className={`fixed inset-0 z-[9999] bg-[#0E1420] flex flex-col items-center justify-center transition-opacity duration-500 ease-out select-none ${fadePreloader ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="flex flex-col items-center gap-6 max-w-[180px] w-full px-4">
            <div className="h-8 w-auto">
              <Logo light />
            </div>
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-[#E2A63D] rounded-full transition-all ease-out"
                style={{
                  width: progress ? "100%" : "0%",
                  transitionDuration: "1200ms"
                }}
              />
            </div>
          </div>
        </div>
      )}
      <Outlet />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/51921585977?text=Hola%20IDENZA%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
        aria-label="Escribir por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 fill-current">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </QueryClientProvider>
  );
}

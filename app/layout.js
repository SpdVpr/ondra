import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import Script from 'next/script';
import { ToastContainer } from "react-toastify";
export const metadata = {
  title:
    "OMGraphics - Grafický Design & Branding | Ondřej Macoun",
  description:
    "Portfolio grafického designéra Ondřeje Macouna. Specializuji se na branding, webdesign a tvorbu vizuálních identit pro české i zahraniční klienty.",
  icons: {
    icon: "/assets/images/ondra/omega_uprava.svg",
  },
  openGraph: {
    title: "OMGraphics - Grafický Design & Branding | Ondřej Macoun",
    description:
      "Portfolio grafického designéra Ondřeje Macouna. Specializuji se na branding, webdesign a tvorbu vizuálních identit pro české i zahraniční klienty.",
    images: ['/assets/images/ondra/frontfb.jpg'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>

      <body>
        <Script
          src="/assets/js/smooth.js"
          strategy="beforeInteractive"
        />
        <LayoutWrapper>
          <ToastContainer
            position="top-right"
            // autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

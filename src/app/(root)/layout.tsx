import Navbar from "@/components/general/layout/Navbar";
import Footer from "@/components/general/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 bg-primary text-white p-2 rounded focus:outline-none focus:ring"
      >
        Skip to content
      </a>

      {/* Site Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow pt-16">
        {/* Responsive container for horizontal padding */}
        <div className="">{children}</div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

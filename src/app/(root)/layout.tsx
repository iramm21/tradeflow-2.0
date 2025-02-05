import Navbar from "@/components/general/layout/Navbar";
import Footer from "@/components/general/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Wrap main content in a container for responsive horizontal padding */}
        <div className="px-4 md:px-8 lg:px-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

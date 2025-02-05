import Navbar from "@/components/general/layout/Navbar";
import Footer from "@/components/general/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
}

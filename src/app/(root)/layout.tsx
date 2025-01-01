import Footer from "@/components/footer";
import Header from "@/components/header";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto flex min-h-screen max-w-4xl flex-col px-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

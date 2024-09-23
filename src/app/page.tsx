import AnimatedContent from "@/components/AnimateContent";
import SEOContent from "@/components/SEOContent";

export default function Home() {
  return (
    <main>
      <section className="h-[200vh]"></section>
      <SEOContent />
      <AnimatedContent />
      <section className="h-[200vh]"></section>
    </main>
  );
}

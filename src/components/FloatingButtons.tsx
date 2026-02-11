import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import whatsappIcon from "@/assets/wpp.png";

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const whatsappLink = "https://wa.me/5584988966860?text=Ol%C3%A1%20gostaria%20de%20atendimento";

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover" />
      </a>
      
      <Button
        size="icon"
        onClick={scrollToTop}
        className={cn(
          "rounded-full bg-primary/80 hover:bg-primary text-primary-foreground w-10 h-10 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

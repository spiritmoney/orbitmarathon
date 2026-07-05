import { MessageCircle } from "lucide-react";
import { eventInfo } from "@/lib/data/event";

export function WhatsAppButton() {
  return (
    <a
      href={eventInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
      aria-label={`Chat on WhatsApp: ${eventInfo.whatsapp}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-bold uppercase tracking-wide hidden sm:inline">Chat now</span>
    </a>
  );
}

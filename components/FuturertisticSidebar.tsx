import { cn } from "@/lib/utils";

interface FuturisticSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "About us", href: "#" },
  { label: "Contact", href: "#" },
];

export function FuturisticSidebar({ isOpen, onClose }: FuturisticSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-40 right-4 transform w-80 z-50 transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95"
        )}
      >
        <div className="relative">
          {/* Glassmorphism Card */}
          <div
            className="relative bg-black/70 backdrop-blur-[10px] rounded-[20px] p-5 shadow-2xl border border-white/10"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Gradient Top Border */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px]"
              style={{
                background: "linear-gradient(135deg, #FC004E, #10CBE0)",
              }}
            />

            {/* Menu Items */}
            <div className="mt-8 space-y-0">
              {menuItems.map((item, index) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 py-4 px-2 text-white font-medium text-[16px] hover:scale-105 transition-all duration-200 hover:text-[#10CBE0] hover:drop-shadow-[0_0_8px_rgba(16,203,224,0.5)] group font-sans"
                  >
                    <span className="font-medium leading-[1.6]">
                      {item.label}
                    </span>
                  </a>
                  {index < menuItems.length - 1 && (
                    <div className="border-b border-dashed border-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FuturisticSidebar;

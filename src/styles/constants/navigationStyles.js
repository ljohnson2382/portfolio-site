// Navigation styles constants
export const navigationStyles = {
  base: "fixed top-0 w-full z-50 transition-all duration-300",
  scrolled: "bg-slate-900/98 backdrop-blur-md shadow-lg shadow-slate-900/50 border-b border-slate-800",
  transparent: "bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/50",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  content: "flex justify-between items-center h-16",
  logo: "text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity",
  desktop: "hidden md:flex flex-row items-center gap-2",
  item: "px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap",
  itemActive: "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30",
  itemInactive: "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50",
  mobileButton: "block md:hidden text-slate-300 hover:text-cyan-400 p-2 hover:bg-slate-800/50 rounded-lg transition-colors",
  mobileMenu: "md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 shadow-lg",
  mobileContent: "px-4 py-4 space-y-2",
  mobileItem: "block w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
  mobileItemActive: "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 font-medium",
  mobileItemInactive: "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
};
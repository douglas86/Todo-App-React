export const searchField = (placeholder = "Search") => (
  <input
    className="flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 py-2 focus:outline-none"
    placeholder={placeholder}
  />
);

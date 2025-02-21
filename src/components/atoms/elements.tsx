/**
 * This is the page title that sits at the top of the page with the home button next to it
 * @param title
 */
export const pageTitle = (title: string) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export const searchField = (placeholder = "Search") => (
  <input
    className="flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 py-2 focus:outline-none"
    placeholder={placeholder}
  />
);

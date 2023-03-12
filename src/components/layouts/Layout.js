import MainNavigation from "./MainNavigation";

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className="mx-auto my-12 w-90 max-w-40">{children}</main>
    </div>
  );
}

export default Layout;

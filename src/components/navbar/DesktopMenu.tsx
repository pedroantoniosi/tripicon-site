import NavLinks from "./NavLinks";

export default function DesktopMenu() {
  return (
    <div className="max-lg:hidden lg:flex lg:items-center lg:gap-10">
      <NavLinks />
    </div>
  );
}

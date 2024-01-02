import ModeToggle from "@/components/theme/mode-toggle";

const Navbar = () => {
  return (
    <nav className="w-full z-30 bg-rose-500 flex justify-between items-center p-2 fixed top-0 left-0">
      <div>Logo</div>
      <div className="flex justify-center items-center">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

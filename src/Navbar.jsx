export default function Navbar() {
  return (
    <div>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <p>Portfolio Showcase</p>
          </a>

          <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
}

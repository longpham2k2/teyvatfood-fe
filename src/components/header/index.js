function Header() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-20 px-48 flex justify-between items-center"
      style={{ background: 'url("/assets/bg_header.png") repeat' }}
    >
      <div id="webName" className="h-full">
        <a className="h-full" href="#">
          <img
            className="max-w-full max-h-full"
            src="/assets/logow.png"
            alt=""
          />
        </a>
      </div>
      <div id="webNavigations" className="text-white">
        <a className="px-10 font-medium" href="#">
          HOME
        </a>
        <a className="px-10 font-medium" href="#">
          EXPLORE
        </a>
        <a className="px-10 font-medium" href="#">
          BLOG
        </a>
        <a className="px-10 font-medium" href="#">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Header;

import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex z-30 h-16 w-full justify-center items-center bg-amber-950">
      <div className="text-white text-sm mr-2">
        Random footer stuff? i kinda like tailwind now. random copyright sign.
      </div>
      <FaRegCopyright color="white" size={12} />
    </div>
  );
}

export default Footer;

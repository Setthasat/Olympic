import { Radiation, Github, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-teal-500 flex flex-col md:flex-row items-center justify-between w-full gap-4">
      <div className="flex gap-2">
        <a
          href="https://github.com/Setthasat"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 mx-2 gap-2 rounded-full text-white hover:bg-teal-900 transition-colors flex items-center justify-center"
        >
          <Github />
          <p>Github</p>
        </a>
        <a
          href="https://safehub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 mx-2  gap-2 rounded-full text-white hover:bg-teal-900 transition-colors flex items-center justify-center"
        >
          <Globe />
          <p>SafeHub</p>
        </a>
      </div>
      <p className="text-gray-100">
        A global celebration of sport, culture and human excellence
      </p>
    </footer>
  );
};

export default Footer;

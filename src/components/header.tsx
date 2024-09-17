import Image from "next/image";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          {/* <Image
            src="/placeholder.svg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <span className="text-xl font-bold dark:text-white">Gourmet Haven</span>
        </div>
        <a
          href="mailto:info@gourmethaven.com"
          className="flex items-center hover:text-primary transition-colors dark:hover:text-primary-dark text-gray-900 dark:text-gray-300"
        >
          <Mail className="w-4 h-4 mr-2" />
          info@gourmethaven.com
        </a>
      </div>
    </header>
  );
};

export default Header;

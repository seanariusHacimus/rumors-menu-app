import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b dark:border-gray-700 bg-[#004746]">
      <div className="container mx-auto flex justify-center items-center py-6 px-6">
        <div className="space-x-2">
          <Image
            src="/img/logo.svg"
            alt="Логотип Rumors"
            width={260}
            height={260}
            className="block w-44 sm:w-64"
          />
          {/* <span className="text-xl font-bold dark:text-white">Gourmet Haven</span> */}
        </div>
        {/* <a
          href="mailto:info@gourmethaven.com"
          className="flex items-center hover:text-primary transition-colors dark:hover:text-primary-dark text-gray-900 dark:text-gray-300"
        >
          <Mail className="w-4 h-4 mr-2" />
          info@gourmethaven.com
        </a> */}
      </div>
    </header>
  );
};

export default Header;

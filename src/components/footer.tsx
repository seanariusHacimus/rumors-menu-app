import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <footer className="border-t mt-12 fixed bottom-0 w-full bg-white">
      <div className="container mx-auto py-6 px-6 flex flex-col sm:flex-row items-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2023 Gourmet Haven. All rights reserved.
        </p>
        {/* <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a
            href="tel:+1234567890"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            +1 (234) 567-890
          </a>
          <a
            href="mailto:info@gourmethaven.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            info@gourmethaven.com
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Header;

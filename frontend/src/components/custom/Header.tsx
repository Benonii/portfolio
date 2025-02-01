import { useState } from "react";
import { useSoundContext } from "@/context/SoundContext";
import LogoImg from "@/assets/images/logo.jpg";
import { Info, MonitorCog, SquareLibrary } from "lucide-react";
import useSound from "use-sound";
import OpenNavBar from "@/assets/sounds/navbar-open-2.mp3";
import CloseNavBar from "@/assets/sounds/navbar-open-1.mp3";

function Header() {
  const { isSoundEnabled } = useSoundContext();
  const [isExpanded, setIsExpanded] = useState(false);
  const [spin, setSpin] = useState(false);

  const [playExpandSound] = useSound(OpenNavBar, { volume: 0.3 });
  const [playCollapseSound] = useSound(CloseNavBar, { volume: 1 });

  const handleClick = () => {
    if (isSoundEnabled) {
      isExpanded ? playCollapseSound() : playExpandSound();
    }
    setIsExpanded((prev) => !prev);

    // Trigger the spin animation
    setSpin(true);
    setTimeout(() => setSpin(false), 500); // Reset after animation
  };

  return (
    <div
      className={`fixed top-10 flex flex-row items-center backdrop-blur-sm
                 shadow-lg shadow-blue40 rounded-3xl gap-4 bg-gray10-transparent dark:bg-transparent
                 h-[40px] transition-all duration-1000 ${
                   isExpanded ? "w-72 md:w-96 lg:w-[400px]" : "w-28"
                 }`}
    >
      <div
        className={`absolute transition-all duration-1000 ${
          isExpanded ? "left-6" : "left-[50%] -translate-x-[50%]"
        } rounded-full cursor-pointer`}
        onClick={handleClick}
      >
        <img
          src={LogoImg}
          alt="My logo"
          className={`rounded-full w-[45px] h-[45px] md:w-14 md:h-14 transition-transform duration-700 ${
            spin ? "rotate-[360deg]" : ""
          }`}
        />
      </div>
      <div
        className={`flex items-center gap-6 md:gap-12 transition-all duration-1000 ${
          isExpanded ? "ml-20 md:ml-32" : "ml-0"
        }`}
      >
        {isExpanded && (
          <a href="#about">
            <Info width={28} height={28} className="text-blue70 dark:text-gray30 ml-10" />
          </a>
        )}
        {isExpanded && (
          <a href="#projects">
            <MonitorCog width={28} height={28} className="text-blue70 dark:text-gray30" />
          </a>
        )}
        {isExpanded && (
          <a href="#blogs">
            <SquareLibrary width={28} height={28} className="text-blue70 dark:text-gray30" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;

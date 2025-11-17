import { LogoIcon, NotificationsIcon, SearchIcon } from "../assets/Icons";
import restaurantLogo from "../assets/restaurantPlaceholder.png";

export default function Topbar() {
  return (
    <div className="w-full h-[60px] flex justify-center items-center">
      <div className="grid grid-cols-2 w-full justify-between gap-[20%] items-center">
        <div className="flex justify-start items-center gap-2">
          <LogoIcon className="w-[90px]" />
          <div className="relative w-full h-full">
            <input
              className="bg-white w-full h-[60px] rounded-full pl-12 pr-4 focus:outline-none"
              type="search"
            />
            <SearchIcon className="absolute h-[15px] w-[15px] top-6 left-4" />
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <div className="bg-white h-[60px] rounded-full w-[60px] flex items-center justify-center">
            <NotificationsIcon className="h-[30px] w-[30px]" />
          </div>
          <div className="bg-white h-[60px] rounded-full w-fit p-2 pr-5 flex items-center gap-2 justify-center">
            <div>
              <img
                className="h-[50px] w-[50px]"
                src={restaurantLogo}
                alt="restairant"
              />
            </div>
            <div>
              <p className="whitespace-nowrap">Sales Manager</p>
              <p className="whitespace-nowrap text-sm">Chickenman Pizzaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

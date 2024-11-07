import CreateEventGroupDropDownBtn from "./CreateEventGroupDropDownBtn";
import { Menu, Transition } from "@headlessui/react";
import { Menu as HamburgerIcon, X as CloseIcon } from "lucide-react";
import Logout from "./Logout";
import UserDetails from "./UserDetails";
import useUser from "../hooks/useUser";

const Header = () => {
  const { user, setUser } = useUser();

  return (
    <header className="bg-white flex items-center shadow-md justify-between p-2 h-auto border-b-2">
      <div className="ml-6">
        <UserDetails user={user} />
      </div>

      <div className="hidden md:flex space-x-4">
        <CreateEventGroupDropDownBtn />
        <Logout setUser={setUser} />
      </div>

      <div className="md:hidden">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="p-2 focus:outline-none">
                {open ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <HamburgerIcon className="w-6 h-6" />
                )}
              </Menu.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="p-2">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`flex items-center w-full px-4 py-2 rounded-md text-sm ${
                            active ? "bg-gray-100" : "bg-white"
                          }`}
                        >
                          <CreateEventGroupDropDownBtn />
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`flex items-center w-full px-4 py-2 rounded-md text-sm ${
                            active ? "bg-gray-100" : "bg-white"
                          }`}
                        >
                          <Logout setUser={setUser} />
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
};

export default Header;

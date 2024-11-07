import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const CreateEventGroupDropDownBtn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Create
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="py-1">
          <MenuItem>
              <Link
                to="/create-event"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Create Event
              </Link>
          </MenuItem>
          <MenuItem>
              <Link
                to="/create-group"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Create Group
              </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default CreateEventGroupDropDownBtn;
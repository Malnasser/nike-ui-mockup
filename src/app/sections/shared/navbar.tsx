"use client";

import { Disclosure } from "@headlessui/react";
import logo from "../../../../public/images/brand-logo.svg";

const navigation = [
  { name: "MENU", href: "#", current: true },
  { name: "LOCATION", href: "#", current: false },
  { name: "ABOUT", href: "#", current: false },
  { name: "CONTACT", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white h-20">
      <>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-20">
            <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-2 items-center justify-center sm:items-stretch sm:justify-start">
                    {/* logo  */}
                    <div className="flex flex-shrink-0 items-center logo-layout">
                        <img src={logo.src} alt="Logo" />
                    </div>
                </div>

                {/* menu */}
                <div className="flex flex-2 sm:ml-6 sm:block">
                    <div className="flex space-x-5">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current
                                ? "text-black font-poppins font-bold text-base"
                                : "text-black font-poppins font-bold text-base"
                            )}
                            aria-current={item.current ? "page" : undefined}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                </div>

                {/* Login */}
                <div className="flex flex-2">
                    <button className="py-1 px-4 bg-red-600 text-white font-poppins">Login</button>
                </div>
            </div>
        </div>
      </>
    </Disclosure>
  );
}

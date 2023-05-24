"use client";

import { Disclosure } from "@headlessui/react";

export default function MobileDropdown() {
    return (
        <Disclosure>
            <Disclosure.Button className="py-2">Home</Disclosure.Button>
            <Disclosure.Panel className="text-green-500">
                Yes, I would like to go home
            </Disclosure.Panel>
        </Disclosure>
    );
}

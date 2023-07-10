import type { Signal } from "@preact/signals";

interface IMenuProps {
  open: Signal<boolean>;
}

export default function Menu({ open }: IMenuProps) {
  const closeMenu = () => (open.value = false);
  return (
    <div class="lg:hidden" role="dialog" aria-modal="true">
      {/* Background backdrop, show/hide based on slide-over state. */}
      {open.value && (
        <>
          <div class="fixed inset-0 z-50"></div>
          <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">The Transfer Learning Podcast</span>
                <img class="h-8 w-auto" src="/robot.svg" alt="A robot icon."/>
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={closeMenu}>
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a 
                    href="/" 
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a 
                    href="/episodes" 
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 pointer-events-none"
                  >
                    Episodes
                  </a>
                  <a 
                    href="https://austinpoor.com" 
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About the (Human) Host
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

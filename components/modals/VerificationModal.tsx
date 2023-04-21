import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useState } from "react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal = ({
  isOpen,
  onClose,
}: VerificationModalProps) => {
  const closeModal = useCallback(() => {
    onClose();
  }, []);

  const next = useCallback(() => {
    alert("En construcción");
    onClose();
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Verificación
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Con la verificación vas a obtener
                    <ul>
                      <li>- Un wallet de Lightning Network (Custodial)</li>
                      <li>- Un usuario de NOSTR (Si no tenes uno ya)</li>
                      <li>
                        - Tu subdominio <b>.hodl.ar</b>
                      </li>
                      <li>
                        <b>- TUNOMBRE</b>@hodl.ar para recibir sats
                      </li>
                      <li>
                        <b>- TUNOMBRE</b>@hodl.ar como usuario en NOSTR
                      </li>
                    </ul>
                  </p>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={next}
                  >
                    Iniciar Verificación
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VerificationModal;

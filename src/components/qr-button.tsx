'use client'

import {Dialog, DialogPanel} from '@headlessui/react'
import {FC, useState} from 'react'
import QRCode from 'react-qr-code'

export const QRButton: FC<{url: string}> = ({url}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="mt-4 h-10 rounded-full bg-magenta px-6 text-black">
        Show QR code to connect
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4">
          <DialogPanel className="size-64 max-w-lg space-y-4 bg-white p-2">
            <QRCode size={256} style={{height: 'auto', maxWidth: '100%', width: '100%'}} value={url} viewBox={`0 0 256 256`} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

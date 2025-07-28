import { cva } from 'class-variance-authority'
import { CircleCheckIcon, CircleXIcon } from 'lucide-react'
import {
  Toaster as Sonner,
  toast as sonnerToast,
  type ToasterProps,
} from 'sonner'
import { useTheme } from '../theme-provider'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      {...props}
    />
  )
}

function toast(toast: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom(
    (id) => (
      <Toast
        id={id}
        content={toast.content}
        type={toast.type}
        onClick={toast.onClick}
      />
    ),
    { duration: toast.duration ?? 5000 }
  )
}
const toastVariants = cva(
  'p-[16px] text-sm font-bold rounded-[8px] shadow-md border border-base-4',
  {
    variants: {
      variant: {
        info: 'bg-white text-black',
        error: 'bg-red-600 text-white',
        success: 'bg-green-600 text-white',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

/** A fully custom toast that still maintains the animations and interactions. */
function Toast(props: ToastProps) {
  const { content, onClick, id } = props

  return (
    <button
      className={toastVariants({ variant: props.type })}
      onClick={() => {
        onClick?.()
        sonnerToast.dismiss(id)
      }}
    >
      <div className="grid grid-cols-[24px_auto] items-center gap-2">
        {props.type == 'success' && <CircleCheckIcon className="size-6" />}
        {props.type == 'error' && <CircleXIcon className="size-6" />}
        <p className="only:col-span-2">{content}</p>
      </div>
    </button>
  )
}

interface ToastProps {
  id: string | number
  content: string
  type: 'info' | 'success' | 'error'

  onClick?: () => void
  duration?: number // Duration in milliseconds
}

export { toast, Toaster }

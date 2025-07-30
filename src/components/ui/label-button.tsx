import type { VariantProps } from 'class-variance-authority'
import React from 'react'
import { cn } from '~/lib/utils'
import { buttonVariants } from './button'

type LabelButtonProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof buttonVariants>

const LabelButton = React.forwardRef<HTMLLabelElement, LabelButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <label
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    )
  }
)
LabelButton.displayName = 'Button'

export { buttonVariants, LabelButton }

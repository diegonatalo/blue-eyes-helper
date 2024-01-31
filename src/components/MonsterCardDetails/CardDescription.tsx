import * as ScrollArea from '@radix-ui/react-scroll-area'

type CardDescriptionProps = {
  description: string
}

export const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <ScrollArea.Root className="h-[15.625rem] overflow-hidden" type="auto">
      <ScrollArea.Viewport className="h-full w-full pr-3">
        <pre className="whitespace-pre-wrap font-body text-sm">
          {description}
        </pre>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none rounded-lg bg-gray-700 p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-gray-800 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  )
}

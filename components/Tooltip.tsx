// components/Tooltip.tsx
'use client';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function MyTooltip({ children, content }: { children: React.ReactNode, content: string }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-black text-white px-2 py-1 rounded text-sm" sideOffset={5}>
            {content}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

// components/Tooltip.tsx
'use client';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function MyTooltip({ children, content }: { children: React.ReactNode, content: string }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild><span className="px-2 p-1 bg-red-500/30 rounded-md font-bold">{children}</span></Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-black text-white px-2 py-1 rounded text-sm" sideOffset={5}>
            {content}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

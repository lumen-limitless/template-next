import { Tab } from '@headlessui/react'
import cn from 'clsx'
import { FC, memo } from 'react'
import Button from '../Button'

export interface TabProps {
  options?: string[]
  selectedIndex?: number
  onTabChange?: (i: number) => any
  onTabSelect?: (o: string) => any
}
const Tabs: FC<TabProps> = ({ options, selectedIndex, onTabChange, onTabSelect }) => {
  return (
    <div className="w-full">
      <Tab.Group defaultIndex={selectedIndex} onChange={(i) => onTabChange && onTabChange(i)}>
        <Tab.List className="flex flex-shrink flex-wrap gap-1">
          {options &&
            options.map((o, i) => (
              <Tab key={i} onChange={() => onTabSelect && onTabSelect(o)}>
                {({ selected }) => (
                  <Button color={selected ? 'gradient' : 'transparent'} size="sm">
                    {o}
                  </Button>
                )}
              </Tab>
            ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default memo(Tabs)

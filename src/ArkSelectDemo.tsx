import { ChevronDownIcon } from 'lucide-react'
import {  Portal, Select, useEnvironmentContext } from '@ark-ui/react'

export const ArkSelectDemo = () => {
  const items = ['React', 'Solid', 'Vue']
  const getRootNode = useEnvironmentContext()
  return (
    <Select.Root items={items} getRootNode={getRootNode}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal container={{current: getRootNode().childNodes[0]}}>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup id="ark-select">
              <Select.ItemGroupLabel htmlFor='ark-select'>Frameworks</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item} item={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      {/* <Select.HiddenSelect /> */}
    </Select.Root>
  )
}
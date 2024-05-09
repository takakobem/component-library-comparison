import { useContext } from 'react';
import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';
import { ContainerContext } from './ContainerProvider';

export const SelectDemo = () => {
    const container = useContext(ContainerContext)!
    return <Select>
    <Label>Favorite Animal</Label>
    <Button className="border rounded-sm">
      <SelectValue />
      <span aria-hidden="true">▼</span>
    </Button>
    <Popover className="bg-white" UNSTABLE_portalContainer={container}>
      <ListBox>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
      </ListBox>
    </Popover>
  </Select>
}
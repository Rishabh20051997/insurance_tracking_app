import {Menu, TextInput} from 'react-native-paper';
import AddressTextFieldBox from './text-field-box';
import React, {useState} from 'react';
import UIPressable from '@widgets/ui-pressable';

import colors from '@resources/colors';
import AccordionBtnIcon, {
  AccordionIconDirection,
} from '@resources/icons/accordion-btn-icon';

interface IAddressPickerListBox {
  keyProperty: string;
  value: string;
  menuList: LooseObject;
  disabled?: boolean;
  onItemSelection: (value: LooseObject) => void;
}

const AddressPickerListBox = ({
  keyProperty = '',
  value = '',
  menuList = [],
  disabled = false,
  onItemSelection,
}: IAddressPickerListBox) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <UIPressable onPress={openMenu}>
          <AddressTextFieldBox
            keyProperty={keyProperty}
            value={value}
            editable={false}
            onChangeText={() => {}}
            disabled={disabled}
            right={
              <TextInput.Icon
                icon={() => (
                  <UIPressable onPress={openMenu}>
                    <AccordionBtnIcon
                      color={colors.gray_scale.mine_shaft}
                      direction={AccordionIconDirection.DOWN}
                    />
                  </UIPressable>
                )}
              />
            }
          />
        </UIPressable>
      }>
      {menuList.map((item: LooseObject) => {
        return (
          <Menu.Item
            key={item?.name}
            onPress={() => {
              if (value !== item?.name) {
                onItemSelection(item);
              }
              closeMenu();
            }}
            title={item.name}
          />
        );
      })}
    </Menu>
  );
};

export default AddressPickerListBox;

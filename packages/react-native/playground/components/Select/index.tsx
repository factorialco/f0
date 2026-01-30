import React, { useState } from "react";
import { Modal, Pressable, ScrollView, Text } from "react-native";
import { useCSSVariable } from "uniwind";
import { AppIcons } from "../../../src/icons";
import { Icon } from "../../../src/components/Icon";

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

export interface SelectProps<T extends string> {
  options: SelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
}

export function Select<T extends string>({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  
  const [f1Background, f1Foreground, f1Border, f1BackgroundSecondary, f1BackgroundHover] = useCSSVariable([
    '--color-f1-background',
    '--color-f1-foreground',
    '--color-f1-border',
    '--color-f1-background-secondary',
    '--color-f1-background-hover',
  ]);

  const asString = (val: string | number | undefined): string => {
    if (typeof val === 'string') return val;
    if (typeof val === 'number') return String(val);
    return '#000000';
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        className={`flex-row items-center justify-between px-3 py-2 rounded-lg border ${className || ''}`}
        style={{
          backgroundColor: asString(f1Background),
          borderColor: asString(f1Border),
        }}
      >
        <Text
          className="text-sm flex-1"
          style={{ color: asString(f1Foreground) }}
        >
          {selectedOption?.label || placeholder}
        </Text>
        <Icon
          icon={isOpen ? AppIcons.ChevronUp : AppIcons.ChevronDown}
          size="sm"
          className="text-f1-icon"
        />
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable
          className="flex-1 justify-center items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onPress={() => setIsOpen(false)}
        >
          <Pressable
            className="rounded-lg border w-4/5 max-w-md"
            style={{
              backgroundColor: asString(f1Background),
              borderColor: asString(f1Border),
              maxHeight: '80%',
            }}
            onPress={(e) => e.stopPropagation()}
          >
            <ScrollView
              className="p-2"
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled={true}
            >
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <Pressable
                    key={option.value}
                    onPress={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg mb-1 ${isSelected ? '' : ''}`}
                    style={{
                      backgroundColor: isSelected 
                        ? asString(f1BackgroundSecondary)
                        : 'transparent',
                    }}
                  >
                    <Text
                      className="text-base"
                      style={{ color: asString(f1Foreground) }}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

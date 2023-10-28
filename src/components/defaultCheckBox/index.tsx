import {
  Control,
  Controller,
  CustomElement,
  UseControllerProps,
} from "react-hook-form";
import { CheckBoxContainer, LabelText } from "./styles";
import CheckBox from "@react-native-community/checkbox";

type DefaultCheckBoxProps = {
  name: string;
  control: Control<any>;
  placeholder?: string;
};

export default function DefaultCheckBox({
  name,
  control,
  placeholder,
}: DefaultCheckBoxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <CheckBoxContainer>
          <LabelText>{placeholder}</LabelText>
          <CheckBox
            disabled={false}
            value={value}
            onValueChange={(newValue) => onChange(newValue)}
            tintColors={{ true: "white", false: "white" }}
          />
        </CheckBoxContainer>
      )}
    />
  );
}

import { Control, FieldErrors } from "react-hook-form";
import { RegisterVehicleSchema } from "..";
import RegisterVehicleStep1 from "./step1";
import RegisterVehicleStep2 from "./step2";
import RegisterVehicleStep3 from "./step3";
import RegisterVehicleStep4 from "./step4";

export type RegisterVehicleFormProps = {
  step: number;
  control: Control<any>;
  errors: FieldErrors<RegisterVehicleSchema>;
};

export default function RegisterVehicleForm({
  control,
  step,
  errors,
}: RegisterVehicleFormProps) {
  switch (step) {
    case 1:
      return (
        <RegisterVehicleStep1 control={control} errors={errors} step={step} />
      );

    case 2:
      return (
        <RegisterVehicleStep2 control={control} errors={errors} step={step} />
      );

    case 3:
      return (
        <RegisterVehicleStep3 control={control} errors={errors} step={step} />
      );

    case 4:
      return (
        <RegisterVehicleStep4 control={control} errors={errors} step={step} />
      );

    default:
      return <></>;
  }
}

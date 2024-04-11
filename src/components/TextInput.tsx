import { useFormContext } from "react-hook-form";

interface Props {
  inputName: string;
}

const TextInput = ({ inputName }: Props) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(inputName)}
      type="text"
      className="border w-full"
      placeholder={inputName}
    />
  );
};

export default TextInput;

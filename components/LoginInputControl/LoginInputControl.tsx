/* eslint-disable no-unused-vars */
import { Container } from './style';

type Props = {
  isInputControlFocus: boolean;
  onFocus: (isFocus: boolean) => void;
  value: string;
  onChange: (value: string) => void;
  InputIcon: any;
  inputTitle: string;
};

export default function LoginInputControl({
  isInputControlFocus,
  onFocus,
  value,
  InputIcon,
  inputTitle,
  onChange,
}: Props) {
  return (
    <Container
      isInputControlFocus={isInputControlFocus}
      onFocus={() => {
        onFocus(true);
      }}
      onBlur={() => {
        if (value.trim()) {
          return;
        }

        onFocus(false);
      }}
    >
      <div>
        <InputIcon />
      </div>
      <div>
        <h5>{inputTitle}</h5>
        <input
          type='text'
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </div>
    </Container>
  );
}

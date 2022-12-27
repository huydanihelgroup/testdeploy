import { useEffect } from 'react';
import { IAutoCompleteProps, Theme } from './AutoComplete.types';
import './AutoCompleteField.css';
import Select from 'react-select';

const AutoCompleteField = (inputProps: IAutoCompleteProps) => {
  const {
    darkmode = false,
    helperText,
    variant = 'standard',
    optionProps,
    ...props
  } = inputProps;
  const theme: Theme = darkmode ? 'dark' : 'light';

  useEffect(() => {
    const root = document.getElementById('root')!;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const baseStyles =
    'transition-all py-1.5 duration-500 text-light-primary-main border-light-other-input hover:border-black focus:border-black  text-base leading-6 font-normal outline-none w-full disabled:opacity-25 dark:border-dark-other-standard-input-line dark:text-dark-primary-main';

  const standardVariant = 'border-b-2 bg-transparent';

  const outlinedVariant = 'border-2 rounded-lg dark:bg-transparent';

  const filledVariant =
    'rounded-lg bg-light-other-filled-input dark:bg-dark-other-filled-input !border-b-2 rounded-bl-none rounded-br-none';

  let VariantComponent = (props: IAutoCompleteProps) => (
    <div className="relative w-64">
      <Select
        options={optionProps}
        isMulti={true}
        placeholder={'select'}
        className={`${baseStyles} ${
          variant === 'standard'
            ? standardVariant
            : variant === 'filled'
            ? filledVariant
            : outlinedVariant
        }`}
      />
    </div>
  );

  return <VariantComponent {...props} variant={variant} />;
};
export default AutoCompleteField;

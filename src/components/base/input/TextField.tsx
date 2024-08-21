import React from "react";
import { ControllerRenderProps, FieldError } from "react-hook-form";

interface IProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: "number" | "password" | "email" | "text";
  placeholder?: string;
  className?: string;
  value?: any;
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
  labelClass?: string;
  tooltipIcon?: string | undefined;
  onChangeType?: () => void;
  passwordVisible?: boolean;
  showIconPassword?: boolean;
  error?: FieldError;
  required?: boolean;
  maxLength?: number;
  groupText?: string;
  guideline?: string[];
  field?: ControllerRenderProps<any, string>;
  postFix?: any;
  id?: string;
  onPaste?: any;
  preIcon?: any;
  minNumber?: number;
  requiredZero?: boolean;
  isListScreen?: boolean;
}

const TextFiled = ({
  type,
  value,
  defaultValue,
  onChange,
  className,
  placeholder,
  disabled,
  // labelClass = 'd-flex align-items-center form-label fs-6 fw-bold',
  onChangeType,
  passwordVisible,
  showIconPassword,
  error,
  maxLength,
  groupText,
  field,
  postFix,
  id,
  onPaste,
  preIcon,
  minNumber = 0,
  requiredZero = false,
  isListScreen = false,
}: IProps) => {
  return (
    <div className={`${className ?? ""} relative w-full`}>
      <div
        className={`${groupText || postFix ? "input-group flex-nowrap" : ""}`}
      >
        {groupText && (
          <div className="input-group-text sapp-input-group-text flex justify-center">
            {groupText}
          </div>
        )}
        {preIcon}
        <input
          {...field}
          type={type}
          value={value ?? ""}
          defaultValue={value ? defaultValue : undefined}
          onChange={onChange}
          className={`${className ?? ""} form-control w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
          } ${groupText ? "rounded-r" : ""} ${preIcon ? "pl-13" : ""}`}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          id={id}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (requiredZero && type === "number") {
              if (parseInt(e.currentTarget.value, 10) === 0) {
                e.currentTarget.value = "";
              } else {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[-eE]/g,
                  ""
                );
              }
            }
          }}
          onKeyDown={(e: any) => {
            // Lọc các ký tự "e", "E" hoặc số ấm trong number
            if ((e.keyCode === 69 || e.keyCode === 189) && type === "number") {
              e.preventDefault();
              e.currentTarget.value = e.currentTarget.value.replace(
                /[-eE]/g,
                ""
              );
            }
          }}
          min={`${minNumber}`}
          onPaste={onPaste}
        />
        {postFix && (
          <span
            className={`input-group-text sapp-input-group-text px-1 flex justify-center ${
              isListScreen ? "h-10" : "h-11"
            }`}
            id="basic-addon2"
          >
            {postFix}
          </span>
        )}
      </div>
      {showIconPassword && (
        <span
          className={`btn btn-sm btn-icon absolute transform -translate-y-1/2 top-1/2 ${
            error ? "hidden" : "right-0"
          } me-2`}
          onClick={onChangeType}
        >
          {passwordVisible ? (
            <i className="ki-duotone ki-eye-slash text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M19.3211 6.74688C19.2937 6.68516 18.632 5.21719 17.1609 3.74609C15.2008 1.78594 12.725 0.75 9.99999 0.75C7.27499 0.75 4.79921 1.78594 2.83905 3.74609C1.36796 5.21719 0.703118 6.6875 0.678899 6.74688C0.643362 6.82681 0.625 6.91331 0.625 7.00078C0.625 7.08826 0.643362 7.17476 0.678899 7.25469C0.706243 7.31641 1.36796 8.78359 2.83905 10.2547C4.79921 12.2141 7.27499 13.25 9.99999 13.25C12.725 13.25 15.2008 12.2141 17.1609 10.2547C18.632 8.78359 19.2937 7.31641 19.3211 7.25469C19.3566 7.17476 19.375 7.08826 19.375 7.00078C19.375 6.91331 19.3566 6.82681 19.3211 6.74688ZM9.99999 12C7.5953 12 5.49452 11.1258 3.75546 9.40234C3.0419 8.69273 2.43483 7.88356 1.95312 7C2.4347 6.11636 3.04179 5.30717 3.75546 4.59766C5.49452 2.87422 7.5953 2 9.99999 2C12.4047 2 14.5055 2.87422 16.2445 4.59766C16.9595 5.307 17.5679 6.11619 18.0508 7C17.4875 8.05156 15.0336 12 9.99999 12ZM9.99999 3.25C9.25831 3.25 8.53329 3.46993 7.9166 3.88199C7.29992 4.29404 6.81927 4.87971 6.53544 5.56494C6.25162 6.25016 6.17735 7.00416 6.32205 7.73159C6.46674 8.45902 6.82389 9.1272 7.34834 9.65165C7.87279 10.1761 8.54097 10.5333 9.2684 10.6779C9.99583 10.8226 10.7498 10.7484 11.4351 10.4645C12.1203 10.1807 12.7059 9.70007 13.118 9.08339C13.5301 8.4667 13.75 7.74168 13.75 7C13.749 6.00576 13.3535 5.05253 12.6505 4.34949C11.9475 3.64645 10.9942 3.25103 9.99999 3.25ZM9.99999 9.5C9.50554 9.5 9.02219 9.35338 8.61107 9.07867C8.19994 8.80397 7.87951 8.41352 7.69029 7.95671C7.50107 7.49989 7.45157 6.99723 7.54803 6.51227C7.64449 6.02732 7.88259 5.58186 8.23222 5.23223C8.58186 4.8826 9.02731 4.6445 9.51227 4.54804C9.99722 4.45157 10.4999 4.50108 10.9567 4.6903C11.4135 4.87952 11.804 5.19995 12.0787 5.61107C12.3534 6.0222 12.5 6.50555 12.5 7C12.5 7.66304 12.2366 8.29893 11.7678 8.76777C11.2989 9.23661 10.663 9.5 9.99999 9.5Z"
                  fill="#111827"
                />
              </svg>
            </i>
          ) : (
            <i className="ki-duotone ki-eye text-lg">
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M19.3211 6.74688C19.2937 6.68516 18.632 5.21719 17.1609 3.74609C15.2008 1.78594 12.725 0.75 9.99999 0.75C7.27499 0.75 4.79921 1.78594 2.83905 3.74609C1.36796 5.21719 0.703118 6.6875 0.678899 6.74688C0.643362 6.82681 0.625 6.91331 0.625 7.00078C0.625 7.08826 0.643362 7.17476 0.678899 7.25469C0.706243 7.31641 1.36796 8.78359 2.83905 10.2547C4.79921 12.2141 7.27499 13.25 9.99999 13.25C12.725 13.25 15.2008 12.2141 17.1609 10.2547C18.632 8.78359 19.2937 7.31641 19.3211 7.25469C19.3566 7.17476 19.375 7.08826 19.375 7.00078C19.375 6.91331 19.3566 6.82681 19.3211 6.74688ZM9.99999 12C7.5953 12 5.49452 11.1258 3.75546 9.40234C3.0419 8.69273 2.43483 7.88356 1.95312 7C2.4347 6.11636 3.04179 5.30717 3.75546 4.59766C5.49452 2.87422 7.5953 2 9.99999 2C12.4047 2 14.5055 2.87422 16.2445 4.59766C16.9595 5.307 17.5679 6.11619 18.0508 7C17.4875 8.05156 15.0336 12 9.99999 12ZM9.99999 3.25C9.25831 3.25 8.53329 3.46993 7.9166 3.88199C7.29992 4.29404 6.81927 4.87971 6.53544 5.56494C6.25162 6.25016 6.17735 7.00416 6.32205 7.73159C6.46674 8.45902 6.82389 9.1272 7.34834 9.65165C7.87279 10.1761 8.54097 10.5333 9.2684 10.6779C9.99583 10.8226 10.7498 10.7484 11.4351 10.4645C12.1203 10.1807 12.7059 9.70007 13.118 9.08339C13.5301 8.4667 13.75 7.74168 13.75 7C13.749 6.00576 13.3535 5.05253 12.6505 4.34949C11.9475 3.64645 10.9942 3.25103 9.99999 3.25ZM9.99999 9.5C9.50554 9.5 9.02219 9.35338 8.61107 9.07867C8.19994 8.80397 7.87951 8.41352 7.69029 7.95671C7.50107 7.49989 7.45157 6.99723 7.54803 6.51227C7.64449 6.02732 7.88259 5.58186 8.23222 5.23223C8.58186 4.8826 9.02731 4.6445 9.51227 4.54804C9.99722 4.45157 10.4999 4.50108 10.9567 4.6903C11.4135 4.87952 11.804 5.19995 12.0787 5.61107C12.3534 6.0222 12.5 6.50555 12.5 7C12.5 7.66304 12.2366 8.29893 11.7678 8.76777C11.2989 9.23661 10.663 9.5 9.99999 9.5Z"
                  fill="#111827"
                />
              </svg>
            </i>
          )}
        </span>
      )}
    </div>
  );
};

export default TextFiled;

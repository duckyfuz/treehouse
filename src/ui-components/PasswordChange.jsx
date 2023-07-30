/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, PasswordField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function PasswordChange(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    CurrentPass: undefined,
    NewPass: undefined,
    ConfirmPass: undefined,
  };
  const [CurrentPass, setCurrentPass] = React.useState(
    initialValues.CurrentPass
  );
  const [NewPass, setNewPass] = React.useState(initialValues.NewPass);
  const [ConfirmPass, setConfirmPass] = React.useState(
    initialValues.ConfirmPass
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCurrentPass(initialValues.CurrentPass);
    setNewPass(initialValues.NewPass);
    setConfirmPass(initialValues.ConfirmPass);
    setErrors({});
  };
  const validations = {
    CurrentPass: [{ type: "Required" }],
    NewPass: [{ type: "Required" }],
    ConfirmPass: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          CurrentPass,
          NewPass,
          ConfirmPass,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "PasswordChange")}
      {...rest}
    >
      <PasswordField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Current Password</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CurrentPass: value,
              NewPass,
              ConfirmPass,
            };
            const result = onChange(modelFields);
            value = result?.CurrentPass ?? value;
          }
          if (errors.CurrentPass?.hasError) {
            runValidationTasks("CurrentPass", value);
          }
          setCurrentPass(value);
        }}
        onBlur={() => runValidationTasks("CurrentPass", CurrentPass)}
        errorMessage={errors.CurrentPass?.errorMessage}
        hasError={errors.CurrentPass?.hasError}
        {...getOverrideProps(overrides, "CurrentPass")}
      ></PasswordField>
      <PasswordField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>New Password</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CurrentPass,
              NewPass: value,
              ConfirmPass,
            };
            const result = onChange(modelFields);
            value = result?.NewPass ?? value;
          }
          if (errors.NewPass?.hasError) {
            runValidationTasks("NewPass", value);
          }
          setNewPass(value);
        }}
        onBlur={() => runValidationTasks("NewPass", NewPass)}
        errorMessage={errors.NewPass?.errorMessage}
        hasError={errors.NewPass?.hasError}
        {...getOverrideProps(overrides, "NewPass")}
      ></PasswordField>
      <PasswordField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Confirm New Password</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CurrentPass,
              NewPass,
              ConfirmPass: value,
            };
            const result = onChange(modelFields);
            value = result?.ConfirmPass ?? value;
          }
          if (errors.ConfirmPass?.hasError) {
            runValidationTasks("ConfirmPass", value);
          }
          setConfirmPass(value);
        }}
        onBlur={() => runValidationTasks("ConfirmPass", ConfirmPass)}
        errorMessage={errors.ConfirmPass?.errorMessage}
        hasError={errors.ConfirmPass?.hasError}
        {...getOverrideProps(overrides, "ConfirmPass")}
      ></PasswordField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

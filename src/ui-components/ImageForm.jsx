/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  Flex,
  Grid,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, processFile, validateField } from "./utils";
export default function ImageForm(props) {
  const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } =
    props;
  const { tokens } = useTheme();
  const initialValues = {
    Field1: undefined,
    Field0: undefined,
  };
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setField1(initialValues.Field1);
    setField0(initialValues.Field0);
    setErrors({});
  };
  const validations = {
    Field1: [{ type: "Required" }],
    Field0: [],
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
      rowGap={tokens.space.small.value}
      columnGap={tokens.space.small.value}
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Field1,
          Field0,
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
      {...getOverrideProps(overrides, "ImageForm")}
      {...rest}
    >
      <Autocomplete
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Residence</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        options={[
          {
            id: "BLOCK401",
            label: "BLOCK401",
          },
          {
            id: "BLOCK403",
            label: "BLOCK403",
          },
          {
            id: "BLOCK523",
            label: "BLOCK523",
          },
        ]}
        onSelect={({ id, label }) => {
          setField1(id);
          runValidationTasks("Field1", id);
        }}
        onClear={() => {
          setField1("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field1: value,
              Field0,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "Field1")}
      ></Autocomplete>
      <Field
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        label={"Profile Picture"}
        isRequired={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setField0((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  Field1,
                  Field0: value,
                };
                const result = onChange(modelFields);
                value = result?.Field0 ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setField0((prev) => {
              let value = initialValues?.Field0;
              if (onChange) {
                const modelFields = {
                  Field1,
                  Field0: value,
                };
                const result = onChange(modelFields);
                value = result?.Field0 ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={["image/*"]}
          isResumable={false}
          showThumbnails={false}
          maxFileCount={1}
          {...getOverrideProps(overrides, "Field0")}
        ></StorageManager>
      </Field>
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
          gap={tokens.space.small.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Skip"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Confirm"
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

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ActivityItem } from "../models";
import { fetchByPath, processFile, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AddPhotoForm(props) {
  const {
    id: idProp,
    activityItem: activityItemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    images: [],
  };
  const [images, setImages] = React.useState(initialValues.images);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = activityItemRecord
      ? { ...initialValues, ...activityItemRecord }
      : initialValues;
    setImages(cleanValues.images ?? []);
    setErrors({});
  };
  const [activityItemRecord, setActivityItemRecord] = React.useState(
    activityItemModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ActivityItem, idProp)
        : activityItemModelProp;
      setActivityItemRecord(record);
    };
    queryData();
  }, [idProp, activityItemModelProp]);
  React.useEffect(resetStateValues, [activityItemRecord]);
  const validations = {
    images: [],
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
        let modelFields = {
          images,
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
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            ActivityItem.copyOf(activityItemRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AddPhotoForm")}
      {...rest}
    >
      <Field
        errorMessage={errors.images?.errorMessage}
        hasError={errors.images?.hasError}
        label={"Images"}
        isRequired={false}
        isReadOnly={false}
      >
        {activityItemRecord && (
          <StorageManager
            defaultFiles={activityItemRecord.images.map((key) => ({ key }))}
            onUploadSuccess={({ key }) => {
              setImages((prev) => {
                let value = [...prev, key];
                if (onChange) {
                  const modelFields = {
                    images: value,
                  };
                  const result = onChange(modelFields);
                  value = result?.images ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setImages((prev) => {
                let value = prev.filter((f) => f !== key);
                if (onChange) {
                  const modelFields = {
                    images: value,
                  };
                  const result = onChange(modelFields);
                  value = result?.images ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"public"}
            acceptedFileTypes={["image/*"]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={10}
            {...getOverrideProps(overrides, "images")}
          ></StorageManager>
        )}
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || activityItemModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || activityItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

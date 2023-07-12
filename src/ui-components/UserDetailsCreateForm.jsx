/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserDetails } from "../models";
import { fetchByPath, processFile, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserDetailsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    profilePicture: undefined,
    residence: [],
    onBoarded: false,
  };
  const [profilePicture, setProfilePicture] = React.useState(
    initialValues.profilePicture
  );
  const [residence, setResidence] = React.useState(initialValues.residence);
  const [onBoarded, setOnBoarded] = React.useState(initialValues.onBoarded);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProfilePicture(initialValues.profilePicture);
    setResidence(initialValues.residence);
    setCurrentResidenceValue("");
    setOnBoarded(initialValues.onBoarded);
    setErrors({});
  };
  const [currentResidenceValue, setCurrentResidenceValue] = React.useState("");
  const residenceRef = React.createRef();
  const getDisplayValue = {
    residence: (r) => {
      const enumDisplayValueMap = {
        BLK111: "Blk111",
        BLK112: "Blk112",
        BLK222: "Blk222",
        BLK223: "Blk223",
        BLK333: "Blk333",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    profilePicture: [],
    residence: [{ type: "Required" }],
    onBoarded: [{ type: "Required" }],
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
          profilePicture,
          residence,
          onBoarded,
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
          await DataStore.save(new UserDetails(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserDetailsCreateForm")}
      {...rest}
    >
      <Field
        errorMessage={errors.profilePicture?.errorMessage}
        hasError={errors.profilePicture?.hasError}
        label={"Profile picture"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setProfilePicture((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  profilePicture: value,
                  residence,
                  onBoarded,
                };
                const result = onChange(modelFields);
                value = result?.profilePicture ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setProfilePicture((prev) => {
              let value = initialValues?.profilePicture;
              if (onChange) {
                const modelFields = {
                  profilePicture: value,
                  residence,
                  onBoarded,
                };
                const result = onChange(modelFields);
                value = result?.profilePicture ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"private"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "profilePicture")}
        ></StorageManager>
      </Field>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              profilePicture,
              residence: values,
              onBoarded,
            };
            const result = onChange(modelFields);
            values = result?.residence ?? values;
          }
          setResidence(values);
          setCurrentResidenceValue("");
        }}
        currentFieldValue={currentResidenceValue}
        label={"Residence"}
        items={residence}
        hasError={errors?.residence?.hasError}
        errorMessage={errors?.residence?.errorMessage}
        getBadgeText={getDisplayValue.residence}
        setFieldValue={setCurrentResidenceValue}
        inputFieldRef={residenceRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Residence"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentResidenceValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.residence?.hasError) {
              runValidationTasks("residence", value);
            }
            setCurrentResidenceValue(value);
          }}
          onBlur={() => runValidationTasks("residence", currentResidenceValue)}
          errorMessage={errors.residence?.errorMessage}
          hasError={errors.residence?.hasError}
          ref={residenceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "residence")}
        >
          <option
            children="Blk111"
            value="BLK111"
            {...getOverrideProps(overrides, "residenceoption0")}
          ></option>
          <option
            children="Blk112"
            value="BLK112"
            {...getOverrideProps(overrides, "residenceoption1")}
          ></option>
          <option
            children="Blk222"
            value="BLK222"
            {...getOverrideProps(overrides, "residenceoption2")}
          ></option>
          <option
            children="Blk223"
            value="BLK223"
            {...getOverrideProps(overrides, "residenceoption3")}
          ></option>
          <option
            children="Blk333"
            value="BLK333"
            {...getOverrideProps(overrides, "residenceoption4")}
          ></option>
        </SelectField>
      </ArrayField>
      <SwitchField
        label="I accept the terms and conditions. "
        defaultChecked={false}
        isDisabled={false}
        isChecked={onBoarded}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              profilePicture,
              residence,
              onBoarded: value,
            };
            const result = onChange(modelFields);
            value = result?.onBoarded ?? value;
          }
          if (errors.onBoarded?.hasError) {
            runValidationTasks("onBoarded", value);
          }
          setOnBoarded(value);
        }}
        onBlur={() => runValidationTasks("onBoarded", onBoarded)}
        errorMessage={errors.onBoarded?.errorMessage}
        hasError={errors.onBoarded?.hasError}
        {...getOverrideProps(overrides, "onBoarded")}
      ></SwitchField>
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

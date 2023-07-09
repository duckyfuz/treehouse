/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Logo(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { variantValues: { color: "neutral" }, overrides: { Union: {}, Logo: {} } },
    {
      variantValues: { color: "brand" },
      overrides: {
        Union: {
          paths: [
            {
              d: "M11.1296 0.138158L10.2641 0.638898L10.2641 0.638898L11.1296 0.138158ZM10.6501 0.138158L9.78451 -0.362581L9.78451 -0.362581L10.6501 0.138158ZM21.741 18.4814L22.6066 17.9807L22.6066 17.9807L21.741 18.4814ZM9.576 2.27122L10.4416 1.77048L10.4416 1.77048L9.576 2.27122ZM9.576 1.9949L10.4416 2.49564L9.576 1.9949ZM19.1133 18.7577L18.2477 19.2585L18.2477 19.2585L19.1133 18.7577ZM7.98142 9.5766L7.11583 9.07586L7.11583 9.07586L7.98142 9.5766ZM8.22119 9.5766L7.3556 10.0773L8.22119 9.5766ZM4.05392 16.3658L4.91952 16.8666L4.91952 16.8666L4.05392 16.3658ZM9.57336 16.7112L10.439 16.2105L10.439 16.2105L9.57336 16.7112ZM10.6053 18.495L9.73968 18.9958L9.73968 18.9958L10.6053 18.495ZM0.0374783 18.4951L0.903174 18.9957L0.903174 18.9957L0.0374783 18.4951ZM8.34201 4.95697L7.47642 5.45771L7.47642 5.45771L8.34201 4.95697ZM7.86247 4.95697L8.72807 5.45771L8.72807 5.45771L7.86247 4.95697ZM13.5324 18.7577L12.6668 19.2585L13.5324 18.7577ZM16.1658 18.4814L17.0314 17.9807L17.0314 17.9807L16.1658 18.4814ZM15.926 17.8959L13.7722 17.8959L13.7722 19.8959L15.926 19.8959L15.926 17.8959ZM7.47642 5.45771L15.3002 18.9822L17.0314 17.9807L9.20761 4.45623L7.47642 5.45771ZM4.17381 17.5731L9.33359 17.5731L9.33359 15.5731L4.17381 15.5731L4.17381 17.5731ZM7.11583 9.07586L3.18833 15.8651L4.91952 16.8666L8.84702 10.0773L7.11583 9.07586ZM14.398 18.257L9.08679 9.07586L7.3556 10.0773L12.6668 19.2585L14.398 18.257ZM19.9789 18.257L10.4416 1.77048L8.71041 2.77196L18.2477 19.2585L19.9789 18.257ZM21.5013 17.8959L19.3531 17.8959L19.3531 19.8959L21.5013 19.8959L21.5013 17.8959ZM10.2641 0.638898L20.8754 18.9822L22.6066 17.9807L11.9952 -0.362582L10.2641 0.638898ZM10.4416 2.49564L11.5157 0.638898L9.78451 -0.362581L8.71041 1.49416L10.4416 2.49564ZM8.70776 17.212L9.73968 18.9958L11.4709 17.9943L10.439 16.2105L8.70776 17.212ZM10.3655 17.9095L0.277275 17.9095L0.277275 19.9095L10.3655 19.9095L10.3655 17.9095ZM11.9952 -0.362582C11.5036 -1.21248 10.2762 -1.21247 9.78451 -0.362581L11.5157 0.638898C11.2372 1.12037 10.5426 1.12037 10.2641 0.638898L11.9952 -0.362582ZM21.5013 19.8959C22.4812 19.8959 23.1006 18.8345 22.6066 17.9807L20.8754 18.9822C20.5946 18.4967 20.9477 17.8959 21.5013 17.8959L21.5013 19.8959ZM10.4416 1.77048C10.5714 1.99477 10.5713 2.27136 10.4416 2.49564L8.71041 1.49416C8.48175 1.88942 8.48174 2.37668 8.71041 2.77196L10.4416 1.77048ZM18.2477 19.2585C18.4762 19.6535 18.8979 19.8959 19.3531 19.8959L19.3531 17.8959C19.6104 17.8959 19.8493 18.0329 19.9789 18.257L18.2477 19.2585ZM8.84702 10.0773C8.51521 10.6509 7.6874 10.6509 7.3556 10.0773L9.08679 9.07586C8.64842 8.31808 7.5542 8.31808 7.11583 9.07586L8.84702 10.0773ZM4.17381 15.5731C4.834 15.5731 5.25361 16.2891 4.91952 16.8666L3.18833 15.8651C2.74767 16.6268 3.30048 17.5731 4.17381 17.5731L4.17381 15.5731ZM9.33359 17.5731C9.07621 17.5731 8.83738 17.436 8.70776 17.212L10.439 16.2105C10.2104 15.8154 9.7888 15.5731 9.33359 15.5731L9.33359 17.5731ZM9.73968 18.9958C9.45888 18.5104 9.81188 17.9095 10.3655 17.9095L10.3655 19.9095C11.3454 19.9095 11.9648 18.8481 11.4709 17.9943L9.73968 18.9958ZM-0.828217 17.9945C-1.32193 18.8484 -0.702501 19.9095 0.277275 19.9095L0.277275 17.9095C0.830843 17.9095 1.18386 18.5102 0.903174 18.9957L-0.828217 17.9945ZM9.20761 4.45623C8.71596 3.60634 7.48853 3.60634 6.99688 4.45623L8.72807 5.45771C8.44955 5.93918 7.75494 5.93918 7.47642 5.45771L9.20761 4.45623ZM13.7722 17.8959C14.0295 17.8959 14.2684 18.0329 14.398 18.257L12.6668 19.2585C12.8953 19.6535 13.3169 19.8959 13.7722 19.8959L13.7722 17.8959ZM15.926 19.8959C16.9059 19.8959 17.5253 18.8345 17.0314 17.9807L15.3002 18.9822C15.0194 18.4967 15.3724 17.8959 15.926 17.8959L15.926 19.8959ZM0.903174 18.9957C3.51774 14.474 6.12529 9.95699 8.72807 5.45771L6.99688 4.45623C4.39462 8.95459 1.78473 13.4756 -0.828217 17.9945L0.903174 18.9957Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M13.5324 18.7577C13.5818 18.8432 13.6732 18.8959 13.7722 18.8959L15.926 18.8959C16.1391 18.8959 16.2723 18.6656 16.1658 18.4814L8.34201 4.95697C8.23545 4.77276 7.96904 4.77276 7.86247 4.95697C5.25995 9.45579 2.65123 13.9748 0.0374783 18.4951C-0.069038 18.6793 0.0641708 18.9095 0.277275 18.9095L10.3655 18.9095C10.5786 18.9095 10.7118 18.6793 10.6053 18.495L9.57336 16.7112C9.5239 16.6257 9.4325 16.5731 9.33359 16.5731L4.17381 16.5731C4.06724 16.5731 4.00064 16.4579 4.05392 16.3658L7.98142 9.5766C8.03471 9.4845 8.16791 9.4845 8.22119 9.5766L13.5324 18.7577Z",
              fill: "rgba(64,170,191,1)",
              fillRule: "nonzero",
            },
            {
              d: "M9.576 1.9949C9.52655 2.08039 9.52655 2.18572 9.576 2.27122L19.1133 18.7577C19.1627 18.8432 19.2541 18.8959 19.3531 18.8959L21.5013 18.8959C21.7144 18.8959 21.8476 18.6656 21.741 18.4814L11.1296 0.138158C11.0231 -0.0460529 10.7567 -0.0460525 10.6501 0.138158L9.576 1.9949Z",
              fill: "rgba(64,170,191,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Logo: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Logo")}
      {...rest}
    >
      <Icon
        width="21.78px"
        height="18.91px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 21.778564453125,
          height: 18.909515380859375,
        }}
        paths={[
          {
            d: "M11.1296 0.138158L10.2641 0.638898L10.2641 0.638898L11.1296 0.138158ZM10.6501 0.138158L9.78451 -0.362581L9.78451 -0.362581L10.6501 0.138158ZM21.741 18.4814L22.6066 17.9807L22.6066 17.9807L21.741 18.4814ZM9.576 2.27122L10.4416 1.77048L10.4416 1.77048L9.576 2.27122ZM9.576 1.9949L10.4416 2.49564L9.576 1.9949ZM19.1133 18.7577L18.2477 19.2585L18.2477 19.2585L19.1133 18.7577ZM7.98142 9.5766L7.11583 9.07586L7.11583 9.07586L7.98142 9.5766ZM8.22119 9.5766L7.3556 10.0773L8.22119 9.5766ZM4.05392 16.3658L4.91952 16.8666L4.91952 16.8666L4.05392 16.3658ZM9.57336 16.7112L10.439 16.2105L10.439 16.2105L9.57336 16.7112ZM10.6053 18.495L9.73968 18.9958L9.73968 18.9958L10.6053 18.495ZM0.0374783 18.4951L0.903174 18.9957L0.903174 18.9957L0.0374783 18.4951ZM8.34201 4.95697L7.47642 5.45771L7.47642 5.45771L8.34201 4.95697ZM7.86247 4.95697L8.72807 5.45771L8.72807 5.45771L7.86247 4.95697ZM13.5324 18.7577L12.6668 19.2585L13.5324 18.7577ZM16.1658 18.4814L17.0314 17.9807L17.0314 17.9807L16.1658 18.4814ZM15.926 17.8959L13.7722 17.8959L13.7722 19.8959L15.926 19.8959L15.926 17.8959ZM7.47642 5.45771L15.3002 18.9822L17.0314 17.9807L9.20761 4.45623L7.47642 5.45771ZM4.17381 17.5731L9.33359 17.5731L9.33359 15.5731L4.17381 15.5731L4.17381 17.5731ZM7.11583 9.07586L3.18833 15.8651L4.91952 16.8666L8.84702 10.0773L7.11583 9.07586ZM14.398 18.257L9.08679 9.07586L7.3556 10.0773L12.6668 19.2585L14.398 18.257ZM19.9789 18.257L10.4416 1.77048L8.71041 2.77196L18.2477 19.2585L19.9789 18.257ZM21.5013 17.8959L19.3531 17.8959L19.3531 19.8959L21.5013 19.8959L21.5013 17.8959ZM10.2641 0.638898L20.8754 18.9822L22.6066 17.9807L11.9952 -0.362582L10.2641 0.638898ZM10.4416 2.49564L11.5157 0.638898L9.78451 -0.362581L8.71041 1.49416L10.4416 2.49564ZM8.70776 17.212L9.73968 18.9958L11.4709 17.9943L10.439 16.2105L8.70776 17.212ZM10.3655 17.9095L0.277275 17.9095L0.277275 19.9095L10.3655 19.9095L10.3655 17.9095ZM11.9952 -0.362582C11.5036 -1.21248 10.2762 -1.21247 9.78451 -0.362581L11.5157 0.638898C11.2372 1.12037 10.5426 1.12037 10.2641 0.638898L11.9952 -0.362582ZM21.5013 19.8959C22.4812 19.8959 23.1006 18.8345 22.6066 17.9807L20.8754 18.9822C20.5946 18.4967 20.9477 17.8959 21.5013 17.8959L21.5013 19.8959ZM10.4416 1.77048C10.5714 1.99477 10.5713 2.27136 10.4416 2.49564L8.71041 1.49416C8.48175 1.88942 8.48174 2.37668 8.71041 2.77196L10.4416 1.77048ZM18.2477 19.2585C18.4762 19.6535 18.8979 19.8959 19.3531 19.8959L19.3531 17.8959C19.6104 17.8959 19.8493 18.0329 19.9789 18.257L18.2477 19.2585ZM8.84702 10.0773C8.51521 10.6509 7.6874 10.6509 7.3556 10.0773L9.08679 9.07586C8.64842 8.31808 7.5542 8.31808 7.11583 9.07586L8.84702 10.0773ZM4.17381 15.5731C4.834 15.5731 5.25361 16.2891 4.91952 16.8666L3.18833 15.8651C2.74767 16.6268 3.30048 17.5731 4.17381 17.5731L4.17381 15.5731ZM9.33359 17.5731C9.07621 17.5731 8.83738 17.436 8.70776 17.212L10.439 16.2105C10.2104 15.8154 9.7888 15.5731 9.33359 15.5731L9.33359 17.5731ZM9.73968 18.9958C9.45888 18.5104 9.81188 17.9095 10.3655 17.9095L10.3655 19.9095C11.3454 19.9095 11.9648 18.8481 11.4709 17.9943L9.73968 18.9958ZM-0.828217 17.9945C-1.32193 18.8484 -0.702501 19.9095 0.277275 19.9095L0.277275 17.9095C0.830843 17.9095 1.18386 18.5102 0.903174 18.9957L-0.828217 17.9945ZM9.20761 4.45623C8.71596 3.60634 7.48853 3.60634 6.99688 4.45623L8.72807 5.45771C8.44955 5.93918 7.75494 5.93918 7.47642 5.45771L9.20761 4.45623ZM13.7722 17.8959C14.0295 17.8959 14.2684 18.0329 14.398 18.257L12.6668 19.2585C12.8953 19.6535 13.3169 19.8959 13.7722 19.8959L13.7722 17.8959ZM15.926 19.8959C16.9059 19.8959 17.5253 18.8345 17.0314 17.9807L15.3002 18.9822C15.0194 18.4967 15.3724 17.8959 15.926 17.8959L15.926 19.8959ZM0.903174 18.9957C3.51774 14.474 6.12529 9.95699 8.72807 5.45771L6.99688 4.45623C4.39462 8.95459 1.78473 13.4756 -0.828217 17.9945L0.903174 18.9957Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M13.5324 18.7577C13.5818 18.8432 13.6732 18.8959 13.7722 18.8959L15.926 18.8959C16.1391 18.8959 16.2723 18.6656 16.1658 18.4814L8.34201 4.95697C8.23545 4.77276 7.96904 4.77276 7.86247 4.95697C5.25995 9.45579 2.65123 13.9748 0.0374783 18.4951C-0.069038 18.6793 0.0641708 18.9095 0.277275 18.9095L10.3655 18.9095C10.5786 18.9095 10.7118 18.6793 10.6053 18.495L9.57336 16.7112C9.5239 16.6257 9.4325 16.5731 9.33359 16.5731L4.17381 16.5731C4.06724 16.5731 4.00064 16.4579 4.05392 16.3658L7.98142 9.5766C8.03471 9.4845 8.16791 9.4845 8.22119 9.5766L13.5324 18.7577Z",
            fill: "rgba(174,179,183,1)",
            fillRule: "nonzero",
          },
          {
            d: "M9.576 1.9949C9.52655 2.08039 9.52655 2.18572 9.576 2.27122L19.1133 18.7577C19.1627 18.8432 19.2541 18.8959 19.3531 18.8959L21.5013 18.8959C21.7144 18.8959 21.8476 18.6656 21.741 18.4814L11.1296 0.138158C11.0231 -0.0460529 10.7567 -0.0460525 10.6501 0.138158L9.576 1.9949Z",
            fill: "rgba(174,179,183,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Union")}
      ></Icon>
    </Flex>
  );
}
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Button } from "./Button";
import { text } from "@storybook/addon-knobs/react";

storiesOf("Button", module)
  .addWithJSX(
    "with background",
    withInfo({
      styles: {
        h1: {
          color: "red"
        }
      },
      text: "  description of the component"
    })(() => <Button bg="palegoldenrod">Hello world</Button>)
  )
  .addWithJSX("with background2", () => (
    <Button bg={text("bg", "green")}>Hello world</Button>
  ));

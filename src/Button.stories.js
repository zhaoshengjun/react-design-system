import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Button } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Button", module).addWithJSX("with background", () => (
  <Button disabled={boolean("disabled", false)}>
    {text("text", "Hello world")}
  </Button>
));

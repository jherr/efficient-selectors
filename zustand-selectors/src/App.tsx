import React from "react";
import { Box, Button, Text } from "@mantine/core";
import shallow from "zustand/shallow";

import { useStore } from "./store";

const DoNothingButton = () => {
  const doNothing = useStore((state) => state.doNothing);
  return (
    <Button size="xl" onClick={doNothing}>
      Do Nothing
    </Button>
  );
};

const AddToFirstButton = () => {
  const addToFirst = useStore((state) => state.addToFirst);
  return (
    <Button size="xl" onClick={addToFirst}>
      Add To First
    </Button>
  );
};

const FirstValue = () => {
  const { firstNumber } = useStore();
  return (
    <Text size="xl" p={5}>
      First value: {firstNumber}
    </Text>
  );
};

const AddToSecondButton = () => {
  const addToSecond = useStore((state) => state.addToSecond);
  return (
    <Button size="xl" onClick={addToSecond}>
      Add To Second
    </Button>
  );
};

const SecondValue = () => {
  const secondNumber = useStore((state) => state.secondNumber);
  return (
    <Text size="xl" p={5}>
      Second value: {secondNumber}
    </Text>
  );
};

const NumbersValue = () => {
  const numbers = useStore((state) => state.numbers, shallow);
  return (
    <Text size="xl" p={5}>
      Numbers: {numbers.join(", ")}
    </Text>
  );
};

function App() {
  return (
    <Box p={10}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <DoNothingButton />
      </Box>
      <Box
        mt={10}
        sx={{
          display: "flex",
        }}
      >
        <AddToFirstButton />
        <FirstValue />
      </Box>
      <Box
        mt={10}
        sx={{
          display: "flex",
        }}
      >
        <AddToSecondButton />
        <SecondValue />
      </Box>
      <NumbersValue />
    </Box>
  );
}

export default App;

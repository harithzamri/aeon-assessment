"use client";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function Container() {
  // console.log(twoSum([4, 11, 17, 25], 21));
  // console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  // console.log(twoSum([-1, 0], -1));

  function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1];
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }

  const [numbers, setNumbers] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [result, setResult] = useState<number[]>([]);

  const handleCalculate = () => {
    const numberArray = numbers.split(",").map((num) => parseInt(num.trim()));
    const targetNum = parseInt(target);

    if (numberArray.every((num) => !isNaN(num)) && !isNaN(targetNum)) {
      const indices = twoSum(numberArray, targetNum);
      setResult(indices);
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Two Sum Calculator
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Enter numbers (comma-separated)"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="2, 7, 11, 15"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Target sum"
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="9"
            variant="outlined"
            fullWidth
          />

          <Button variant="contained" onClick={handleCalculate} fullWidth>
            Calculate
          </Button>

          {result.length === 2 && (
            <Alert severity="success">
              Found indices: [{result.join(", ")}]
            </Alert>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

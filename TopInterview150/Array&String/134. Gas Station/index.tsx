function canCompleteCircuit(gas: number[], cost: number[]): number {
  let start = 0;
  let total_fuel = 0;
  let current_fuel = 0;
  let remain = 0;

  for (let i = 0; i < gas.length; i++) {
    remain = gas[i] - cost[i];
    total_fuel += remain;
    current_fuel += remain;

    if (current_fuel < 0) {
      start = i + 1;
      current_fuel = 0;
    }
  }

  if (total_fuel < 0) return -1;

  return start;
}

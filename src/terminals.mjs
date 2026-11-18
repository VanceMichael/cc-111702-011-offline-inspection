export function prepare(state, input) {
  const terminal = input.terminal ?? 'T1'; const device = input.device ?? 'D1';
  if (!state.terminals[terminal]?.includes(device)) throw new Error('终端无该设备的巡检权限');
  return { terminal, device, submission: input.submission ?? 'S1' };
}

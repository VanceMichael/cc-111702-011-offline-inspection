export function prepare(state, input) {
  const terminal = input.terminal ?? 'T1'; const device = input.device ?? 'D1';
  if (!state.terminals[terminal]?.includes(device)) throw new Error('终端无该设备的巡检权限');
  return { terminal, device, submission: input.submission ?? 'S1' };
}

export function resolve(state, request, data) {
  if (data.terminal !== request.terminal || data.device !== request.device || data.submission !== request.submission) throw new Error('巡检不属于终端提交范围');
  if (!state.terminals[request.terminal]?.includes(data.device)) throw new Error('终端设备权限已经变化');
  return data;
}

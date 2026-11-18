export function accept(state, request, data) {
  if (data.terminal !== request.terminal || data.submission !== request.submission || data.device !== request.device) throw new Error('巡检收件归属不符');
  if (!Number.isFinite(data.reading) || !Number.isFinite(data.observedAt) || !data.receipt || !data.accepted) throw new Error('在线读数未获接纳');
  state.intakes[`${data.terminal}:${data.submission}`] = { ...data };
  return data.receipt;
}

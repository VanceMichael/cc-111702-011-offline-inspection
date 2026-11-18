export function present(state) {
  return { records: Object.values(state.intakes).map(item => ({ terminal: item.terminal, submission: item.submission, device: item.device, reading: item.reading, observedAt: item.observedAt, receipt: item.receipt, published: true })) };
}

export function assess(state, request, data) {
  if (!data.accepted || !data.receipt || !Number.isFinite(data.observedAt) || data.observedAt < 0) throw new Error('巡检尚无有效签收');
  for (const item of Object.values(state.intakes)) if (item.receipt === data.receipt && (item.terminal !== data.terminal || item.submission !== data.submission)) throw new Error('收件号已关联其他提交');
  return { receipt: data.receipt, published: true, terminal: request.terminal };
}

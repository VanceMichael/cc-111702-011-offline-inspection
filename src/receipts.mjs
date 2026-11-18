export function present(state) {
  return { records: Object.values(state.intakes).map(item => ({ terminal: item.terminal, submission: item.submission, device: item.device, reading: item.reading, observedAt: item.observedAt, receipt: item.receipt, published: true })) };
}

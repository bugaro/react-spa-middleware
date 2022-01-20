export interface TestCase<I extends unknown, O extends unknown> {
  input: I;
  output: O;
  ids?: Record<string, string>;
}

import { TestCase } from './testCase';

export class TestCaseImpl<I, O> implements TestCase<I, O> {
  constructor(public input: I, public output: O, public ids?: Record<string, string>) {}
}

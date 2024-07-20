import {describe, expect, test} from '@jest/globals';
import { Hello } from "./Hello";

describe('Hello', () => {
    test('.world() returns greeting', () => {
      expect(new Hello().world()).toBe("Hello World!");
    });
  });
import { EDCore } from "../index";
import {Session} from "../src/session";

describe('index.ts', () => {
    test('should export EDCore class, which is a Session instance', () => {
        expect(typeof EDCore).toBe(typeof Session)
    })
})

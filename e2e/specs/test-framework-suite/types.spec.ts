import { TestSuites } from '../suites';
import { StepLogger } from '../../../utils/step.logger'

describe(TestSuites.frameworkSuite, () => {

    it('defines types correctly', async () => {
        // Step 1 -------------------------------------------------------------
        StepLogger.stepInit(1, 'Expect types to be defined correctly');
        expect(new Date(2)).toBeAfter(new Date(1));
        expect([]).toBeArray();
        expect([true]).toBeArrayOfBooleans();
        expect([1]).toBeArrayOfNumbers();
        expect([{}]).toBeArrayOfObjects();
        expect([1]).toBeArrayOfSize(1);
        expect(['']).toBeArrayOfStrings();
        expect(new Date(1)).toBeBefore(new Date(2));
        expect(true).toBeBoolean();
        expect('1').toBeCalculable();
        expect(new Date()).toBeDate();
        expect([]).toBeEmptyArray();
        expect({}).toBeEmptyObject();
        expect('').toBeEmptyString();
        expect(2).toBeEvenNumber();
        expect(false).toBeFalse();
        expect(() => ({})).toBeFunction();
        expect(2).toBeGreaterThanOrEqualTo(1);
        expect('<div></div>').toBeHtmlString();
        expect(new Date().toISOString()).toBeIso8601();
        expect('{}').toBeJsonString();
        expect(1).toBeLessThanOrEqualTo(2);
        expect('ab').toBeLongerThan('a');
        expect(2).toBeNear(1, 1);
        expect([1]).toBeNonEmptyArray();
        expect({ a: 1 }).toBeNonEmptyObject();
        expect('x').toBeNonEmptyString();
        expect(1).toBeNumber();
        expect({}).toBeObject();
        expect(1).toBeOddNumber();
        expect(/abc/).toBeRegExp();
        expect('a').toBeSameLengthAs('a');
        expect('a').toBeShorterThan('ab');
        expect('').toBeString();
        expect(true).toBeTrue();
        expect(new Date()).toBeValidDate();
        expect(' ').toBeWhitespace();
        expect(1).toBeWholeNumber();
        expect(2).toBeWithinRange(1, 3);
        expect('ab').toEndWith('b');
        expect({ prop: [] }).toHaveArray('prop');
        expect({ prop: [true] }).toHaveArrayOfBooleans('prop');
        expect({ prop: [1] }).toHaveArrayOfNumbers('prop');
        expect({ prop: [{}] }).toHaveArrayOfObjects('prop');
        expect({ prop: [1] }).toHaveArrayOfSize('prop', 1);
        expect({ prop: [''] }).toHaveArrayOfStrings('prop');
        expect({ prop: true }).toHaveBoolean('prop');
        expect({ prop: '1' }).toHaveCalculable('prop');
        expect({ prop: new Date() }).toHaveDate('prop');
        expect({ prop: new Date(2) }).toHaveDateAfter('prop', new Date(1));
        expect({ prop: new Date(1) }).toHaveDateBefore('prop', new Date(2));
        expect({ prop: [] }).toHaveEmptyArray('prop');
        expect({ prop: {} }).toHaveEmptyObject('prop');
        expect({ prop: '' }).toHaveEmptyString('prop');
        expect({ prop: 2 }).toHaveEvenNumber('prop');
        expect({ prop: false }).toHaveFalse('prop');
        expect({ prop: '<div></div>' }).toHaveHtmlString('prop');
        expect({ prop: new Date().toISOString() }).toHaveIso8601('prop');
        expect({ prop: '{}' }).toHaveJsonString('prop');
        expect({ prop: undefined }).toHaveMember('prop');
        expect({ prop: () => ({}) }).toHaveMethod('prop');
        expect({ prop: [1] }).toHaveNonEmptyArray('prop');
        expect({ prop: { a: 1 } }).toHaveNonEmptyObject('prop');
        expect({ prop: 'x' }).toHaveNonEmptyString('prop');
        expect({ prop: 1 }).toHaveNumber('prop');
        expect({ prop: 2 }).toHaveNumberWithinRange('prop', 1, 3);
        expect({ prop: {} }).toHaveObject('prop');
        expect({ prop: 1 }).toHaveOddNumber('prop');
        expect({ prop: '' }).toHaveString('prop');
        expect({ prop: 'ab' }).toHaveStringLongerThan('prop', 'a');
        expect({ prop: 'a' }).toHaveStringSameLengthAs('prop', 'a');
        expect({ prop: 'a' }).toHaveStringShorterThan('prop', 'ab');
        expect({ prop: true }).toHaveTrue('prop');
        expect({ prop: undefined }).toHaveUndefined('prop');
        expect({ prop: ' ' }).toHaveWhitespaceString('prop');
        expect({ prop: 1 }).toHaveWholeNumber('prop');
        expect('abc').toStartWith('ab');
    });
    
    it('defines errors correctly', async () => {
        // Step 1 -------------------------------------------------------------
        StepLogger.stepInit(1, 'Expect throw to throw any error');  
        expect(() => {
            throw new Error('');
        }).toThrowAnyError();
        
        // Step 2 -------------------------------------------------------------
        StepLogger.stepInit(2, 'Expect throw to throw error of type `Error`');  
        expect(() => {
            throw new Error('');
        }).toThrowErrorOfType('Error');
    });
});
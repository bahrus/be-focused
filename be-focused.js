import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/be-decorated.js';
export class BeFocused {
}
const tagName = 'be-focused';
const ifWantsToBe = 'focused';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            virtualProps: [],
        },
        actions: {}
    },
    complexPropDefaults: {
        controller: BeFocused
    }
});
register(ifWantsToBe, upgrade, tagName);

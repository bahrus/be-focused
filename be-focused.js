import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/DE.js';
export class BeFocused {
    intro(proxy, target, beDecorProps) {
        proxy.focus();
    }
}
const tagName = 'be-focused';
const ifWantsToBe = 'focused';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            virtualProps: [],
            intro: 'intro',
        },
        actions: {}
    },
    complexPropDefaults: {
        controller: BeFocused
    }
});
register(ifWantsToBe, upgrade, tagName);

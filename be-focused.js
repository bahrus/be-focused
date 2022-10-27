import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/DE.js';
export class BeFocused {
    intro(proxy, self) {
        self.focus();
    }
}
const tagName = 'be-focused';
define({
    config: {
        tagName,
        propDefaults: {
            virtualProps: [],
            intro: 'intro',
        },
    },
    complexPropDefaults: {
        controller: BeFocused
    }
});
register('focused', '*', tagName);

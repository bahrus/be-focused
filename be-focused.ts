import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeFocusedActions, BeFocusedProps, BeFocusedVirtualProps} from './types'; 

export class BeFocused implements BeFocusedActions{
    intro(proxy: HTMLElement & BeFocusedVirtualProps, target: HTMLElement, beDecorProps: BeDecoratedProps<any, any>): void {
        proxy.focus();
    }
}

export interface BeFocused extends BeFocusedProps{}

const tagName = 'be-focused';

const ifWantsToBe = 'focused';

const upgrade = '*';

define<BeFocusedProps & BeDecoratedProps<BeFocusedProps, BeFocusedActions>, BeFocusedActions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            virtualProps: [],
            intro: 'intro',
        },
        actions:{

        }
    },
    complexPropDefaults:{
        controller: BeFocused
    }
});

register(ifWantsToBe, upgrade, tagName);
import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeFocusedActions, BeFocusedProps, BeFocusedVirtualProps} from './types'; 

export class BeFocused implements BeFocusedActions{

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
            virtualProps: [],

        },
        actions:{

        }
    },
    complexPropDefaults:{
        controller: BeFocused
    }
});

register(ifWantsToBe, upgrade, tagName);
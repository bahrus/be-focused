import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {Actions, ProxyProps, VirtualProps, Proxy} from './types'; 

export class BeFocused implements Actions{
    intro(proxy: Proxy, target: HTMLElement, beDecorProps: BeDecoratedProps<any, any>): void {
        proxy.focus();
    }
}

export interface BeFocused extends ProxyProps{}

const tagName = 'be-focused';

const ifWantsToBe = 'focused';

const upgrade = '*';

define<ProxyProps & BeDecoratedProps<ProxyProps, Actions>, Actions>({
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
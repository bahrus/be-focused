import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {Actions, ProxyProps, VirtualProps, Proxy} from './types'; 

export class BeFocused implements Actions{
    intro(proxy: Proxy, self: HTMLElement): void {
        self.focus();
    }
}

const tagName = 'be-focused';
define<ProxyProps & BeDecoratedProps<ProxyProps, Actions>, Actions>({
    config:{
        tagName,
        propDefaults:{
            virtualProps: [],
            intro: 'intro',
        },
    },
    complexPropDefaults:{
        controller: BeFocused
    }
});

register('focused', '*', tagName);
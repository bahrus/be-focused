import {BeDecoratedProps} from 'be-decorated/types';

export interface BeFocusedVirtualProps{

}

export interface BeFocusedProps extends BeFocusedVirtualProps{
    proxy: HTMLElement & BeFocusedVirtualProps;
}

export interface BeFocusedActions{
    intro(proxy: HTMLElement & BeFocusedVirtualProps, target: HTMLElement, beDecorProps: BeDecoratedProps): void;
}


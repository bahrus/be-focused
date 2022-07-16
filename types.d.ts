import {BeDecoratedProps} from 'be-decorated/types';

export interface BeFocusedVirtualProps{

}

export interface BeFocusedProps extends BeFocusedVirtualProps{
    proxy: Element & BeFocusedVirtualProps;
}

export interface BeFocusedActions{

}


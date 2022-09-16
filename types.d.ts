import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface VirtualProps extends MinimalProxy{
}

export type Proxy = HTMLElement & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy;
}

export interface Actions{
    intro(proxy: Proxy, target: HTMLElement, beDecorProps: BeDecoratedProps): void;
}


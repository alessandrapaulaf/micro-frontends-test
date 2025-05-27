
    export type RemoteKeys = 'button_mf/Button';
    type PackageType<T> = T extends 'button_mf/Button' ? typeof import('button_mf/Button') :any;
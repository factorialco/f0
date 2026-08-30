import { PropsWithoutRef } from 'react';
export declare function fixedForwardRef<T, P>(render: (props: PropsWithoutRef<P>, ref: React.Ref<T>) => React.ReactNode): (props: P & React.RefAttributes<T>) => React.ReactNode;

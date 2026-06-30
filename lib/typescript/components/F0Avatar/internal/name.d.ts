import { type ComponentProps } from "react";
import { Avatar as AvatarComponent } from "../F0Avatar.primitives";
type AvatarComponentProps = ComponentProps<typeof AvatarComponent>;
export declare function getAvatarInitials(name: string | string[], size?: AvatarComponentProps["size"], isFile?: boolean): string;
export declare function getAvatarColorByText(text: string): AvatarComponentProps["color"];
export {};
//# sourceMappingURL=name.d.ts.map
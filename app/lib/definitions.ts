import type { ComponentProps } from "react";

/**
 * All type definitions for the application
 */
export type PixelType = {
  id: number;
  color: string;
  x: number;
  y: number;
};

export type DbPixelType = {
  id: number;
  x_position: number;
  y_position: number;
  color: string;
};

export type NavButtonProps = {
  tooltip: string;
  link: string;
  imageSource: string;
};

export type EditorProps = {
  pixelData: PixelType[];
};

export type CanvasProps = {
  pixelData: PixelType[];
  showOverlay: boolean;
  onPixelClick?: (pixel: PixelType) => void;
};

export type AdminComponentProps = {
  onDeleteSingleActive: (active: boolean) => void;
};

export type OverlayProps = {
  onPixelClick: (pixel: PixelType) => void;
};

export type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export interface JwtPayload {
  id: string;
  iss?: string | undefined;
  sub?: string | undefined;
  aud?: string | string[] | undefined;
  exp?: number | undefined;
  nbf?: number | undefined;
  iat?: number | undefined;
  jti?: string | undefined;
  user_role: string;
  user_metadata: object;
}

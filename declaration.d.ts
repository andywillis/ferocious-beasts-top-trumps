declare module '*.module.css';
declare module '*.ico';

declare namespace React {
  interface HTMLAttributes<T> {
    // Preact supports using "class" instead of "classname" - need to teach typescript
    class?: string;
  }
}

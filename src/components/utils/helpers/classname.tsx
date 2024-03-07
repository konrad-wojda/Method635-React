export default function cn(...args: CSSModuleClasses[] | string[]): string {
    return args.join(" ");
}

/// <reference types="vite/client" />
declare module '*.svg?react' {
	type SVGComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
	const ReactComponent: SVGComponent;
	export default ReactComponent;
}

declare const __IS_DEV__: boolean;

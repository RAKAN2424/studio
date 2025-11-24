import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="1em"
            height="1em"
            {...props}
        >
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Playfair Display, serif"
                fontSize="180"
                fontWeight="bold"
                fill="currentColor"
            >
                LV
            </text>
        </svg>
    );
}

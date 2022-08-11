import { keyframes } from "@emotion/react";

// About.tsx
export const firstAnimation = keyframes`
    0% {
        color: black
    } 
    15% {
        color: black
    }
    25% {
        color: black
    }
    75% {
        color: #c3ca86
    }
    100% {
        color: #c3ca86
    }
`

export const secondAnimation = keyframes`
    0%,
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`

// Home.tsx

export const homeB3 = {
    position: 'absolute',
    bottom: '0',
    right: '0',
}

// Projects.tsx

export const projectsB2 = {
    position: 'absolute',
    color: 'red',
    bottom: '0',
    verticalAlign: 'text-bottom',
    right: '0',
    pr: '1rem'
}
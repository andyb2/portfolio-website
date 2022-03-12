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
export const aboutB1 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // border: '1px solid red',
}


// Home.tsx
export const homeB1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'black',
    // border: '1px solid red',
}

export const software = {
    display: 'inline-block',
    fontSize: '6vw',
    fontWeight:'600', 
    lineHeight: '0.65',
}

export const developer = {
    display: 'inline-block', 
    border: '1px solid #d4db96',
    fontSize: '5vw',
    fontWeight: '200',
    ml: 1,
    lineHeight: '0.65',
}

export const andrew = {
    fontSize: '14vw',
    fontWeight: '300',
    lineHeight: '0.65',
}

export const homeB2 = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const homeB3 = {
    position: 'absolute',
    bottom: '0',
    right: '0',
}

export const homeB4 = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid red',
    gap: 1.5,  
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
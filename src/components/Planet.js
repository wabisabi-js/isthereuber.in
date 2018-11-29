import React from 'react'
import posed from 'react-pose'
import styled from 'react-emotion'

const DraggablePlanet = {
  draggable: 'x',
  dragBounds: { left: -100, right: 100 },
  init: { width: 200, height: 200 },
  drag: { width: 210, height: 210 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: 'spring' },
  },
  hoverable: true,
  // hover: {
  //   width: 210,
  //   height: 210,
  // },
}

const Planet = styled(posed.svg(DraggablePlanet))`
  &:hover {
    cursor: grab;
  }
`

const Eye = posed.g({
  openEyes: {
    scaleY: 1,
  },
  closeEyes: {
    scaleY: 0.1,
  },
})

const Mouth = posed.g({
  openMouth: {
    scaleY: 1,
  },
  closeMouth: {
    scaleY: 0.1,
  },
})

const PlanetInner = posed.g({
  isSearching: {
    rotate: 0,
    transition: () => ({
      type: 'keyframes',
      values: [0, 5, 0, -5, 0],
      duration: 3500,
      loop: Infinity,
    }),
  },
  notSearching: {
    rotate: 360,
    transition: () => ({
      duration: 2500,
    }),
  },
})

class Logo extends React.Component {
  state = { eyeIsOpen: true, mouthIsOpen: true, writing: true }

  componentDidMount() {
    setInterval(() => {
      this.blink('eyeIsOpen', 250)
    }, 4000)

    setInterval(() => {
      this.blink('mouthIsOpen', 250)
    }, 5000)
  }

  blink = (state, time) => {
    this.setState({ [state]: false })

    setTimeout(() => {
      this.setState({ [state]: true })
    }, time)
  }

  render() {
    const { eyeIsOpen, mouthIsOpen } = this.state

    const { isSearching } = this.props

    return (
      <Planet
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200"
        height="200"
        viewBox="0 0 499 499"
        pose={eyeIsOpen ? 'openEyes' : 'closeEyes'}
      >
        <defs>
          <circle id="path-1" cx="249.308" cy="249.308" r="249.308" />
          <path
            id="path-3"
            d="M3.602 7.818H0a7.77 7.77 0 0 1 2.348-5.527C3.843.834 5.91 0 8.023 0h56.161c2.113 0 4.178.834 5.673 2.29a7.761 7.761 0 0 1 2.35 5.528c-.018 6.734-2.364 13.171-6.142 18.72-3.798 5.537-9.104 10.262-15.603 13.27C46.135 41.8 41.255 43.003 36.104 43c-7.745 0-14.803-2.692-20.448-6.74C9.99 32.196 5.6 26.78 2.875 20.717 1.067 16.668.003 12.306 0 7.818h3.602z"
          />
        </defs>
        <g id="logo-uber-cities" transform="translate(-391 -151)">
          <g id="logo-uber-cites" transform="translate(391 151)">
            <PlanetInner pose={isSearching ? 'isSearching' : 'notSearching'}>
              <mask id="mask-2" fill="#fff">
                <use xlinkHref="#path-1" />
              </mask>
              <use id="globe" fill="#59C6FF" xlinkHref="#path-1" />
              <path
                id="right-country"
                fill="#A6F8F4"
                d="M498.952 248.892c0-91.026-48.793-170.643-121.643-214.162l-79.356 91.115c-8.23 9.45-16.593 19.11-21.504 30.639-4.911 11.53-5.888 25.453.545 36.208 9.9 16.551 32.277 19.6 51.56 19.97 23.04.443 46.733-.289 68.33 7.753 21.597 8.041 40.897 27.58 40.454 50.62-.418 21.676-17.299 39.173-24.653 59.568-8.643 23.971-3.305 51.677 10.78 72.913 3.128 4.717 6.657 9.124 10.499 13.242 40.37-44.3 64.988-103.207 64.988-167.866z"
                mask="url(#mask-2)"
                opacity="0.813"
              />
              <path
                id="left-country"
                fill="#A6F8F4"
                d="M119 236.009c3.17-33.222 38.702-34.731 40.62-89.37 1.699-48.376-33.592-64.45-100.305-58.732C22.539 131.343.353 187.522.353 248.892c0 23.841 3.353 46.9 9.6 68.733C68.996 328.962 48.315 367.098 67 390.41c26.456 33.008 58.025 41.158 86.85 22.688 28.825-18.47 43.302-51.815 21.15-88.82-22.152-37.006-59.17-55.047-56-88.269z"
                mask="url(#mask-2)"
                opacity="0.813"
              />
              <path
                id="top-country"
                fill="#A6F8F4"
                fillRule="nonzero"
                d="M178.48 12.073c-7.68 8.81 7.049 37.356 42.383 37.356 23.355 0 25.122-11.985 47.971-15.429 11.512-1.735 25.104 5.093 38.772 2.714 25.561-4.449 27.296-23.921 22.25-24.641C322.334 11 304.415.189 256.185-.42c-19.038-.24-70.027 3.682-77.706 12.493z"
                mask="url(#mask-2)"
              />
              <g id="face" mask="url(#mask-2)">
                <g transform="translate(168 220)">
                  <g id="mouth-group" transform="translate(45 46)">
                    <Mouth pose={mouthIsOpen ? 'openMouth' : 'closeMouth'}>
                      <mask id="mask-4" fill="#fff">
                        <use xlinkHref="#path-3" />
                      </mask>
                      <use id="mouth" fill="#181743" xlinkHref="#path-3" />
                      <path
                        id="tongue"
                        fill="#F861A5"
                        d="M23.403 24.324h-1.497c0-.713.355-1.411.976-1.915s2.36-2.937 14.033-2.937c11.674 0 13.41 2.433 14.032 2.937.622.504.978 1.202.978 1.915-.008 2.332-.983 4.562-2.554 6.483-1.58 1.919-3.785 3.555-6.487 4.597a16.68 16.68 0 0 1-5.969 1.105c-3.22 0-6.154-.932-8.5-2.334-2.356-1.408-4.181-3.284-5.314-5.384-.752-1.402-1.194-2.913-1.195-4.467h1.497z"
                        mask="url(#mask-4)"
                        transform="matrix(1 0 0 -1 0 55.981)"
                      />
                    </Mouth>
                  </g>
                  <Eye id="eyes" fill="#181743">
                    {isSearching ? (
                      <React.Fragment>
                        <path
                          d="M165.939 11.946C165.399 6.762 161.19 3 155.925 3c-3.508 0-6.72 1.646-8.527 4.284C145.607 4.613 142.526 3 139.074 3c-5.265 0-9.473 3.761-10.012 8.945-.043.23-.218 1.434.314 3.4.767 2.834 2.54 5.412 5.123 7.454 0 0 7.965 10.201 12.89 10.201 4.925 0 13.112-10.2 13.112-10.2 2.584-2.043 4.356-4.62 5.123-7.456.532-1.964.357-3.17.315-3.398z"
                          id="right-heart-eye"
                        />
                        <path
                          d="M36.939 11.946C36.399 6.762 32.19 3 26.925 3c-3.508 0-6.72 1.646-8.527 4.284C16.607 4.613 13.526 3 10.074 3 4.81 3 .601 6.761.062 11.945c-.043.23-.218 1.434.314 3.4.767 2.834 2.54 5.412 5.123 7.454 0 0 7.965 10.201 12.89 10.201 4.925 0 13.112-10.2 13.112-10.2 2.584-2.043 4.356-4.62 5.123-7.456.532-1.964.357-3.17.315-3.398z"
                          id="left-heart-eye"
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <ellipse
                          id="right-eye"
                          cx="16.525"
                          cy="16.5"
                          rx="16.525"
                          ry="16.5"
                        />
                        <ellipse
                          id="left-eye"
                          cx="145.475"
                          cy="16.5"
                          rx="16.525"
                          ry="16.5"
                        />
                      </React.Fragment>
                    )}
                  </Eye>
                </g>
              </g>
              <path
                id="shadow"
                fill="#0373AD"
                d="M327.707 12.073c75.662 42.802 126.738 123.993 126.738 217.125 0 137.685-111.616 249.3-249.3 249.3-27.265 0-53.5-4.392-78.055-12.48 36.194 20.475 78.01 32.174 122.563 32.174 137.685 0 249.3-111.615 249.3-249.3-.001-110.423-71.796-204.06-171.246-236.82z"
                mask="url(#mask-2)"
                opacity="0.35"
              />
            </PlanetInner>
          </g>
        </g>
      </Planet>
    )
  }
}

export default Logo

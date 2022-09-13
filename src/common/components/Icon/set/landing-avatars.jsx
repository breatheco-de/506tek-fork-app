import { useColorModeValue } from '@chakra-ui/react';

const landingAvatars = ({ width, height, style }) => {
  const blueLightColor = useColorModeValue('#EEF9FE', '#4A5568');
  return (
    <svg
      width={width || '354px'}
      height={height || '369'}
      style={style}
      viewBox="0 0 354 369"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22.5" cy="219.5" r="22.5" fill="#FFF4DC" />
      <circle cx="332" cy="66" r="22" fill="#0097CF" />
      <rect x="70" y="71" width="115" height="139" rx="16" fill="#0097CF" />
      <rect x="19" y="218" width="166" height="151" rx="16" fill={blueLightColor} />
      <rect x="192" width="133" height="174" rx="16" fill={blueLightColor} />
      <rect x="192" y="179" width="133" height="158" rx="16" fill="#0097CF" />
      <rect
        x="65.5"
        y="26.5"
        width="122"
        height="31"
        rx="15.5"
        fill="#EEF9FE"
        stroke="#0097CF"
      />

      <circle cx="83" cy="42" r="7" fill="#EB5757" />
      <path
        d="M102.963 36.855V48H101.11V36.855H102.963ZM107.785 40.305V48H105.932V40.305H107.785ZM108.062 38.0625C108.062 38.2225 108.03 38.3725 107.965 38.5125C107.9 38.6525 107.812 38.775 107.702 38.88C107.597 38.985 107.472 39.07 107.327 39.135C107.182 39.195 107.027 39.225 106.862 39.225C106.702 39.225 106.55 39.195 106.405 39.135C106.265 39.07 106.142 38.985 106.037 38.88C105.932 38.775 105.847 38.6525 105.782 38.5125C105.722 38.3725 105.692 38.2225 105.692 38.0625C105.692 37.8975 105.722 37.7425 105.782 37.5975C105.847 37.4525 105.932 37.3275 106.037 37.2225C106.142 37.1175 106.265 37.035 106.405 36.975C106.55 36.91 106.702 36.8775 106.862 36.8775C107.027 36.8775 107.182 36.91 107.327 36.975C107.472 37.035 107.597 37.1175 107.702 37.2225C107.812 37.3275 107.9 37.4525 107.965 37.5975C108.03 37.7425 108.062 37.8975 108.062 38.0625ZM114.49 48H112.81L109.75 40.305H111.287C111.422 40.305 111.535 40.3375 111.625 40.4025C111.72 40.4675 111.785 40.55 111.82 40.65L113.305 44.76C113.39 45 113.46 45.235 113.515 45.465C113.575 45.695 113.627 45.925 113.672 46.155C113.717 45.925 113.767 45.695 113.822 45.465C113.882 45.235 113.957 45 114.047 44.76L115.57 40.65C115.605 40.55 115.667 40.4675 115.757 40.4025C115.847 40.3375 115.955 40.305 116.08 40.305H117.542L114.49 48ZM122.314 40.185C122.799 40.185 123.244 40.2625 123.649 40.4175C124.059 40.5725 124.411 40.8 124.706 41.1C125.001 41.395 125.231 41.76 125.396 42.195C125.561 42.625 125.644 43.1175 125.644 43.6725C125.644 43.8125 125.636 43.93 125.621 44.025C125.611 44.115 125.589 44.1875 125.554 44.2425C125.524 44.2925 125.481 44.33 125.426 44.355C125.371 44.375 125.301 44.385 125.216 44.385H120.461C120.516 45.175 120.729 45.755 121.099 46.125C121.469 46.495 121.959 46.68 122.569 46.68C122.869 46.68 123.126 46.645 123.341 46.575C123.561 46.505 123.751 46.4275 123.911 46.3425C124.076 46.2575 124.219 46.18 124.339 46.11C124.464 46.04 124.584 46.005 124.699 46.005C124.774 46.005 124.839 46.02 124.894 46.05C124.949 46.08 124.996 46.1225 125.036 46.1775L125.576 46.8525C125.371 47.0925 125.141 47.295 124.886 47.46C124.631 47.62 124.364 47.75 124.084 47.85C123.809 47.945 123.526 48.0125 123.236 48.0525C122.951 48.0925 122.674 48.1125 122.404 48.1125C121.869 48.1125 121.371 48.025 120.911 47.85C120.451 47.67 120.051 47.4075 119.711 47.0625C119.371 46.7125 119.104 46.2825 118.909 45.7725C118.714 45.2575 118.616 44.6625 118.616 43.9875C118.616 43.4625 118.701 42.97 118.871 42.51C119.041 42.045 119.284 41.6425 119.599 41.3025C119.919 40.9575 120.306 40.685 120.761 40.485C121.221 40.285 121.739 40.185 122.314 40.185ZM122.351 41.5125C121.811 41.5125 121.389 41.665 121.084 41.97C120.779 42.275 120.584 42.7075 120.499 43.2675H123.979C123.979 43.0275 123.946 42.8025 123.881 42.5925C123.816 42.3775 123.716 42.19 123.581 42.03C123.446 41.87 123.276 41.745 123.071 41.655C122.866 41.56 122.626 41.5125 122.351 41.5125ZM136.954 41.9325C136.899 42.0025 136.844 42.0575 136.789 42.0975C136.739 42.1375 136.664 42.1575 136.564 42.1575C136.469 42.1575 136.377 42.13 136.287 42.075C136.197 42.015 136.089 41.95 135.964 41.88C135.839 41.805 135.689 41.74 135.514 41.685C135.344 41.625 135.132 41.595 134.877 41.595C134.552 41.595 134.267 41.655 134.022 41.775C133.777 41.89 133.572 42.0575 133.407 42.2775C133.247 42.4975 133.127 42.765 133.047 43.08C132.967 43.39 132.927 43.7425 132.927 44.1375C132.927 44.5475 132.969 44.9125 133.054 45.2325C133.144 45.5525 133.272 45.8225 133.437 46.0425C133.602 46.2575 133.802 46.4225 134.037 46.5375C134.272 46.6475 134.537 46.7025 134.832 46.7025C135.127 46.7025 135.364 46.6675 135.544 46.5975C135.729 46.5225 135.884 46.4425 136.009 46.3575C136.134 46.2675 136.242 46.1875 136.332 46.1175C136.427 46.0425 136.532 46.005 136.647 46.005C136.797 46.005 136.909 46.0625 136.984 46.1775L137.517 46.8525C137.312 47.0925 137.089 47.295 136.849 47.46C136.609 47.62 136.359 47.75 136.099 47.85C135.844 47.945 135.579 48.0125 135.304 48.0525C135.029 48.0925 134.757 48.1125 134.487 48.1125C134.012 48.1125 133.564 48.025 133.144 47.85C132.724 47.67 132.357 47.41 132.042 47.07C131.732 46.73 131.484 46.315 131.299 45.825C131.119 45.33 131.029 44.7675 131.029 44.1375C131.029 43.5725 131.109 43.05 131.269 42.57C131.434 42.085 131.674 41.6675 131.989 41.3175C132.304 40.9625 132.694 40.685 133.159 40.485C133.624 40.285 134.159 40.185 134.764 40.185C135.339 40.185 135.842 40.2775 136.272 40.4625C136.707 40.6475 137.097 40.9125 137.442 41.2575L136.954 41.9325ZM141.418 36.855V48H139.565V36.855H141.418ZM150.297 48H149.465C149.29 48 149.152 47.975 149.052 47.925C148.952 47.87 148.877 47.7625 148.827 47.6025L148.662 47.055C148.467 47.23 148.275 47.385 148.085 47.52C147.9 47.65 147.707 47.76 147.507 47.85C147.307 47.94 147.095 48.0075 146.87 48.0525C146.645 48.0975 146.395 48.12 146.12 48.12C145.795 48.12 145.495 48.0775 145.22 47.9925C144.945 47.9025 144.707 47.77 144.507 47.595C144.312 47.42 144.16 47.2025 144.05 46.9425C143.94 46.6825 143.885 46.38 143.885 46.035C143.885 45.745 143.96 45.46 144.11 45.18C144.265 44.895 144.52 44.64 144.875 44.415C145.23 44.185 145.702 43.995 146.292 43.845C146.882 43.695 147.615 43.61 148.49 43.59V43.14C148.49 42.625 148.38 42.245 148.16 42C147.945 41.75 147.63 41.625 147.215 41.625C146.915 41.625 146.665 41.66 146.465 41.73C146.265 41.8 146.09 41.88 145.94 41.97C145.795 42.055 145.66 42.1325 145.535 42.2025C145.41 42.2725 145.272 42.3075 145.122 42.3075C144.997 42.3075 144.89 42.275 144.8 42.21C144.71 42.145 144.637 42.065 144.582 41.97L144.245 41.3775C145.13 40.5675 146.197 40.1625 147.447 40.1625C147.897 40.1625 148.297 40.2375 148.647 40.3875C149.002 40.5325 149.302 40.7375 149.547 41.0025C149.792 41.2625 149.977 41.575 150.102 41.94C150.232 42.305 150.297 42.705 150.297 43.14V48ZM146.697 46.845C146.887 46.845 147.062 46.8275 147.222 46.7925C147.382 46.7575 147.532 46.705 147.672 46.635C147.817 46.565 147.955 46.48 148.085 46.38C148.22 46.275 148.355 46.1525 148.49 46.0125V44.715C147.95 44.74 147.497 44.7875 147.132 44.8575C146.772 44.9225 146.482 45.0075 146.262 45.1125C146.042 45.2175 145.885 45.34 145.79 45.48C145.7 45.62 145.655 45.7725 145.655 45.9375C145.655 46.2625 145.75 46.495 145.94 46.635C146.135 46.775 146.387 46.845 146.697 46.845ZM157.436 41.805C157.386 41.885 157.334 41.9425 157.279 41.9775C157.224 42.0075 157.154 42.0225 157.069 42.0225C156.979 42.0225 156.881 41.9975 156.776 41.9475C156.676 41.8975 156.559 41.8425 156.424 41.7825C156.289 41.7175 156.134 41.66 155.959 41.61C155.789 41.56 155.586 41.535 155.351 41.535C154.986 41.535 154.699 41.6125 154.489 41.7675C154.279 41.9225 154.174 42.125 154.174 42.375C154.174 42.54 154.226 42.68 154.331 42.795C154.441 42.905 154.584 43.0025 154.759 43.0875C154.939 43.1725 155.141 43.25 155.366 43.32C155.591 43.385 155.821 43.4575 156.056 43.5375C156.291 43.6175 156.521 43.71 156.746 43.815C156.971 43.915 157.171 44.045 157.346 44.205C157.526 44.36 157.669 44.5475 157.774 44.7675C157.884 44.9875 157.939 45.2525 157.939 45.5625C157.939 45.9325 157.871 46.275 157.736 46.59C157.601 46.9 157.404 47.17 157.144 47.4C156.884 47.625 156.561 47.8025 156.176 47.9325C155.796 48.0575 155.359 48.12 154.864 48.12C154.599 48.12 154.339 48.095 154.084 48.045C153.834 48 153.591 47.935 153.356 47.85C153.126 47.765 152.911 47.665 152.711 47.55C152.516 47.435 152.344 47.31 152.194 47.175L152.621 46.47C152.676 46.385 152.741 46.32 152.816 46.275C152.891 46.23 152.986 46.2075 153.101 46.2075C153.216 46.2075 153.324 46.24 153.424 46.305C153.529 46.37 153.649 46.44 153.784 46.515C153.919 46.59 154.076 46.66 154.256 46.725C154.441 46.79 154.674 46.8225 154.954 46.8225C155.174 46.8225 155.361 46.7975 155.516 46.7475C155.676 46.6925 155.806 46.6225 155.906 46.5375C156.011 46.4525 156.086 46.355 156.131 46.245C156.181 46.13 156.206 46.0125 156.206 45.8925C156.206 45.7125 156.151 45.565 156.041 45.45C155.936 45.335 155.794 45.235 155.614 45.15C155.439 45.065 155.236 44.99 155.006 44.925C154.781 44.855 154.549 44.78 154.309 44.7C154.074 44.62 153.841 44.5275 153.611 44.4225C153.386 44.3125 153.184 44.175 153.004 44.01C152.829 43.845 152.686 43.6425 152.576 43.4025C152.471 43.1625 152.419 42.8725 152.419 42.5325C152.419 42.2175 152.481 41.9175 152.606 41.6325C152.731 41.3475 152.914 41.1 153.154 40.89C153.399 40.675 153.701 40.505 154.061 40.38C154.426 40.25 154.846 40.185 155.321 40.185C155.851 40.185 156.334 40.2725 156.769 40.4475C157.204 40.6225 157.566 40.8525 157.856 41.1375L157.436 41.805ZM164.734 41.805C164.684 41.885 164.632 41.9425 164.577 41.9775C164.522 42.0075 164.452 42.0225 164.367 42.0225C164.277 42.0225 164.179 41.9975 164.074 41.9475C163.974 41.8975 163.857 41.8425 163.722 41.7825C163.587 41.7175 163.432 41.66 163.257 41.61C163.087 41.56 162.884 41.535 162.649 41.535C162.284 41.535 161.997 41.6125 161.787 41.7675C161.577 41.9225 161.472 42.125 161.472 42.375C161.472 42.54 161.524 42.68 161.629 42.795C161.739 42.905 161.882 43.0025 162.057 43.0875C162.237 43.1725 162.439 43.25 162.664 43.32C162.889 43.385 163.119 43.4575 163.354 43.5375C163.589 43.6175 163.819 43.71 164.044 43.815C164.269 43.915 164.469 44.045 164.644 44.205C164.824 44.36 164.967 44.5475 165.072 44.7675C165.182 44.9875 165.237 45.2525 165.237 45.5625C165.237 45.9325 165.169 46.275 165.034 46.59C164.899 46.9 164.702 47.17 164.442 47.4C164.182 47.625 163.859 47.8025 163.474 47.9325C163.094 48.0575 162.657 48.12 162.162 48.12C161.897 48.12 161.637 48.095 161.382 48.045C161.132 48 160.889 47.935 160.654 47.85C160.424 47.765 160.209 47.665 160.009 47.55C159.814 47.435 159.642 47.31 159.492 47.175L159.919 46.47C159.974 46.385 160.039 46.32 160.114 46.275C160.189 46.23 160.284 46.2075 160.399 46.2075C160.514 46.2075 160.622 46.24 160.722 46.305C160.827 46.37 160.947 46.44 161.082 46.515C161.217 46.59 161.374 46.66 161.554 46.725C161.739 46.79 161.972 46.8225 162.252 46.8225C162.472 46.8225 162.659 46.7975 162.814 46.7475C162.974 46.6925 163.104 46.6225 163.204 46.5375C163.309 46.4525 163.384 46.355 163.429 46.245C163.479 46.13 163.504 46.0125 163.504 45.8925C163.504 45.7125 163.449 45.565 163.339 45.45C163.234 45.335 163.092 45.235 162.912 45.15C162.737 45.065 162.534 44.99 162.304 44.925C162.079 44.855 161.847 44.78 161.607 44.7C161.372 44.62 161.139 44.5275 160.909 44.4225C160.684 44.3125 160.482 44.175 160.302 44.01C160.127 43.845 159.984 43.6425 159.874 43.4025C159.769 43.1625 159.717 42.8725 159.717 42.5325C159.717 42.2175 159.779 41.9175 159.904 41.6325C160.029 41.3475 160.212 41.1 160.452 40.89C160.697 40.675 160.999 40.505 161.359 40.38C161.724 40.25 162.144 40.185 162.619 40.185C163.149 40.185 163.632 40.2725 164.067 40.4475C164.502 40.6225 164.864 40.8525 165.154 41.1375L164.734 41.805Z"
        fill="black"
      />
      <mask id="mask0_3942_10265" maskUnits="userSpaceOnUse" x="216" y="44" width="86" height="86">
        <circle cx="258.945" cy="86.945" r="42.945" fill="#FFF4DC" />
      </mask>
      <g mask="url(#mask0_3942_10265)">
        <circle cx="258.945" cy="86.945" r="42.945" fill="#FFF4DC" />
        <path
          d="M232 89.8875C232 75.0067 244.063 62.9434 258.944 62.9434C273.825 62.9434 285.888 75.0066 285.888 89.8875V145.891H232V89.8875Z"
          fill="#0097CF"
        />
        <circle cx="253.886" cy="78.7607" r="2.75878" fill="black" />
        <circle cx="265.288" cy="78.7607" r="2.75878" fill="black" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M273.563 91.82H245.607V89.7969H273.563V91.82Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M242.686 97.4267C245.281 92.3714 243.755 87.3364 242.709 85.5192L244.462 84.5098C245.745 86.7388 247.48 92.5182 244.485 98.3509L242.686 97.4267Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M276.559 85.4756C273.963 90.5309 275.489 95.5659 276.535 97.3831L274.782 98.3926C273.499 96.1636 271.764 90.3842 274.759 84.5515L276.559 85.4756Z"
          fill="black"
        />
      </g>
      <mask id="mask1_3942_10265" maskUnits="userSpaceOnUse" x="86" y="99" width="84" height="84">
        <circle cx="127.974" cy="140.974" r="41.9736" fill="#DEDDFF" />
      </mask>
      <g mask="url(#mask1_3942_10265)">
        <circle cx="127.974" cy="140.974" r="41.9736" fill="#DEDDFF" />
        <rect
          x="103.074"
          y="117.924"
          width="50.0838"
          height="86.7929"
          rx="25.0419"
          fill="#01B253"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M127.239 158.641C121.448 159.08 115.733 157.167 112.229 155.274L112.973 153.897C116.294 155.692 121.708 157.491 127.12 157.08C132.476 156.674 137.853 154.111 141.28 147.109L142.686 147.797C138.988 155.351 133.086 158.198 127.239 158.641Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M144.892 147.814C142.512 147.6 141.191 145.58 140.841 144.577L139.363 145.093C139.814 146.384 141.502 149.08 144.751 149.373L144.892 147.814Z"
          fill="black"
        />
        <path
          d="M113.462 142.685C113.462 143.864 112.506 144.819 111.328 144.819C110.149 144.819 109.193 143.864 109.193 142.685C109.193 141.506 110.149 140.551 111.328 140.551C112.506 140.551 113.462 141.506 113.462 142.685Z"
          fill="black"
        />
        <path
          d="M125.272 142.685C125.272 143.864 124.317 144.819 123.138 144.819C121.959 144.819 121.004 143.864 121.004 142.685C121.004 141.506 121.959 140.551 123.138 140.551C124.317 140.551 125.272 141.506 125.272 142.685Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M106.775 149.228C111.332 149.228 115.027 145.533 115.027 140.976C115.027 136.418 111.332 132.723 106.775 132.723C102.217 132.723 98.5221 136.418 98.5221 140.976C98.5221 145.533 102.217 149.228 106.775 149.228ZM106.775 150.793C112.197 150.793 116.592 146.398 116.592 140.976C116.592 135.554 112.197 131.158 106.775 131.158C101.353 131.158 96.957 135.554 96.957 140.976C96.957 146.398 101.353 150.793 106.775 150.793Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M127.405 149.228C131.963 149.228 135.658 145.533 135.658 140.976C135.658 136.418 131.963 132.723 127.405 132.723C122.848 132.723 119.153 136.418 119.153 140.976C119.153 145.533 122.848 149.228 127.405 149.228ZM127.405 150.793C132.828 150.793 137.223 146.398 137.223 140.976C137.223 135.554 132.828 131.158 127.405 131.158C121.983 131.158 117.588 135.554 117.588 140.976C117.588 146.398 121.983 150.793 127.405 150.793Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M118.158 141.26H116.023V139.695H118.158V141.26Z"
          fill="black"
        />
      </g>
      <mask id="mask2_3942_10265" maskUnits="userSpaceOnUse" x="60" y="252" width="84" height="84">
        <circle cx="101.799" cy="293.799" r="41.7988" fill="#F2F6FA" />
      </mask>
      <g mask="url(#mask2_3942_10265)">
        <circle cx="101.799" cy="293.799" r="41.7988" fill="#EEE1FF" />
        <path
          d="M99.6652 269.44C101.625 266.739 105.651 266.739 107.611 269.44L150.656 328.765C153.01 332.01 150.692 336.556 146.683 336.556H60.593C56.5839 336.556 54.2657 332.01 56.6201 328.765L99.6652 269.44Z"
          fill="#FF186B"
        />
        <path
          d="M101.873 284.52C101.873 285.79 100.843 286.82 99.5723 286.82C98.3016 286.82 97.2715 285.79 97.2715 284.52C97.2715 283.249 98.3016 282.219 99.5723 282.219C100.843 282.219 101.873 283.249 101.873 284.52Z"
          fill="black"
        />
        <path
          d="M109.85 284.52C109.85 285.79 108.82 286.82 107.549 286.82C106.278 286.82 105.248 285.79 105.248 284.52C105.248 283.249 106.278 282.219 107.549 282.219C108.82 282.219 109.85 283.249 109.85 284.52Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M102.003 297.265C101.928 297.288 101.79 297.331 101.672 297.346L101.463 295.671C101.436 295.675 101.42 295.678 101.42 295.678C101.42 295.678 101.444 295.672 101.503 295.653C101.583 295.629 101.695 295.591 101.839 295.542C102.126 295.443 102.519 295.301 102.996 295.125C103.95 294.774 105.222 294.293 106.618 293.761C109.407 292.696 112.676 291.427 114.835 290.584L115.449 292.156C113.288 293 110.015 294.27 107.219 295.337C105.822 295.87 104.542 296.354 103.579 296.709C103.098 296.886 102.693 297.032 102.39 297.137C102.239 297.189 102.108 297.232 102.003 297.265Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M115.762 294.537L113.446 288.815L115.01 288.182L117.326 293.904L115.762 294.537Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.5781 293.687L84.0271 295.313L71.002 298.909L77.6998 312.454L72.463 313.069L72.2663 311.393L75.1268 311.057L68.5842 297.826L83.5781 293.687Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M122.837 294.283L122.49 295.934L135.715 298.709L129.875 312.646L135.14 312.933L135.232 311.248L132.356 311.092L138.06 297.477L122.837 294.283Z"
          fill="black"
        />
      </g>
      <circle cx="259" cy="258" r="47" fill="#FFEEEE" />
      <path
        d="M289.721 257.999C289.721 274.964 275.968 288.717 259.003 288.717C242.038 288.717 228.285 274.964 228.285 257.999C228.285 241.034 242.038 227.281 259.003 227.281C275.968 227.281 289.721 241.034 289.721 257.999Z"
        fill="#F9A000"
      />
      <path
        d="M254.962 241C255.335 242.34 254.552 243.728 253.212 244.101C251.872 244.474 250.484 243.691 250.111 242.351C249.738 241.012 250.522 239.623 251.861 239.25C253.201 238.877 254.589 239.661 254.962 241Z"
        fill="black"
      />
      <path
        d="M264.181 238.434C264.554 239.774 263.77 241.162 262.431 241.535C261.091 241.908 259.703 241.125 259.33 239.785C258.957 238.445 259.74 237.057 261.08 236.684C262.419 236.311 263.808 237.094 264.181 238.434Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M258.106 254.066C251.307 254.914 244.465 252.987 240.228 250.956L241.026 249.291C245.041 251.216 251.524 253.026 257.878 252.234C264.166 251.45 270.354 248.122 273.994 239.675L275.689 240.406C271.763 249.518 264.971 253.21 258.106 254.066Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M238.577 252.529C240.88 250.903 241.035 248.06 240.799 246.829L242.613 246.482C242.916 248.067 242.785 251.818 239.642 254.037L238.577 252.529Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M278.292 240.3C275.475 240.183 273.803 237.878 273.333 236.716L271.622 237.409C272.227 238.905 274.37 241.985 278.215 242.145L278.292 240.3Z"
        fill="black"
      />
    </svg>
  );
};

export default landingAvatars;

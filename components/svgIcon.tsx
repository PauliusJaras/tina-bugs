export default function SvgIcon({ iconName, className = "w-6 h-6" }) {
  switch (iconName) {
    case "arrowLeft":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      );
    case "arrowRight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      );
    case "arrowDown":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      );
    case "arrowUp":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      );
    case "doc1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
          />
        </svg>
      );
    case "doc2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      );
    case "doc3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6z"
          />
        </svg>
      );
    case "doc4":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      );
    case "x":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    case "hamburger":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      );
    //social icons
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          strokeWidth={1.5}
        >
          <path
            clipRule="evenodd"
            d="M22.747 4.834c.372.375.64.84.775 1.351.502 1.885.502 5.815.502 5.815s0 3.93-.502 5.815A3.017 3.017 0 0 1 21.4 19.95c-1.876.505-9.376.505-9.376.505s-7.5 0-9.376-.505a3.016 3.016 0 0 1-2.122-2.135C.024 15.93.024 12 .024 12s0-3.93.502-5.815A3.016 3.016 0 0 1 2.648 4.05c1.876-.505 9.376-.505 9.376-.505s7.5 0 9.376.505c.51.139.974.41 1.347.784ZM15.842 12 9.57 8.431v7.138L15.842 12Z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill="none"
          className={className}
        >
          <path
            fill="#ffffff"
            d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
          ></path>
        </svg>
      );
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
            fill="#ffffff"
          />
          <path
            d="M18.406 7.034a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z"
            fill="#ffffff"
          />
          <path
            clipRule="evenodd"
            d="M12 0C8.741 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 0 0-2.125 1.384A5.882 5.882 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.882 5.882 0 0 0 4.14 23.37c.764.297 1.636.5 2.913.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.884 5.884 0 0 0 2.126-1.384 5.884 5.884 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.69.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.882 5.882 0 0 0-1.384-2.126A5.883 5.883 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.258 0 12 0Zm0 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.249 1.805-.413 2.228a3.72 3.72 0 0 1-.898 1.38c-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.169-.054-1.804-.249-2.227-.413a3.719 3.719 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.85c.053-1.169.249-1.804.413-2.227.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07Z"
            fill="#ffffff"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            d="M5.372 24H.396V7.976h4.976V24ZM2.882 5.79C1.29 5.79 0 4.474 0 2.883a2.882 2.882 0 1 1 5.763 0c0 1.59-1.29 2.909-2.881 2.909ZM23.995 24H19.03v-7.8c0-1.86-.038-4.243-2.587-4.243-2.587 0-2.984 2.02-2.984 4.109V24H8.49V7.976h4.772v2.186h.07c.664-1.259 2.287-2.587 4.708-2.587 5.035 0 5.961 3.316 5.961 7.623V24h-.005Z"
            fill="#ffffff"
          />
        </svg>
      );
    case "tik tok":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={className}
          fill="none"
        >
          <path
            d="M16.026 7.703a9.364 9.364 0 0 0 5.477 1.759V6.358a5.493 5.493 0 0 1-2.908-1.673A5.522 5.522 0 0 1 16.087.96h-2.863v15.75a3.329 3.329 0 0 1-3.322 3.324 3.314 3.314 0 0 1-2.645-1.316 3.335 3.335 0 0 1-1.828-2.979 3.328 3.328 0 0 1 4.33-3.178V9.423c-3.94.082-7.11 3.313-7.11 7.288 0 1.984.79 3.782 2.071 5.096a7.21 7.21 0 0 0 4.043 1.233c4.012 0 7.263-3.264 7.263-7.29V7.704Z"
            fill="#ffffff"
          />
        </svg>
      );
    case "tik tok":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={className}
          fill="none"
        >
          <path
            d="M16.026 7.703a9.364 9.364 0 0 0 5.477 1.759V6.358a5.493 5.493 0 0 1-2.908-1.673A5.522 5.522 0 0 1 16.087.96h-2.863v15.75a3.329 3.329 0 0 1-3.322 3.324 3.314 3.314 0 0 1-2.645-1.316 3.335 3.335 0 0 1-1.828-2.979 3.328 3.328 0 0 1 4.33-3.178V9.423c-3.94.082-7.11 3.313-7.11 7.288 0 1.984.79 3.782 2.071 5.096a7.21 7.21 0 0 0 4.043 1.233c4.012 0 7.263-3.264 7.263-7.29V7.704Z"
            fill="#ffffff"
          />
        </svg>
      );

    default:
      return null;
  }
}

export const RemoveAction = (props: { onClick?: () => void }) => {
  const { onClick } = props;
  return (
    <div
      className="opacity-1 absolute right-2 top-2 z-10 h-4 w-4 cursor-pointer text-white transition-all"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-current"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM17.0352 16.8626C16.4597 17.4585 15.5101 17.4751 14.9142 16.8996L12.0368 14.121L9.25822 16.9984C8.68274 17.5943 7.73314 17.6109 7.13722 17.0354C6.5413 16.4599 6.52472 15.5103 7.1002 14.9144L9.87883 12.037L7.00147 9.2584C6.40555 8.68293 6.38897 7.73332 6.96445 7.1374C7.53992 6.54148 8.48953 6.52491 9.08545 7.10038L11.9628 9.87901L14.7414 7.00165C15.3169 6.40573 16.2665 6.38916 16.8624 6.96463C17.4584 7.54011 17.4749 8.48971 16.8995 9.08563L14.1208 11.963L16.9982 14.7416C17.5941 15.3171 17.6107 16.2667 17.0352 16.8626Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

import React from "react";

const CloseIcon = ({ width = "20", height = "20" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M256 48C311.165 48 364.071 69.9142 403.078 108.922C442.086 147.929 464 200.835 464 256C464 311.165 442.086 364.071 403.078 403.078C364.071 442.086 311.165 464 256 464C200.835 464 147.929 442.086 108.922 403.078C69.9142 364.071 48 311.165 48 256C48 200.835 69.9142 147.929 108.922 108.922C147.929 69.9142 200.835 48 256 48ZM256 512C323.895 512 389.01 485.029 437.019 437.019C485.029 389.01 512 323.895 512 256C512 188.105 485.029 122.99 437.019 74.9807C389.01 26.9714 323.895 0 256 0C188.105 0 122.99 26.9714 74.9807 74.9807C26.9714 122.99 0 188.105 0 256C0 323.895 26.9714 389.01 74.9807 437.019C122.99 485.029 188.105 512 256 512ZM175 175C165.6 184.4 165.6 199.6 175 208.9L222 255.9L175 302.9C165.6 312.3 165.6 327.5 175 336.8C184.4 346.1 199.6 346.2 208.9 336.8L255.9 289.8L302.9 336.8C312.3 346.2 327.5 346.2 336.8 336.8C346.1 327.4 346.2 312.2 336.8 302.9L289.8 255.9L336.8 208.9C346.2 199.5 346.2 184.3 336.8 175C327.4 165.7 312.2 165.6 302.9 175L255.9 222L208.9 175C199.5 165.6 184.3 165.6 175 175Z"
        fill="#F44A6C"
      />
    </svg>
  );
};

export default CloseIcon;
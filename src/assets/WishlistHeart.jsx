export default function WishlistHeart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="dui-card-prod-hzntl__wishlist-btn_svg dui-util-spc-pad-0_8rem-xs icon icon-tabler icon-tabler-heart"
      width="56"
      height="56"
      viewBox="0 0 24 24"
      // stroke-width="1.5"
      // fill="#F34E4E"
      // stroke-linecap="round"
      // stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
}

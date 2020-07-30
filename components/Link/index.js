export const Link = ({ as, href, color = 'gray', trackID }) => {
  const Icon = as

  return (
    <a
      href={href}
      target="_blank"
      className="px-2 md:px-3"
      onClick={() => trackID && fbq('track', trackID)}
    >
      <Icon
        className={`fill-current text-${color} hover:text-green`}
        height={30}
      />
    </a>
  )
}

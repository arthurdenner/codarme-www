export const Link = ({
  as,
  href,
  name,
  color = 'gray',
  shouldTrackEvent = false,
}) => {
  const Icon = as

  return (
    <a
      href={href}
      target="_blank"
      className="px-2 md:px-3"
      onClick={() => shouldTrackEvent && fbq('track', `Lead.${name}`)}
    >
      <Icon
        className={`fill-current text-${color} hover:text-green`}
        height={30}
      />
    </a>
  )
}

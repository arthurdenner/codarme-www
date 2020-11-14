const Telegram = ({ stars }) => {
    return <div>Next stars: {stars}</div>
}

Telegram.getInitialProps = async ({ res }) => {
    res.writeHead(307, {
        Location: 'http://t.me/codarme'
    })

    res.end()
}

export default Telegram




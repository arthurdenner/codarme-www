const Discord = ({ stars }) => {
    return <div>Next stars: {stars}</div>
}

Discord.getInitialProps = async ({ res }) => {
    res.writeHead(307, {
        Location: 'https://discord.gg/HCgbhQb'
    })

    res.end()
}

export default Discord



